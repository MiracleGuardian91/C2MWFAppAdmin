import {
  EventBus,
  ElementRegistry,
  Modeling,
  ConnectionShape,
  Point,
} from '../models/bpmn';

interface ConnectionSegment {
  connection: ConnectionShape;
  start: Point;
  end: Point;
  index: number;
}

interface OverlapGroup {
  segments: ConnectionSegment[];
  direction: 'horizontal' | 'vertical';
  position: number;
}

export class ConnectionOverlapFixer {
  private readonly OVERLAP_THRESHOLD = 5;
  private readonly OFFSET_STEP = 15;

  constructor() {}

  fixOverlappingConnections(
    eventBus: EventBus,
    elementRegistry: ElementRegistry,
    modeling: Modeling<any, any, any, any, any>
  ): void {
    // Get all connections
    const allElements = elementRegistry.getAll();
    const connections = allElements.filter(
      (element: any) => element.waypoints && element.waypoints.length > 0
    ) as ConnectionShape[];

    if (connections.length < 2) return;

    // Group connections by overlapping segments
    const overlapGroups = this.findOverlappingSegments(connections);

    // Fix each overlap group
    overlapGroups.forEach((group) => {
      this.fixOverlapGroup(group, modeling);
    });
  }

  private findOverlappingSegments(
    connections: ConnectionShape[]
  ): OverlapGroup[] {
    const segments: ConnectionSegment[] = [];

    // Extract all segments from connections
    connections.forEach((connection) => {
      const waypoints = connection.waypoints || [];
      for (let i = 0; i < waypoints.length - 1; i++) {
        segments.push({
          connection,
          start: waypoints[i],
          end: waypoints[i + 1],
          index: i,
        });
      }
    });

    // Group overlapping segments
    const overlapGroups: OverlapGroup[] = [];
    const processed = new Set<string>();

    segments.forEach((segment, index) => {
      const segmentKey = `${segment.connection.id}-${segment.index}`;
      if (processed.has(segmentKey)) return;

      const overlappingSegments = [segment];
      processed.add(segmentKey);

      // Find other segments that overlap with this one
      segments.forEach((otherSegment, otherIndex) => {
        if (index === otherIndex) return;

        const otherKey = `${otherSegment.connection.id}-${otherSegment.index}`;
        if (processed.has(otherKey)) return;

        if (this.segmentsOverlap(segment, otherSegment)) {
          overlappingSegments.push(otherSegment);
          processed.add(otherKey);
        }
      });

      // If we found overlapping segments, create a group
      if (overlappingSegments.length > 1) {
        const direction = this.getSegmentDirection(segment);
        const position =
          direction === 'horizontal' ? segment.start.y : segment.start.x;

        overlapGroups.push({
          segments: overlappingSegments,
          direction,
          position,
        });
      }
    });

    return overlapGroups;
  }

  private segmentsOverlap(
    segment1: ConnectionSegment,
    segment2: ConnectionSegment
  ): boolean {
    // Check if segments are parallel (same direction)
    const dir1 = this.getSegmentDirection(segment1);
    const dir2 = this.getSegmentDirection(segment2);

    if (dir1 !== dir2) return false;

    if (dir1 === 'horizontal') {
      // Check horizontal overlap
      const y1 = segment1.start.y;
      const y2 = segment2.start.y;
      const x1Start = Math.min(segment1.start.x, segment1.end.x);
      const x1End = Math.max(segment1.start.x, segment1.end.x);
      const x2Start = Math.min(segment2.start.x, segment2.end.x);
      const x2End = Math.max(segment2.start.x, segment2.end.x);

      return (
        Math.abs(y1 - y2) < this.OVERLAP_THRESHOLD &&
        !(x1End < x2Start || x2End < x1Start)
      );
    } else {
      // Check vertical overlap
      const x1 = segment1.start.x;
      const x2 = segment2.start.x;
      const y1Start = Math.min(segment1.start.y, segment1.end.y);
      const y1End = Math.max(segment1.start.y, segment1.end.y);
      const y2Start = Math.min(segment2.start.y, segment2.end.y);
      const y2End = Math.max(segment2.start.y, segment2.end.y);

      return (
        Math.abs(x1 - x2) < this.OVERLAP_THRESHOLD &&
        !(y1End < y2Start || y2End < y1Start)
      );
    }
  }

  private getSegmentDirection(
    segment: ConnectionSegment
  ): 'horizontal' | 'vertical' {
    const dx = Math.abs(segment.end.x - segment.start.x);
    const dy = Math.abs(segment.end.y - segment.start.y);
    return dx > dy ? 'horizontal' : 'vertical';
  }

  private fixOverlapGroup(
    group: OverlapGroup,
    modeling: Modeling<any, any, any, any, any>
  ): void {
    // Sort segments by their position along the perpendicular axis
    group.segments.sort((a, b) => {
      if (group.direction === 'horizontal') {
        return a.start.x - b.start.x;
      } else {
        return a.start.y - b.start.y;
      }
    });

    // Calculate offsets for each segment
    const offsets = this.calculateOffsets(
      group.segments.length,
      group.direction
    );

    // Apply offsets to each segment
    group.segments.forEach((segment, index) => {
      this.applyOffsetToSegment(
        segment,
        offsets[index],
        group.direction,
        modeling
      );
    });
  }

  private calculateOffsets(
    count: number,
    direction: 'horizontal' | 'vertical'
  ): number[] {
    const offsets: number[] = [];
    const totalOffset = (count - 1) * this.OFFSET_STEP;
    const startOffset = -totalOffset / 2;

    for (let i = 0; i < count; i++) {
      offsets.push(startOffset + i * this.OFFSET_STEP);
    }

    return offsets;
  }

  private applyOffsetToSegment(
    segment: ConnectionSegment,
    offset: number,
    direction: 'horizontal' | 'vertical',
    modeling: Modeling<any, any, any, any, any>
  ): void {
    const connection = segment.connection;
    const waypoints = [...(connection.waypoints || [])];

    // Apply offset to the specific segment
    if (direction === 'horizontal') {
      // Offset vertically
      waypoints[segment.index].y += offset;
      waypoints[segment.index + 1].y += offset;
    } else {
      // Offset horizontally
      waypoints[segment.index].x += offset;
      waypoints[segment.index + 1].x += offset;
    }

    // Update the connection waypoints
    modeling.updateWaypoints(connection, waypoints);
  }
}

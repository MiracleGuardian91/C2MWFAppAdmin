import { ConnectionOverlapFixer } from './connection-overlap-fixer';

export class ConnectionOverlapModule {
  static $inject = ['eventBus', 'elementRegistry', 'modeling'];

  private overlapFixer: ConnectionOverlapFixer;

  constructor(
    private eventBus: any,
    private elementRegistry: any,
    private modeling: any
  ) {
    this.overlapFixer = new ConnectionOverlapFixer();
    this.init();
  }

  private init(): void {
    // Fix overlaps after connection creation
    this.eventBus.on('connection.create', 1500, () => {
      setTimeout(() => {
        this.overlapFixer.fixOverlappingConnections(
          this.eventBus,
          this.elementRegistry,
          this.modeling
        );
      }, 100);
    });

    // Fix overlaps after connection waypoint updates
    this.eventBus.on('connection.updateWaypoints', 1500, () => {
      setTimeout(() => {
        this.overlapFixer.fixOverlappingConnections(
          this.eventBus,
          this.elementRegistry,
          this.modeling
        );
      }, 100);
    });

    // Fix overlaps after shape moves (which might affect connections)
    this.eventBus.on('shape.move', 1500, () => {
      setTimeout(() => {
        this.overlapFixer.fixOverlappingConnections(
          this.eventBus,
          this.elementRegistry,
          this.modeling
        );
      }, 100);
    });

    // Fix overlaps after shape resize
    this.eventBus.on('shape.resize', 1500, () => {
      setTimeout(() => {
        this.overlapFixer.fixOverlappingConnections(
          this.eventBus,
          this.elementRegistry,
          this.modeling
        );
      }, 100);
    });

    // Fix overlaps after connection reconnect
    this.eventBus.on('connection.reconnect', 1500, () => {
      setTimeout(() => {
        this.overlapFixer.fixOverlappingConnections(
          this.eventBus,
          this.elementRegistry,
          this.modeling
        );
      }, 100);
    });

    // Fix overlaps after lane resize
    this.eventBus.on('lane.resize', 1500, () => {
      setTimeout(() => {
        this.overlapFixer.fixOverlappingConnections(
          this.eventBus,
          this.elementRegistry,
          this.modeling
        );
      }, 100);
    });

    // Fix overlaps after any command execution
    this.eventBus.on('commandStack.executed', 1500, (event: any) => {
      // Only fix overlaps for connection-related commands
      const connectionCommands = [
        'connection.create',
        'connection.updateWaypoints',
        'connection.reconnect',
        'connection.delete',
        'shape.move',
        'shape.resize',
        'lane.resize',
      ];

      if (connectionCommands.includes(event.command)) {
        setTimeout(() => {
          this.overlapFixer.fixOverlappingConnections(
            this.eventBus,
            this.elementRegistry,
            this.modeling
          );
        }, 100);
      }
    });
  }
}

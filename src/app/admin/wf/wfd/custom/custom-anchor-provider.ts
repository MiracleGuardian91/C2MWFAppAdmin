import CommandInterceptor from 'diagram-js/lib/command/CommandInterceptor';

export default function CustomAnchorProvider(
  eventBus,
  canvas,
  modeling,
  elementRegistry
) {
  console.log('[CustomAnchorProvider] ✅ Module initialized');

  let currentHoverElement: any = null;
  let currentMousePosition: { x: number; y: number } | null = null;
  let savedAnchor: { x: number; y: number } | null = null;
  let connectionSource: any = null;

  const connectEvents = [
    'connect.start',
    'connect.move',
    'connect.hover',
    'connect.out',
    'connect.end',
    'connect.cancel',
    'connect.cleanup',
    'connection.create',
    'connection.updateWaypoints',
  ];

  connectEvents.forEach((eventName) => {
    eventBus.on(eventName, (e: any) => {
      if (eventName.startsWith('connect.')) {
        console.log(`[CustomAnchorProvider] 📢 Event: ${eventName}`, {
          hasContext: !!e?.context,
          hasHover: !!e?.hover,
          hoverId: e?.hover?.id,
          hasConnection: !!e?.context?.connection,
          connectionId: e?.context?.connection?.id,
          hasSavedAnchor: !!savedAnchor,
          hasCurrentHoverElement: !!currentHoverElement,
        });
      }
    });
  });

  const commandInterceptor = new CommandInterceptor(eventBus);

  function updateConnectionWaypoints(connection: any): boolean {
    console.log('[CustomAnchorProvider] 🔧 updateConnectionWaypoints called', {
      hasConnection: !!connection,
      connectionId: connection?.id,
      hasTarget: !!connection?.target,
      targetId: connection?.target?.id,
      hasSource: !!connection?.source,
      sourceId: connection?.source?.id,
      hasSavedAnchor: !!savedAnchor,
      savedAnchor,
      waypointsCount: connection?.waypoints?.length || 0,
      waypoints: connection?.waypoints,
    });

    if (
      !connection ||
      !connection.target ||
      !savedAnchor ||
      !connection.source
    ) {
      console.log(
        '[CustomAnchorProvider] ⚠️ updateConnectionWaypoints: Missing required data',
        {
          hasConnection: !!connection,
          hasTarget: !!connection?.target,
          hasSavedAnchor: !!savedAnchor,
          hasSource: !!connection?.source,
        }
      );
      return false;
    }

    if (connection.waypoints && connection.waypoints.length > 0) {
      const sourcePoint = connection.waypoints[0];
      const straightWaypoints = [sourcePoint, savedAnchor];

      console.log('[CustomAnchorProvider] 📐 Updating waypoints', {
        sourcePoint,
        targetAnchor: savedAnchor,
        straightWaypoints,
      });

      try {
        modeling.updateWaypoints(connection, straightWaypoints);
        console.log('[CustomAnchorProvider] ✅ Successfully updated waypoints');
        return true;
      } catch (error) {
        console.error(
          '[CustomAnchorProvider] ❌ Error updating waypoints:',
          error
        );
        return false;
      }
    }

    console.log('[CustomAnchorProvider] ⚠️ No waypoints to update');
    return false;
  }

  commandInterceptor.postExecute('connection.create', (e: any) => {
    console.log(
      '[CustomAnchorProvider] 🔵 CommandInterceptor.postExecute(connection.create) fired',
      {
        context: e.context,
        hasConnection: !!e.context?.connection,
        connectionId: e.context?.connection?.id,
        hasShape: !!e.context?.shape,
        currentHoverElement: currentHoverElement
          ? { id: currentHoverElement.id }
          : null,
        hasSavedAnchor: !!savedAnchor,
        savedAnchor,
        connectionSource: connectionSource ? { id: connectionSource.id } : null,
      }
    );

    const context = e.context;
    let connection = context?.connection;

    if (!connection && context?.shape) {
      connection = context.shape;
      console.log(
        '[CustomAnchorProvider] 📦 Using context.shape as connection'
      );
    }

    if (connection) {
      console.log(
        '[CustomAnchorProvider] 🎯 CommandInterceptor: Found connection, updating waypoints'
      );
      updateConnectionWaypoints(connection);
    } else {
      console.log(
        '[CustomAnchorProvider] ⚠️ CommandInterceptor: No connection found in context'
      );
    }
  });

  eventBus.on('connection.create', 1500, (e: any) => {
    console.log(
      '[CustomAnchorProvider] 🔵 eventBus.on(connection.create) fired',
      {
        context: e.context,
        hasConnection: !!e.context?.connection,
        connectionId: e.context?.connection?.id,
        currentHoverElement: currentHoverElement
          ? { id: currentHoverElement.id }
          : null,
        hasSavedAnchor: !!savedAnchor,
        savedAnchor,
        connectionSource: connectionSource ? { id: connectionSource.id } : null,
      }
    );

    const context = e.context;
    let connection = context?.connection;

    if (!connection && currentHoverElement && savedAnchor) {
      console.log(
        '[CustomAnchorProvider] 🔍 Searching for connection in elementRegistry...'
      );
      setTimeout(() => {
        const allConnections = elementRegistry
          .getAll()
          .filter((el: any) => el.source && el.target);

        console.log('[CustomAnchorProvider] 📊 Found connections in registry', {
          totalConnections: allConnections.length,
          connections: allConnections.map((c: any) => ({
            id: c.id,
            sourceId: c.source?.id,
            targetId: c.target?.id,
          })),
        });

        if (connectionSource) {
          connection = allConnections.find(
            (c: any) =>
              c.target &&
              c.target.id === currentHoverElement.id &&
              c.source &&
              c.source.id === connectionSource.id
          );
          console.log(
            '[CustomAnchorProvider] 🔎 Searched by source and target',
            {
              found: !!connection,
              connectionId: connection?.id,
            }
          );
        }

        if (!connection) {
          const connectionsToTarget = allConnections.filter(
            (c: any) => c.target && c.target.id === currentHoverElement.id
          );
          console.log('[CustomAnchorProvider] 🔎 Searched by target only', {
            found: connectionsToTarget.length,
            connections: connectionsToTarget.map((c: any) => ({
              id: c.id,
              sourceId: c.source?.id,
              targetId: c.target?.id,
            })),
          });
          if (connectionsToTarget.length > 0) {
            connection = connectionsToTarget[connectionsToTarget.length - 1];
            console.log(
              '[CustomAnchorProvider] ✅ Using last connection to target',
              {
                connectionId: connection.id,
              }
            );
          }
        }

        if (connection) {
          console.log(
            '[CustomAnchorProvider] 🎯 eventBus: Found connection, updating waypoints'
          );
          updateConnectionWaypoints(connection);
        } else {
          console.log(
            '[CustomAnchorProvider] ⚠️ eventBus: No connection found'
          );
        }
      }, 50);
    } else if (connection) {
      console.log(
        '[CustomAnchorProvider] 🎯 eventBus: Connection in context, updating waypoints'
      );
      setTimeout(() => {
        updateConnectionWaypoints(connection);
      }, 50);
    } else {
      console.log(
        '[CustomAnchorProvider] ⚠️ eventBus: No connection and no saved anchor/hover element'
      );
    }
  });

  function isStateType(element: any): boolean {
    return (
      element &&
      (element.type === 'bpmn:Task' ||
        element.type === 'bpmn:StartEvent' ||
        element.type === 'bpmn:EndEvent' ||
        element.type === 'bpmn:SubProcess')
    );
  }

  function isSmallElement(element: any): boolean {
    return (
      element &&
      (element.type === 'bpmn:StartEvent' ||
        element.type === 'bpmn:EndEvent' ||
        (element.width &&
          element.width < 100 &&
          element.height &&
          element.height < 100))
    );
  }

  function getDistance(
    p1: { x: number; y: number },
    p2: { x: number; y: number }
  ): number {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function getAnchorLabel(
    anchor: { x: number; y: number },
    element: any,
    isSmall: boolean
  ): string {
    const w = element.width;
    const h = element.height;
    const tolerance = 1;

    if (isSmall) {
      if (Math.abs(anchor.y) < tolerance) {
        if (Math.abs(anchor.x - w / 3) < tolerance) return 'Top left';
        if (Math.abs(anchor.x - (2 * w) / 3) < tolerance) return 'Top right';
      }
      if (Math.abs(anchor.x - w) < tolerance) {
        if (Math.abs(anchor.y - h / 3) < tolerance) return 'Right top';
        if (Math.abs(anchor.y - (2 * h) / 3) < tolerance) return 'Right bottom';
      }
      if (Math.abs(anchor.y - h) < tolerance) {
        if (Math.abs(anchor.x - (2 * w) / 3) < tolerance) return 'Bottom right';
        if (Math.abs(anchor.x - w / 3) < tolerance) return 'Bottom left';
      }
      if (Math.abs(anchor.x) < tolerance) {
        if (Math.abs(anchor.y - (2 * h) / 3) < tolerance) return 'Left bottom';
        if (Math.abs(anchor.y - h / 3) < tolerance) return 'Left top';
      }
    } else {
      if (Math.abs(anchor.y) < tolerance) {
        if (Math.abs(anchor.x - w / 4) < tolerance) return 'Top left';
        if (Math.abs(anchor.x - w / 2) < tolerance) return 'Top center';
        if (Math.abs(anchor.x - (3 * w) / 4) < tolerance) return 'Top right';
      }
      if (Math.abs(anchor.x - w) < tolerance) {
        if (Math.abs(anchor.y - h / 4) < tolerance) return 'Right top';
        if (Math.abs(anchor.y - h / 2) < tolerance) return 'Right center';
        if (Math.abs(anchor.y - (3 * h) / 4) < tolerance) return 'Right bottom';
      }
      if (Math.abs(anchor.y - h) < tolerance) {
        if (Math.abs(anchor.x - (3 * w) / 4) < tolerance) return 'Bottom right';
        if (Math.abs(anchor.x - w / 2) < tolerance) return 'Bottom center';
        if (Math.abs(anchor.x - w / 4) < tolerance) return 'Bottom left';
      }
      if (Math.abs(anchor.x) < tolerance) {
        if (Math.abs(anchor.y - (3 * h) / 4) < tolerance) return 'Left bottom';
        if (Math.abs(anchor.y - h / 2) < tolerance) return 'Left center';
        if (Math.abs(anchor.y - h / 4) < tolerance) return 'Left top';
      }
    }

    return 'Unknown';
  }

  function findNearestAnchor(
    element: any,
    mousePos: { x: number; y: number }
  ): { x: number; y: number } | null {
    if (!element) return null;

    const isSmall = isSmallElement(element);
    const bounds = {
      x: element.x || 0,
      y: element.y || 0,
      width: element.width || 0,
      height: element.height || 0,
    };

    const anchors: Array<{ x: number; y: number }> = [];

    if (isSmall) {
      const w = bounds.width;
      const h = bounds.height;

      anchors.push({ x: bounds.x + w / 3, y: bounds.y });
      anchors.push({ x: bounds.x + (2 * w) / 3, y: bounds.y });

      anchors.push({ x: bounds.x + w, y: bounds.y + h / 3 });
      anchors.push({ x: bounds.x + w, y: bounds.y + (2 * h) / 3 });

      anchors.push({ x: bounds.x + (2 * w) / 3, y: bounds.y + h });
      anchors.push({ x: bounds.x + w / 3, y: bounds.y + h });

      anchors.push({ x: bounds.x, y: bounds.y + (2 * h) / 3 });
      anchors.push({ x: bounds.x, y: bounds.y + h / 3 });
    } else {
      const w = bounds.width;
      const h = bounds.height;

      anchors.push({ x: bounds.x + w / 4, y: bounds.y });
      anchors.push({ x: bounds.x + w / 2, y: bounds.y });
      anchors.push({ x: bounds.x + (3 * w) / 4, y: bounds.y });

      anchors.push({ x: bounds.x + w, y: bounds.y + h / 4 });
      anchors.push({ x: bounds.x + w, y: bounds.y + h / 2 });
      anchors.push({ x: bounds.x + w, y: bounds.y + (3 * h) / 4 });

      anchors.push({ x: bounds.x + (3 * w) / 4, y: bounds.y + h });
      anchors.push({ x: bounds.x + w / 2, y: bounds.y + h });
      anchors.push({ x: bounds.x + w / 4, y: bounds.y + h });

      anchors.push({ x: bounds.x, y: bounds.y + (3 * h) / 4 });
      anchors.push({ x: bounds.x, y: bounds.y + h / 2 });
      anchors.push({ x: bounds.x, y: bounds.y + h / 4 });
    }

    const mouseX = mousePos.x;
    const mouseY = mousePos.y;
    const edgeProximity = 50;

    const distToLeft = Math.abs(mouseX - bounds.x);
    const distToRight = Math.abs(mouseX - (bounds.x + bounds.width));
    const distToTop = Math.abs(mouseY - bounds.y);
    const distToBottom = Math.abs(mouseY - (bounds.y + bounds.height));

    const minEdgeDist = Math.min(
      distToLeft,
      distToRight,
      distToTop,
      distToBottom
    );

    let candidateAnchors = anchors;
    if (minEdgeDist < edgeProximity) {
      if (minEdgeDist === distToRight) {
        candidateAnchors = anchors.filter(
          (a) => Math.abs(a.x - (bounds.x + bounds.width)) < 1
        );
      } else if (minEdgeDist === distToLeft) {
        candidateAnchors = anchors.filter((a) => Math.abs(a.x - bounds.x) < 1);
      } else if (minEdgeDist === distToTop) {
        candidateAnchors = anchors.filter((a) => Math.abs(a.y - bounds.y) < 1);
      } else if (minEdgeDist === distToBottom) {
        candidateAnchors = anchors.filter(
          (a) => Math.abs(a.y - (bounds.y + bounds.height)) < 1
        );
      }
    }

    let closestAnchor = candidateAnchors[0];
    let minDistance = getDistance(mousePos, closestAnchor);

    for (let i = 1; i < candidateAnchors.length; i++) {
      const distance = getDistance(mousePos, candidateAnchors[i]);
      if (distance < minDistance) {
        minDistance = distance;
        closestAnchor = candidateAnchors[i];
      }
    }

    return closestAnchor;
  }

  function findNearestAnchorLabel(
    element: any,
    mousePos: { x: number; y: number }
  ): string | null {
    if (!element) return null;

    const isSmall = isSmallElement(element);
    const bounds = {
      x: element.x || 0,
      y: element.y || 0,
      width: element.width || 0,
      height: element.height || 0,
    };

    const anchors: Array<{ x: number; y: number }> = [];

    if (isSmall) {
      const w = bounds.width;
      const h = bounds.height;

      anchors.push({ x: bounds.x + w / 3, y: bounds.y });
      anchors.push({ x: bounds.x + (2 * w) / 3, y: bounds.y });

      anchors.push({ x: bounds.x + w, y: bounds.y + h / 3 });
      anchors.push({ x: bounds.x + w, y: bounds.y + (2 * h) / 3 });

      anchors.push({ x: bounds.x + (2 * w) / 3, y: bounds.y + h });
      anchors.push({ x: bounds.x + w / 3, y: bounds.y + h });

      anchors.push({ x: bounds.x, y: bounds.y + (2 * h) / 3 });
      anchors.push({ x: bounds.x, y: bounds.y + h / 3 });
    } else {
      const w = bounds.width;
      const h = bounds.height;

      anchors.push({ x: bounds.x + w / 4, y: bounds.y });
      anchors.push({ x: bounds.x + w / 2, y: bounds.y });
      anchors.push({ x: bounds.x + (3 * w) / 4, y: bounds.y });

      anchors.push({ x: bounds.x + w, y: bounds.y + h / 4 });
      anchors.push({ x: bounds.x + w, y: bounds.y + h / 2 });
      anchors.push({ x: bounds.x + w, y: bounds.y + (3 * h) / 4 });

      anchors.push({ x: bounds.x + (3 * w) / 4, y: bounds.y + h });
      anchors.push({ x: bounds.x + w / 2, y: bounds.y + h });
      anchors.push({ x: bounds.x + w / 4, y: bounds.y + h });

      anchors.push({ x: bounds.x, y: bounds.y + (3 * h) / 4 });
      anchors.push({ x: bounds.x, y: bounds.y + h / 2 });
      anchors.push({ x: bounds.x, y: bounds.y + h / 4 });
    }

    let closestAnchor = anchors[0];
    let minDistance = getDistance(mousePos, closestAnchor);

    for (let i = 1; i < anchors.length; i++) {
      const distance = getDistance(mousePos, anchors[i]);
      if (distance < minDistance) {
        minDistance = distance;
        closestAnchor = anchors[i];
      }
    }

    const relativeAnchor = {
      x: closestAnchor.x - bounds.x,
      y: closestAnchor.y - bounds.y,
    };

    return getAnchorLabel(
      relativeAnchor,
      { width: bounds.width, height: bounds.height },
      isSmall
    );
  }

  eventBus.on('connect.move', (e: any) => {
    const hover = e?.hover;
    const mouseX = e?.x;
    const mouseY = e?.y;

    currentHoverElement = hover;
    currentMousePosition =
      mouseX !== undefined && mouseY !== undefined
        ? { x: mouseX, y: mouseY }
        : null;

    if (
      hover &&
      mouseX !== undefined &&
      mouseY !== undefined &&
      (isStateType(hover) || isSmallElement(hover))
    ) {
      const anchorLabel = findNearestAnchorLabel(hover, {
        x: mouseX,
        y: mouseY,
      });

      if (anchorLabel) {
        console.log(
          `[CustomAnchorProvider] 🎯 Connection point: "${anchorLabel}"`,
          {
            elementId: hover.id,
            elementType: hover.type,
            mousePosition: { x: mouseX, y: mouseY },
          }
        );
      }
    }
  });

  eventBus.on('connection.updateWaypoints', 2000, (e: any) => {
    const context = e.context;
    const connection = context.connection;

    if (!connection || connection.target) {
      console.log(
        '[CustomAnchorProvider] ⏭️ Skipping updateWaypoints (no connection or has target)'
      );
      return;
    }

    if (
      currentHoverElement &&
      currentMousePosition &&
      (isStateType(currentHoverElement) || isSmallElement(currentHoverElement))
    ) {
      const nearestAnchor = findNearestAnchor(
        currentHoverElement,
        currentMousePosition
      );

      console.log('[CustomAnchorProvider] 📍 Found nearest anchor', {
        nearestAnchor,
        hoverElementId: currentHoverElement.id,
        mousePosition: currentMousePosition,
      });

      if (
        nearestAnchor &&
        connection.waypoints &&
        connection.waypoints.length > 0
      ) {
        const sourcePoint = connection.waypoints[0];
        const straightWaypoints = [sourcePoint, nearestAnchor];
        context.newWaypoints = straightWaypoints;
        savedAnchor = nearestAnchor;
      } else {
        console.log(
          '[CustomAnchorProvider] ⚠️ Cannot update preview waypoints',
          {
            hasNearestAnchor: !!nearestAnchor,
            hasWaypoints: !!connection.waypoints,
            waypointsCount: connection.waypoints?.length || 0,
          }
        );
      }
    } else {
      console.log(
        '[CustomAnchorProvider] ⚠️ No hover element or mouse position'
      );
    }
  });

  eventBus.on('connect.hover', (e: any) => {
    const hover = e?.hover;
    const mouseX = e?.x;
    const mouseY = e?.y;

    if (
      hover &&
      mouseX !== undefined &&
      mouseY !== undefined &&
      (isStateType(hover) || isSmallElement(hover))
    ) {
      currentHoverElement = hover;
      currentMousePosition = { x: mouseX, y: mouseY };

      const nearestAnchor = findNearestAnchor(hover, { x: mouseX, y: mouseY });
      if (nearestAnchor) {
        savedAnchor = nearestAnchor;
        const anchorLabel = findNearestAnchorLabel(hover, {
          x: mouseX,
          y: mouseY,
        });
      }
    }
  });

  eventBus.on('connect.start', (e: any) => {
    connectionSource = e?.context?.source || e?.source || null;
    console.log('[CustomAnchorProvider] 🟢 connect.start fired', {
      connectionSource: connectionSource
        ? { id: connectionSource.id, type: connectionSource.type }
        : null,
      context: e.context,
    });
    currentHoverElement = null;
    currentMousePosition = null;
    savedAnchor = null;
  });

  eventBus.on('connect.out', (e: any) => {
    console.log('[CustomAnchorProvider] 🟡 connect.out fired', {
      hover: e?.hover,
      hasSavedAnchor: !!savedAnchor,
      savedAnchor,
      hasCurrentHoverElement: !!currentHoverElement,
    });
  });

  eventBus.on('connect.end', (e: any) => {
    console.log('[CustomAnchorProvider] 🔴 connect.end fired', {
      context: e.context,
      hasConnection: !!e.context?.connection,
      connectionId: e.context?.connection?.id,
      hasSavedAnchor: !!savedAnchor,
      savedAnchor,
      hasCurrentHoverElement: !!currentHoverElement,
      currentHoverElement: currentHoverElement
        ? { id: currentHoverElement.id }
        : null,
      connectionSource: connectionSource ? { id: connectionSource.id } : null,
      event: e,
    });

    if (!savedAnchor || !currentHoverElement) {
      console.log(
        '[CustomAnchorProvider] ⚠️ connect.end: Missing savedAnchor or currentHoverElement',
        {
          hasSavedAnchor: !!savedAnchor,
          savedAnchor,
          hasCurrentHoverElement: !!currentHoverElement,
          currentHoverElement,
        }
      );
      currentHoverElement = null;
      currentMousePosition = null;
      savedAnchor = null;
      connectionSource = null;
      return;
    }

    const tryUpdateConnection = (attempt: number) => {
      console.log(
        `[CustomAnchorProvider] 🔍 connect.end: Searching for connection (attempt ${attempt})...`
      );
      const activeConnection = canvas.getActiveConnection();
      console.log('[CustomAnchorProvider] 📡 Active connection from canvas', {
        hasActiveConnection: !!activeConnection,
        activeConnectionId: activeConnection?.id,
        activeConnectionTarget: activeConnection?.target?.id,
        activeConnectionSource: activeConnection?.source?.id,
      });

      let connection = activeConnection;

      if (
        !connection ||
        !connection.target ||
        connection.target.id !== currentHoverElement.id
      ) {
        console.log(
          '[CustomAnchorProvider] 🔍 connect.end: Searching elementRegistry...'
        );
        const allConnections = elementRegistry
          .getAll()
          .filter((el: any) => el.source && el.target);

        console.log('[CustomAnchorProvider] 📊 All connections in registry', {
          total: allConnections.length,
          connections: allConnections.map((c: any) => ({
            id: c.id,
            sourceId: c.source?.id,
            targetId: c.target?.id,
          })),
        });

        if (connectionSource) {
          connection = allConnections.find(
            (c: any) =>
              c.target &&
              c.target.id === currentHoverElement.id &&
              c.source &&
              c.source.id === connectionSource.id
          );
          console.log(
            '[CustomAnchorProvider] 🔎 Searched by source and target',
            {
              found: !!connection,
              connectionId: connection?.id,
            }
          );
        }

        if (!connection) {
          const connectionsToTarget = allConnections.filter(
            (c: any) => c.target && c.target.id === currentHoverElement.id
          );
          console.log('[CustomAnchorProvider] 🔎 Searched by target only', {
            found: connectionsToTarget.length,
            connections: connectionsToTarget.map((c: any) => ({
              id: c.id,
              sourceId: c.source?.id,
              targetId: c.target?.id,
            })),
          });
          if (connectionsToTarget.length > 0) {
            connection = connectionsToTarget[connectionsToTarget.length - 1];
            console.log(
              '[CustomAnchorProvider] ✅ Using last connection to target',
              {
                connectionId: connection.id,
              }
            );
          }
        }
      }

      if (
        connection &&
        connection.target &&
        connection.target.id === currentHoverElement.id
      ) {
        console.log(
          '[CustomAnchorProvider] 🎯 connect.end: Found connection, updating waypoints'
        );
        updateConnectionWaypoints(connection);
      } else if (attempt < 5) {
        console.log(
          `[CustomAnchorProvider] ⚠️ connect.end: No connection found (attempt ${attempt}), will retry`
        );
        setTimeout(() => tryUpdateConnection(attempt + 1), 50 * attempt);
      } else {
        console.log(
          '[CustomAnchorProvider] ⚠️ connect.end: No connection found after all attempts'
        );
      }
    };

    setTimeout(() => tryUpdateConnection(1), 10);
  });

  eventBus.on('connect.cancel', (e: any) => {
    console.log('[CustomAnchorProvider] 🟠 connect.cancel fired', {
      hasSavedAnchor: !!savedAnchor,
      hasCurrentHoverElement: !!currentHoverElement,
    });
    currentHoverElement = null;
    currentMousePosition = null;
    savedAnchor = null;
    connectionSource = null;
  });

  eventBus.on('connect.cleanup', (e: any) => {
    console.log('[CustomAnchorProvider] 🧹 connect.cleanup fired', {
      hasSavedAnchor: !!savedAnchor,
      hasCurrentHoverElement: !!currentHoverElement,
    });
    currentHoverElement = null;
    currentMousePosition = null;
    savedAnchor = null;
    connectionSource = null;
  });
}

CustomAnchorProvider.$inject = [
  'eventBus',
  'canvas',
  'modeling',
  'elementRegistry',
];

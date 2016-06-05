# XCOS Wires Connection
#### @jiteshjha @pooja

### function connectionHandlerIsStartEvent()

 -  Starts connections on the background in wire-mode.
 -  function connectionHandlerMouseUp() depends on this function.

### function connectionHandlerMouseUp()

 - Avoids any connections for gestures within tolerance except when in wire-mode or when over a port.
 - Responsible for the removal of self connections over an mxCell (edges or vertices) in wire-mode.

### function updateFixedTerminalPoint()

 - Updates connection points before the routing is called.
 - Enables connection from any point on an edge.
 - Without this function, default edge characteristics ( mid-point-specific connections only) come in play.

### function createEdgeState()

 - Overrides methods to preview and create new edges.
 - Enables horizontal and vertical edges in preview state.
 - Without this function, any connection from an edge will have it's source point and target point chosen based on the assumed center of a straight edge having source edge's source point and target point.

### function createMarker()

 - Adds in-place highlighting for complete cell area (no hotspot).
 - Uses complete area of cell for new connections.
 - Adds in-place highlighting when reconnecting existing edges.

### function WireConnector()

 - Creates a custom horizontal and vertical edge style.
 - Without this function, the source and terminal of a connection from an source edge is assumed as if the source edge were an perpendicular connection.

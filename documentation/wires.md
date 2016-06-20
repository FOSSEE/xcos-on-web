# Xcos-on-Web Wires Connection
#### @jiteshjha @pooja

Track our progress on wires connection here on [xcos-on-web group](https://groups.google.com/forum/#!searchin/xcos-on-web/authorname$3A$20Jitesh$20Jha).

[Depends on mxGraph library, version  1.10.4.1, which can be found [here](https://github.com/rmoriz/mxgraph). ]

## Purpose 

 - One of the major feature of xcos-on-desktop is the connections between blocks.
 - We used [wires.html](https://github.com/rmoriz/mxgraph/blob/master/javascript/examples/wires.html) example as the basic structure of our xcos-on-web application, with many additions explained below to closely resemble the connections possible on xcos-on-desktop.
 
##Documentation
 
#### `mxConnectionHandler.prototype.movePreviewAway`

 - Switch to enable moving the preview away from the mousepointer.  This is required in browsers where the preview cannot be made transparent to events and if the built-in hit detection on the HTML elements in the page should be used. This is set as false in index.html.

#### `mxConnectionHandler.prototype.waypointsEnabled`

 - Specifies if single clicks should add waypoints on the new edge. This is set as true in index.html.

#### `mxGraph.prototype.resetEdgesOnConnect`

 - Specifies if edge control points should be reset after the the edge has been reconnected. This is set as true in index.html.

#### `graph.setPanning(true)`

 - Specifies if panning should be enabled.

#### `graph.setConnectable(true)`

 - Specifies if the graph should allow new connections.

#### `setConnectableEdges(true)`

 - Specifies if edges should be connectable.

#### `setDisconnectOnMove(false)`

 - Specifies if edges should be disconnected when moved.  (Note: Cloned edges are always disconnected)

#### `foldingEnabled = false`

 - Specifies if folding. (collapse and expand via an image icon in the graph should be enabled)

[**NOTE**: The following six functions are implemented from the [wires.html](https://github.com/rmoriz/mxgraph/blob/master/javascript/examples/wires.html) under javascript-example of [mxGraph](https://github.com/rmoriz/mxgraph). ]

### function `connectionHandlerIsStartEvent()`

 -  Starts connections on the background in wire-mode.
 -  function connectionHandlerMouseUp() depends on this function.

### function `connectionHandlerMouseUp()`

 - Avoids any connections for gestures within tolerance except when in wire-mode or when over a port.
 - Responsible for the removal of self connections over an mxCell (edges or vertices) in wire-mode.

### function `updateFixedTerminalPoint()`

 - Updates connection points before the routing is called.
 - Enables connection from any point on an edge.
 - Without this function, default edge characteristics ( mid-point-specific connections only) come in play.

### function `createEdgeState()`

 - Overrides methods to preview and create new edges.
 - Enables horizontal and vertical edges in preview state.
 - Without this function, any connection from an edge will have it's source point and target point chosen based on the assumed center of a straight edge having source edge's source point and target point.

### function `createMarker()`

 - Adds in-place highlighting for complete cell area (no hotspot).
 - Uses complete area of cell for new connections.
 - Adds in-place highlighting when reconnecting existing edges.

### function `WireConnector()`

 - Creates a custom horizontal and vertical edge style.
 - Without this function, the source and terminal of a connection from an source edge is assumed as if the source edge were an perpendicular connection.



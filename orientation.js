/*
    @pooja,
    orientation.js contains the implementation of
    block tranformation functions (rotation, flip and mirror)
*/

function transformBlockImage(graph, cell) {
    var imageName=cell.style;
    if(imageName.indexOf(";") != -1)
    {
        imageName=imageName.substring(0, imageName.indexOf(";"));
    }
    var value = graph.getModel().getValue(cell);
    var dec = new mxCodec();
    var details = dec.decode(value);
    // Get the stylesheet for the graph
    var stylesheet = graph.getStylesheet();
    // From the stylesheet, get the style of the particular block
    var style = stylesheet.styles[imageName];
    var geometry = cell.getGeometry();
    var point_x = geometry.x;
    var point_y = geometry.y;
    //IS_GC is to check if browser is Google Chrome, IS_FF is for Firefox. Updating the image style.
    if( mxClient.IS_GC == true){
        details['label'] = '<img src="' + style['imagePath'] + '" height=80px; width=80px; style="  transform:translate(' + point_x + 'px,' + point_y + 'px) rotate(' + cell.currentAngle + 'deg) scale(' + cell.flipX + ',' + cell.flipY + '); "/>';
    }
    else{
        details['label'] = '<img src="' + style['imagePath'] + '" height=80px; width=80px; style="  transform: rotate(' + cell.currentAngle + 'deg) scale(' + cell.flipX + ',' + cell.flipY + '); "/>';
    }
    var enc = new mxCodec(mxUtils.createXmlDocument());
    var value = enc.encode(details);
    graph.getModel().setValue(cell, value);
}

function rotateCustom(editor, graph, cell) {
  var selectedCell = graph.getSelectionCell();
  if (selectedCell != null) {
      var cells = [];
      cells.push(selectedCell);

      for (var i = 0; i < selectedCell.getChildCount(); i++)
          cells.push(selectedCell.getChildAt(i));

      graph.getModel().beginUpdate();
      try {

          for (var i = 0; i < cells.length; i++) {
              var cell = cells[i];
              if (cell.isVertex() == true) {
                  var geo = graph.getCellGeometry(cell);
                  if (geo != null) {
                      // Rotates the size and position in the geometry
                      geo = geo.clone();
                      geo.x += geo.width / 2 - geo.height / 2;
                      geo.y += geo.height / 2 - geo.width / 2;
                      var tmp = geo.width;
                      geo.width = geo.height;
                      geo.height = tmp;
                      graph.getModel().setGeometry(cell, geo);
                      // Reads the current direction and advances by 90 degrees
                      var state = graph.view.getState(cell);
                      if (state != null) {
                          if (cell.isConnectable() == true) {
                              var dir = state.style[mxConstants.STYLE_ROTATION] || '0';
                              var geoCell = cell.getGeometry();
                              /*
                                  To rotate the ports in sync with the block rotation.
                                  A rotate makes port directing east direct to south, south direct to west, west direct to north and north direct to east.
                              */
                              if (cell.value == "ExplicitOutputPort" || cell.value == "ImplicitOutputPort") {
                                  if (dir == '0' || dir == '180') {
                                      var temp = geoCell.x;
                                      geoCell.x = geoCell.y - 0.0625;
                                      geoCell.y = temp + 0.0625;
                                      if (dir == '0') {
                                          dir = '90';
                                      }
                                      else {
                                          dir = '270';
                                      }

                                  } else if (dir == '90' || dir == '270') {
                                      geoCell.y = geoCell.x + 0.0625;
                                      if (dir == '90') {
                                          dir = '180';
                                          geoCell.x = 0 - 0.125;
                                      } else {
                                          dir = '0';
                                          geoCell.x = 1;
                                      }
                                  }
                                  cell.setGeometry(geoCell);
                              } else if (cell.value == "ExplicitInputPort" || cell.value == "ImplicitInputPort") {
                                  if (dir == '90' || dir == '270') {
                                      geoCell.y = geoCell.x - 0.0625;
                                      if (dir == '90') {
                                          dir = '180';
                                          geoCell.x = 1 + 0.125;
                                      } else {
                                          dir = '0';
                                          geoCell.x = 0;
                                      }
                                  } else if (dir == '0' || dir == '180') {
                                      geoCell = geoCell.clone();
                                      var temp = geoCell.x;
                                      geoCell.x = parseFloat(geoCell.y) + 0.0625;
                                      geoCell.y = temp - 0.0625;
                                      if (dir == '0'){
                                          dir = '90';
                                      }
                                      else{
                                          dir = '270';
                                      }
                                  }
                                   cell.setGeometry(geoCell);
                              } else if (cell.value == 'CommandPort') {

                                  if (dir == '0' || dir == '180') {
                                      var temp = geoCell.x;
                                      geoCell.x = geoCell.y + 0.0625;
                                      geoCell.y = temp - 0.0625;
                                      if (dir == '0'){
                                          dir = '90';
                                      }
                                      else{
                                          dir = '270';
                                      }
                                  } else if (dir == '90' || dir == '270') {
                                      geoCell.y = parseFloat(geoCell.x) - 0.0625;
                                      if (dir == '90') {
                                          dir = '180';
                                          geoCell.x = 0 - 0.0625;
                                      } else {
                                          dir = '0';
                                          geoCell.x = 1 + 0.0625;
                                      }
                                  }
                                  cell.setGeometry(geoCell);
                              } else if (cell.value == 'ControlPort') {
                                  if (dir == '0' || dir == '180') {
                                      var temp= geoCell.x;
                                      geoCell.x = geoCell.y - 0.0625;
                                      geoCell.y = temp + 0.0625;
                                      if (dir == '0'){
                                          dir = '90';
                                      }
                                      else{
                                          dir = '270';
                                      }
                                  } else if (dir == '90' || dir == '270') {
                                      geoCell.y = parseFloat(geoCell.x) + 0.0625;
                                      if (dir == '90') {
                                          dir = '180';
                                          geoCell.x = 1 + 0.0625;
                                      } else {
                                          dir = '0';
                                          geoCell.x = 0 - 0.0625;
                                      }
                                  }
                                  cell.setGeometry(geoCell);
                              }
                          }
                          graph.setCellStyles(mxConstants.STYLE_ROTATION, dir, [cell]);
                      }
                  }
              }
              if(cell.isConnectable()==false){
                  var state = graph.view.getState(cell);
                  if (state != null) {
                      var dir = state.style[mxConstants.STYLE_ROTATION] || '0';
                      dir = (dir+90)%360;
                      graph.setCellStyles(mxConstants.STYLE_ROTATION, dir, [cell]);
                  }
                  if(cell.value.getAttribute('label')!= null && cell.value.getAttribute('label').substring(1,4)=="img")
                  {
                      cell.currentAngle=(parseInt(cell.currentAngle)+90)%360;
                      var imageName=cell.style;
                      transformBlockImage(graph, cell);
                  }
              }
          }
      } finally {
          graph.getModel().endUpdate();
      }
  }
}

function flipCustom(editor, graph, cell) {
  var selectedCell = graph.getSelectionCell();
  if (selectedCell != null) {
      var cells = [];
      cells.push(selectedCell);

      for (var i = 0; i < selectedCell.getChildCount(); i++)
          cells.push(selectedCell.getChildAt(i));

      graph.getModel().beginUpdate();
      try {
          for (var i = 0; i < cells.length; i++) {
              var cell = cells[i];
              if (cell.isVertex() == true) {
                  var geo = graph.getCellGeometry(cell);
                  if (geo != null) {
                      // Rotates the size and position in the geometry
                      geo = geo.clone();
                      geo.x += geo.width / 2 - geo.height / 2;
                      geo.y += geo.height / 2 - geo.width / 2;
                      var tmp = geo.width;
                      geo.width = geo.height;
                      geo.height = tmp;
                      graph.getModel().setGeometry(cell, geo);
                      // Reads the current direction and flips the ports
                      var state = graph.view.getState(cell);
                      if (state != null) {
                          if (cell.isConnectable() == true) {
                              var dir = state.style[mxConstants.STYLE_ROTATION] || '0';
                              var flip = state.style[mxConstants.STYLE_STENCIL_FLIPV] || '0';
                              var geoCell = cell.getGeometry();

                              /*
                                  To flip the ports in sync with the block flip.
                                  A flip makes port directing north direct to south and vice versa.
                                  A port directing east or west will have to aligh with the other ports which have same direction.
                              */

                              if (cell.value == 'CommandPort' || cell.value == 'ControlPort') {
                                  if (dir == '90' || dir == '270') {
                                      if(cell.value == 'CommandPort') {
                                         if (dir == '90')
                                          {
                                              geoCell.y = geoCell.y - 1 - 0.125 ;
                                              dir = '270';
                                          }
                                          else
                                          {
                                              geoCell.y = geoCell.y + 1 + 0.125;
                                              dir = '90';
                                          }
                                      }
                                      else {
                                          if (dir == '90')
                                          {
                                              geoCell.y = geoCell.y + 1 + 0.125;
                                              dir = '270';
                                          }
                                          else
                                          {
                                              geoCell.y = geoCell.y - 1 - 0.125;
                                              dir = '90';
                                          }
                                      }
                                  }
                                  else if (dir == '0' || dir == '180')
                                  {
                                      if(cell.value == 'CommandPort'){
                                          geoCell.y = 1 - geoCell.y - 0.125;
                                      }
                                      else{
                                          geoCell.y = 1 - geoCell.y + 0.125;
                                      }
                                  }
                                  cell.setGeometry(geoCell);
                              }
                              else if (cell.value == "ExplicitOutputPort" ||
                                  cell.value == "ImplicitOutputPort" || cell.value == "ExplicitInputPort" || cell.value == "ImplicitInputPort") {
                                  if (dir == '90' || dir == '270') {
                                      if(cell.value == "ExplicitOutputPort" || cell.value == "ImplicitOutputPort") {
                                          if (dir == '90')
                                          {
                                              geoCell.y = geoCell.y - 1 - 0.125 ;
                                              dir = '270';
                                          }
                                          else
                                          {
                                              geoCell.y = geoCell.y + 1 + 0.125;
                                              dir = '90';
                                          }
                                      }
                                      else {
                                         if (dir == '90')
                                          {
                                              geoCell.y = geoCell.y + 1 + 0.125;
                                              dir = '270';
                                          }
                                          else
                                          {
                                              geoCell.y = geoCell.y - 1 - 0.125;
                                              dir = '90';
                                          }
                                      }
                                  }
                                  else if(dir == '0' || dir == '180')
                                  {
                                      geoCell.y = 1 - geoCell.y;
                                  }
                                  cell.setGeometry(geoCell);
                              }
                          }
                          graph.setCellStyles(mxConstants.STYLE_ROTATION, dir, [cell]);
                          if(flip == '0'){
                              graph.setCellStyles(mxConstants.STYLE_STENCIL_FLIPV, '1', [cell]);
                          }
                          else{
                              graph.setCellStyles(mxConstants.STYLE_STENCIL_FLIPV, '0', [cell]);
                          }
                      }
                  }
              }
              if(cell.isConnectable()==false)
              {
                  var state = graph.view.getState(cell);
                  if (state != null) {
                      var dir = state.style[mxConstants.STYLE_ROTATION];
                      var flip = state.style[mxConstants.STYLE_STENCIL_FLIPV] || '0';
                      if(flip == '0'){
                          graph.setCellStyles(mxConstants.STYLE_STENCIL_FLIPV, '1', [cell]);
                      }
                      else{
                          graph.setCellStyles(mxConstants.STYLE_STENCIL_FLIPV, '0', [cell]);
                      }
                      if(dir == '0' || dir == '180'){
                          dir = (dir+180)%360;

                      }
                      graph.setCellStyles(mxConstants.STYLE_ROTATION, dir, [cell]);
                  }
                  if(cell.value.getAttribute('label')!= null && cell.value.getAttribute('label').substring(1,4)=="img")
                  {
                      if(cell.currentAngle == 90 || cell.currentAngle == 270){
                          cell.flipX=-parseInt(cell.flipX);
                      }
                      else {
                          cell.flipY=-parseInt(cell.flipY);
                      }
                      transformBlockImage(graph, cell);
                  }
              }
          }
      } finally {
          graph.getModel().endUpdate();
      }
  }
}

function mirrorCustom(editor, graph, cell) {
  var selectedCell = graph.getSelectionCell();

  if (selectedCell != null) {
      var cells = [];

      cells.push(selectedCell);

      for (var i = 0; i < selectedCell.getChildCount(); i++)
          cells.push(selectedCell.getChildAt(i));

      graph.getModel().beginUpdate();
      try {
          for (var i = 0; i < cells.length; i++) {
              var cell = cells[i];
              if (cell.isVertex() == true) {
                  var geo = graph.getCellGeometry(cell);

                  if (geo != null) {
                      // Rotates the size and position in the geometry
                      geo = geo.clone();
                      geo.x += geo.width / 2 - geo.height / 2;
                      geo.y += geo.height / 2 - geo.width / 2;
                      var tmp = geo.width;
                      geo.width = geo.height;
                      geo.height = tmp;
                      graph.getModel().setGeometry(cell, geo);
                      // Reads the current direction and mirrors the ports
                      var state = graph.view.getState(cell);
                      if (state != null) {
                          var dir = state.style[mxConstants.STYLE_ROTATION] || '0';
                          var mirror = state.style[mxConstants.STYLE_STENCIL_FLIPH] || '0';
                          if (cell.isConnectable() == true) {
                              var geoCell = cell.getGeometry();

                               /*
                                  To mirror the ports in sync with the block mirror.
                                  A mirror makes port directing east direct to west and vice versa.
                                  A port directing north or south will have to aligh with the other ports which have same direction.
                              */

                              if (cell.value == "ExplicitOutputPort" || cell.value == "ImplicitOutputPort" || cell.value == "ExplicitInputPort" || cell.value == "ImplicitInputPort") {
                                  if(dir == '180' || dir == '0'){
                                      if(cell.value == "ExplicitOutputPort" || cell.value == "ImplicitOutputPort") {
                                          if (dir == '0')
                                          {
                                              geoCell.x = geoCell.x - 1 - 0.125;
                                              dir = '180';
                                          }
                                          else
                                          {
                                              geoCell.x = geoCell.x + 1 + 0.125;
                                              dir = '0';
                                          }
                                      }
                                      else {
                                          geoCell = geoCell.clone();
                                          if (dir == '0')
                                          {
                                              geoCell.x = geoCell.x + 1 + 0.125;
                                              dir = '180';
                                          }
                                          else
                                          {
                                              geoCell.x = geoCell.x - 1 - 0.125;
                                              dir = '0';
                                          }
                                      }
                                  }
                                  else if (dir == '90' || dir == '270')
                                  {
                                      if(cell.value == "ExplicitOutputPort" || cell.value == "ImplicitOutputPort"){
                                          geoCell.x = 1 - geoCell.x - 0.125;
                                      }
                                      else{
                                          geoCell.x = 1 - geoCell.x + 0.125;
                                      }
                                  }
                                  cell.setGeometry(geoCell);
                              }
                              else if (cell.value == 'CommandPort' || cell.value == 'ControlPort') {
                                  if (dir == '0' || dir == '180') {
                                      if(cell.value == 'CommandPort') {
                                          if (dir == '180')
                                          {
                                              geoCell.x = geoCell.x + 1 + 0.125;
                                              dir = '0';
                                          }
                                          else
                                          {
                                              geoCell.x = geoCell.x - 1 - 0.125;
                                              dir = '180';
                                          }
                                      }
                                      else{
                                          if (dir == '180')
                                          {
                                              geoCell.x = geoCell.x - 1 - 0.125;
                                              dir = '0';
                                          }
                                          else
                                          {
                                              geoCell.x = geoCell.x + 1 + 0.125;
                                              dir = '180';
                                          }
                                      }
                                  }
                                  else if(dir == '90' || dir == '270')
                                  {
                                      geoCell.x = 1 - geoCell.x;
                                  }
                                  cell.setGeometry(geoCell);
                              }
                          }
                          graph.setCellStyles(mxConstants.STYLE_ROTATION, dir, [cell]);
                          if(mirror == '0'){
                              graph.setCellStyles(mxConstants.STYLE_STENCIL_FLIPH, '1', [cell]);
                          }
                          else{
                              graph.setCellStyles(mxConstants.STYLE_STENCIL_FLIPH, '0', [cell]);
                          }
                      }
                  }
              }

              if(cell.isConnectable()==false){
                  var state = graph.view.getState(cell);
                  if (state != null) {
                          var dir = state.style[mxConstants.STYLE_ROTATION];
                          var mirror = state.style[mxConstants.STYLE_STENCIL_FLIPH] || '0';
                          if(mirror == '0'){
                              graph.setCellStyles(mxConstants.STYLE_STENCIL_FLIPH, '1', [cell]);
                          }
                          else{
                              graph.setCellStyles(mxConstants.STYLE_STENCIL_FLIPH, '0', [cell]);
                          }
                          if(dir == '90' || dir == '270'){
                              dir = (dir+180)%360;

                          }
                          graph.setCellStyles(mxConstants.STYLE_ROTATION, dir, [cell]);
                  }
                  if(cell.value.getAttribute('label') != null && cell.value.getAttribute('label').substring(1,4)=="img" )
                  {
                      if(cell.currentAngle == 90 || cell.currentAngle == 270){
                          cell.flipY=-parseInt(cell.flipY);
                      }
                      else {
                          cell.flipX=-parseInt(cell.flipX);
                      }
                      transformBlockImage(graph, cell);
                  }
              }
          }
      } finally {
          graph.getModel().endUpdate();
      }
  }
}

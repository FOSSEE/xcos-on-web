$.getScript('math.js');

// @Adhitya: 02-07-2016: Commented Jitesh's work to call Data Structures individually, 
// and combined all of them into combined.js using combine_script.bat

/*
$.ajax({
    type: "POST",
    // Invoke filenames.php
    url: "filenames.php",
    // Receive the resultant filenames from the php script in JSON format
    dataType: "json",
    // Add url for the required folder
    data: {
      url: "/data_structures_correct/"
    },
    success: function (data) {
        
       // @Parameter: data will have the required filenames in the mentioned folder
       // For each url, add the script to the body div element with getScript function
      for (i in data) {
          $.getScript(data[i]);
      }
    }
});
*/

// Added to handle ordering for a few blocks.

window.inBitMap='0';
window.outBitMap='0';

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

/*
    Maverick, Adhitya
    ImplicitInBlock, ImplicitOutBlock, ExplicitInBlock, ExplicitOutBlock
    These blocks need their orderings to be handled.
    We are using a bitmap to do the same. 
*/

function handleOrdering(inOrOut){
    var bitmap;
    if(inOrOut=='in'){
        bitmap=window.inBitMap;
    }
    else{
        bitmap=window.outBitMap;
    }
    var index = bitmap.indexOf('0');
    if(index == -1){
        bitmap += '0';
        index = bitmap.indexOf('0');
    }
    bitmap = bitmap.replaceAt(index,'1');
    if(inOrOut=='in'){
        window.inBitMap=bitmap;
    }
    else{
        window.outBitMap=bitmap;
    }
    var position = 1+index;
    
    return position;
}

function AfficheBlock() {
    if (arguments.length > 0) {
        var options = arguments[0];
        this.angle = options.angle; // Not Known
        this.blockType = getData(options.model.blocktype)[0];
        this.connectable = options.connectable; // Not Known
        var dep_ut = getData(options.model.dep_ut);
        if (dep_ut[0] == "true")
            this.dependsOnU = "1";
        if (dep_ut[1] == "true")
            this.dependsOnT = "1";
        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = options.ordering;
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.style = arguments.callee.caller.name;
        this.value = options.value; // Not Known
        this.vertex = options.vertex; // Not Known
        this.visible = options.visible; // Not Known
        this.exprs = options.graphics.exprs;
        this.realParameters = options.model.rpar;
        this.integerParameters = options.model.ipar;
        this.objectsParameters = options.model.opar;
        this.nbZerosCrossing = options.model.nzcross;
        this.nmode = options.model.nmode;
        this.dState = options.model.dstate;
        this.oDState = list();
        this.equations = list(); // Not Known
        this.blockName = "AfficheBlock";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function BigSom() {
    if (arguments.length > 0) {
        var options = arguments[0];

        var dep_ut = getData(options.model.dep_ut);
        if (dep_ut[0] == "true")
            this.dependsOnU = "1";

        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = options.ordering;
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.style = arguments.callee.caller.name;
        this.value = "+"; // Not Known
        this.exprs = options.graphics.exprs;
        this.realParameters = options.model.rpar;
        this.integerParameters = options.model.ipar;
        this.objectsParameters = options.model.opar;
        this.nbZerosCrossing = options.model.nzcross;
        this.nmode = options.model.nmode;
        this.oDState = list();
        this.equations = list(); // Not Known
        this.blockName = "BigSom";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function EventInBlock() {
    if (arguments.length > 0) {
        var options = arguments[0];
        this.blockType = getData(options.model.blocktype)[0];
        this.connectable = options.connectable; // Not Known
        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = options.ordering;
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.style = arguments.callee.caller.name;
        this.value = options.value; // Not Known
        this.vertex = options.vertex; // Not Known
        this.visible = options.visible; // Not Known
        this.exprs = options.graphics.exprs;
        this.integerParameters = options.model.ipar;
        this.objectsParameters = options.model.opar;
        this.equations = list(); // Not Known
        this.blockName = "EventInBlock";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function EventOutBlock() {
    if (arguments.length > 0) {
        var options = arguments[0];
        this.blockType = getData(options.model.blocktype)[0];
        this.connectable = options.connectable; // Not Known
        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = options.ordering;
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.style = arguments.callee.caller.name;
        this.value = options.value; // Not Known
        this.vertex = options.vertex; // Not Known
        this.visible = options.visible; // Not Known
        this.exprs = options.graphics.exprs;
        this.integerParameters = options.model.ipar;
        this.objectsParameters = options.model.opar;
        this.equations = list(); // Not Known
        this.blockName = "EventOutBlock";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function RoundBlock() {
    if (arguments.length > 0) {
        var options = arguments[0];
        this.angle = options.angle; // Not Known
        this.blockType = getData(options.model.blocktype)[0];
        var dep_ut = getData(options.model.dep_ut);
        if (dep_ut[0] == "true")
            this.dependsOnU = "1";
        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = options.ordering;
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.style = arguments.callee.caller.name;
        this.value = options.value; // Not Known
        this.exprs = options.graphics.exprs;
        this.realParameters = options.model.rpar;
        this.integerParameters = options.model.ipar;
        this.objectsParameters = options.model.opar;
        this.nbZerosCrossing = options.model.nzcross;
        this.nmode = options.model.nmode;
        this.oDState = list();
        this.equations = list(); // Not Known
        this.blockName = "RoundBlock";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function GroundBlock() {
    
    if (arguments.length > 0) {
        var options = arguments[0];
        this.angle = options.angle; // Not Known
        this.blockType = getData(options.model.blocktype)[0];
        var dep_ut = getData(options.model.dep_ut);
        if (dep_ut[0] == "true")
            this.dependsOnU = "1";
        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = options.ordering;
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.style = arguments.callee.caller.name;
        this.value = options.value; // Not Known
        this.exprs = options.graphics.exprs;
        this.realParameters = options.model.rpar;
        this.integerParameters = options.model.ipar;
        this.objectsParameters = options.model.opar;
        this.nbZerosCrossing = options.model.nzcross;
        this.nmode = options.model.nmode;
        this.oDState = list();
        this.equations = options.model.equations; // Not Known
        this.blockName = "GroundBlock";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function TextBlock() {
    if (arguments.length > 0) {
        var options = arguments[0];
        this.angle = options.angle; // Not Known
        this.blockType = getData(options["model"].blocktype)[0];
        this.connectable = options.connectable; // Not Known
        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = options.ordering;
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options["model"].sim[0])[0];
            var func_type;
            switch (getData(options[model].sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options["model"].sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.style = arguments.callee.caller.name;
        this.value = options.value; // Not Known
        this.vertex = options.vertex; // Not Known
        this.visible = options.visible; // Not Known
        this.exprs = options["graphics"].exprs;
        this.realParameters = options["model"].rpar;
        this.objectsParameters = options["model"].opar;
        this.nbZerosCrossing = options["model"].nzcross;
        this.nmode = options["model"].nmode;
        this.oDState = list();
        this.equations = list(); // Not Known
        this.blockName = "TextBlock";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function Product() {
    if (arguments.length > 0) {
        var options = arguments[0];
        this.angle = options.angle; // Not Known
        this.blockType = getData(options.model.blocktype)[0];
        this.connectable = options.connectable; // Not Known
        var dep_ut = getData(options.model.dep_ut);
        if (dep_ut[0] == "true")
            this.dependsOnU = "1";
        if (dep_ut[1] == "true")
            this.dependsOnT = "1";
        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = options.ordering;
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        if(!isEmpty(options.graphics.style)) {
            this.style = getData(options.graphics.style)[0];
        }
        else {
            this.style = arguments.callee.caller.name;
        }
        this.value = options.value; // Not Known
        this.vertex = options.vertex; // Not Known
        this.visible = options.visible; // Not Known
        this.exprs = options.graphics.exprs;
        this.realParameters = options.model.rpar;
        this.integerParameters = options.model.ipar;
        this.objectsParameters = options.model.opar;
        this.nbZerosCrossing = options.model.nzcross;
        this.nmode = options.model.nmode;
        if(!isEmpty(options.model.state)) {
            this.state = options.model.state;
        }
        if(!isEmpty(options.model.dstate)) {
            this.dState = options.model.dstate;
        }
        this.oDState = options.model.odstate;
        this.equations = options.model.equations;
        this.blockName = "Product";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function ImplicitOutBlock() {
    if (arguments.length > 0) {
        var options = arguments[0];
        this.angle = options.angle; // Not Known
        this.blockType = getData(options.model.blocktype)[0];
        this.connectable = options.connectable; // Not Known
        var dep_ut = getData(options.model.dep_ut);
        if (dep_ut[0] == "true")
            this.dependsOnU = "1";
        if (dep_ut[1] == "true")
            this.dependsOnT = "1";
        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = handleOrdering('out');
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.value = options.value; // Not Known
        this.vertex = options.vertex; // Not Known
        this.visible = options.visible; // Not Known
        this.exprs = options.graphics.exprs;
        this.integerParameters = options.model.ipar;
        this.objectsParameters = options.model.opar;
        if(!isEmpty(options.model.state)) {
            this.state = options.model.state;
        }
        if(!isEmpty(options.model.dstate)) {
            this.dState = options.model.dstate;
        }
        this.equations = options.model.equations;
        this.blockName = "ImplicitOutBlock";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function ImplicitInBlock() {
    if (arguments.length > 0) {
        var options = arguments[0];
        this.angle = options.angle; // Not Known
        this.blockType = getData(options.model.blocktype)[0];
        this.connectable = options.connectable; // Not Known
        var dep_ut = getData(options.model.dep_ut);
        if (dep_ut[0] == "true")
            this.dependsOnU = "1";
        if (dep_ut[1] == "true")
            this.dependsOnT = "1";
        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = handleOrdering('in');
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.value = options.value; // Not Known
        this.vertex = options.vertex; // Not Known
        this.visible = options.visible; // Not Known
        this.exprs = options.graphics.exprs;
        this.integerParameters = options.model.ipar;
        this.objectsParameters = options.model.opar;
        if(!isEmpty(options.model.state)) {
            this.state = options.model.state;
        }
        if(!isEmpty(options.model.dstate)) {
            this.dState = options.model.dstate;
        }
        this.equations = options.model.equations;
        this.blockName = "ImplicitInBlock";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function ExplicitInBlock() {
    if (arguments.length > 0) {
        var options = arguments[0];
        this.angle = options.angle; // Not Known
        this.blockType = getData(options.model.blocktype)[0];
        this.connectable = options.connectable; // Not Known
        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = handleOrdering('in');
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.value = options.value; // Not Known
        this.vertex = options.vertex; // Not Known
        this.visible = options.visible; // Not Known
        this.exprs = options.graphics.exprs;
        this.integerParameters = options.model.ipar;
        this.objectsParameters = options.model.opar;
        if(!isEmpty(options.model.state)) {
            this.state = options.model.state;
        }
        if(!isEmpty(options.model.dstate)) {
            this.dState = options.model.dstate;
        }
        this.equations = options.model.equations;
        this.blockName = "ExplicitInBlock";
        this.blockElementName = arguments.callee.caller.name;
    }
}


function ExplicitOutBlock() {
    if (arguments.length > 0) {
        var options = arguments[0];
        this.angle = options.angle; // Not Known
        this.blockType = getData(options.model.blocktype)[0];
        this.connectable = options.connectable; // Not Known
        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = handleOrdering('out');
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.value = options.value; // Not Known
        this.vertex = options.vertex; // Not Known
        this.visible = options.visible; // Not Known
        this.exprs = options.graphics.exprs;
        this.integerParameters = options.model.ipar;
        this.objectsParameters = options.model.opar;
        if(!isEmpty(options.model.state)) {
            this.state = options.model.state;
        }
        if(!isEmpty(options.model.dstate)) {
            this.dState = options.model.dstate;
        }
        this.equations = options.model.equations;
        this.blockName = "ExplicitOutBlock";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function VoltageSensorBlock() {
    if (arguments.length > 0) {
        var options = arguments[0];
        this.angle = options.angle; // Not Known
        this.blockType = getData(options.model.blocktype)[0];
        this.connectable = options.connectable; // Not Known
        var dep_ut = getData(options.model.dep_ut);
        if (dep_ut[0] == "true")
            this.dependsOnU = "1";
        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = options.ordering;
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.style = arguments.callee.caller.name;
        this.value = options.value; // Not Known
        this.exprs = options.graphics.exprs;
        this.realParameters = options.model.rpar;
        this.integerParameters = options.model.ipar;
        this.objectsParameters = options.model.opar;
        this.nbZerosCrossing = options.model.nzcross;
        this.nmode = options.model.nmode;
        this.oDState = list();
        this.equations = options.model.equations; // Not Known
        this.blockName = "VoltageSensorBlock";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function Summation() {
    if (arguments.length > 0) {
        var options = arguments[0];
        this.angle = options.angle; // Not Known
        this.blockType = getData(options.model.blocktype)[0];
        this.connectable = options.connectable; // Not Known
        var dep_ut = getData(options.model.dep_ut);
        if (dep_ut[0] == "true")
            this.dependsOnU = "1";
        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = options.ordering;
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.style = arguments.callee.caller.name;
        this.value = options.value; // Not Known
        this.exprs = options.graphics.exprs;
        this.realParameters = options.model.rpar;
        this.integerParameters = options.model.ipar;
        this.objectsParameters = options.model.opar;
        this.nbZerosCrossing = options.model.nzcross;
        this.nmode = options.model.nmode;
        this.oDState = list();
        this.equations = list(); // Not Known
        this.blockName = "Summation";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function SuperBlock() {
    if (arguments.length > 0) {
        var options = arguments[0];
        this.angle = options.angle; // Not Known
        this.blockType = getData(options.model.blocktype)[0];
        this.connectable = options.connectable; // Not Known
        var dep_ut = getData(options.model.dep_ut);
        if (dep_ut[0] == "true") {
            this.dependsOnU = "1";
        }
        if (dep_ut[1] == "true") {
            this.dependsOnT = "1";
        }
        this.id = options.id;
        this.interfaceFunctionName = arguments.callee.caller.name;
        this.ordering = options.ordering;
        this.parent = options.parent;
        if (options.model.sim instanceof Array) {
            this.simulationFunctionName = getData(options.model.sim[0])[0];
            var func_type;
            switch (getData(options.model.sim[1])[0].toString()) {
                case "-2.0":
                    func_type = "ESELECT";
                    break;
                case "-1.0":
                    func_type = "IFTHENELSE";
                    break;
                case "1.0":
                    func_type = "TYPE_1";
                    break;
                case "2.0":
                    func_type = "TYPE_2";
                    break;
                case "3.0":
                    func_type = "TYPE_3";
                    break;
                case "4.0":
                    func_type = "C_OR_FORTRAN";
                    break;
                case "5.0":
                    func_type = "SCILAB";
                    break;
                case "99.0":
                    func_type = "DEBUG";
                    break;
                case "1001.0":
                    func_type = "DYNAMIC_FORTRAN_1";
                    break;
                case "2001.0":
                    func_type = "DYNAMIC_C_1";
                    break;
                case "2004.0":
                    func_type = "DYNAMIC_EXPLICIT_4";
                    break;
                case "10001.0":
                    func_type = "OLDBLOCKS";
                    break;
                case "10004.0":
                    func_type = "IMPLICIT_C_OR_FORTRAN";
                    break;
                case "30004.0":
                    func_type = "MODELICA";
                    break;
            }
            this.simulationFunctionType = func_type;
        } else {
            this.simulationFunctionName = getData(options.model.sim)[0];
            this.simulationFunctionType = "DEFAULT";
        }
        this.style = arguments.callee.caller.name;
        this.value = options.value; // Not Known
        this.vertex = options.vertex; // Not Known
        this.visible = options.visible; // Not Known
        this.realParameters = options.model.rpar;
        this.oDState = list();
        this.equations = list(); // Not Known
        this.blockName = "SuperBlock";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function zeros() {
    if (arguments.length == 0) {
        return [0];
    } else if (arguments.length == 1) {
        var a = arguments[0];
        if (typeof a.length === 'undefined') {
            return [0];
        } else {
            return math.zeros(math.size(a));
        }
    } else {
        var args = Array.prototype.slice.call(arguments);
        return math.zeros(args);
    }
}

function ones() {
    if (arguments.length == 0) {
        return [1];
    } else if (arguments.length == 1) {
        var a = arguments[0];
        if (typeof a.length === 'undefined') {
            return [1];
        } else {
            return math.ones(math.size(a));
        }
    } else {
        var args = Array.prototype.slice.call(arguments);
        return math.ones(args);
    }
}

function size() {

    if (arguments.length == 1)
        return math.size(arguments[0])
    else {
        var res = math.size(arguments[0]);

        if (res.length == 1)
            res.push(1);

        switch (arguments[1]) {
            case 'r':
            case 1:
                return res[0];
            case 'c':
            case 2:
                return res[1];
            case '*':
                return res[0] * res[1];
            default:
                return res[arguments[1]];
        }
    }
}

function inverse() {
    var str = "[["
    var arg = arguments[0];
    arg = arg.replace(/ /g, "],[");
    str += arg + "]]";
    var array = JSON.parse(str);
    return array;
}

function _str2code() {
    var conversion = "0123456789abcdefghijklmnopqrstuvwxyz_#!$ ();:+-*/\\=.,'[]%|&<>~^";
    var conversion2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ00?0 00000000$000\"{}000`0@0r";
    var str = arguments[0];
    var code = [];
    for (var i = 0; i < str.length; i++) {
        code[i] = [conversion.indexOf(str[i])];
        if (code[i] == -1) {
            code[i] = [conversion2.indexOf(str[i]) * -1];
        }
    }
    return code;
}

function real() {
    var matrix = arguments[0];
    var sz = math.size(matrix);
    var res = [];
    for (var i = 0; i < sz[0]; i++) {
        for (var j = 0; j < sz[1]; j++) {
            res.push([math.re(matrix[i][j])]);
        }
    }
    return res;
}

function imag() {
    var matrix = arguments[0];
    var sz = math.size(matrix);
    var res = [];
    for (var i = 0; i < sz[0]; i++) {
        for (var j = 0; j < sz[1]; j++) {
            res.push([math.im(matrix[i][j])]);
        }
    }
    return res;
}

function _check() {
    var param = arguments[0];
    if(typeof param == "object") {
        var str = param.toString();
        str = str.substring(1, str.length - 1);
        str = str.replace(/\B\+/,"+%i*");
        str = str.replace(/\B-/,"-%i*");
        str = param.toString().substring(0,1) + str;
        str = str.replace(/ /g,'');
        return str;
    }
    else if(typeof param == "string") {
        return '&quot;'+param+'&quot;';
    }
    else {
        return param;
    }
}

// Converts String to Array of ASCII values

function ascii() {

    var convertAscii = [];

    for (var i = 0; i < arguments[0].length; i++) {
        convertAscii.push(arguments[0].charCodeAt(i));
    }

    return convertAscii;
}

function genSwitchInnerDiagram(stateOpen) {
    diagram = scicos_diagram();
    // Input forward
    diagram.objs.push(new IN_f().internal());
    diagram.objs[0].graphics.pout = new ScilabDouble([5]);
    diagram.objs[0].graphics.flip = new ScilabBoolean([true]);
    diagram.objs[0].model.uid = new ScilabString([count]);
    diagram.objs[0].doc = list(new ScilabString([count++]));

    // Output's forward
    diagram.objs.push(new OUT_f().internal());
    diagram.objs[1].graphics.pin = new ScilabDouble([7]);
    diagram.objs[1].graphics.flip = new ScilabBoolean([true]);
    diagram.objs[1].model.outtyp = new ScilabDouble();
    diagram.objs[1].model.uid = new ScilabString([count]);
    diagram.objs[1].doc = list(new ScilabString([count++]));

    diagram.objs.push(new CONST_m().internal());
    diagram.objs[2].graphics.pout = new ScilabDouble([6]);
    diagram.objs[2].graphics.flip = new ScilabBoolean([true]);
    diagram.objs[2].graphics.exprs = new ScilabString(["0"]);
    diagram.objs[2].graphics.out_implicit = new ScilabString(["E"]);
    diagram.objs[2].graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
    diagram.objs[2].graphics.out_label = new ScilabString([""]);
    diagram.objs[2].model.rpar = new ScilabDouble([0]);
    diagram.objs[2].model.uid = new ScilabString([count]);
    diagram.objs[2].doc = list(new ScilabString([count++]));

    diagram.objs.push(new SWITCH_f().internal());
    diagram.objs[3].graphics.pin = new ScilabDouble([5], [6]);
    diagram.objs[3].graphics.flip = new ScilabBoolean([true]);
    diagram.objs[3].graphics.pout = new ScilabDouble([7]);
    diagram.objs[3].graphics.in_implicit = new ScilabString(["E"], ["E"]);
    diagram.objs[3].graphics.in_style = new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]);
    diagram.objs[3].graphics.in_label = new ScilabString([""], [""]);
    diagram.objs[3].graphics.out_implicit = new ScilabString(["E"]);
    diagram.objs[3].graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
    diagram.objs[3].graphics.out_label = new ScilabString([""]);
    diagram.objs[3].graphics.style = new ScilabString(["SWITCH_f"]);
    diagram.objs[3].model.in2 = new ScilabDouble([1], [1]);
    diagram.objs[3].model.intyp = new ScilabDouble([1], [1]);
    diagram.objs[3].model.out2 = new ScilabDouble([1]);
    diagram.objs[3].model.uid = new ScilabString([count]);
    diagram.objs[3].doc = list(new ScilabString([count++]));

    if (stateOpen == true) {
        diagram.objs[3].model.ipar = new ScilabDouble([1]);
        diagram.objs[3].graphics.exprs = new ScilabString(["2"], ["2"]);
    } else {
        diagram.objs[3].model.ipar = new ScilabDouble([0]);
        diagram.objs[3].graphics.exprs = new ScilabString(["2"], ["1"]);
    }

    // IN_f <-> SWITCH_f
    diagram.objs[4] = scicos_link({
        xx: new ScilabDouble([0], [0]),
        yy: new ScilabDouble([0], [0]),
        from: new ScilabDouble([1, 1, 0]),
        to: new ScilabDouble([4, 1, 1])
    });
    // CONST_m <-> SWITCH_f
    diagram.objs[5] = scicos_link({
        xx: new ScilabDouble([0], [0]),
        yy: new ScilabDouble([0], [0]),
        from: new ScilabDouble([3, 1, 0]),
        to: new ScilabDouble([4, 2, 1])
    });
    // SWITCH_f <-> OUT_f
    diagram.objs[6] = scicos_link({
        xx: new ScilabDouble([0], [0]),
        yy: new ScilabDouble([0], [0]),
        from: new ScilabDouble([4, 1, 0]),
        to: new ScilabDouble([2, 1, 1])
    });

    return diagram;
}

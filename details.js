// All arrays - separated by ',' or ';' or ' ' are taken to be 1 Dimensional
// Only during printing, their nomenclature will change
// Good read: http://javascript.info/tutorial/arguments#keyword-arguments
/*
Authors: Adhitya, Nimish, Chhavi, Saarang
*/
var script = document.createElement("script");
script.src = "dependencies.js";
document.head.appendChild(script);
var count = 1;

function scicos_block() {
    var options = arguments[0] || new Object();
    var block_type = ["Block", "graphics", "model", "gui", "doc"];
    this.Block = new ScilabString(block_type);
    this.graphics = options.graphics || new scicos_graphics();
    this.model = options.model || new scicos_model();
    this.gui = options.gui || new ScilabString();
    this.doc = options.doc || list();

    return mlist(block_type, this.Block, this.graphics, this.model, this.gui, this.doc);
}

function standard_define() {
    var sz = arguments[0];
    var model = arguments[1];
    var label = arguments[2];
    var gr_i = arguments[3] || new ScilabString();

    var pin = new ScilabDouble();
    var pout = new ScilabDouble();
    var pein = new ScilabDouble();
    var peout = new ScilabDouble();

    var nin = model.in.length;
    if (nin > 0) {
        pin = zeros(nin);
    }
    var nout = model.out.length;
    if (nout > 0) {
        pout = zeros(nout);
    }
    var ncin = model.evtin.length;
    if (ncin > 0) {
        pein = zeros(ncin);
    }
    var ncout = model.evtout.length;
    if (ncout > 0) {
        peout = zeros(ncout);
    }

    gr_i = list(gr_i, new ScilabDouble([8]));

    if (gr_i[1] == []) {
        gr_i[1] = new ScilabDouble([8]);
    }
    if (gr_i[1] == 0) {
        gr_i[1] = new ScilabDouble();
    }

    var graphics_options = {
        sz: sz,
        pin: pin,
        pout: pout,
        pein: pein,
        peout: peout,
        gr_i: gr_i,
        exprs: label
    };
    var graphics = new scicos_graphics(graphics_options);
    var block_options = {
        graphics: graphics,
        model: model,
        gui: new ScilabString([arguments.callee.caller.name])
    };
    return new scicos_block(block_options);
}

function scicos_graphics() {
    var options = arguments[0] || new Object();
    var graphics_type = ["graphics", "orig", "sz", "flip", "theta", "exprs", "pin", "pout", "pein", "peout", "gr_i", "id", "in_implicit", "out_implicit", "in_style", "out_style", "in_label", "out_label", "style"];
    this.graphics = new ScilabString(graphics_type);
    this.orig = options.orig || new ScilabDouble([0, 0]);
    this.sz = options.sz || new ScilabDouble([80, 80]); // Space and comma works the same!
    this.flip = options.flip || new ScilabBoolean([false]);
    this.theta = options.theta || new ScilabDouble([0]);
    this.exprs = options.exprs || new ScilabDouble();
    this.pin = options.pin || new ScilabDouble();
    this.pout = options.pout || new ScilabDouble();
    this.pein = options.pein || new ScilabDouble();
    this.peout = options.peout || new ScilabDouble();
    this.gr_i = options.gr_i || new ScilabString();
    this.id = options.id || new ScilabString([""]);
    this.in_implicit = options.in_implicit || new ScilabDouble();
    this.out_implicit = options.out_implicit || new ScilabDouble(); // There is only one!
    this.in_style = options.in_style || new ScilabDouble();
    this.out_style = options.out_style || new ScilabDouble();
    this.in_label = options.in_label || new ScilabDouble();
    this.out_label = options.out_label || new ScilabDouble();
    this.style = options.style || new ScilabString();

    return mlist(graphics_type, this.graphics, this.orig, this.sz, this.flip, this.theta, this.exprs, this.pin, this.pout, this.pein, this.peout, this.gr_i, this.id, this.in_implicit, this.out_implicit, this.in_style, this.out_style, this.in_label, this.out_label, this.style);
}

function scicos_model() {
    var options = arguments[0] || new Object();
    var model_type = ["model", "sim", "in", "in2", "intyp", "out", "out2", "outtyp", "evtin", "evtout", "state", "dstate", "odstate", "rpar", "ipar", "opar", "blocktype", "firing", "dep_ut", "label", "nzcross", "nmode", "equations", "uid"];
    this.model = new ScilabString(model_type);
    this.sim = options.sim || new ScilabString();
    this.in = options.in || new ScilabDouble();
    this.in2 = options.in2 || new ScilabDouble();
    this.intyp = options.intyp || new ScilabDouble(); // [1]
    this.out = options.out || new ScilabDouble();
    this.out2 = options.out2 || new ScilabDouble();
    this.outtyp = options.outtyp || new ScilabDouble([1]);
    this.evtin = options.evtin || new ScilabDouble();
    this.evtout = options.evtout || new ScilabDouble();
    this.state = options.state || new ScilabDouble();
    this.dstate = options.dstate || new ScilabDouble();
    this.odstate = options.odstate || list();
    this.ipar = options.ipar || new ScilabDouble();
    this.rpar = options.rpar || new ScilabDouble();
    this.opar = options.opar || list(); // new ScilabDouble();
    this.blocktype = options.blocktype || new ScilabString(["c"]);
    this.firing = options.firing || new ScilabDouble();
    this.dep_ut = options.dep_ut || new ScilabBoolean([false, false]);
    this.label = options.label || new ScilabString([""]); // If label not available, use image
    this.nzcross = options.nzcross || new ScilabDouble([0]);
    this.nmode = options.nmode || new ScilabDouble([0]);;
    this.equations = options.equations || list();
    this.uid = options.uid || new ScilabString();

    return mlist(model_type, this.model, this.sim, this.in, this.in2, this.intyp, this.out, this.out2, this.outtyp, this.evtin, this.evtout, this.state, this.dstate, this.odstate, this.ipar, this.rpar, this.opar, this.blocktype, this.firing, this.dep_ut, this.label, this.nzcross, this.nmode, this.equations, this.uid);
}



function scicos_diagram() {
    var options = arguments[0] || new Object();
    var diagram_type = ["diagram", "props", "objs", "version", "contrib"];
    this.diagram = new ScilabString(diagram_type);
    this.props = options.props || scicos_params();
    this.objs = options.objs || list();
    this.version = options.version || new ScilabString([""]);
    this.contrib = options.contrib || list();

    return mlist(diagram_type, this.diagram, this.props, this.objs, this.version, this.contrib);
}


function scicos_params() {
    var options = arguments[0] || new Object();
    var params_type = ["params", "wpar", "title", "tol", "tf", "context", "void1", "options", "void2", "void3", "doc"];
    this.params = new ScilabString(params_type);
    this.wpar = options.wpar || new ScilabDouble([600, 450, 0, 0, 600, 450]);
    this.title = options.title || options.Title || new ScilabString(["Untitled"]);
    this.tf = options.tf || new ScilabDouble([100000]);
    this.tol = options.tol || new ScilabDouble([Math.pow(10, -6)], [Math.pow(10, -6)], [Math.pow(10, -10)], [100001], [0], [1], [0]);
    this.context = options.context || new ScilabString([""]);
    this.void1 = new ScilabDouble();
    this.options = options.options || new default_options();
    this.void2 = new ScilabDouble();
    this.void3 = new ScilabDouble();
    this.doc = options.doc || list();

    return tlist(params_type, this.params, this.wpar, this.title, this.tol, this.tf, this.context, this.void1, this.options, this.void2, this.void3, this.doc);
}

function default_options() {
    var options_type = ["scsopt", "3D", "Background", "Link", "ID", "Cmap"];
    this.scsopt = new ScilabString(options_type);
    this.D3 = list(new ScilabBoolean([true]), new ScilabDouble([33]));
    this.Background = new ScilabDouble([8, 1]);
    this.Link = new ScilabDouble([1, 5]);
    this.ID = list(new ScilabDouble([5, 1]), new ScilabDouble([4, 1]));
    this.Cmap = new ScilabDouble([0.8, 0.8, 0.8]);

    return tlist(options_type, this.scsopt, this.D3, this.Background, this.Link, this.ID, this.Cmap);
}


function scicos_link() {
    var options = arguments[0];
    var link_type = ["Link", "xx", "yy", "id", "thick", "ct", "from", "to"];
    this.Link = new ScilabString(link_type);
    this.xx = options.xx || new ScilabDouble(); //inverse array
    this.yy = options.yy || new ScilabDouble(); //inverse array
    this.id = options.id || new ScilabString(["drawlink"]); // changed
    this.thick = options.thick || new ScilabDouble([0, 0]);
    this.ct = options.ct || new ScilabDouble([1, 1]);
    this.from = options.from || new ScilabDouble();
    this.to = options.to || new ScilabDouble();

    return mlist(link_type, this.Link, this.xx, this.yy, this.id, this.thick, this.ct, this.from, this.to);
}


function list() {
    this.ScilabList = [];
    for (var i = 0; i < arguments.length; i++) {
        this.ScilabList.push(arguments[i]);
    }
    this.ScilabList.scilabClass = "ScilabList";

    return this.ScilabList;
}

function mlist() {
    this.ScilabMList = {};
    for (var i = 1, j = 0; i < arguments.length; i++, j++) {
        this.ScilabMList[arguments[0][j]] = arguments[i];
    }
    this.ScilabMList.varName = "";
    this.ScilabMList.scilabClass = "ScilabMList";

    return this.ScilabMList;
}

function tlist() {
    this.ScilabTList = {};
    for (var i = 1, j = 0; i < arguments.length; i++, j++) {
        this.ScilabTList[arguments[0][j]] = arguments[i];
    }
    this.ScilabTList.scilabClass = "ScilabTList";

    return this.ScilabTList;
}


function ScilabString() {
    var i = 0,
        j = 0;
    if (arguments.length) {
        var array = arguments;
        this.height = array.length;
        this.width = array[0].length;
        for (i = 0; i < this.height; i++) {
            for (j = 0; j < this.width; j++) {
                this["data" + i + j] = new data();
                this["data" + i + j].value = array[i][j];
                this["data" + i + j].line = i;
                this["data" + i + j].column = j;
            }
        }
    }
}

function ScilabBoolean() {
    var i = 0,
        j = 0;
    if (arguments.length) {
        var array = arguments;
        this.height = array.length;
        this.width = array[0].length;
        for (i = 0; i < this.height; i++) {
            for (j = 0; j < this.width; j++) {
                this["data" + i + j] = new data();
                this["data" + i + j].value = array[i][j].toString();
                this["data" + i + j].line = i;
                this["data" + i + j].column = j;
            }
        }
    }
}

function ScilabDouble() {
    var i = 0,
        j = 0;
    if (arguments.length) {
        var array = arguments;
        this.height = array.length;
        this.width = array[0].length;
        for (i = 0; i < this.height; i++) {
            for (j = 0; j < this.width; j++) {
                this["data" + i + j] = new data();
                if(array[i][j] % 1 == 0) {
                    this["data" + i + j].realPart = array[i][j].toFixed(1);
                } 
                else {
                    this["data" + i + j].realPart = array[i][j];
                }
                this["data" + i + j].line = i;
                this["data" + i + j].column = j;
            }
        }
    }
}

function ScilabInteger() {
    var i = 0,
        j = 0;
    if (arguments.length) {
        var array = arguments;
        this.height = array.length;
        this.width = array[0].length;
        for (i = 0; i < this.height; i++) {
            for (j = 0; j < this.width; j++) {
                this["data" + i + j] = new data();
                this["data" + i + j].value = array[i][j];
                this["data" + i + j].line = i;
                this["data" + i + j].column = j;
            }
        }
    }
}

function int32() {
    var args = Array.prototype.slice.call(arguments);
    var int = new ScilabInteger(...args);
    int.intPrecision = "sci_int32";
    return int;
}

function int16() {
    var args = Array.prototype.slice.call(arguments);
    var int = new ScilabInteger(...args);
    int.intPrecision = "sci_int16";
    return int;
}

function int8() {
    var args = Array.prototype.slice.call(arguments);
    var int = new ScilabInteger(...args);
    int.intPrecision = "sci_int8";
    return int;
}

function uint32() {
    var args = Array.prototype.slice.call(arguments);
    var int = new ScilabInteger(...args);
    int.intPrecision = "sci_uint32";
    return int;
}

function uint16() {
    var args = Array.prototype.slice.call(arguments);
    var int = new ScilabInteger(...args);
    int.intPrecision = "sci_uint16";
    return int;
}

function uint8() {
    var args = Array.prototype.slice.call(arguments);
    var int = new ScilabInteger(...args);
    int.intPrecision = "sci_uint8";
    return int;
}


function data() {
    this.line;
    this.column;
    this.realPart;
    this.value;
}

function getData() {
    var dataObject = arguments[0];
    var key;
    var dataArray = [];
    for (key in dataObject) {
        if (key != "height" && key != "width") {
            if (typeof dataObject[key].value === "undefined") {
                dataArray.push(dataObject[key].realPart);
            } else {
                dataArray.push(dataObject[key].value);
            }
        }
    }
    return dataArray;
}

function isEmpty() {
    return !getData(arguments[0]).length;
}

function modelica() {
    var modelica_type = ["modelica", "model", "inputs", "outputs", "parameters"];
    this.modelica = new ScilabString(modelica_type);
    this.model = [];
    this.inputs = [];
    this.outputs = [];
    this.parameters = list([], list());
    var mo = tlist(modelica_type, this.modelica, this.model, this.inputs, this.outputs, this.parameters);
    return mo;
}

// To add Block name under the instance tag in xml.
function instance() {
    this.instance = arguments[0];
}

function createInstanceTag() {
    return new instance(arguments[0]);
}


function CLKIN_f() {

    CLKIN_f.prototype.internal = function CLKIN_f() {
        var model = scicos_model();
        var port = 1;

        model.sim = new ScilabString(["input"]);
        model.outtyp = new ScilabDouble(); //changed
        model.evtout = new ScilabDouble([-1]); // 1, 1 -> -1, -1
        model.ipar = new ScilabDouble([port]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([port]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKIN_f\",sz(1),sz(2));"]);
        var block = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 1 -> 80

        block.graphics.style = new ScilabString(["CLKIN_f"]);
        return block;
    }
}

function CLKOUT_f() {

    CLKOUT_f.prototype.internal = function CLKOUT_f() {
        var model = scicos_model();
        var port = 1;

        model.sim = new ScilabString(["output"]);
        model.outtyp = new ScilabDouble();
        model.evtin = new ScilabDouble([-1]); // 1, 1 -> -1, -1
        model.ipar = new ScilabDouble([port]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = ScilabString(["" + port]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKOUT_f\",sz(1),sz(2));"]);
        var block = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 1 -> 80

        block.graphics.style = new ScilabString(["CLKOUT_f"]);
        return block;
    }
}

function CLKSPLIT_f() {

    CLKSPLIT_f.prototype.internal = function CLKSPLIT_f() {
        var model = scicos_model();
        model.sim = new ScilabString(["split"]);
        model.evtin = new ScilabDouble([-1]);
        model.outtyp = new ScilabDouble(); // changed
        model.evtout = new ScilabDouble([-1], [-1]) // 1, 1 -> -1, -1 inverse
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1], [-1]); // inverse
        model.dep_ut = new ScilabBoolean([false, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKSPLIT_f\",sz(1),sz(2));"]);

        var block = new standard_define(new ScilabDouble([80, 80]), model, new ScilabDouble(), gr_i); // 1 -> 80
        block.graphics.style = new ScilabString(["CLKSPLIT_f"]);
        return block;
    }
}




function BasicBlock() {
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
        if(!isEmpty(options.model.state)) {
            this.state = options.model.state;
        }
        if(!isEmpty(options.model.dstate)) {
            this.dState = options.model.dstate;
        }
        this.oDState = options.model.odstate;
        this.equations = options.model.equations;
        this.blockName = "BasicBlock";
        this.blockElementName = arguments.callee.caller.name;
    }
}

function sci2exp(c) {
    if (c.scilabClass == "ScilabList") {
        c = Object.create(c);
        c.scilabClass = "";
        if (c.length) {
            return "list(" + sci2exp(c) + ")";
        } else {
            return "list()";
        }
    } else if (typeof c.length === "undefined") {
        return c.toString();
    } else if (c.length == 0) {
        return "[]";
    } else if (c.length == 1)
        return c.toString();
    else {
        var result = "[";
        for (var i = 0; i < c.length; i++) {
            if (typeof c[i].length === 'undefined') {
                result += _check(c[i]) + ",";
            } else {
                for (var j = 0; j < c[i].length - 1; j++) {
                    result += _check(c[i][j]) + ",";
                }
                result += _check(c[i][c[i].length - 1]) + ";";
            }
        }
        result = result.substring(0, result.length - 1);
        result += "]";
        return result;
    }
}

function transpose(a) {
    return a[0].map(function(_, c) {
        return a.map(function(r) {
            return r[c];
        });
    });
}

function colon_operator() {
    var array = arguments[0];
    var new_arr = [];
    var i, j;
    for (i = 0; i < array[0].length; i++) {
        for (j = 0; j < array.length; j++) {
            new_arr.push([array[j][i]]);
        }
    }
    return new_arr;
}

// Returns ScilabDouble which contains a list with size = n and all values = 0
/*function zeros(n) {
    var arg = new Array(n + 1).join("0").split("").map(parseFloat);
    var port = new ScilabDouble();
    var i = 0;

    for (i = 0; i < arg[0].length; i++)
        port.list.push(arg[0][i]);

    return port;
}*/

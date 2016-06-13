// All arrays - separated by ',' or ';' or ' ' are taken to be 1 Dimensional
// Only during printing, their nomenclature will change
// Good read: http://javascript.info/tutorial/arguments#keyword-arguments
/*
Authors: Adhitya, Nimish, Chhavi
*/
var cnt = 1;
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

// Returns ScilabDouble which contains a list with size = n and all values = 0
function zeros(n) {
    var arg = new Array(n + 1).join("0").split("").map(parseFloat);
    var port = new ScilabDouble();
    var i = 0;

    for (i = 0; i < arg[0].length; i++)
        port.list.push(arg[0][i]);

    return port;
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
    this.Background = new ScilabDouble([8,1]);
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
                this["data" + i + j].realPart = array[i][j];
                this["data" + i + j].line = i;
                this["data" + i + j].column = j;
            }
        }
    }
}

function data() {
    this.line;
    this.column;
    this.realPart;
    this.value;
}

function CONST_m() {
    
    switch (arguments[0]) {
        case "get":
            var options = {vec:["Constant Value",this.c.toString()]};
            return options;
        case "set":
            this.c = [arguments[2]["vec"]];
			var dec = new mxCodec();
			var details = dec.decode(arguments[1]);
			details.realParameters = new ScilabDouble();
			details.exprs = new ScilabString([sci2exp(this.c)]);
			this.x.realParameters = new ScilabDouble();
			this.x.exprs = new ScilabString([sci2exp(this.c)]);
            return details;
        case "define":
			this.c = [1];
            var model = scicos_model();
            model.sim = list(new ScilabString(["cstblk4"]), new ScilabDouble([4]));
            model.in = new ScilabDouble();
            model.out = new ScilabDouble([this.c.length]);
            model.in2 = new ScilabDouble();
            model.out2 = new ScilabDouble([this.c.length]);
            model.rpar = new ScilabDouble(this.c);
            model.opar = list();
            model.blocktype = new ScilabString(["d"]);
            model.dep_ut = new ScilabBoolean([false, false]);

            var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONST_m\",sz(1),sz(2));"]);
            var exprs = new ScilabString([sci2exp(this.c)]);
            this.x= new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 1 -> 80
            this.x.graphics.style = new ScilabString(["CONST_m"]);
            var attributes = {
                style: "CONST_m",
                simulationFunctionName: "cstblk4",
                simulationFunctionType: "C_OR_FORTRAN",
                blockType: "d",
                interfaceFunctionName: "CONST_m",
				blockName: "CONST_m",
				blockElementName: "CONST_m",
        		realParameters : this.x.model.rpar,
        		integerParameters : this.x.model.ipar,
        		exprs : this.x.graphics.exprs
            };
            return new BasicBlock(attributes);
       
            
    }
}

function ANDLOG_f() {
    
    var model = scicos_model();
    model.sim = new ScilabString(["andlog"]);
    model.out = new ScilabDouble([1]);
    model.out2 = new ScilabDouble([1]); // null -> 1
    model.evtin = new ScilabDouble([-1],[-1]); // 1, 1 -> -1, -1
    model.blocktype = new ScilabString(["d"]);
    model.firing = new ScilabDouble();
    model.dep_ut = new ScilabBoolean([false, false]);
	
    var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ANDLOG_f\",sz(1),sz(2));"]);
    var block = new standard_define(new ScilabDouble([80, 80]), model, new ScilabDouble(), gr_i); // 3 -> 80

    // Style
    block.graphics.out_implicit = new ScilabString(["E"]);
	// changed
	block.graphics.out_label = new ScilabString([""]);
    block.graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
    block.graphics.style = new ScilabString(["ANDLOG_f"]);
    return block;
}

function ANDBLK() {
    
    switch(arguments[0])
    {
        case "define":
            var andlog = ANDLOG_f("define");
            andlog.graphics.orig = new ScilabDouble([194, 133]);
            andlog.graphics.sz = new ScilabDouble([60,60]);
            andlog.graphics.flip = new ScilabBoolean([true]);
            andlog.graphics.pout = new ScilabDouble([9]);
            andlog.graphics.pein = new ScilabDouble([4], [11]);
        	andlog.model.uid = new ScilabString([cnt]);
        	andlog.doc = list(new ScilabString([cnt++]));
        
            var input_port1 = CLKIN_f("define");
            input_port1.graphics.orig = new ScilabDouble([149, 287]);
            input_port1.graphics.sz = new ScilabDouble([20, 20]);
            input_port1.graphics.flip = new ScilabBoolean([true]);
            input_port1.graphics.exprs = new ScilabString(["1"]);
            input_port1.graphics.peout = new ScilabDouble([4]);
            input_port1.model.ipar = new ScilabDouble([1]);
        	input_port1.model.uid = new ScilabString([cnt]);
        	input_port1.doc = list(new ScilabString([cnt++]));
        
            var output_port = CLKOUT_f("define");
            output_port.graphics.orig = new ScilabDouble([450, 83]);
            output_port.graphics.sz = new ScilabDouble([20, 20]);
            output_port.graphics.flip = new ScilabBoolean([true]);
            output_port.graphics.exprs = new ScilabString(["1"]);
            output_port.graphics.pein = new ScilabDouble([8]);
            output_port.model.ipar = new ScilabDouble([1]);
        	output_port.model.uid = new ScilabString([cnt]);
        	output_port.doc = list(new ScilabString([cnt++]));
        
            var input_port2 = CLKIN_f("define");
            input_port2.graphics.orig = new ScilabDouble([141, 330]);
            input_port2.graphics.sz = new ScilabDouble([20, 20]);
            input_port2.graphics.flip = new ScilabBoolean([true]);
            input_port2.graphics.exprs = new ScilabString(["2"]);
            input_port2.graphics.peout = new ScilabDouble([6]);
            input_port2.model.ipar = new ScilabDouble([2]);
        	input_port2.model.uid = new ScilabString([cnt]);
        	input_port2.doc = list(new ScilabString([cnt++]));
        
            var ifthel = IFTHEL_f("define");
            ifthel.graphics.orig = new ScilabDouble([331, 137]);
            ifthel.graphics.sz = new ScilabDouble([60, 60]);
            ifthel.graphics.flip = new ScilabBoolean([true]);
            ifthel.graphics.pin = new ScilabDouble([9]);
            ifthel.graphics.pein = new ScilabDouble([12]);
            ifthel.graphics.peout = new ScilabDouble([8], [0]);
        	ifthel.model.uid = new ScilabString([cnt]);
        	ifthel.doc = list(new ScilabString([cnt++]));
        
        
            var split = CLKSPLIT_f("define");
            split.graphics.orig = new ScilabDouble([234, 275.78348]);
            split.graphics.pein = new ScilabDouble([6]);
            split.graphics.peout = new ScilabDouble([11], [12]);
        	split.model.uid = new ScilabString([cnt]);
        	split.doc = list(new ScilabString([cnt++]));
        
            var diagram = scicos_diagram();
            diagram.objs.push(andlog);
            diagram.objs.push(input_port1);
            diagram.objs.push(output_port);
        	diagram.objs.push(input_port2);
            diagram.objs.push(ifthel);
            diagram.objs.push(split);
            diagram.objs.push(scicos_link({
                xx: new ScilabDouble([169], [214], [214]),
                yy: new ScilabDouble([297], [297], [198.71]),
                ct: new ScilabDouble([5, -1]),
                from: new ScilabDouble([2, 1, 0]),
                to: new ScilabDouble([1, 1, 1])
            }));
            diagram.objs.push(scicos_link({
                xx: new ScilabDouble([161], [234], [234]),
                yy: new ScilabDouble([340], [340], [275.78]),
                ct: new ScilabDouble([5, -1]),
                from: new ScilabDouble([4, 1, 0]),
                to: new ScilabDouble([6, 1, 1])
            }));
            diagram.objs.push(scicos_link({
                xx: new ScilabDouble([351], [351], [450]),
                yy: new ScilabDouble([131.29], [93], [93]),
                ct: new ScilabDouble([5, -1]),
                from: new ScilabDouble([5, 1, 0]),
                to: new ScilabDouble([3, 1, 1])
            }));
            diagram.objs.push(scicos_link({
                xx: new ScilabDouble([262.57], [322.43]),
                yy: new ScilabDouble([163], [167]),
                ct: new ScilabDouble([1, 1]),
                from: new ScilabDouble([1, 1, 0]),
                to: new ScilabDouble([5, 1, 1])
            }));
            diagram.objs.push(scicos_link({
                xx: new ScilabDouble([234], [234]),
                yy: new ScilabDouble([275.78], [198.71]),
                ct: new ScilabDouble([5, -1]),
                from: new ScilabDouble([6, 1, 0]),
                to: new ScilabDouble([1, 2, 1])
            }));
            diagram.objs.push(scicos_link({
                xx: new ScilabDouble([234], [361], [361]),
                yy: new ScilabDouble([275.78], [275.78], [202.71]),
                ct: new ScilabDouble([5, -1]),
                from: new ScilabDouble([6, 2, 0]),
                to: new ScilabDouble([5, 1, 1])
            }));
            this.x = scicos_block();
            this.x.gui = new ScilabString(["ANDBLK"]);
            this.x.graphics.sz = new ScilabDouble([2, 2]);
            this.x.graphics.gr_i = new ScilabDouble();
            this.x.graphics.pein = new ScilabDouble([0, 0]);
            this.x.graphics.peout = new ScilabDouble([0]);
            this.x.model.sim = new ScilabString(["csuper"]);
            this.x.model.evtin = new ScilabDouble([1, 1]);
            this.x.model.evtout = new ScilabDouble([1]);
            this.x.model.blocktype = new ScilabString(["h"]);
            this.x.model.firing = new ScilabBoolean([false]);
            this.x.model.dep_ut = new ScilabBoolean([false, false]);
            this.x.model.rpar = diagram;
            var attributes = {
                style: "ANDBLK",
                simulationFunctionName: "csuper",
                simulationFunctionType: "DEFAULT",
                blockType: "h",
                interfaceFunctionName: "ANDBLK",
        		blockName: "ANDBLK",
        		blockElementName: "ANDBLK",
        		realParameters : this.x.model.rpar,
        		integerParameters : this.x.model.ipar,
        		exprs : this.x.graphics.exprs
            };
            return new BasicBlock(attributes);
        
        case "details":
            return this.x;
    }
    
}



function CFSCOPE() {
    switch(arguments[0])
    {
        case "define":
            this.win=-1;
            this.wdim=[[600],[400]];
            this.wpos=[[-1],[-1]];
            this.clrs=[[1],[3],[5],[7],[9],[11],[13],[15]];
            this.N=2;
            this.ymin=-15;
            this.ymax=15;
            this.per=30;
            var model=scicos_model();
            model.sim=list(new ScilabString(["cfscope"]),new ScilabDouble([4]));
            model.evtin=new ScilabDouble([1]);
            model.rpar=new ScilabDouble([0],[this.ymin],[this.ymax],[this.per]);
            model.ipar=new ScilabDouble([this.win],[1],[this.N],...this.clrs,...this.wpos,...this.wdim,[1],[1]);
            model.blocktype=new ScilabString(["c"]);
            model.dep_ut=new ScilabBoolean([true,false]);
            var  exprs=new ScilabString([this.clrs.toString().replace(/,/g, " ")],
            [this.win],
            [sci2exp([])],
            [sci2exp(this.wdim)],
            [this.ymin],
            [this.ymax],
            [this.per],
            [this.N],
            [1]);
            var gr_i = list(new ScilabString(["xstringb(orig(1),orig(2),\"CFSCOPE\",sz(1),sz(2));"]),new ScilabDouble([8]));
            this.x = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 2 -> 80
            this.x.graphics.style = new ScilabString(["CFSCOPE"]);
            var attributes = {
                style: "CFSCOPE",
                simulationFunctionName: "cfscope",
                simulationFunctionType: "C_OR_FORTRAN",
                dependsOnU: "1",
                interfaceFunctionName: "CFSCOPE",
        		blockName: "CFSCOPE",
        		blockElementName: "CFSCOPE",
        		realParameters : this.x.model.rpar,
        		integerParameters : this.x.model.ipar,
        		exprs : this.x.graphics.exprs
            };
            return new BasicBlock(attributes);
    }
}

function CLOCK_c() {
    var evtdly = EVTDLY_c("define");
    evtdly.graphics.orig=new ScilabDouble([320,232]);
    evtdly.graphics.sz=new ScilabDouble([40,40]);
    evtdly.graphics.flip=new ScilabBoolean([true]);
    evtdly.graphics.exprs=new ScilabString(["0.1"],["0.1"]);
    evtdly.graphics.pein=new ScilabDouble([6]);
    evtdly.graphics.peout=new ScilabDouble([3]);
    evtdly.model.rpar=new ScilabDouble([0.1],[0.1]);
    evtdly.model.firing=new ScilabDouble([0.1]);
    //changed
    evtdly.model.uid = new ScilabString([cnt]);
    evtdly.doc = list(new ScilabString([cnt++]));
    evtdly.model.evtin = new ScilabDouble([-1]);
    evtdly.model.evtout = new ScilabDouble([-1]);
    evtdly.graphics.peout = new ScilabDouble([4]);

    var output_port=CLKOUT_f("define");
    output_port.graphics.orig=new ScilabDouble([399,162]);
    output_port.graphics.sz=new ScilabDouble([20,20]);
    output_port.graphics.flip=new ScilabBoolean([true]);
    output_port.graphics.exprs=new ScilabString(["1"]);
    output_port.graphics.pein=new ScilabDouble([5]);
    output_port.model.ipar=new ScilabDouble([1]);
    //changed
    output_port.model.uid = new ScilabString([cnt]);
    output_port.doc = list(new ScilabString([cnt++]));

    var split=CLKSPLIT_f("define");
    split.graphics.orig=new ScilabDouble([380.71066,172]);
    split.graphics.pein=new ScilabDouble([3]);
    split.graphics.peout=new ScilabDouble([5],[6]);
    split.model.uid = new ScilabString([cnt]);
    split.doc = list(new ScilabString([cnt++]));
    //changed
    split.graphics.pein = new ScilabDouble([4]);

    var diagram=scicos_diagram();
    diagram.objs.push(output_port);
    diagram.objs.push(evtdly);
    diagram.objs.push(split);
    diagram.objs.push(scicos_link({
        xx: new ScilabDouble([340], [340],[380.71]),
        yy: new ScilabDouble([226.29],[172],[172]),
        ct: new ScilabDouble([5, -1]),
        from: new ScilabDouble([2, 1, 0]),
        to: new ScilabDouble([3, 1, 1])
    }));
    diagram.objs.push(scicos_link({
        xx: new ScilabDouble([380.71],[399]),
        yy: new ScilabDouble([172],[172]),
        ct: new ScilabDouble([5, -1]),
        from: new ScilabDouble([3, 1, 0]),
        to: new ScilabDouble([1, 1, 1])
    }));
    diagram.objs.push(scicos_link({
        xx: new ScilabDouble([380.71],[380.71],[340],[340]),
        yy: new ScilabDouble([172],[302],[302],[277.71]),
        ct: new ScilabDouble([5, -1]),
        from: new ScilabDouble([3, 2, 0]),
        to: new ScilabDouble([2, 1, 1])
    }));
    var x=scicos_block();
    this.x.gui=new ScilabString(["CLOCK_c"]);
    this.x.graphics.sz=new ScilabDouble([2,2]);
    this.x.graphics.gr_i=new ScilabString([]);
    this.x.graphics.peout=new ScilabDouble([0]);
    this.x.model.sim=new ScilabString(["csuper"]);
    this.x.model.evtout=new ScilabDouble([1]);
    this.x.model.blocktype=new ScilabString(["h"]);
    this.x.model.firing=new ScilabBoolean([false]);
    this.x.model.dep_ut=new ScilabBoolean([false, false]);
    this.x.model.rpar=diagram;

    var attributes = {
        style: "CLOCK_c",
        simulationFunctionName: "csuper",
        simulationFunctionType: "DEFAULT",
        blockType: "h",
        interfaceFunctionName: "CLOCK_c",
		blockName: "CLOCK_c",
		blockElementName: "CLOCK_c",
		realParameters : this.x.model.rpar,
		integerParameters : this.x.model.ipar,
		exprs : this.x.graphics.exprs
    };
    return new BasicBlock(attributes);
}

function EVTDLY_c() {
        var dt=0.1;
        var ff=0.0;
        var model=scicos_model();
        model.sim=list(new ScilabString(["evtdly4"]),new ScilabDouble([4]));
        model.evtin=new ScilabDouble([1]);
        model.evtout=new ScilabDouble([1]);
        model.rpar=new ScilabDouble([dt],[ff]);
        model.blocktype=new ScilabString(["d"]);
        model.firing=new ScilabDouble([ff]);
        model.dep_ut=new ScilabBoolean([false,false]);
        // changed
        model.outtyp = new ScilabDouble();
        var exprs=new ScilabString([dt],[ff]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EVTDLY_c\",sz(1),sz(2));"]);
        var block = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 3,2 -> 80
        block.graphics.style = new ScilabString(["EVTDLY_c"]);
        return block;
}

function CLKIN_f() {
    var model = scicos_model();
    var port = 1;

    model.sim = new ScilabString(["input"]);
	model.outtyp = new ScilabDouble(); //changed
    model.evtout = new ScilabDouble([-1]); // 1, 1 -> -1, -1
    model.ipar = new ScilabDouble([port]);
    model.blocktype = new ScilabString(["d"]);
    model.firing = new ScilabDouble([-1]);
    model.dep_ut = new ScilabBoolean([false, false]);

    var exprs = ScilabString(["" + port]);
    var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKIN_f\",sz(1),sz(2));"]);
    var block = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 1 -> 80

    block.graphics.style = new ScilabString(["CLKIN_f"]);
    return block;
}

function CLKOUT_f() {
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

function CLKSPLIT_f() {
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


function IFTHEL_f() {
    var model = scicos_model();
    model.sim = list(new ScilabString(["ifthel"]), new ScilabDouble([-1]));
    model.in = new ScilabDouble([1]);
    model.in2 = new ScilabDouble([1]);
    model.intyp = new ScilabDouble([-1]);
    model.evtin = new ScilabDouble([-1]);
	model.outtyp = new ScilabDouble(); // changed
    model.evtout = new ScilabDouble([-1], [-1]) // 1, 1 -> -1, -1 inverse
    model.blocktype = new ScilabString(["l"]);
    model.firing = new ScilabDouble([-1], [-1]); // inverse
    model.dep_ut = new ScilabBoolean([true, false]);
    model.nmode = new ScilabDouble([1]);
    model.nzcross = new ScilabDouble([1]);

    var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"IFTHEL_f\",sz(1),sz(2));"]);
    var exprs = new ScilabString(["1"], ["1"]); // value model.in, model.nmode inverse
	
	
    var block = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 3 -> 80
	block.graphics.in_implicit = new ScilabString(["E"]);
	// changed
	block.graphics.in_label = new ScilabString([""]);
    block.graphics.in_style = new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]);	
    block.graphics.style = new ScilabString(["IFTHEL_f"]);
    return block;
}


function BasicBlock() {
    var options = arguments[0] || new Object();
    this.angle = options.angle || "";
    this.blockType = options.blockType || "";
    this.connectable = options.connectable || "";
    this.dependsOnT = options.dependsOnT || "";
    this.dependsOnU = options.dependsOnU || "";
    this.id = options.id || "";
    this.interfaceFunctionName = options.interfaceFunctionName || "";
    this.ordering = options.ordering || "";
    this.parent = options.parent || "";
    this.simulationFunctionName = options.simulationFunctionName || "";
    this.simulationFunctionType = options.simulationFunctionType || "";
    this.style = options.style || "";
    this.value = options.value || "";
    this.vertex = options.vertex || "";
    this.visible = options.visible || "";
    this.exprs = options.exprs || "";
    this.realParameters = options.realParameters || "";
    this.integerParameters = options.integerParameters || new ScilabDouble();
    this.objectsParameters = list();
    this.nbZerosCrossing = new ScilabDouble([0]);
    this.nmode = new ScilabDouble([0]);
    this.oDState = list();
    this.equations = list();
	this.blockName = options.blockName || "";
    this.blockElementName = options.blockElementName || "";
}



function sci2exp(c) {
    if(c.length== 0)
        return "[]";
    else if (c.length == 1)
        return c.toString();
    else {
        var result = "[";
        for(var i = 0; i < c.length; i++) {
            if(typeof c[i].length === 'undefined') {
                result += c[i] + ",";
            }
            else {
                result += c[i][0] + ";";
            }
        }
        result = result.substring(0, result.length - 1);
        result += "]";
        return result;
    }
}


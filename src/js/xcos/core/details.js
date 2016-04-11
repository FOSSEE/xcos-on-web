// All arrays - separated by ',' or ';' or ' ' are taken to be 1 Dimensional
// Only during printing, their nomenclature will change
// Good read: http://javascript.info/tutorial/arguments#keyword-arguments

function scicos_block() {
	var options = arguments[0] || new Object();
	this.graphics = options.graphics || new scicos_graphics();
	this.model = options.model || new scicos_model();
	this.gui = options.gui || '';
	this.docs = options.docs || [];
}

function scicos_graphics() {
	var options = arguments[0] || new Object();
	this.orig = options.orig || [0, 0];
	this.sz = options.sz || [80, 80]; // Space and comma works the same!
	this.flip = options.flip || true;
	this.theta = options.theta || 0;
	this.exprs = options.exprs || [];
	this.pin = options.pin || [];
	this.pout = options.pout || [];
	this.pein = options.pein || [];
	this.peout = options.peout || [];
	this.gr_i = options.gr_i || [];
	this.id = options.id || '';
	this.in_implicit = options.in_implicit || [];
	this.out_implicit = options.out_implicit || ''; // There is only one!
	this.in_style = options.in_style || [];
	this.out_style = options.out_style || '';
	this.in_label = options.in_label || [];
	this.out_label = options.out_label || '';
	this.style = options.style || '';
}

function scicos_model() {
	var options = arguments[0] || new Object();
	this.sim = options.sim || '';
	this.in = options.in || [];
	this.in2 = options.in2 || [];
	this.intyp = options.intyp || [];
	this.out = options.out || [];
	this.out2 = options.out2 || [];
	this.outtyp = options.outtyp || 1;
	this.evtin = options.evtin || [];
	this.evtout = options.evtout || [];
	this.state = options.state || [];
	this.dstate = options.dstate || [];
	this.odstate = options.odstate || [];
	this.ipar = options.ipar || [];
	this.rpar = options.rpar || [];
	this.opar = options.opar || [];
	this.blocktype = options.blocktype || 'c';
	this.firing = options.firing || [];
	this.dep_ut = options.dep_ut || [false, false];
	this.label = options.label || ''; // If label not available, use image
	this.nzcross = options.nzcross || 0;
	this.nmode = options.nmode || 0;
	this.equations = options.equations || [];
	this.uid = options.uid || '';	
}

// This might also have to be overloaded
function scicos_diagram() {
	this.props = new scicos_params();
	this.objs = [];
	this.version = '';
	this.contrib = [];
}

// This might also have to be overloaded
function scicos_params() {
	this.wpar = [600, 450, 0, 0, 600, 450];
	this.titlex = 'Untitled';
	this.tf = 100000;
	this.tol = [Math.pow(10, -6), Math.pow(10, -6), Math.pow(10, -10), this.tf+1, 0, 1, 0];
	this.context = [];
	this.void1 = [];
	this.options = new default_options();
	this.void2 = [];
	this.void3 = [];
	this.doc = [];
}

// This might also have to be overloaded
function default_options() {
	var options = new Object();
    var col3d = [0.8, 0.8, 0.8];
    options['3D'] = [true, 33];
    options['Background'] = [8, 1]; // white,black
    options['Link'] = [1, 5]; // black,red
    options['ID'] = [[4, 1, 10, 1], [4, 1, 2, 1]];
    options['Cmap'] = col3d;
    return options;
}

function zeros(n){
	return new Array(n+1).join('0').split('').map(parseFloat);
}

function standard_define() {
	var sz = arguments[0];
	var model = arguments[1];
	var label = arguments[2];
	var gr_i = arguments[3] || [];
	
	var pin = [];
	var pout = [];
	var pein = [];
	var peout = [];
	
	var nin = model.in.length;
	if(nin > 0){
		pin = zeros(nin);
	}
	var nout = model.out.length;
	if(nout > 0){
		pout = zeros(nout);
	}
	var ncin = model.evtin.length;
	if(ncin > 0){
		pein = zeros(ncin);
	}
	var ncout = model.evtout.length;
	if(ncout > 0){
		peout = zeros(ncout);
	}
	gr_i = [gr_i, 8];
	if(gr_i[1] == []){
		gr_i[1] = 8;
	}
	if(gr_i[1] == 0){
		gr_i[1] = [];
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
	  gui: arguments.callee.caller.name
	};
	return new scicos_block(block_options);
}

function scicos_link (){
	this.xx = [];
	this.yy = [];
	this.id = '';
	this.thick = [0, 0];
	this.ct = [1, 1];
	this.from = [];
	this.to = [];
}

function ANDLOG_f(){
    var model = new scicos_model();
    model.sim = "andlog";
    model.out = [1];
    model.out2 = [1]; // null -> 1
    model.evtin = [-1,-1]; // 1, 1 -> -1, -1
    model.blocktype = "d";
    model.firing = [];
    model.dep_ut = [false, false];
    var gr_i = "xstringb(orig(1),orig(2),txt,sz(1),sz(2),'fill');";
    var block = new standard_define([80,80], model, 'LOGICAL<BR>AND', gr_i); // 3 -> 80
    
    // Style
    block.graphics.out_implicit = "E";
    block.graphics.out_style = "ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0";
    block.graphics.style = "ANDLOG_f";
    return block;
}


























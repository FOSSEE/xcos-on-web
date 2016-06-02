// Only during printing, their nomenclature will change
// Good read: http://javascript.info/tutorial/arguments#keyword-arguments
/*
Author name: ASP1234, Chhavi2208
*/
/*
function findModel() {
	var model = ["model", "sim", "in", "in2", "intyp", "out", "out2", "outtyp", "evtin", "evtout", "state", "dstate", "odstate", "rpar", "ipar", "opar", "blocktype", "firing", "dep_ut", "label", "nzcross", "nmode", "equations", "uid"];
	return model.indexOf(arguments[0]);
}

function findBlock() {
	var block = ["Block", "graphics", "model", "gui", "doc"];
	return block.indexOf(arguments[0]);

}

function findGraphics() {
	var graphics = ["graphics", "orig", "sz", "flip", "theta", "exprs", "pin", "pout", "pein", "peout", "gr_i", "id", "in_implicit", "out_implicit", "in_style", "out_style", "in_label", "out_label", "style"];
	return graphics.indexOf(arguments[0]);
}
*/
//graphics start
const orig=1;
const sz=2;
const flip=3;
const theta=4;
const exprs=5;
const pin=6;
const pout=7;
const pein=8;
const peout=9;
const gr_i=10;
const id=11;
const in_implicit=12;
const out_implicit=13;
const in_style=14;
const out_style=15;
const in_label=16;
const out_label=17;
const style=18;
// graphics end

//model begins
const sim=1;
const in1=2; //Can't use 'in' as const name -- keyword in javascript
const in2=3;
const intyp=4;
const out=5;
const out2=6;
const outtyp=7;
const evtin=8;
const evtout=9;
const state=10;
const dstate=11;
const odstate=12;
const rpar=13;
const ipar=14;
const opar=15;
const blocktype=16;
const firing=17;
const dep_ut=18;
const label=19;
const nzcross=20;
const nmode=21;
const equations=22;
const uid=23;
//model ends

//block begin
const graphics=1;
const model=2;
const gui=3;
const doc=4;
//block ends

//Diagram begins
const props=1;
const objs=2;
const version=3;
const contrib=4;
//Diagram ends

//Params begins
const wpar=1;
const title=2;
const tol=3;
const tf=4;
const context=5;
const void1=6;
const options=7;
const void2=8;
const void3=9;
//const doc=10;
//Params ends

//Default options begins
const D3=1; // 3D
const Background=2;
const Link=3;
const ID=4;
const Cmap=5;
//Default options ends

function scicos_block() {
	var options = arguments[0] || new Object();
	var i = 0;
	var l = 0;

	this.type = new ScilabString(new data("block", i++, l), new data("graphics", i++, l), new data("model", i++, l), new data("gui", i++, l), new data("docs", i++, l));
	this.graphics = options.graphics || new scicos_graphics();
	this.model = options.model || new scicos_model();
	this.gui = options.gui || new ScilabString();
	this.docs = options.docs || list();

	return mlist(this.type, this.graphics, this.model, this.gui, this.docs);
}

function scicos_graphics() {
	var options = arguments[0] || new Object();
	var i = 0;
	var l = 0;

	this.type = new ScilabString(new data("graphics", i++, l), new data("orig", i++, l), new data("sz", i++, l), new data("flip", i++, l), new data("theta", i++, l), new data("exprs", i++, l), new data("pin", i++, l), new data("pout", i++, l), new data("pein", i++, l), new data("peout", i++, l), new data("gr_i", i++, l), new data("id", i++, l), new data("in_implicit", i++, l), new data("out_implicit", i++, l), new data("in_style", i++, l), new data("out_style", i++, l), new data("in_label", i++, l), new data("out_label", i++, l), new data("style", i++, l));
	this.orig = options.orig || new ScilabDouble(new data(0, 0, 0), new data(0, 1, 0));
	this.sz = options.sz || new ScilabDouble(new data(80, 0, 0), new data(80, 1, 0));
	this.flip = options.flip || new ScilabBoolean(new data("true", 0, 0));
	this.theta = options.theta || new ScilabDouble(new data(0, 0, 0));
	this.exprs = options.exprs || new ScilabDouble();
	this.pin = options.pin || new ScilabDouble();;
	this.pout = options.pout || new ScilabDouble();;
	this.pein = options.pein || new ScilabDouble();;
	this.peout = options.peout || new ScilabDouble();;
	this.gr_i = options.gr_i || new ScilabString();
	this.id = options.id || new ScilabString(new data("", 0, 0));
	this.in_implicit = options.in_implicit || new ScilabDouble();
	this.out_implicit = options.out_implicit || new ScilabDouble();
	this.in_style = options.in_style || new ScilabDouble();
	this.out_style = options.out_style || new ScilabDouble();
	this.in_label = options.in_label || new ScilabDouble();
	this.out_label = options.out_label || new ScilabDouble();
	this.style = options.style || new ScilabString();

	return mlist(this.type, this.orig, this.sz, this.flip, this.theta, this.exprs, this.pin, this.pout, this.pein, this.peout, this.gr_i, this.id, this.in_implicit, this.out_implicit, this.in_style, this.out_style, this.in_label, this.out_label, this.style);


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

	var nin = model[in1].length;
	if (nin > 0) {
		pin = zeros(nin);
	}
	var nout = model[out].length;
	if (nout > 0) {
		pout = zeros(nout);
	}
	var ncin = model[evtin].length;
	if (ncin > 0) {
		pein = zeros(ncin);
	}
	var ncout = model[evtout].length;
	if (ncout > 0) {
		peout = zeros(ncout);
	}

	gr_i = list(gr_i, new ScilabDouble(new data(8, 0, 0)));
	
	if (gr_i[1] == []) {
		gr_i[1] = new ScilabDouble(new data(8, 0, 0));
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
		gui: new ScilabString(new data(arguments.callee.caller.name, 0, 0))
	};
	return new scicos_block(block_options);
}

function ScilabString() {
	var i = 0;

	for (i = 0; i < arguments.length; i++)
		this['data' + i] = arguments[i];
	if(arguments.length>1)
	{
		if(arguments[arguments.length-1].line>0)
		{
			this.height=arguments.length;
			this.width=arguments[0].column+1;
		}
		else
		{
			this.height = arguments[0].line+1;
			this.width = arguments.length;
		}
	}

}

function ScilabBoolean() {
	var i = 0;

	for (i = 0; i < arguments.length; i++)
		this['data' + i] = arguments[i];
	if(arguments.length>1)
	{
		if(arguments[arguments.length-1].line>0)
		{
			this.height=arguments.length;
			this.width=arguments[0].column+1;
		}
		else
		{
			this.height = arguments[0].line+1;
			this.width = arguments.length;
		}
	}
}

function ScilabDouble() {
	var i = 0;

	for (i = 0; i < arguments.length; i++)
		this['data' + i] = arguments[i]
	if(arguments.length>1)
	{
		if(arguments[arguments.length-1].line>0) //@ASP1234 Inverse Array
		{
			this.height=arguments.length;
			this.width=arguments[0].column+1;
		}
		else									//@ASP1234 Normal Array
		{
			this.height = arguments[0].line+1;
			this.width = arguments.length;
		}
	}
}

function isNumber(obj) {
	if(obj==="")
		return false;
	if(typeof obj == "string")
		return false;
		return !isNaN(obj);
}

function data() {
	if (isNumber(arguments[0])) {
		this.column = arguments[1];
		this.line = arguments[2];
		this.realPart = arguments[0];
	}

	else {
		this.column = arguments[1];
		this.line = arguments[2];
		this.value = arguments[0];
	}

}

function list() {
	this.ScilabList = [];
	var i = 0;

	for (i = 0; i < arguments.length; i++)
		this.ScilabList.push(arguments[i]);

	this.ScilabList.scilabClass = "ScilabList";

	return this.ScilabList;

}

function mlist() {
	this.ScilabMList = [];
	var i = 0;

	for (i = 0; i < arguments.length; i++)
		this.ScilabMList.push(arguments[i]);
		
	this.ScilabMList.varName="";
	this.ScilabMList.scilabClass = "ScilabMList";

	return this.ScilabMList;

}

function tlist() {
	this.ScilabTList = [];
	var i = 0;

	for (i = 0; i < arguments.length; i++)
		this.ScilabTList.push(arguments[i]);

	this.ScilabTList.scilabClass = "ScilabTList";

	return this.ScilabTList;

}


function scicos_model() {
	var options = arguments[0] || new Object();
	var i = 0;
	var l = 0

	this.type = new ScilabString(new data("model", i++, l), new data("sim", i++, l), new data("in", i++, l), new data("in2", i++, l), new data("intyp", i++, l), new data("out", i++, l), new data("out2", i++, l), new data("outtyp", i++, l), new data("evtin", i++, l), new data("evtout", i++, l), new data("state", i++, l), new data("dstate", i++, l), new data("odstate", i++, l), new data("rpar", i++, l), new data("ipar", i++, l), new data("opar", i++, l), new data("blocktype", i++, l), new data("firing", i++, l), new data("dep_ut", i++, l), new data("label", i++, l), new data("nzcross", i++, l), new data("nmode", i++, l), new data("equations", i++, l), new data("uid", i++, l));
	this.sim = options.sim || new ScilabString();
	this.in = options.in || new ScilabDouble();
	this.in2 = options.in2 || new ScilabDouble();
	this.intyp = options.intyp || new ScilabDouble();//new data(1, 0, 0)
	this.out = options.out || new ScilabDouble();
	this.out2 = options.out2 || new ScilabDouble();
	this.outtyp = options.outtyp || new ScilabDouble(new data(1, 0, 0));
	this.evtin = options.evtin || new ScilabDouble();
	this.evtout = options.evtout || new ScilabDouble();
	this.state = options.state || new ScilabDouble();
	this.dstate = options.dstate || new ScilabDouble();
	this.odstate = options.odstate || list();
	this.ipar = options.ipar || new ScilabDouble();
	this.rpar = options.rpar || new ScilabDouble();
	this.opar = options.opar || list();//new ScilabDouble();
	this.blocktype = options.blocktype || new ScilabString(new data('c', 0, 0));
	this.firing = options.firing || new ScilabDouble();
	this.dep_ut = options.dep_ut || new ScilabBoolean(new data('false', 0, 0), new data('false', 1, 0));
	this.label = options.label || new ScilabString(new data("",0,0)); // If label not available, use image
	this.nzcross = options.nzcross || new ScilabDouble(new data(0, 0, 0));
	this.nmode = options.nmode || new ScilabDouble(new data(0, 0, 0));;
	this.equations = options.equations || list();
	this.uid = options.uid || new ScilabString();

	return mlist(this.type, this.sim, this.in, this.in2, this.intyp, this.out, this.out2, this.outtyp, this.evtin, this.evtout, this.state, this.dstate, this.odstate, this.ipar, this.rpar, this.opar, this.blocktype, this.firing, this.dep_ut, this.label, this.nzcross, this.nmode, this.equations, this.uid);
}



function scicos_diagram() {
	
	var options = arguments[0] || new Object();
	var i = 0;
	var l = 0;
	
	this.type2=new ScilabString(new data("diagram",i++,l),new data("props",i++,l),new data("objs",i++,l),new data("version",i++,l),new data("contrib",i++,l));
	this.props = options.props|| scicos_params();
	this.objs = options.objs || list();
	this.version = options.version || new ScilabString(new data("",0,0));
	this.contrib = options.contrib || list();
	
	return mlist(this.type2,this.props,this.objs,this.version,this.contrib);
}


function scicos_params() {
	
	var options = arguments[0] || new Object();
	var i = 0;
	var l = 0;
	
	this.type=new ScilabString(new data("params",i++,l),new data("wpar",i++,l),new data("title",i++,l),new data("tol",i++,l),new data("tf",i++,l),new data("context",i++,l),new data("void1",i++,l),new data("options",i++,l),new data("void2",i++,l),new data("void3",i++,l),new data("doc",i++,l));
	this.wpar = options.wpar || new ScilabDouble(new data(600,0,0),new data(450,1,0),new data(0,2,0),new data(0,3,0),new data(600,4,0),new data(450,5,0));
	this.titlex = options.title||options.Title||new ScilabString(new data("Untitled",0,0));
	this.tf = options.tf|| new ScilabDouble(new data(100000,0,0));
	this.tol = options.tol|| new ScilabDouble(new data(Math.pow(10, -6),0,0),new data(Math.pow(10, -6),0,1),new data(Math.pow(10, -10),0,2),new data(100001,0,3),new data(0,0,4),new data(1,0,5),new data(0,0,6));
	this.context = options.context|| new ScilabString(new data("",0,0));
	this.void1 = new ScilabDouble();
	this.options = options.options||new default_options();
	this.void2 = new ScilabDouble();
	this.void3 = new ScilabDouble();
	this.doc = options.doc || list();
	
	
	return tlist(this.type,this.wpar,this.titlex,this.tol,this.tf,this.context,this.void1,this.options,this.void2,this.void3,this.doc);
	
}

// This might also have to be overloaded
function default_options() {
	
	var i=0;
	var l=0;
	
	this.type=new ScilabString(new data("scsopt",i++,l),new data("3D",i++,l),new data("Background",i++,l),new data("Link",i++,l),new data("ID",i++,l),new data("Cmap",i++,l));
	this.D3=list(new ScilabBoolean(new data("true",0,0)),new ScilabDouble(new data(33,0,0)));
	this.Background=new ScilabDouble(new data(8,0,0),new data(1,1,0));
	this.Link=new ScilabDouble(new data(1,0,0),new data(5,1,0));
	this.ID=list(new ScilabDouble(new data(4,0,0),new data(1,1,0),new data(10,2,0),new data(1,3,0)),new ScilabDouble(new data(4,0,0),new data(1,1,0),new data(2,2,0),new data(1,3,0)));
	this.Cmap=new ScilabDouble(new data(0.8,0,0),new data(0.8,1,0),new data(0.8,2,0));
	
	return tlist(this.type,this.D3,this.Background,this.Link,this.ID,this.Cmap);
}
//Returns ScilabDouble which contains a list with size =n and all values=0
function zeros(n) {
	var arg=new  Array(n + 1).join('0').split('').map(parseFloat);
	var port = new ScilabDouble();
	var i = 0;

	for (i = 0; i < arg[0].length; i++)
		port.list.push(new data(arg[0][i], i, 0));

	return port;
}


function scicos_link() {
	var options=arguments[0];
	var i=0;
	var l=0;
	this.type = new ScilabString(new data("Link", i++, l),new data("xx", i++, l),new data("yy", i++, l),new data("id", i++, l),new data("thick", i++, l),new data("ct", i++, l),new data("from", i++, l),new data("to", i++, l));
	this.xx = options.xx || new ScilabDouble(); //inverse array
	this.yy = options.yy || new ScilabDouble(); //inverse array
	this.id = options.id || new ScilabString();
	this.thick =options.thick || new ScilabDouble(new data(0,0,0),new data(0,1,0));
	this.ct = options.ct || new ScilabDouble(new data(1,0,0), new data(1,1,0));
	this.from = options.from || new ScilabDouble();
	this.to = options.xx || new ScilabDouble();
	
	return mlist(this.type,this.xx,this.yy,this.id,this.thick,this.ct,this.from,this.to);
}

function CLKIN_f() {
	var model = scicos_model();
	var port=1;
	
	model[sim] = new ScilabString(new data('input', 0, 0));
	model[evtout] = new ScilabDouble(); // 1, 1 -> -1, -1
	model[ipar]=new ScilabDouble(new data(port,0,0));
	model[blocktype] = new ScilabString(new data('d', 0, 0));
	model[firing] = new ScilabDouble(new data(-1,0,0));
	model[dep_ut] = new ScilabBoolean(new data('false', 0, 0), new data('false', 1, 0));
	
	var exprs=ScilabString(new data(""+port,0,0));
	var gr_i = new ScilabString(new data("xstringb(orig(1),orig(2),\"CLKIN_f\",sz(1),sz(2));", 0, 0));
	var block = new standard_define(new ScilabDouble(new data(80, 0, 0), new data(80, 1, 0)), model,exprs,gr_i); // 1 -> 80
	
	block[graphics][style] = new ScilabString(new data("CLKIN_f", 0, 0));
	return block
}

function CLKOUT_f() {
	var model = scicos_model();
	var port=1;
	
	model[sim] = new ScilabString(new data('output', 0, 0));
	model[evtin] = new ScilabDouble(new data(-1,0,0)); // 1, 1 -> -1, -1
	model[ipar]=new ScilabDouble(new data(port,0,0));
	model[blocktype] = new ScilabString(new data('d', 0, 0));
	model[firing] = new ScilabDouble();
	model[dep_ut] = new ScilabBoolean(new data('false', 0, 0), new data('false', 1, 0));
	
	var exprs=ScilabString(new data(""+port,0,0));
	var gr_i = new ScilabString(new data("xstringb(orig(1),orig(2),\"CLKOUT_f\",sz(1),sz(2));", 0, 0));
	var block = new standard_define(new ScilabDouble(new data(80, 0, 0), new data(80, 1, 0)), model,exprs,gr_i); // 1 -> 80
	
	block[graphics][style] = new ScilabString(new data("CLKOUT_f", 0, 0));
	return block
}


function IFTHEL_f() {
	var model = scicos_model();
	model[sim] = list(new ScilabString(new data('ifthel', 0, 0)),new ScilabDouble(new data(-1,0,0)));
	model[in1]=new ScilabDouble(new data(1,0,0));
	model[in2]=new ScilabDouble(new data(1,0,0));
	model[intyp]=new ScilabDouble(new data(-1,0,0));
	model[evtin]=new ScilabDouble(new data(-1,0,0));
	model[evtout] = new ScilabDouble(new data(-1, 0, 0), new data(-1, 0, 1)) // 1, 1 -> -1, -1 inverse
	model[blocktype] = new ScilabString(new data('l', 0, 0));
	model[firing] = new ScilabDouble(new data(-1, 0, 0), new data(-1, 0, 1)); // inverse
	model[dep_ut] = new ScilabBoolean(new data('true', 0, 0), new data('false', 1, 0));
	model[nmode] = new ScilabDouble(new data(1,0,0));
	model[nzcross] = new ScilabDouble(new data(1,0,0));
	
	var gr_i = new ScilabString(new data("xstringb(orig(1),orig(2),\"IFTHEL_f\",sz(1),sz(2));", 0, 0));
	var exprs=new ScilabString(new data("1",0,0),new data("1",0,1)); //value model.in, model.nmode inverse
	var block = new standard_define(new ScilabDouble(new data(80, 0, 0), new data(80, 1, 0)), model, exprs, gr_i); // 3 -> 80
	block[graphics][style] = new ScilabString(new data("IFTHEL_f", 0, 0));
	return block;
}



function CLKSPLIT_f() {
	var model = scicos_model();
	model[sim] = new ScilabString(new data('split', 0, 0));
	model[evtin]=new ScilabDouble(new data(-1,0,0));
	model[evtout] = new ScilabDouble(new data(-1, 0, 0), new data(-1, 0, 1)) // 1, 1 -> -1, -1 inverse
	model[blocktype] = new ScilabString(new data('d', 0, 0));
	model[firing] = new ScilabDouble(new data(-1, 0, 0), new data(-1, 0, 1)); // inverse
	model[dep_ut] = new ScilabBoolean(new data('true', 0, 0), new data('false', 1, 0));
	
	var gr_i = new ScilabString(new data("xstringb(orig(1),orig(2),\"CLKSPLIT_f\",sz(1),sz(2));", 0, 0));
	
	var block = new standard_define(new ScilabDouble(new data(80, 0, 0), new data(80, 1, 0)), model, new ScilabDouble(), gr_i); // 1 -> 80
	block[graphics][style] = new ScilabString(new data("CLKSPLIT_f", 0, 0));
	return block;
}


function ANDLOG_f() {
	var model = scicos_model();
	model[sim] = new ScilabString(new data('andlog', 0, 0));
	model[out] = new ScilabDouble(new data(1, 0, 0));
	model[out2] = new ScilabDouble(new data(1, 0, 0)); // null -> 1
	model[evtin] = new ScilabDouble(new data(-1, 0, 0), new data(-1, 1, 0)) // 1, 1 -> -1, -1
	model[blocktype] = new ScilabString(new data('d', 0, 0));
	model[firing] = new ScilabDouble();
	model[dep_ut] = new ScilabBoolean(new data('false', 0, 0), new data('false', 1, 0));

	var gr_i = new ScilabString(new data("xstringb(orig(1),orig(2),\"ANDLOG_f\",sz(1),sz(2));", 0, 0));
	var block = new standard_define(new ScilabDouble(new data(80, 0, 0), new data(80, 1, 0)), model, new ScilabDouble(), gr_i); // 3 -> 80
	
	// Style
	block[graphics][out_implicit] = new ScilabString(new data("E",0,0));
	//block.graphics.out_style = "ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0";
	block[graphics][style] = new ScilabString(new data("ANDLOG_f", 0, 0));
	return block;
}

function BasicBlock()
{
	switch(arguments[0])
	{
		case "ANDBLK":
			var attributes = {
				style: "ANDBLK",
				simulationFunctionName: "csuper",
				simulationFunctionType: "DEFAULT",
				blockType: "h",
				interfaceFunctionName: "ANDBLK"
			};
			break;
		case "CONST_m":
			var attributes = {
				style: "CONST_m",
				simulationFunctionName: "cstblk4",
				simulationFunctionType: "C_OR_FORTRAN",
				blockType: "d",
				interfaceFunctionName: "CONST_m"
			};
			break;
	}
	var options = attributes || new Object();
	
	this.angle=options.angle||"";
	this.blockType=options.blockType||"";
	this.connectable=options.connectable||"";
	this.dependsOnT=options.dependsOnT||"";
	this.dependsOnU=options.dependsOnU||"";
	this.id=options.id||"";
	this.interfaceFunctionName=options.interfaceFunctionName||"";
	this.ordering=options.ordering||"";
	this.parent=options.parent||"";
	this.simulationFunctionName=options.simulationFunctionName||"";
	this.simulationFunctionType=options.simulationFunctionType||"";
	this.style=options.style||"";
	this.value=options.value||"";
	this.vertex=options.vertex||"";
	this.visible=options.visible||"";
	
	switch(arguments[0])
	{
		case "ANDBLK":
			this.realParameters=ANDBLK();
			break;
		case "CONST_m":
			this.realParameters=CONST_m("define");
			break;
	}
}

function ANDBLK() {
	
	var andlog=ANDLOG_f("define");
	andlog[graphics][orig]=new ScilabDouble(new data(194,0,0),new data(133,1,0));
	andlog[graphics][sz]=new ScilabDouble(new data(60,0,0),new data(60,1,0));
	andlog[graphics][flip]=new ScilabBoolean(new data("true",0,0));
	andlog[graphics][pout]=new ScilabDouble(new data(9,0,0));
	andlog[graphics][pein]=new ScilabDouble(new data(4,0,0),new data(11,0,1));
	
	var input_port1=CLKIN_f("define");
	input_port1[graphics][orig]=new ScilabDouble(new data(149,0,0),new data(287,1,0));
	input_port1[graphics][sz]=new ScilabDouble(new data(20,0,0),new data(20,1,0));
	input_port1[graphics][flip]=new ScilabBoolean(new data("true",0,0));
	input_port1[graphics][exprs]=new ScilabString(new data("1",0,0));
	input_port1[graphics][peout]=new ScilabDouble(new data(4,0,0));
	input_port1[graphics][ipar]=new ScilabDouble(new data(1,0,0));
	
	var output_port=CLKOUT_f("define");
	output_port[graphics][orig]=new ScilabDouble(new data(450,0,0),new data(83,1,0));
	output_port[graphics][sz]=new ScilabDouble(new data(20,0,0),new data(20,1,0));
	output_port[graphics][flip]=new ScilabBoolean(new data("true",0,0));
	output_port[graphics][exprs]=new ScilabString(new data("1",0,0));
	output_port[graphics][pein]=new ScilabDouble(new data(8,0,0));
	output_port[graphics][ipar]=new ScilabDouble(new data(1,0,0));
	
	var input_port2=CLKIN_f("define");
	input_port2[graphics][orig]=new ScilabDouble(new data(141,0,0),new data(330,1,0));
	input_port2[graphics][sz]=new ScilabDouble(new data(20,0,0),new data(20,1,0));
	input_port2[graphics][flip]=new ScilabBoolean(new data("true",0,0));
	input_port2[graphics][exprs]=new ScilabString(new data("2",0,0));
	input_port2[graphics][peout]=new ScilabDouble(new data(6,0,0));
	input_port2[graphics][ipar]=new ScilabDouble(new data(2,0,0));
	
	var ifthel=IFTHEL_f("define");
	ifthel[graphics][orig]=new ScilabDouble(new data(331,0,0),new data(137,1,0));
	ifthel[graphics][sz]=new ScilabDouble(new data(60,0,0),new data(60,1,0));
	ifthel[graphics][flip]=new ScilabBoolean(new data("true",0,0));
	ifthel[graphics][pin]=new ScilabDouble(new data(9,0,0));
	ifthel[graphics][pein]=new ScilabDouble(new data(12,0,0));
	ifthel[graphics][peout]=new ScilabDouble(new data(8,0,0),new data(0,0,1));
	
	var split=CLKSPLIT_f("define");
	split[graphics][orig]=new ScilabDouble(new data(234,0,0),new data(275.78348,1,0));
	split[graphics][pein]=new ScilabDouble(new data(6,0,0));
	split[graphics][peout]=new ScilabDouble(new data(11,0,0),new data(12,1,0));
	
	var diagram=scicos_diagram();
	diagram[objs].push(andlog);
	diagram[objs].push(input_port1);
	diagram[objs].push(output_port);
	var scicos_link1={xx : new ScilabDouble(new data(169,0,0),new data(214,1,0),new data(214,2,0)), 
					  yy : new ScilabDouble(new data(297,0,0),new data(297,1,0),new data(198.71,2,0)),
					  ct : new ScilabDouble(new data(5,0,0),new data(-1,1,0)),
					  from : new ScilabDouble(new data(2,0,0),new data(1,1,0)),
					  to : new ScilabDouble(new data(1,0,0),new data(1,1,0))
	};
	diagram[objs].push(scicos_link(scicos_link1));
	diagram[objs].push(input_port2);
	var scicos_link2={xx : new ScilabDouble(new data(161,0,0),new data(234,1,0),new data(234,2,0)), 
					  yy : new ScilabDouble(new data(340,0,0),new data(340,1,0),new data(275.78,2,0)),
					  ct : new ScilabDouble(new data(5,0,0),new data(-1,1,0)),
					  from : new ScilabDouble(new data(5,0,0),new data(1,1,0)),
					  to : new ScilabDouble(new data(10,0,0),new data(1,1,0))
	};
	diagram[objs].push(scicos_link(scicos_link2));
	diagram[objs].push(ifthel);
	var scicos_link3={xx : new ScilabDouble(new data(351,0,0),new data(351,1,0),new data(450,2,0)), 
					  yy : new ScilabDouble(new data(131.29,0,0),new data(93,1,0),new data(93,2,0)),
					  ct : new ScilabDouble(new data(5,0,0),new data(-1,1,0)),
					  from : new ScilabDouble(new data(7,0,0),new data(1,1,0)),
					  to : new ScilabDouble(new data(3,0,0),new data(1,1,0))
	};
	diagram[objs].push(scicos_link(scicos_link3));
	var scicos_link4={xx : new ScilabDouble(new data(262.57,0,0),new data(322.43,1,0)), 
					  yy : new ScilabDouble(new data(163,0,0),new data(167,1,0)),
					  ct : new ScilabDouble(new data(1,0,0),new data(1,1,0)),
					  from : new ScilabDouble(new data(1,0,0),new data(1,1,0)),
					  to : new ScilabDouble(new data(7,0,0),new data(1,1,0))
	};
	diagram[objs].push(scicos_link(scicos_link4));
	diagram[objs].push(split);
	var scicos_link5={xx : new ScilabDouble(new data(234,0,0),new data(234,1,0)), 
					  yy : new ScilabDouble(new data(275.78,0,0),new data(198.71,1,0)),
					  ct : new ScilabDouble(new data(5,0,0),new data(-1,1,0)),
					  from : new ScilabDouble(new data(10,0,0),new data(1,1,0)),
					  to : new ScilabDouble(new data(1,0,0),new data(2,1,0))
	};
	diagram[objs].push(scicos_link(scicos_link5));
	var scicos_link6={xx : new ScilabDouble(new data(234,0,0),new data(361,1,0),new data(361,2,0)), 
					  yy : new ScilabDouble(new data(275.78,0,0),new data(275.78,1,0),new data(202.71,2,0)),
					  ct : new ScilabDouble(new data(5,0,0),new data(-1,1,0)),
					  from : new ScilabDouble(new data(10,0,0),new data(2,1,0)),
					  to : new ScilabDouble(new data(7,0,0),new data(1,1,0))
	};
	diagram[objs].push(scicos_link(scicos_link6));
	
	
	var x=scicos_block();
	x[gui]=new ScilabString(new data("ANDBLK",0,0));
	x[graphics][sz]= new ScilabDouble(new data(2,0,0),new data(2,1,0));
	x[graphics][gr_i]=new ScilabDouble();
	x[graphics][pein]=new ScilabDouble(new data(0,0,0),new data(0,1,0));
	x[graphics][peout]=new ScilabDouble(new data(0,0,0));
	x[model][sim]= new ScilabString(new data("csuper",0,0));
	x[model][evtin]=new ScilabDouble(new data(1,0,0), new data(1,1,0));
	x[model][evtout]=new ScilabDouble(new data(1,0,0));
	x[model][blocktype]= new ScilabString(new data("h",0,0));
	x[model][firing]= new ScilabBoolean(new data("false",0,0));
	x[model][dep_ut]= new ScilabBoolean(new data("false",0,0),new data("false",1,0));
	x[model][rpar]=diagram;
	return x;
}

function sci2exp(c)
{
	if(c.length==1)
	return new ScilabString(new data(c.toString(),0,0));
	else
	return new ScilabString(new data("["+c.toString()+"]",0,0));
}


function C()
{
	var i=0;
	var arr=[]
	for(i=0;i<arguments[0].length;i++)
	{
		arr.push(new data(arguments[0][i],i,0));
	}
	return new ScilabDouble(...arr);
}

function CONST_m()
{
	var c=[1];
	switch(arguments[0])
	{
		
		case "get":
			var array=["Constant_Value"];
			return array;
		case "set":
			c=new Array(arguments[1].Constant_Value);
			console.log(c);
			break;
		case "define":
			console.log(c);
			var model = scicos_model();
			model[sim] = list(new ScilabString(new data('cstblk4', 0, 0)),new ScilabDouble(new data(4,0,0)));
			model[in1]=new ScilabDouble();
			model[out]=new ScilabDouble(new data(c.length,0,0));
			model[in2]=new ScilabDouble();
			model[out2]=new ScilabDouble(new data(c.length,0,0));
			model[rpar]=C(c);
			model[opar]=list();
			model[blocktype] = new ScilabString(new data('d', 0, 0));
			model[dep_ut] = new ScilabBoolean(new data('false', 0, 0), new data('false', 1, 0));
			
			var gr_i = new ScilabString(new data("xstringb(orig(1),orig(2),\"CONST_m\",sz(1),sz(2));", 0, 0));
			var exprs=sci2exp(c);
			var block = new standard_define(new ScilabDouble(new data(80, 0, 0), new data(80, 1, 0)), model, exprs, gr_i); // 1 -> 80
			block[graphics][style] = new ScilabString(new data("CONST_m", 0, 0));
			return block;
	}
}
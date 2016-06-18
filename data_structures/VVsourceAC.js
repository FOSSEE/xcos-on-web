function VVsourceAC () {


	var model = scicos_model();
	model.in = new ScilabDouble([1],[1]);
	model.out = new ScilabDouble([1]);

	var VA = 220;

	var FR = 50;
	model.rpar = new ScilabDouble([FR]);
	model.sim = new ScilabString(["VVsourceAC"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["VVsourceAC"]);
	mo.inputs = new ScilabString(["p","VA"]);
	mo.outputs = new ScilabString(["n"]);
	mo.parameters=list(["f"],list(FR));
	model.equations=mo;

	var exprs = [FR.toString()];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I","E"]);
	this.x.graphics.out_implicit = new ScilabString(["I"]);
}

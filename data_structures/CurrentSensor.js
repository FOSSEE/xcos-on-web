function CurrentSensor () {


	var model = scicos_model();
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1],[,1]);
	model.sim = new ScilabString(["CurrentSensor"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["CurrentSensor"]);
	mo.inputs = new ScilabString(["p"]);
	mo.outputs = new ScilabString(["n";"i"]);
	model.equations=mo;

	var exprs = [];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I"]);
	this.x.graphics.out_implicit = new ScilabString(["I";"E"]);
}

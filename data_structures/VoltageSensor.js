function VoltageSensor () {


	var model = scicos_model();
	model.in1 = new ScilabDouble([1]);
	model.out = new ScilabDouble([1],[,1]);
	model.sim = new ScilabString(["VoltageSensor"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["VoltageSensor"]);
	mo.inputs = new ScilabString(["p"]);
	mo.outputs = new ScilabString(["n";"v"]);
	model.equations=mo;

	var exprs = [];

	var gr_i = [];
	this.x=standard_define([2,2],model,exprs,list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I"]);
	this.x.graphics.out_implicit = new ScilabString(["I";"E"]);
	return new VoltageSensorBlock(this.x)
}

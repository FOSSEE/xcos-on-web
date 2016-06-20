function PotentialSensor () {


	var model = scicos_model();
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.rpar = new ScilabDouble();
	model.sim = new ScilabString(["PotentialSensor"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["PotentialSensor"]);
	mo.inputs = new ScilabString(["p"]);
	mo.outputs = new ScilabString(["v"]);
	model.equations=mo;

	var gr_i = [];
	this.x=standard_define([2,2],model,"",list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I"]);
	this.x.graphics.out_implicit = new ScilabString(["E"]);
	return new  BasicBlock (this.x)
}

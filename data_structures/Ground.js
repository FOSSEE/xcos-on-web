function Ground () {


	var model = scicos_model();
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble();
	model.sim = new ScilabString(["Ground"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["Ground"]);
	mo.inputs = new ScilabString(["p"]);
	model.equations=mo;

	var exprs = "";

	var gr_i = [];
	this.x=standard_define([1,1],model,exprs,list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I"]);
	this.x.graphics.out_implicit = new ScilabString(["I"]);
	return new  GroundBlock (this.x)
}

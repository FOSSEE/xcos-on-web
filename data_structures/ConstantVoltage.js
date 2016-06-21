function ConstantVoltage () {


	var V = 0.01;

	var model = scicos_model();
	model.rpar=new ScilabDouble([V]);
	model.in1 = new ScilabDouble([1],[model.out=1]);
	model.sim = new ScilabString(["ConstantVoltage"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var mo = modelica();
	mo.model = new ScilabString(["ConstantVoltage"]);
	mo.inputs = new ScilabString(["p"]);
	mo.outputs = new ScilabString(["n"]);
	mo.parameters=list(new ScilabString(["V"]),list(V));
	model.equations=mo;

	var exprs = string(V);

	var gr_i = [];
	this.x=standard_define([1.5,1.1],model,exprs,list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I"]);
	this.x.graphics.out_implicit = new ScilabString(["I"]);
	return new BasicBlock(this.x)
}

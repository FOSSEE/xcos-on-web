function VariableResistor () {


	var model = scicos_model();
	model.sim = new ScilabString(["VariableResistor"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["VariableResistor"]);
	mo.inputs = new ScilabString(["p","R"]);
	mo.outputs = new ScilabString(["n"]);
	model.equations=mo;
	model.in=ones(size(mo.inputs,"*"),1);
	model.out=ones(size(mo.outputs,"*"),1);

	var exprs = [];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I","E"]);
	this.x.graphics.out_implicit = new ScilabString(["I"]);
}

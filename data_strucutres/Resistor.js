function Resistor () {


	var model = scicos_model();

	var R = 0.01;
	model.rpar=new ScilabDouble([R]);
	model.sim = new ScilabString(["resistor"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["Resistor"]);
	mo.inputs = new ScilabString(["p"]);
	mo.outputs = new ScilabString(["n"]);
	mo.parameters=list("R",list(R));
	model.equations=mo;
	model.in=ones(size(mo.inputs,"*"),1);
	model.out=ones(size(mo.outputs,"*"),1);

	var exprs = R.toString();

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,1]),model,exprs,list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I"]);
	this.x.graphics.out_implicit = new ScilabString(["I"]);
}

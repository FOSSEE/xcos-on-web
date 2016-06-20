function Switch () {


	var model = scicos_model();

	var Ron = 0.01;

	var Roff = 1e5;

	var S = ["Ron";"Roff"];

	var Z = eval(S);
	model.sim = new ScilabString(["Switch"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model=model.sim;
	mo.inputs = new ScilabString(["p";"inp"]);
	mo.outputs = new ScilabString(["n"]);
	mo.parameters=list(S,Z);
	model.equations=mo;
	model.in=ones(size(mo.inputs,"*"),1);
	model.out=ones(size(mo.outputs,"*"),1);
	model.rpar=Z;

	var exprs = string(Z);

	var gr_i = [];
	this.x=standard_define([2,2],model,exprs,list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I";"E"]);
	this.x.graphics.out_implicit = new ScilabString(["I"]);
	return new  BasicBlock (this.x)
}

function OpAmp () {


	var S = [];

	var Z = [];

	var model = scicos_model();
	model.sim = new ScilabString(["OpAmp"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model=model.sim;
	mo.inputs = new ScilabString(["in_p";"in_n"]);
	mo.outputs = new ScilabString(["out"]);
	mo.parameters=list(S,Z);
	model.equations=mo;
	model.in=ones(size(mo.inputs,"*"),1);
	model.out=ones(size(mo.outputs,"*"),1);
	model.rpar=Z;

	var exprs = Z.toString();

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,5]),model,exprs,gr_i);
	this.x.graphics.in_implicit = new ScilabString(["I";"I"]);
	this.x.graphics.out_implicit = new ScilabString(["I"]);
}

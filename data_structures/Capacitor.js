function Capacitor () {


	var model = scicos_model();

	var C = 0.01,v=0;
	model.rpar = new ScilabDouble([C],[v]);
	model.sim = new ScilabString(["Capacitor"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["Capacitor"]);
	mo.inputs = new ScilabString(["p"]);
	mo.outputs = new ScilabString(["n"]);
	mo.parameters=list(new ScilabString(["C"),new ScilabString(["v"]]),list(C,v),new ScilabDouble([0),new ScilabDouble([1]]));
	model.equations=mo;
	model.in=ones(size(mo.inputs,"*"),1);
	model.out=ones(size(mo.outputs,"*"),1);

	var exprs = string([C],[v]);

	var gr_i = [];
	this.x=standard_define([2,1.1],model,exprs,list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I"]);
	this.x.graphics.out_implicit = new ScilabString(["I"]);
	return new  BasicBlock (this.x)
}

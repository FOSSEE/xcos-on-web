function Diode () {


	var Ids = 1.e-6;

	var Vt = 0.04;

	var Maxexp = 15;

	var R = 1.e8;

	var model = scicos_model();
	model.rpar = new ScilabDouble([Ids],[Vt],[Maxexp],[R]);
	model.in1 = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.sim = new ScilabString(["Diode"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["Diode"]);
	mo.inputs = new ScilabString(["p"]);
	mo.outputs = new ScilabString(["n"]);
	mo.parameters=list(new ScilabString(["Ids"),new ScilabString(["Vt"]),new ScilabString(["Maxexp"]),new ScilabString(["R"]]),list(Ids,Vt,Maxexp,R));
	model.equations=mo;

	var exprs = string([Ids],[Vt],[Maxexp],[R]);

	var gr_i = [];
	this.x=standard_define([2,1],model,exprs,list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I"]);
	this.x.graphics.out_implicit = new ScilabString(["I"]);
	return new BasicBlock(this.x)
}

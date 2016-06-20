function Inductor () {


	var model = scicos_model();
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);

	var L = 1.d-5;
	model.rpar=new ScilabDouble([L]);
	model.sim = new ScilabString(["Inductor"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["Inductor"]);
	mo.inputs = new ScilabString(["p"]);
	mo.outputs = new ScilabString(["n"]);
	mo.parameters=list("L",list(L));
	model.equations=mo;

	var exprs = L.toString();

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,0.9]),model,exprs,list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I"]);
	this.x.graphics.out_implicit = new ScilabString(["I"]);
}

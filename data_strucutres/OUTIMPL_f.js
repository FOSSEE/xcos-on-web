function OUTIMPL_f () {


	var model = scicos_model();
	model.in = new ScilabDouble([-1]);
	model.in2 = new ScilabDouble([1]);

	var prt = 1;
	model.sim = new ScilabString(["outimpl"]);
	model.ipar = new ScilabDouble([1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var mo = modelica();
	mo.model = new ScilabString(["PORT"]);
	mo.inputs = new ScilabString(["n"]);
	model.equations=mo;

	var exprs = "1";

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([1,1]),model,exprs,gr_i);
	this.x.graphics.in_implicit = new ScilabString(["I"]);
}

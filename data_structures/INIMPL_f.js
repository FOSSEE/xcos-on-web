function INIMPL_f () {


	var model = scicos_model();
	model.sim = new ScilabString(["inimpl"]);
	model.out = new ScilabDouble([-1]);
	model.out2 = new ScilabDouble([1]);
	model.ipar = new ScilabDouble([1]);
	model.dep_ut = new ScilabBoolean([false,false]);
	model.blocktype = new ScilabString(["c"]);

	var mo = modelica();
	mo.model = new ScilabString(["PORT"]);
	mo.outputs = new ScilabString(["n"]);
	model.equations=mo;

	var prt = 1;

	var exprs = "1";

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([1,1]),model,exprs,gr_i);
	this.x.graphics.out_implicit = new ScilabString(["I"]);
	return new ImplicitInBlock(this.x)
}

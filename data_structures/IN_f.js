function IN_f () {


	var prt = 1;

	var model = scicos_model();
	model.sim = new ScilabString(["input"]);
	model.out = new ScilabDouble([-1]);
	model.out2 = new ScilabDouble([-2]);
	model.outtyp = new ScilabDouble([-1]);
	model.ipar=new ScilabDouble([prt]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = sci2exp(prt);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([1,1]),model,exprs,gr_i);
	return new  ExplicitInBlock (this.x)
}

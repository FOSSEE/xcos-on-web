function CLKOUTV_f () {


	var prt = 1;

	var model = scicos_model();
	model.sim = new ScilabString(["output"]);
	model.evtin = new ScilabDouble([1]);
	model.ipar=new ScilabDouble([prt]);
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = string(prt);
	this.x=new standard_define(new ScilabDouble([1,1]),model,exprs," ");
	return new  EventOutBlock (this.x)
}

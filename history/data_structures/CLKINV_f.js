function CLKINV_f () {


	var prt = 1;

	var model = scicos_model();
	model.sim = new ScilabString(["input"]);
	model.evtout = new ScilabDouble([1]);
	model.ipar=new ScilabDouble([prt]);
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble([-1]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = string(prt);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([1,1]),model,exprs,gr_i);
	return new EventInBlock(this.x)
}

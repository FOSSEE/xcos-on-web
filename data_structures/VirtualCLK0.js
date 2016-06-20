function VirtualCLK0 () {


	var model = scicos_model();
	model.sim = new ScilabString(["vrtclk0"]);
	model.evtin = new ScilabDouble([1]);
	model.opar=list();
	model.ipar = new ScilabDouble();
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble([-1]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs," ");
	return new  BasicBlock (this.x)
}

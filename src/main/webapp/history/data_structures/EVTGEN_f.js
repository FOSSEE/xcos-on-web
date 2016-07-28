function EVTGEN_f () {


	var tt = 0;

	var model = scicos_model();
	model.sim = new ScilabString(["trash"]);
	model.evtout = new ScilabDouble([1]);
	model.blocktype = new ScilabString(["d"]);
	model.firing=new ScilabDouble([tt]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = string(tt);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

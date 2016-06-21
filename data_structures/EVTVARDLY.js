function EVTVARDLY () {


	var model = scicos_model();
	model.sim=list(new ScilabString(["evtvardly"]),new ScilabDouble([4]));
	model.in1 = new ScilabDouble([1]);
	model.evtin = new ScilabDouble([1]);
	model.evtout = new ScilabDouble([1]);
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble([-1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = string(model.firing);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

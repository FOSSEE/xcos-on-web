function NEGTOPOS_f () {


	var model = scicos_model();
	model.sim=list(new ScilabString(["zcross"]),new ScilabDouble([1]));
	model.nzcross = new ScilabDouble([1]);
	model.in1 = new ScilabDouble([1]);
	model.evtout = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([-1],[-1],[0],[-1]);
	model.blocktype = new ScilabString(["z"]);
	model.firing = new ScilabDouble([-1]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,[],gr_i);
	return new BasicBlock(this.x)
}

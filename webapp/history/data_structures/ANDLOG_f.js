function ANDLOG_f () {


	var model = scicos_model();
	model.sim = new ScilabString(["andlog"]);
	model.out = new ScilabDouble([1]);
	model.evtin = new ScilabDouble([1],[1]);
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([false,false]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,3]),model,[],gr_i);
	return new BasicBlock(this.x)
}

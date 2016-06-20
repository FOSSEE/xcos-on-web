function TIME_f () {


	var model = scicos_model();
	model.sim = new ScilabString(["timblk"]);
	model.out = new ScilabDouble([1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,true]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,[],gr_i);
	return new  BasicBlock (this.x)
}

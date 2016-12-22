function COSBLK_f () {


	var in1 = 1;

	var model = scicos_model();
	model.sim = new ScilabString(["cosblk"]);
	model.in1 = new ScilabDouble([-1]);
	model.out = new ScilabDouble([-1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,[],gr_i);
	return new BasicBlock(this.x)
}

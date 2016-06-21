function MAX_f () {


	var in1 = -1;

	var model = scicos_model();
	model.sim = new ScilabString(["maxblk"]);
	model.in1.push(new ScilabDouble([in1]));
	model.out = new ScilabDouble([1]);
	model.dstate = new ScilabDouble([0],[0]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = " ";

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

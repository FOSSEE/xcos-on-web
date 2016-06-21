function TANBLK_f () {


	var in1 = -1;

	var model = scicos_model();
	model.sim = new ScilabString(["tanblk"]);
	model.in1.push(new ScilabDouble([in1]));
	model.out=new ScilabDouble([in1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = sci2exp(in1);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

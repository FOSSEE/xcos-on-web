function DIFF_f () {


	var x0 = [[0],[0]];

	var model = scicos_model();
	model.sim=list(new ScilabString(["diffblk"]),new ScilabDouble([10001]));
	model.in1 = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.state=new ScilabDouble([x0]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,true]);

	var exprs = [[strcat(sci2exp(x0(1)))],[strcat(sci2exp(x0(2)))]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

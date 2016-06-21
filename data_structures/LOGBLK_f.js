function LOGBLK_f () {


	var in1 = 1;

	var a = %e;

	var model = scicos_model();
	model.sim = new ScilabString(["logblk"]);
	model.in1 = new ScilabDouble([-1]);
	model.out = new ScilabDouble([-1]);
	model.rpar=new ScilabBoolean([a]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = "%e";

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

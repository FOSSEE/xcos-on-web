function POWBLK_f () {


	var in1 = 1;

	var a = 1.5;

	var model = scicos_model();
	model.sim = new ScilabString(["powblk"]);
	model.in1 = new ScilabDouble([-1]);
	model.out = new ScilabDouble([-1]);
	model.rpar=new ScilabDouble([a]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = string(a);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

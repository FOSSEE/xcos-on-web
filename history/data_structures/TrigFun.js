function TrigFun () {


	var model = scicos_model();
	model.sim=list(new ScilabString(["sin_blk"]),new ScilabDouble([4]));
	model.in1 = new ScilabDouble([-1]);
	model.out = new ScilabDouble([-1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = "sin";

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([4,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

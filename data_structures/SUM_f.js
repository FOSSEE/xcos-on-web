function SUM_f () {


	var model = scicos_model();
	model.sim=list(new ScilabString(["plusblk"]),new ScilabDouble([2]));
	model.in1 = new ScilabDouble([-1],[-1],[-1]);
	model.out = new ScilabDouble([-1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var gr_i = [];

	var exprs = [];
	this.x=new standard_define(new ScilabDouble([1,1]),model,exprs,gr_i);
	return new RoundBlock(this.x)
}

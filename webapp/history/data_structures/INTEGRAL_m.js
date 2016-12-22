function INTEGRAL_m () {


	var maxp = 1;

	var minp = -1;

	var rpar = [];

	var model = scicos_model();
	model.state = new ScilabDouble([0]);
	model.sim=list(new ScilabString(["integral_func"]),new ScilabDouble([4]));
	model.in1 = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.in2 = new ScilabDouble([1]);
	model.out2 = new ScilabDouble([1]);
	model.rpar=rpar;
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,true]);

	var exprs = string([0],[0],[0],[maxp],[minp]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

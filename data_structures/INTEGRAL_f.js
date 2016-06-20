function INTEGRAL_f () {


	var x0 = 0;

	var model = scicos_model();
	model.sim = new ScilabString(["integr"]);
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.state=new ScilabDouble([x0]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,true]);

	var exprs = strcat(sci2exp(x0));

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

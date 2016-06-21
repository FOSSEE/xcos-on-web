function CLR () {


	var x0 = 0;

	var A = -1;

	var B = 1;

	var C = 1;

	var D = 0;

	var exprs = ["1";"1+s"];

	var model = scicos_model();
	model.sim=list(new ScilabString(["csslti4"]),new ScilabDouble([4]));
	model.in1 = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.state=new ScilabDouble([x0]);
	model.rpar = new ScilabDouble([...colon_operator(A,:)],[...B],[C(,)],[...D]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,true]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

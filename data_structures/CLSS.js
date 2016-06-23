function CLSS () {


	var x0 = 0;

	var A = -1;

	var B = 1;

	var C = 1;

	var D = 0;

	var in1 = 1;

	var out = 1;

	var model = scicos_model();
	model.sim=list(new ScilabString(["csslti4"]),new ScilabDouble([4]));
	model.in1.push(new ScilabDouble([in1]));
	model.out=new ScilabDouble([out]);
	model.state=new ScilabDouble([x0]);
	model.rpar = new ScilabDouble([...colon_operator(A,:)],[...B],[C(,)],[...D]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,true]);

	var exprs = [[strcat(sci2exp(A))],[strcat(sci2exp(B))],[strcat(sci2exp(C))],[strcat(sci2exp(D))],[strcat(sci2exp(x0))]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([4,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

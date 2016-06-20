function DLSS () {


	var x0 = 0;

	var A = -1;

	var B = 1;

	var C = 1;

	var D = 0;

	var model = scicos_model();
	model.sim=list("dsslti4",4);
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.evtin = new ScilabDouble([1]);
	model.dstate=...x0;
	model.rpar = new ScilabDouble([...colon_operator(A,:)],[...B],[C(,)],[...D]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[strcat(sci2exp(A))],[strcat(sci2exp(B))],[strcat(sci2exp(C))],[strcat(sci2exp(D))],[strcat(sci2exp(x0))]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([4,2]),model,exprs,gr_i);
}

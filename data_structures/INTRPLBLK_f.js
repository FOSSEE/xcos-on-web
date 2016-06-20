function INTRPLBLK_f () {


	var a = [[0],[1]];

	var b = [[0],[1]];

	var model = scicos_model();
	model.sim = new ScilabString(["intrpl"]);
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([a],[b]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[strcat(sci2exp(a))],[strcat(sci2exp(b))]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

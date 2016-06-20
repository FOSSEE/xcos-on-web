function GAIN_f () {


	var gain = 1],[in=1],[out=1;

	var model = scicos_model();
	model.sim = new ScilabString(["gain"]);
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.rpar=new ScilabDouble([gain]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[strcat(sci2exp(gain))],[strcat(sci2exp(in))],[strcat(sci2exp(out))]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

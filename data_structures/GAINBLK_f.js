function GAINBLK_f () {


	var gain = 1;

	var in1 = 1],[out=1;

	var model = scicos_model();
	model.sim = new ScilabString(["gain"]);
	model.in1.push(new ScilabDouble([in1]));
	model.out=out;
	model.rpar=new ScilabDouble([gain]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [strcat(sci2exp(gain))];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

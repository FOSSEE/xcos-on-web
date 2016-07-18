function GAINBLK () {


	var gain = 1;

	var in1 = -1],[out=-1;

	var in2 = -2],[out2=-2;

	var model = scicos_model();
	model.sim=list(new ScilabString(["gainblk"]),new ScilabDouble([4]));
	model.in1.push(new ScilabDouble([in1]));
	model.out=out;
	model.in2.push(new ScilabDouble([in2]));
	model.out2.push(out2);
	model.rpar=new ScilabDouble([gain]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [strcat(sci2exp(gain))];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

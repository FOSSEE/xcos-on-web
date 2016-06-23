function ZCROSS_f () {


	var rpar = [[-1],[-1],[0],[0]];

	var in1 = 1;

	var model = scicos_model();
	model.sim=list(new ScilabString(["zcross"]),new ScilabDouble([1]));
	model.in1.push(new ScilabDouble([in1]));
	model.nzcross=new ScilabDouble([in1]);
	model.evtout = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([-1],[-1],[0],[0]);
	model.blocktype = new ScilabString(["z"]);
	model.firing = new ScilabDouble([-1]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = strcat(sci2exp(in1));

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

function ZCROSS_f () {


	var rpar = [[-1],[-1],[0],[0]];

	var in = 1;

	var model = scicos_model();
	model.sim=list(new ScilabString(["zcross"]),new ScilabDouble([1]));
	model.in=new ScilabDouble([in]);
	model.nzcross=new ScilabDouble([in]);
	model.evtout = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([-1],[-1],[0],[0]);
	model.blocktype = new ScilabString(["z"]);
	model.firing = new ScilabDouble([-1]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = strcat(sci2exp(in));

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

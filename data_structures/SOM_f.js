function SOM_f () {


	var sgn = [[1],[1],[1]];

	var model = scicos_model();
	model.sim=list(new ScilabString(["sum"]),new ScilabDouble([2]));
	model.in1 = new ScilabDouble([-1],[-1],[-1]);
	model.out = new ScilabDouble([-1]);
	model.rpar=new ScilabDouble([sgn]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[sci2exp(1)],[sci2exp(sgn)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

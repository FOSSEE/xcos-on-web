function CONST () {


	var C = 1;

	var model = scicos_model();
	model.sim=list(new ScilabString(["cstblk4"]),new ScilabDouble([4]));
	model.in = new ScilabDouble();
	model.out = new ScilabDouble([1]);
	model.rpar=new ScilabDouble([C]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = strcat(sci2exp(C));

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

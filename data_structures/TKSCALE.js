function TKSCALE () {


	var a = -10;

	var b = 10;

	var f = 1;

	var model = scicos_model();
	model.sim=list(new ScilabString(["tkscaleblk"]),new ScilabDouble([5]));
	model.out = new ScilabDouble([1]);
	model.evtin = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([a],[b],[f]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[sci2exp(a)],[sci2exp(b)],[sci2exp(f)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

function SATURATION () {


	var minp = -1;

	var maxp = 1;

	var rpar = [[maxp],[minp]];

	var model = scicos_model();
	model.sim=list(new ScilabString(["satur"]),new ScilabDouble([4]));
	model.in = new ScilabDouble([1]);
	model.nzcross = new ScilabDouble([2]);
	model.nmode = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.rpar=rpar;
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[string(maxp)],[string(minp)],[string(model.nmode)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

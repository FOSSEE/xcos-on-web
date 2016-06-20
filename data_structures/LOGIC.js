function LOGIC () {


	var mat = [[0],[0],[0],[1]];

	var model = scicos_model();
	model.sim=list("logic",4);
	model.in = new ScilabDouble([1],[1]);
	model.in2 = new ScilabDouble([1],[1]);
	model.out = new ScilabDouble([1]);
	model.out2 = new ScilabDouble([1]);
	model.evtin = new ScilabDouble([1]);
	model.intyp = new ScilabDouble([5,5]);
	model.outtyp = new ScilabDouble([5]);
	model.opar=list(int8(mat));
	model.blocktype = new ScilabString(["c"]);
	model.firing = new ScilabBoolean([false]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[sci2exp(mat)],[sci2exp(0)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
}

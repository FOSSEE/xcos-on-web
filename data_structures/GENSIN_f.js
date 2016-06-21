function GENSIN_f () {


	var rpar = [[1],[1],[0]];

	var model = scicos_model();
	model.sim = new ScilabString(["gensin"]);
	model.in1 = new ScilabDouble();
	model.out = new ScilabDouble([1]);
	model.out2 = new ScilabDouble([1]);
	model.outtyp = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([1],[1],[0]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,true]);

	var exprs = [[string(rpar(1))],[string(rpar(2))],[string(rpar(3))]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

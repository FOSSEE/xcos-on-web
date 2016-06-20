function EXPBLK_m () {


	var in = 1;

	var a = %e;

	var model = scicos_model();
	model.sim=list(new ScilabString(["expblk_m"]),new ScilabDouble([4]));
	model.in = new ScilabDouble([-1]);
	model.in2 = new ScilabDouble([-2]);
	model.out = new ScilabDouble([-1]);
	model.out2 = new ScilabDouble([-2]);
	model.intyp = new ScilabDouble([1]);
	model.outtyp = new ScilabDouble([1]);
	model.rpar=new ScilabBoolean([a]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = ["%e"];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

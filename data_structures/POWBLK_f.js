function POWBLK_f () {


	var in = 1;

	var a = 1.5;

	var model = scicos_model();
	model.sim = new ScilabString(["powblk"]);
	model.in = new ScilabDouble([-1]);
	model.out = new ScilabDouble([-1]);
	model.rpar=new ScilabDouble([a]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = a.toString();

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
}

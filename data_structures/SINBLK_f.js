function SINBLK_f () {


	var model = scicos_model();
	model.sim = new ScilabString(["sinblk"]);
	model.in = new ScilabDouble([-1]);
	model.out = new ScilabDouble([-1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = " ";

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
}

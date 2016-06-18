function MAX_f () {


	var in = -1;

	var model = scicos_model();
	model.sim = new ScilabString(["maxblk"]);
	model.in=new ScilabDouble([in]);
	model.out = new ScilabDouble([1]);
	model.dstate = new ScilabDouble([0],[0]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = " ";

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
}

function SAWTOOTH_f () {


	var model = scicos_model();
	model.sim = new ScilabString(["sawtth"]);
	model.out = new ScilabDouble([1]);
	model.evtin = new ScilabDouble([1]);
	model.dstate = new ScilabDouble([0]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,true]);

	var exprs = " ";

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
}

function CLKSOMV_f () {


	var model = scicos_model();
	model.sim = new ScilabString(["sum"]);
	model.evtin = new ScilabDouble([1],[1],[1]);
	model.evtout = new ScilabDouble([1]);
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble([-1]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,[],gr_i);
}

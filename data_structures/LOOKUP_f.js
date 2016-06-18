function LOOKUP_f () {


	var model = scicos_model();
	model.sim = new ScilabString(["lookup"]);
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([-2],[-1],[1],[2],[-1],[1],[-1],[1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,[],gr_i);
}

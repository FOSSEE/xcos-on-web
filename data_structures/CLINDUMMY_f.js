function CLINDUMMY_f () {


	var x0 = 0;

	var model = scicos_model();
	model.sim=list(new ScilabString(["cdummy"]),new ScilabDouble([4]));
	model.state=new ScilabDouble([x0]);
	model.blocktype = new ScilabString(["c"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([false,true]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,[],gr_i);
	return new  BasicBlock (this.x)
}

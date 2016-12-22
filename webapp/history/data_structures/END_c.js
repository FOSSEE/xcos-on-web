function END_c () {


	var tf = 100000000;

	var model = scicos_model();
	model.sim=list(new ScilabString(["scicosexit"]),new ScilabDouble([4]));
	model.evtin = new ScilabDouble([1]);
	model.evtout = new ScilabDouble([1]);
	model.firing=new ScilabDouble([tf]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = string(tf);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

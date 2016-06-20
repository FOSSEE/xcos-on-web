function TRASH_f () {


	var in = -1;

	var model = scicos_model();
	model.sim = new ScilabString(["trash"]);
	model.in=new ScilabDouble([in]);
	model.evtin = new ScilabDouble([1]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = " ";

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

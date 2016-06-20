function CONSTRAINT_c () {


	var x0 = [[0],[0]];

	var model = scicos_model();
	model.sim=list(new ScilabString(["constraint_c"]),new ScilabDouble([10004]));
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.ipar = new ScilabDouble([0]);
	model.state=new ScilabDouble([x0]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,true]);

	var exprs = "0";

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

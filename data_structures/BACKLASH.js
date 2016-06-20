function BACKLASH () {


	var exprs = ["0";"1";"1"];

	var model = scicos_model();
	model.sim=list(new ScilabString(["backlash"]),new ScilabDouble([4]));
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([0],[1]);
	model.nzcross = new ScilabDouble([2]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

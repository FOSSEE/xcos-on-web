function SIGNUM () {


	var nu = -1;

	var model = scicos_model();
	model.sim=list(new ScilabString(["signum"]),new ScilabDouble([4]));
	model.in1.push(new ScilabDouble([nu]));
	model.out=new ScilabDouble([nu]);
	model.nzcross=new ScilabDouble([nu]);
	model.nmode=new ScilabDouble([nu]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [string([1])];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

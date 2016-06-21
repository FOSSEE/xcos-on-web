function ABS_VALUE () {


	var nu = -1;

	var model = scicos_model();
	model.sim=list("absolute_value",4);
	model.in=new ScilabDouble([nu]);
	model.out=new ScilabDouble([nu]);
	model.nzcross=new ScilabDouble([nu]);
	model.nmode=new ScilabDouble([nu]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[1].toString()];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
}

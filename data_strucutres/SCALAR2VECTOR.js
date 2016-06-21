function SCALAR2VECTOR () {


	var nout = -1;

	var model = scicos_model();
	model.sim=list("scalar2vector",4);
	model.out=new ScilabDouble([nout]);
	model.in = new ScilabDouble([1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[nout].toString()];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
}

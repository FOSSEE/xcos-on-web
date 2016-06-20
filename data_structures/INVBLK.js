function INVBLK () {


	var in = -1;

	var model = scicos_model();
	model.sim=list(new ScilabString(["invblk4"]),new ScilabDouble([4]));
	model.in=new ScilabDouble([in]);
	model.out=new ScilabDouble([in]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = " ";

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

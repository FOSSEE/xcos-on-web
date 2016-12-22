function INVBLK () {


	var in1 = -1;

	var model = scicos_model();
	model.sim=list(new ScilabString(["invblk4"]),new ScilabDouble([4]));
	model.in1.push(new ScilabDouble([in1]));
	model.out=new ScilabDouble([in1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = " ";

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

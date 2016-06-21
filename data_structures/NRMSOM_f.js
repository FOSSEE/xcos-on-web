function NRMSOM_f () {


	var in1 = [[-1],[-1]];

	var nin = 2;

	var model = scicos_model();
	model.sim = new ScilabString(["junk"]);
	model.in1.push(in1);
	model.out = new ScilabDouble([-1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [string(nin)];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([.2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

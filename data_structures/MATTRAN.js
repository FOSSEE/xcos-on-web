function MATTRAN () {


	var model = scicos_model();
	model.sim=list(new ScilabString(["mattran_m"]),new ScilabDouble([4]));
	model.in1 = new ScilabDouble([-1]);
	model.in2 = new ScilabDouble([-2]);
	model.out = new ScilabDouble([-2]);
	model.out2 = new ScilabDouble([-1]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var label = [sci2exp(1)];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,label,gr_i);
	return new BasicBlock(this.x)
}

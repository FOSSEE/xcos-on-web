function SQRT () {


	var model = scicos_model();
	model.sim=list(new ScilabString(["mat_sqrt"]),new ScilabDouble([4]));
	model.in = new ScilabDouble([-1]);
	model.in2 = new ScilabDouble([-2]);
	model.intyp = new ScilabDouble([1]);
	model.outtyp = new ScilabDouble([1]);
	model.out = new ScilabDouble([-1]);
	model.out2 = new ScilabDouble([-2]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var label = [sci2exp(1)];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,label,gr_i);
	return new  BasicBlock (this.x)
}

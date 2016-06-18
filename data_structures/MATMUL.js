function MATMUL () {


	var model = scicos_model();
	model.sim=list("matmul_m",4);
	model.in = new ScilabDouble([-1],[-2]);
	model.in2 = new ScilabDouble([-2],[-3]);
	model.out = new ScilabDouble([-1]);
	model.out2 = new ScilabDouble([-3]);
	model.dep_ut = new ScilabBoolean([true,false]);
	model.ipar = new ScilabDouble([1]);

	var label = [sci2exp(model.ipar)];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,label,gr_i);
}

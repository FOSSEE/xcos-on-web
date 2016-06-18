function INTMUL () {


	var sgn = 0;

	var model = scicos_model();
	model.sim=list("matmul_i32",4);
	model.in = new ScilabDouble([-1],[-2]);
	model.out = new ScilabDouble([-1]);
	model.in2 = new ScilabDouble([-2],[-3]);
	model.out2 = new ScilabDouble([-3]);
	model.intyp = new ScilabDouble([3,3]);
	model.outtyp = new ScilabDouble([3]);
	model.rpar = new ScilabDouble();
	model.ipar=new ScilabDouble([sgn]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[sci2exp(3)],[sci2exp(0)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,,exprs,gr_i);
}

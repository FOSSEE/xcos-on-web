function QUANT_f () {


	var pas = 0.1;

	var meth = 1;

	var model = scicos_model();
	model.sim = new ScilabString(["qzrnd"]);
	model.in = new ScilabDouble([-1]);
	model.out = new ScilabDouble([-1]);
	model.rpar=new ScilabDouble([pas]);
	model.ipar=new ScilabDouble([meth]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[pas.toString()],[meth.toString()]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
}

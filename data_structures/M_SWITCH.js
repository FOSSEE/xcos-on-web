function M_SWITCH () {


	var in = [[1],[-1],[-1]];

	var ipar = [[1],[3]];

	var nin = 2;

	var model = scicos_model();
	model.sim=list("mswitch",4);
	model.in=new ScilabDouble([in]);
	model.out = new ScilabDouble([-1]);
	model.ipar=new ScilabDouble([ipar]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[nin.toString()],[ipar.toString()]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2.5,2]),model,exprs,gr_i);
}

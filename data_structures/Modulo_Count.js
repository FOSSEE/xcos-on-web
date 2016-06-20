function Modulo_Count () {


	var ini_c = 0;

	var base = 3;

	var model = scicos_model();
	model.sim=list("modulo_count",4);
	model.evtin = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.dstate=new ScilabDouble([ini_c]);
	model.ipar=new ScilabDouble([base]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[ini_c.toString()],[base.toString()]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
}

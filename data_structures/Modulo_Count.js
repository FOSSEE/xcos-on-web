function Modulo_Count () {


	var ini_c = 0;

	var base = 3;

	var model = scicos_model();
	model.sim=list(new ScilabString(["modulo_count"]),new ScilabDouble([4]));
	model.evtin = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.dstate=new ScilabDouble([ini_c]);
	model.ipar=new ScilabDouble([base]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[string(ini_c)],[string(base)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

function OUT_f () {


	var n = -1;

	var prt = 1;

	var model = scicos_model();
	model.sim = new ScilabString(["output"]);
	model.in = new ScilabDouble([-1]);
	model.in2 = new ScilabDouble([-2]);
	model.intyp = new ScilabDouble([-1]);
	model.ipar=new ScilabDouble([prt]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = prt.toString();

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([1,1]),model,exprs,gr_i);
}

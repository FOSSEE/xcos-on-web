function HALT_f () {


	var n = 0;

	var model = scicos_model();
	model.sim = new ScilabString(["hltblk"]);
	model.evtin = new ScilabDouble([1]);
	model.dstate = new ScilabDouble([0]);
	model.ipar = new ScilabDouble([0]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = n.toString();

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
}

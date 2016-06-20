function MFCLCK_f () {


	var nn = 2;

	var dt = 0.1;

	var model = scicos_model();
	model.sim = new ScilabString(["mfclck"]);
	model.evtin = new ScilabDouble([1]);
	model.evtout = new ScilabDouble([1],[1]);
	model.dstate = new ScilabDouble([0]);
	model.rpar=new ScilabDouble([dt]);
	model.ipar=new ScilabDouble([nn]);
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble([-1,0]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[string(dt)],[string(nn)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

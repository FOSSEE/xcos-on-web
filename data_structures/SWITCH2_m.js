function SWITCH2_m () {


	var ipar = [0];

	var nzz = 1;

	var rpar = 0;

	var model = scicos_model();
	model.sim=list(new ScilabString(["switch2_m"]),new ScilabDouble([4]));
	model.in = new ScilabDouble([-1],[1],[-1]);
	model.in2 = new ScilabDouble([-2],[1],[-2]);
	model.intyp = new ScilabDouble([1]);
	model.out = new ScilabDouble([-1]);
	model.out2 = new ScilabDouble([-2]);
	model.outtyp = new ScilabDouble([1]);
	model.ipar=new ScilabDouble([ipar]);
	model.rpar=new ScilabDouble([rpar]);
	model.nzcross=new ScilabDouble([nzz]);
	model.nmode = new ScilabDouble([1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[sci2exp(1)],[string(ipar)],[string(rpar)],[string(nzz)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

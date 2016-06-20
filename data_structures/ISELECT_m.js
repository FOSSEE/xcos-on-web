function ISELECT_m () {


	var z0 = 1;

	var nout = 2;

	var model = scicos_model();
	model.sim=list(new ScilabString(["selector_m"]),new ScilabDouble([4]));
	model.out = new ScilabDouble([-1],[-1]);
	model.out2 = new ScilabDouble([-2],[-2]);
	model.outtyp = new ScilabDouble([1]);
	model.in = new ScilabDouble([-1]);
	model.in2 = new ScilabDouble([-2]);
	model.intyp = new ScilabDouble([1]);
	model.evtout = new ScilabDouble();
	model.state = new ScilabDouble();
	model.rpar = new ScilabDouble();
	model.ipar = new ScilabDouble();
	model.firing = new ScilabDouble();
	model.evtin=ones(nout,1);
	model.dstate=new ScilabDouble([z0]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[sci2exp(1)],[sci2exp(nout)],[sci2exp(z0)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

function EVTDLY_c () {


	var dt = 0.1;

	var ff = 0.0;

	var model = scicos_model();
	model.sim=list(new ScilabString(["evtdly4"]),new ScilabDouble([4]));
	model.evtin = new ScilabDouble([1]);
	model.evtout = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([dt],[ff]);
	model.blocktype = new ScilabString(["d"]);
	model.firing=new ScilabDouble([ff]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[string(dt)],[sci2exp(ff)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

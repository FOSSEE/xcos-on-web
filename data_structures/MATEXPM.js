function MATEXPM () {


	var model = scicos_model();

	var function_name = "mat_expm";

	var funtyp = 4;
	model.sim=list(function_name,funtyp);
	model.in = new ScilabDouble([-1]);
	model.in2 = new ScilabDouble([-1]);
	model.intyp = new ScilabDouble([1]);
	model.out = new ScilabDouble([-1]);
	model.out2 = new ScilabDouble([-1]);
	model.outtyp = new ScilabDouble([1]);
	model.evtin = new ScilabDouble();
	model.evtout = new ScilabDouble();
	model.state = new ScilabDouble();
	model.dstate = new ScilabDouble();
	model.rpar = new ScilabDouble();
	model.ipar = new ScilabDouble();
	model.blocktype = new ScilabString(["c"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([true,false]);

	var label = [sci2exp(1)];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,label,gr_i);
	return new  BasicBlock (this.x)
}

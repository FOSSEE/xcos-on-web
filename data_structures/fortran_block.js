function fortran_block () {


	var model = scicos_model();
	model.sim=list(" ",1001);
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.evtin = new ScilabDouble();
	model.evtout = new ScilabDouble();
	model.state = new ScilabDouble();
	model.dstate = new ScilabDouble();
	model.rpar = new ScilabDouble();
	model.ipar = new ScilabDouble([0]);
	model.blocktype = new ScilabString(["c"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([true,false]);

	var funam = "forty";

	var label = [list([sci2exp(model.in)],[sci2exp(model.out)],[strcat(sci2exp(model.rpar))],[funam],list([]))];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([4,2]),model,label,gr_i);
}

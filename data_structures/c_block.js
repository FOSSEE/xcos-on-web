function c_block () {


	var in = 1;

	var out = 1;

	var clkin = [];

	var clkout = [];

	var x0 = [];

	var z0 = [];

	var typ = "c";

	var auto = [];

	var rpar = [];

	var funam = "toto";

	var model = scicos_model();
	model.sim=list(" ",2001);
	model.in=new ScilabDouble([in]);
	model.out=new ScilabDouble([out]);
	model.evtin=clkin;
	model.evtout=clkout;
	model.state=x0;
	model.dstate=z0;
	model.rpar=rpar;
	model.ipar = new ScilabDouble([0]);
	model.blocktype=new ScilabString([typ]);
	model.firing=auto;
	model.dep_ut = new ScilabBoolean([true,false]);

	var label = [list([sci2exp(in)],[sci2exp(out)],[	strcat(sci2exp(rpar))],[funam],list([]))];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,label,gr_i);
}

function CBLOCK () {


	var in1 = 1;

	var out = 1;

	var clkin = [];

	var clkout = [];

	var x0 = [];

	var z0 = [];

	var typ = "c";

	var auto = [];

	var rpar = [];

	var ipar = [];

	var funam = "toto";

	var ng = 0;

	var model = scicos_model();
	model.sim=list(new ScilabString([" "]),new ScilabDouble([2004]));
	model.in1.push(new ScilabDouble([in1]));
	model.out=new ScilabDouble([out]);
	model.evtin=clkin;
	model.evtout=clkout;
	model.state=x0;
	model.dstate=z0;
	model.rpar=rpar;
	model.ipar=ipar;
	model.blocktype=new ScilabString([typ]);
	model.firing=auto;
	model.dep_ut = new ScilabBoolean([true,false]);
	model.nzcross=new ScilabDouble([ng]);

	var label = list([funam,"n",sci2exp(in1),sci2exp(out),sci2exp(clkin),sci2exp(clkout),sci2exp(x0),sci2exp(0),sci2exp(z0),sci2exp(rpar),sci2exp(ipar),sci2exp(auto),"y","n"]',[]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([4,2]),model,label,gr_i);
	return new BasicBlock(this.x)
}

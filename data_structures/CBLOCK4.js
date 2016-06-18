function CBLOCK4 () {


	var funam = "toto";

	var model = scicos_model();
	model.sim=list(" ",2004);
	model.in = new ScilabDouble([1]);
	model.in2 = new ScilabDouble([1]);
	model.intyp = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.out2 = new ScilabDouble([1]);
	model.outtyp = new ScilabDouble([1]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var label = list([funam;
	"n";
	sci2exp([model.in model.in2]);
	sci2exp(model.intyp);
	sci2exp([model.out model.out2]);
	sci2exp(model.outtyp);
	sci2exp(model.evtin);
	sci2exp(model.evtout);
	sci2exp(model.state);
	sci2exp(model.dstate);
	sci2exp(model.odstate);
	sci2exp(model.rpar);
	sci2exp(model.ipar);
	sci2exp(model.opar);
	sci2exp(model.nmode);
	sci2exp(model.nzcross);
	sci2exp(model.firing);
	"y";
	"n"],[]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([4,2]),model,label,gr_i);
}

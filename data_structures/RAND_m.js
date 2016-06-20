function RAND_m () {


	var a = 0;

	var b = 1;

	var dt = 0;

	var flag = 0;

	var function_name = "rndblk_m";

	var funtyp = 4;

	var model = scicos_model();
	model.sim=list(function_name,funtyp);
	model.in = new ScilabDouble();
	model.in2 = new ScilabDouble();
	model.intyp = new ScilabDouble();
	model.out = new ScilabDouble([1]);
	model.out2 = new ScilabDouble([1]);
	model.outtyp = new ScilabDouble([1]);
	model.evtin = new ScilabDouble([1]);
	model.evtout = new ScilabDouble();
	model.state = new ScilabDouble();
	model.dstate = new ScilabDouble([int(rand()*(10^7-1))],[0*...a]);
	model.rpar = new ScilabDouble([...a,...b]);
	model.ipar=new ScilabDouble([flag]);
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[sci2exp(1)],[string(flag)],[sci2exp([a])],[sci2exp([b])],[sci2exp([model.dstate(1),int(rand()*(10^7-1))])]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

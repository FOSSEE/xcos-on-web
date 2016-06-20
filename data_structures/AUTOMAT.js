function AUTOMAT () {


	var NMode = 2;

	var Minitial = 1;

	var NX = 1;

	var X0 = [0.0];

	var XP = [[1],[1]];

	var C1 = [2];

	var C2 = [1];

	var exprs = [[NMode.toString()],[Minitial.toString()],NX.toString()],[sci2exp(X0)],[sci2exp(XP)],[sci2exp(C1)],[sci2exp(C2)]];

	var ipar = [[NMode],[Minitial],[NX],[XP],[C1],[C2]];

	var rpar = [X0];

	var model = scicos_model();
	model.sim=list(new ScilabString(["automat"]),new ScilabDouble([10004]));
	model.in = new ScilabDouble([2*NX+1],[2*NX+1]);
	model.out = new ScilabDouble([2],[2*NX]);
	model.state=ones(2*NX,1);
	model.nzcross = new ScilabDouble([1]);
	model.blocktype = new ScilabString(["c"]);
	model.evtout = new ScilabDouble([1]);
	model.firing = new ScilabDouble([-1]);
	model.dep_ut = new ScilabBoolean([false,true]);
	model.ipar=ipar;
	model.rpar=rpar;

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([4,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

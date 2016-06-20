function RAMP () {


	var slope = 0;

	var iout = 0;

	var stt = 0;

	var rpar = [[slope],[stt],[iout]];

	var model = scicos_model();
	model.sim=list(new ScilabString(["ramp"]),new ScilabDouble([4]));
	model.in = new ScilabDouble();
	model.out = new ScilabDouble([1]);
	model.rpar=rpar;
	model.blocktype = new ScilabString(["c"]);
	model.nmode = new ScilabDouble([1]);
	model.nzcross = new ScilabDouble([1]);
	model.dep_ut = new ScilabBoolean([false,true]);

	var exprs = [string(rpar)];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

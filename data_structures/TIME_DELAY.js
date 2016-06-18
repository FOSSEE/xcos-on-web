function TIME_DELAY () {


	var nin = 1;

	var T = 1;

	var init = 0;

	var N = 1024;

	var model = scicos_model();
	model.sim=list("time_delay",4);
	model.in = new ScilabDouble([nin]);
	model.out=new ScilabDouble([nin]);
	model.rpar = new ScilabDouble([T,init]);
	model.ipar=new ScilabDouble([N]);
	model.blocktype = new ScilabString(["x"]);
	model.dep_ut = new ScilabBoolean([false,true]);

	var exprs = [[T.toString()],[init.toString()],[N.toString()]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3.5,2]),model,exprs,gr_i);
}

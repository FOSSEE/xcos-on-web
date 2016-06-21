function VARIABLE_DELAY () {


	var nin = 1;

	var T = 1;

	var init = 0;

	var N = 1024;

	var model = scicos_model();
	model.sim=list(new ScilabString(["variable_delay"]),new ScilabDouble([4]));
	model.in1 = new ScilabDouble([nin],[1]);
	model.out=new ScilabDouble([nin]);
	model.rpar = new ScilabDouble([T,init]);
	model.ipar=new ScilabDouble([N]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[string(T)],[string(init)],[string(N)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

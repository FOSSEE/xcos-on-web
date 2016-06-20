function Counter () {


	var minim = 0;

	var maxim = 2;

	var rule = 1;

	var model = scicos_model();
	model.sim=list(new ScilabString(["counter"]),new ScilabDouble([4]));
	model.evtin = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.out2 = new ScilabDouble([1]);
	model.dstate = new ScilabDouble([0]);
	model.ipar = new ScilabDouble([rule],[maxim],[minim]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[string(minim)],[string(maxim)],[string(rule)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

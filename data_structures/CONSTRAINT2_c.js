function CONSTRAINT2_c () {


	var x0 = [0];

	var xd0 = [0];

	var id = [0];

	var model = scicos_model();
	model.sim=list(new ScilabString(["constraint_c"]),new ScilabDouble([10004]));
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1],[1]);
	model.state = new ScilabDouble([x0],[xd0]);
	model.ipar=new ScilabDouble([id]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,true]);

	var exprs = list(strcat(sci2exp(x0)),strcat(sci2exp(xd0)),strcat(sci2exp(id)));

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

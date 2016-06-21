function SWITCH_f () {


	var i0 = 0;

	var in1 = [[-1],[-1]];

	var nin = 2;

	var model = scicos_model();
	model.sim=list(new ScilabString(["switchn"]),new ScilabDouble([2]));
	model.in1.push(in1);
	model.out = new ScilabDouble([-1]);
	model.ipar=new ScilabDouble([i0]);
	model.blocktype = new ScilabString(["c"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([true,true]);

	var exprs = [[string(nin)],[string(i0+1)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

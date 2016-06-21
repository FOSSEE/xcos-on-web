function LOGICAL_OP () {


	var in1 = [[-1],[-1]];

	var ipar = [0];

	var nin = 2;

	var model = scicos_model();
	model.sim=list(new ScilabString(["logicalop"]),new ScilabDouble([4]));
	model.in1.push(in1);
	model.out = new ScilabDouble([-1]);
	model.ipar=new ScilabDouble([ipar]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[string(nin)],[string(ipar)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

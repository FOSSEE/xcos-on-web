function MAXMIN () {


	var model = scicos_model();
	model.sim=list(new ScilabString(["minmax"]),new ScilabDouble([4]));
	model.out = new ScilabDouble([1]);
	model.in1 = new ScilabDouble([-1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);
	model.ipar = new ScilabDouble([0]);

	var exprs = [string([2,1,1]')];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	this.x.graphics.style = new ScilabString(["MAXMIN;displayedLabel=MAX"]);
	return new BasicBlock(this.x)
}

function EXTRACTOR () {


	var ind = 1;

	var model = scicos_model();
	model.sim=list(new ScilabString(["extractor"]),new ScilabDouble([4]));
	model.in = new ScilabDouble([-1]);
	model.out = new ScilabDouble([1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);
	model.ipar=new ScilabDouble([ind]);

	var exprs = [sci2exp(ind)];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

function PRODUCT () {


	var sgn = [[1],[-1]];

	var model = scicos_model();
	model.sim=list(new ScilabString(["product"]),new ScilabDouble([4]));
	model.in = new ScilabDouble([-1],[-1]);
	model.out = new ScilabDouble([-1]);
	model.ipar=new ScilabDouble([sgn]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = sci2exp(sgn);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,3]),model,,exprs,gr_i);
	return new  Product (this.x)
}

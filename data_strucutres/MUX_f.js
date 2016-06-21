function MUX_f () {


	var in = 2;

	var model = scicos_model();
	model.sim=list("mux",1);
	model.in=-...transpose([1:in]);
	model.out = new ScilabDouble([0]);
	model.ipar=new ScilabDouble([in]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = in.toString();

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([0.5,2]),model,exprs,gr_i);
}

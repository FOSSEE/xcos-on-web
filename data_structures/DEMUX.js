function DEMUX () {


	var out = 2;

	var model = scicos_model();
	model.sim=list("multiplex",4);
	model.in = new ScilabDouble([0]);
	model.out=-...transpose([1:out]);
	model.ipar=new ScilabDouble([out]);
	model.blocktype = new ScilabString(["c"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = out.toString();

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([.5,2]),model,exprs,gr_i);
}

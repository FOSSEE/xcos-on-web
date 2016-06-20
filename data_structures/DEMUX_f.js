function DEMUX_f () {


	var out = 2;

	var model = scicos_model();
	model.sim=list(new ScilabString(["demux"]),new ScilabDouble([1]));
	model.in = new ScilabDouble([0]);
	model.out=-...transpose([1:out]);
	model.ipar=new ScilabDouble([out]);
	model.blocktype = new ScilabString(["c"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = string(out);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([.5,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

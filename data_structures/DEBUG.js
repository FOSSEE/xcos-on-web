function DEBUG () {


	var model = scicos_model();
	model.sim=list("%debug_scicos",99);
	model.blocktype = new ScilabString(["d"]);

	var exprs = list("","xcos_debug_gui(flag,block);");

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([8,2]),model,exprs,gr_i);
}

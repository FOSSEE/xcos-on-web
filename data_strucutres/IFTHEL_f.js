function IFTHEL_f () {


	var model = scicos_model();
	model.sim=list("ifthel",-1);
	model.in = new ScilabDouble([1]);
	model.in2 = new ScilabDouble([1]);
	model.intyp = new ScilabDouble([-1]);
	model.evtin = new ScilabDouble([1]);
	model.evtout = new ScilabDouble([1],[1]);
	model.blocktype = new ScilabString(["l"]);
	model.firing = new ScilabDouble([-1,-1]);
	model.dep_ut = new ScilabBoolean([true,false]);
	model.nmode = new ScilabDouble([1]);
	model.nzcross = new ScilabDouble([1]);

	var gr_i = [];

	var exprs = [[model.in.toString()],[model.nmode.toString()]];
	this.x=new standard_define(new ScilabDouble([3,3]),model,exprs,gr_i);
}

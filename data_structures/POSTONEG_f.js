function POSTONEG_f () {


	var rpar = [[-1],[-1],[-1],[0]];

	var model = scicos_model();
	model.sim=list(new ScilabString(["zcross"]),new ScilabDouble([1]));
	model.nzcross = new ScilabDouble([1]);
	model.in = new ScilabDouble([1]);
	model.evtout = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([-1],[-1],[-1],[0]);
	model.blocktype = new ScilabString(["z"]);
	model.dep_ut = new ScilabBoolean([true,false]);
	model.firing = new ScilabDouble([-1]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,[],gr_i);
	return new  BasicBlock (this.x)
}

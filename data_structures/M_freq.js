function M_freq () {


	var model = scicos_model();
	model.sim=list("m_frequ",4);
	model.evtout = new ScilabDouble([1],[1],[1]);
	model.evtin = new ScilabDouble([1]);
	model.rpar = new ScilabDouble();
	model.opar=list([1,1,0],[1,1,1],[1,3,2],1,0,0);
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble([0,-1,-1]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[sci2exp([1],[2])],[sci2exp([0],[0])]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
}

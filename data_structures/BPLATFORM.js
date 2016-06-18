function BPLATFORM () {


	var plen = 2;

	var csiz = 2;

	var phi = 0;

	var xmin = -5;

	var xmax = 5;

	var ymin = 0;

	var ymax = 15;

	var model = scicos_model();
	model.sim=list("bplatform2",5);
	model.in = new ScilabDouble([1],[1]);
	model.evtin = new ScilabDouble([1]);
	model.dstate = new ScilabDouble([0]);
	model.rpar = new ScilabDouble([plen],[csiz],[phi],[xmin],[xmax],[ymin],[ymax]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = model.rpar.toString();

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
}

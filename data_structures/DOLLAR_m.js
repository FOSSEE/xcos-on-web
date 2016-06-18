function DOLLAR_m () {


	var z = 0;

	var inh = 0;

	var in = 1;

	var exprs = [[z],[inh].toString()];

	var model = scicos_model();
	model.sim=list("dollar4",4);
	model.in=new ScilabDouble([in]);
	model.out=new ScilabDouble([in]);
	model.evtin = new ScilabDouble([1-inh]);
	model.dstate=new ScilabDouble([z]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
}

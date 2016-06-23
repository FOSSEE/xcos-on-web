function GENSQR_f () {


	var Amplitude = 1;

	var model = scicos_model();
	model.sim = new ScilabString(["gensqr"]);
	model.out = new ScilabDouble([1]);
	model.out2 = new ScilabDouble([1]);
	model.outtyp = new ScilabDouble([1]);
	model.evtin = new ScilabDouble([1]);
	model.dstate=new ScilabDouble([Amplitude]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = string(Amplitude);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

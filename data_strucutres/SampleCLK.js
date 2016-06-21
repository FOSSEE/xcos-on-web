function SampleCLK () {


	var model = scicos_model();
	model.sim = new ScilabString(["sampleclk"]);
	model.evtout = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([1,0]);
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble([-1]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[sci2exp(1)],[sci2exp(0)]];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs," ");
}

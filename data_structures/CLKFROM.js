function CLKFROM () {


	var model = scicos_model();
	model.sim = new ScilabString(["clkfrom"]);
	model.evtout = new ScilabDouble([1]);
	model.opar=list("A");
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble([-1]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = "A";
	this.x=new standard_define(new ScilabDouble([2,1]),model,exprs," ");
	this.x.graphics.id = new ScilabString(["From"]);
	return new  BasicBlock (this.x)
}

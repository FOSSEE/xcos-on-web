function CLKGotoTagVisibility () {


	var model = scicos_model();
	model.sim = new ScilabString(["clkgototagvisibility"]);
	model.in = new ScilabDouble();
	model.in2 = new ScilabDouble();
	model.out = new ScilabDouble();
	model.out2 = new ScilabDouble();
	model.evtin = new ScilabDouble();
	model.intyp = new ScilabDouble([1]);
	model.outtyp = new ScilabDouble([1]);
	model.opar=list("A");
	model.blocktype = new ScilabString(["c"]);
	model.firing = new ScilabBoolean([false]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = "A";

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

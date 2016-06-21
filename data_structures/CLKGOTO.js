function CLKGOTO () {


	var model = scicos_model();
	model.sim = new ScilabString(["clkgoto"]);
	model.evtin = new ScilabDouble([1]);
	model.opar=list("A");
	model.ipar=int(1);
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble([-1]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [["A"],[sci2exp(1)]];
	this.x=new standard_define(new ScilabDouble([2,1]),model,exprs," ");
	this.x.graphics.id = new ScilabString(["Goto"]);
	return new BasicBlock(this.x)
}

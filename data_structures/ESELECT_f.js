function ESELECT_f () {


	var out = 2;

	var model = scicos_model();
	model.sim=list(new ScilabString(["eselect"]),new ScilabDouble([-2]));
	model.in1 = new ScilabDouble([1]);
	model.in2 = new ScilabDouble([1]);
	model.intyp = new ScilabDouble([-1]);
	model.evtin = new ScilabDouble([1]);
	model.evtout=ones(out,1);
	model.blocktype = new ScilabString(["l"]);
	model.firing=-ones(out,1);
	model.dep_ut = new ScilabBoolean([true,false]);
	model.nmode = new ScilabDouble([0]);
	model.nzcross = new ScilabDouble([0]);

	var gr_i = [];

	var exprs = [[string(out)],[string(1)],[string(model.nmode)]];
	this.x=new standard_define(new ScilabDouble([4,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

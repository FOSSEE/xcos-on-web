function RELAY_f () {


	var i0 = 0;

	var in = [[-1],[-1]];

	var nin = 2;

	var model = scicos_model();
	model.sim=list(new ScilabString(["relay"]),new ScilabDouble([2]));
	model.in=in;
	model.out = new ScilabDouble([-1]);
	model.evtin=ones(in);
	model.dstate=new ScilabDouble([i0]);
	model.blocktype = new ScilabString(["c"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([true,true]);

	var exprs = [[string(nin)],[string(i0+1)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

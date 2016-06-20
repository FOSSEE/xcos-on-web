function REGISTER () {


	var z0 = zeros(10,1);

	var model = scicos_model();
	model.sim=list(new ScilabString(["delay4"]),new ScilabDouble([4]));
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.evtin = new ScilabDouble([1]);
	model.dstate=z0;
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = strcat(string(z0),,";");

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

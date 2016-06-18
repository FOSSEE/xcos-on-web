function REGISTER () {


	var z0 = zeros(10,1);

	var model = scicos_model();
	model.sim=list("delay4",4);
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.evtin = new ScilabDouble([1]);
	model.dstate=z0;
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = strcat(z0.toString(),,";");

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
}

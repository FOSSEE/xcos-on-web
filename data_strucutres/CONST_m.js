function CONST_m () {


	var C = [1];

	var model = scicos_model();
	model.sim=list("cstblk4",4);
	model.in = new ScilabDouble();
	model.out=size(C,1);
	model.in2 = new ScilabDouble();
	model.out2.push(size(C,2));
	model.rpar=new ScilabDouble([C]);
	model.opar=list();
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = sci2exp(C);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
}

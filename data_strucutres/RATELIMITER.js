function RATELIMITER () {


	var minp = -1;

	var maxp = 1;

	var rpar = [[maxp],[minp]];

	var model = scicos_model();
	model.sim=list("ratelimiter",4);
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.rpar=rpar;
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[maxp.toString()],[minp.toString()]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3.5,2]),model,exprs,gr_i);
}

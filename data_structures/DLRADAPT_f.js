function DLRADAPT_f () {


	var p = [[0],[1]];

	var rn = [];

	var rd = [[0.2+0.8*%i,0.2-0.8*%i],[0.3+0.7*%i,0.3-0.7*%i]];

	var g = [[1],[1]];

	var last_u = [];

	var last_y = [[0],[0]];

	var model = scicos_model();
	model.sim = new ScilabString(["dlradp"]);
	model.in1 = new ScilabDouble([1],[1]);
	model.out = new ScilabDouble([1]);
	model.evtin = new ScilabDouble([1]);
	model.dstate = new ScilabDouble([last_u],[last_y]);
	model.rpar = new ScilabDouble([...colon_operator(p,:)],[real(...rn)],[imag(...rn)],[real(...rd)],[imag(rd(,))],[...g]);
	model.ipar = new ScilabDouble([0],[2],[2]);
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[sci2exp(p)],[sci2exp(rn)],[sci2exp(rd,0)],[sci2exp(g)],[sci2exp(last_u)],[sci2exp(last_y)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

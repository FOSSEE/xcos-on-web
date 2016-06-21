function INTRP2BLK_f () {


	var a = [[0],[1]];

	var b = [[0],[1]];

	var c = [[0,1],[1,2]];

	var model = scicos_model();
	model.sim=list(new ScilabString(["intrp2"]),new ScilabDouble([1]));
	model.in1 = new ScilabDouble([1],[1]);
	model.out = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([a],[b],[...c]);
	model.ipar = new ScilabDouble([2],[2]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[strcat(sci2exp(a))],[strcat(sci2exp(b))],[strcat(sci2exp(c,0))]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

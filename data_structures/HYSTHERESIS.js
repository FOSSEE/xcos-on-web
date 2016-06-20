function HYSTHERESIS () {


	var in = 1;

	var ipar = [0];

	var nzz = 2;

	var rpar = [[1],[0],[1],[0]];

	var model = scicos_model();
	model.sim=list(new ScilabString(["hystheresis"]),new ScilabDouble([4]));
	model.in=new ScilabDouble([in]);
	model.out = new ScilabDouble([1]);
	model.rpar=new ScilabDouble([rpar]);
	model.nzcross=new ScilabDouble([nzz]);
	model.nmode = new ScilabDouble([1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[string(rpar)],[string(sign(nzz))]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

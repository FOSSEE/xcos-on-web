function CSCOPXY () {


	var win = -1;

	var clrs = 4],[siz=1;

	var wdim = [[600],[400]];

	var wpos = [[-1],[-1]];

	var N = 2;

	var xmin = -15;

	var xmax = 15;

	var ymin = -15;

	var ymax = +15;

	var nbr_curves = 1;

	var model = scicos_model();
	model.sim=list(new ScilabString(["cscopxy"]),new ScilabDouble([4]));
	model.in1 = new ScilabDouble([1],[1]);
	model.in2 = new ScilabDouble([1],[1]);
	model.intyp = new ScilabDouble([1],[1]);
	model.evtin = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([xmin],[xmax],[ymin],[ymax]);
	model.ipar = new ScilabDouble([win],[1],[N],[clrs],[siz],[1],[...wpos],[...wdim],[nbr_curves]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[string(nbr_curves)],[sci2exp(clrs)],[sci2exp(siz)],[string(win)],[sci2exp([])],[sci2exp(wdim)],[string(xmin)],[string(xmax)],[string(ymin)],[string(ymax)],[string(N)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

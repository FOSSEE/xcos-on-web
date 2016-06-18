function CANIMXY () {


	var win = -1;

	var clrs = -4;

	var N = 2;

	var siz = 1;

	var wpos = [[-1],[-1]];

	var wdim = [[-1],[-1]];

	var xmin = -15;

	var xmax = 15;

	var ymin = -15;

	var ymax = +15;

	var nbr_curves = 1;

	var model = scicos_model();
	model.sim=list("canimxy",4);
	model.in = new ScilabDouble([1],[1]);
	model.in2 = new ScilabDouble([1],[1]);
	model.intyp = new ScilabDouble([1],[1]);
	model.evtin = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([xmin],[xmax],[ymin],[ymax]);
	model.ipar = new ScilabDouble([win],[1],[N],[clrs],[siz],[0],[...wpos],[...wdim],[nbr_curves]);
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[nbr_curves.toString();clrs.toString();siz.toString();win.toString();"[]";"[]"],[xmin.toString()],[xmax.toString()],[ymin.toString()],[ymax.toString()],[N.toString()]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
}

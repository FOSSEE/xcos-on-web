function CMSCOPE () {


	var win = -1;

	var in = [[1],[1]];

	var wdim = [[-1],[-1]];

	var wpos = [[-1],[-1]];

	var clrs = [[1],[3],[5],[7],[9],[11],[13],[15]];

	var N = 20;

	var ymin = [[-1],[-5]];

	var ymax = [[1],[5]];

	var per = [[30],[30]];

	var yy = [[...transpose(ymin)],[...transpose(ymax)]];

	var period = ...transpose(per);

	var model = scicos_model();
	model.sim=list("cmscope",4);
	model.in=new ScilabDouble([in]);
	model.in2 = new ScilabDouble([1],[1]);
	model.intyp = new ScilabDouble([1],[1]);
	model.evtin = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([0],[...period],[...yy]);
	model.ipar = new ScilabDouble([win;...colon_operator(size,in,"*")],[N],[...wpos],[...wdim],[...in],[clrs(1,sum(in))]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[strcat(in.toString()," ");strcat(clrs.toString()," ");win.toString();sci2exp([]);sci2exp([]);strcat(ymin.toString()," ");strcat(ymax.toString()," ");strcat(per.toString()," ")],[N.toString()],[0.toString()],[emptystr()]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
}

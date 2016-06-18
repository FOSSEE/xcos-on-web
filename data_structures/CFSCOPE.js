function CFSCOPE () {


	var win = -1;

	var wdim = [[600],[400]];

	var wpos = [[-1],[-1]];

	var clrs = [[1],[3],[5],[7],[9],[11],[13],[15]];

	var N = 2;

	var ymin = -15;

	var ymax = +15;

	var per = 30;

	var model = scicos_model();
	model.sim=list("cfscope",4);
	model.evtin = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([0],[ymin],[ymax],[per]);
	model.ipar = new ScilabDouble([win],[1],[N],[clrs],[wpos],[wdim],[1],[1]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[strcat(clrs.toString()," ")],[win.toString()],[sci2exp([])],[sci2exp(wdim)],[ymin.toString()],[ymax.toString()],[per.toString()],[N.toString()],[[1].toString()]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
}

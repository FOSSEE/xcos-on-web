function CSCOPXY3D () {


	var win = -1;

	var clrs = [[1],[2],[3],[4],[5],[6],[7],[13]];

	var siz = [[1],[1],[1],[1],[1],[1],[1],[1]];

	var wdim = [[600],[400]];

	var wpos = [[-1],[-1]];

	var N = 2;

	var param3ds = [[50],[280]];

	var vec_x = [[-15],[15]];

	var vec_y = [[-15],[15]];

	var vec_z = [[-15],[15]];

	var nbr_curves = 1;

	var model = scicos_model();
	model.sim=list("cscopxy3d",4);
	model.in = new ScilabDouble([1],[1],[1]);
	model.in2 = new ScilabDouble([1],[1],[1]);
	model.intyp = new ScilabDouble([1],[1],[1]);
	model.evtin = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([...colon_operator(vec_x,:)],[...vec_y],[vec_z(,)],[...param3ds]);
	model.ipar = new ScilabDouble([win],[8],[N],[...colon_operator(clrs,:)],[...siz],[8],[wpos(,)],[...wdim],[nbr_curves]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[nbr_curves.toString();strcat(clrs.toString()," ");strcat(siz.toString()," ");win.toString();sci2exp([]);sci2exp(wdim);strcat(vec_x.toString()," ");strcat(vec_y.toString()," ");strcat(vec_z.toString()," ");strcat(param3ds.toString()," ")],[N.toString()]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
}

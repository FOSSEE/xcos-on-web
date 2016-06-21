function CANIMXY3D () {


	var win = -1;

	var N = 2;

	var clrs = [[1],[2],[3],[4],[5],[6],[7],[13]];

	var siz = [[1],[1],[1],[1],[1],[1],[1],[1]];

	var wpos = [[-1],[-1]];

	var wdim = [[-1],[-1]];

	var param3ds = [[50],[280]];

	var vec_x = [[-15],[15]];

	var vec_y = [[-15],[15]];

	var vec_z = [[-15],[15]];

	var nbr_curves = 1;

	var model = scicos_model();
	model.sim=list(new ScilabString(["canimxy3d"]),new ScilabDouble([4]));
	model.in1 = new ScilabDouble([1],[1],[1]);
	model.evtin = new ScilabDouble([1]);
	model.in2 = new ScilabDouble([1],[1],[1]);
	model.intyp = new ScilabDouble([1],[1],[1]);
	model.rpar = new ScilabDouble([...colon_operator(vec_x,:)],[...vec_y],[vec_z(,)],[...param3ds]);
	model.ipar = new ScilabDouble([win],[8],[N],[...colon_operator(clrs,:)],[...siz],[8],[wpos(,)],[...wdim],[nbr_curves]);
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[string(nbr_curves);strcat(string(clrs)," ");strcat(string(siz)," ");string(win);"[]";"[]";strcat(string(vec_x)," ");strcat(string(vec_y)," ");strcat(string(vec_z)," ");strcat(string(param3ds)," ")],[string(N)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

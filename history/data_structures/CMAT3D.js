function CMAT3D () {


	var cmin = 0;

	var cmax = 100;

	var colormap = jetcolormap(25);

	var size_c = 25;
	this.x = new ScilabDouble([-1]);

	var y = -1;

	var size_x = 1;

	var size_y = 1;

	var model = scicos_model();
	model.sim=list(new ScilabString(["cmat3d"]),new ScilabDouble([4]));
	model.in1 = new ScilabDouble([-1]);
	model.in2 = new ScilabDouble([-2]);
	model.intyp = new ScilabDouble([1]);
	model.evtin = new ScilabDouble([1]);
	model.ipar = new ScilabDouble([cmin],[cmax],[size_c],[size_x],[size_y]);
	model.rpar = new ScilabDouble([...colormap],[x],[y]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[strcat(string(x)," ");strcat(string(y)," ");string("jetcolormap(25)")],[string(cmin)],[string(cmax)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

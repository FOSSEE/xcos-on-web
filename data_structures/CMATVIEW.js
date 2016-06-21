function CMATVIEW () {


	var cmin = 0;

	var cmax = 100;

	var size_c = 25;

	var colormap = jetcolormap(size_c);

	var alpha_c = 0.24;

	var beta_c = 1;

	var model = scicos_model();
	model.sim=list(new ScilabString(["cmatview"]),new ScilabDouble([4]));
	model.in1 = new ScilabDouble([-1]);
	model.in2 = new ScilabDouble([-2]);
	model.intyp = new ScilabDouble([1]);
	model.evtin = new ScilabDouble([1]);
	model.ipar = new ScilabDouble([cmin],[cmax],[size_c]);
	model.rpar = new ScilabDouble([alpha_c],[beta_c],[...colormap]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[string("jetcolormap(25)")],[string(cmin)],[string(cmax)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

function AFFICH_m () {


	var font = 1;

	var fontsize = 1;

	var colr = 1;

	var nt = 5;

	var nd = 1;

	var in = [1,1];

	var model = scicos_model();
	model.sim=list("affich2",4);
	model.in=in(1,1);
	model.in2.push(in(1,2));
	model.evtin = new ScilabDouble([1]);
	model.dstate = new ScilabDouble([-1],[0],[0],[1],[1],[0],[zeros(in(1,1)*in(1,2),1)]);
	model.ipar = new ScilabDouble([font],[fontsize],[colr],[1000],[nt],[nd],[in(1,1)]);
	model.blocktype = new ScilabString(["c"]);
	model.firing = new ScilabDouble(, , ,],[model.dep_ut,=,[%t,%f]);
	model.label = new ScilabString([""]);

	var exprs = [[,sci2exp([model.in,model.in2])],[font.toString()],[fontsize.toString()],[colr.toString()],[nt.toString()],[nd.toString()],[0.toString(),]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
}

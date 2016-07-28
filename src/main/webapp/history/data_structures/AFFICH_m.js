function AFFICH_m () {


	var font = 1;

	var fontsize = 1;

	var colr = 1;

	var nt = 5;

	var nd = 1;

	var in1 = [1,1];

	var model = scicos_model();
	model.sim=list(new ScilabString(["affich2"]),new ScilabDouble([4]));
	model.in1.push(in1(1,1));
	model.in2.push(in1(1,2));
	model.evtin = new ScilabDouble([1]);
	model.dstate = new ScilabDouble([-1],[0],[0],[1],[1],[0],[zeros(in1(1,1)*in1(1,2),1)]);
	model.ipar = new ScilabDouble([font],[fontsize],[colr],[1000],[nt],[nd],[in1(1,1)]);
	model.blocktype = new ScilabString(["c"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([true,false]);
	model.label = new ScilabString([""]);

	var exprs = [[,sci2exp([model.in1,model.in2])],[string(font)],[string(fontsize)],[string(colr)],[string(nt)],[string(nd)],[string(0),]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new AfficheBlock(this.x)
}

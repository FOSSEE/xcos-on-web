function SUPER_f () {


	var scs = scicos_diagram();
	scs.props.title = new ScilabString(["Super,Block"]);

	var in1 = IN_f("define");
	in1.graphics.orig = new ScilabDouble([40,,40]);
	in1.graphics.sz = new ScilabDouble([20,,20]);

	var out = OUT_f("define");
	out.graphics.orig = new ScilabDouble([240,,40]);
	out.graphics.sz = new ScilabDouble([20,,20]);
	scs.objs.push(in1);
	scs.objs.push(out);

	var model = scicos_model();
	model.sim = new ScilabString(["super"]);
	model.in1 = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.rpar=scs;
	model.blocktype = new ScilabString(["h"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,[],gr_i);
	return new SuperBlock(this.x)
}

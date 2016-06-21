function SUPER_f () {


	var scs = scicos_diagram();
	scs.props.title = new ScilabString(["Super,Block"]);

	var in = IN_f("define");
	in.graphics.orig = new ScilabDouble([40,,40]);
	in.graphics.sz = new ScilabDouble([20,,20]);

	var out = OUT_f("define");
	out.graphics.orig = new ScilabDouble([240,,40]);
	out.graphics.sz = new ScilabDouble([20,,20]);
	scs.objs.push(in);
	scs.objs.push(out);

	var model = scicos_model();
	model.sim = new ScilabString(["super"]);
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.rpar=scs;
	model.blocktype = new ScilabString(["h"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,[],gr_i);
}

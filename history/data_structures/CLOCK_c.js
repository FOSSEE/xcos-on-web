function CLOCK_c () {


	var evtdly = EVTDLY_c("define");
	evtdly.graphics.orig = new ScilabDouble([320,232]);
	evtdly.graphics.sz = new ScilabDouble([40,40]);
	evtdly.graphics.flip = new ScilabBoolean([true]);
	evtdly.graphics.exprs = new ScilabString(["0.1";"0.1"]);
	evtdly.graphics.pein = new ScilabDouble([6]);
	evtdly.graphics.peout = new ScilabDouble([3]);
	evtdly.model.rpar = new ScilabDouble([0.1],[0.1]);
	evtdly.model.firing = new ScilabDouble([0.1]);

	var output_port = CLKOUT_f("define");
	output_port.graphics.orig = new ScilabDouble([399,162]);
	output_port.graphics.sz = new ScilabDouble([20,20]);
	output_port.graphics.flip = new ScilabBoolean([true]);
	output_port.graphics.exprs = new ScilabString(["1"]);
	output_port.graphics.pein = new ScilabDouble([5]);
	output_port.model.ipar = new ScilabDouble([1]);

	var split = CLKSPLIT_f("define");
	split.graphics.orig = new ScilabDouble([380.71066],[172]);
	split.graphics.pein = new ScilabDouble([3]);
	split.graphics.peout = new ScilabDouble([5],[6]);

	var gr_i = [];

	var diagram = scicos_diagram();
	diagram.objs.push(output_port);
	diagram.objs.push(evtdly);
	diagram.objs.push(scicos_link({xx: new ScilabDouble([340],[340],[380.71]),yy: new ScilabDouble([226.29],[172],[172]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([2,1]),to: new ScilabDouble([4,1])}));
	diagram.objs.push(split);
	diagram.objs.push(scicos_link({xx: new ScilabDouble([380.71],[399]),yy: new ScilabDouble([172],[172]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([4,1]),to: new ScilabDouble([1,1])}));
	diagram.objs.push(scicos_link({xx: new ScilabDouble([380.71],[380.71],[340],[340]),yy: new ScilabDouble([172],[302],[302],[277.71]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([4,2]),to: new ScilabDouble([2,1])}));
	this.x=scicos_block();
	this.x.gui = new ScilabString(["CLOCK_c"]);
	this.x.graphics.sz = new ScilabDouble([2,2]);
	this.x.graphics.gr_i=gr_i;
	this.x.graphics.peout = new ScilabDouble([0]);
	this.x.model.sim = new ScilabString(["csuper"]);
	this.x.model.evtout = new ScilabDouble([1]);
	this.x.model.blocktype = new ScilabString(["h"]);
	this.x.model.firing = new ScilabBoolean([false]);
	this.x.model.dep_ut = new ScilabBoolean([false,false]);
	this.x.model.rpar=diagram;
	return new BasicBlock(this.x)
}

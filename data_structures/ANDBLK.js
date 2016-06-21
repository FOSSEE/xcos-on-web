function ANDBLK () {


	var andlog = ANDLOG_f("define");
	andlog.graphics.orig = new ScilabDouble([194,133]);
	andlog.graphics.sz = new ScilabDouble([60,60]);
	andlog.graphics.flip = new ScilabBoolean([true]);
	andlog.graphics.pout = new ScilabDouble([9]);
	andlog.graphics.pein = new ScilabDouble([4],[11]);

	var input_port1 = CLKIN_f("define");
	input_port1.graphics.orig = new ScilabDouble([149,287]);
	input_port1.graphics.sz = new ScilabDouble([20,20]);
	input_port1.graphics.flip = new ScilabBoolean([true]);
	input_port1.graphics.exprs = new ScilabString(["1"]);
	input_port1.graphics.peout = new ScilabDouble([4]);
	input_port1.model.ipar = new ScilabDouble([1]);

	var output_port = CLKOUT_f("define");
	output_port.graphics.orig = new ScilabDouble([450,83]);
	output_port.graphics.sz = new ScilabDouble([20,20]);
	output_port.graphics.flip = new ScilabBoolean([true]);
	output_port.graphics.exprs = new ScilabString(["1"]);
	output_port.graphics.pein = new ScilabDouble([8]);
	output_port.model.ipar = new ScilabDouble([1]);

	var input_port2 = CLKIN_f("define");
	input_port2.graphics.orig = new ScilabDouble([141,330]);
	input_port2.graphics.sz = new ScilabDouble([20,20]);
	input_port2.graphics.flip = new ScilabBoolean([true]);
	input_port2.graphics.exprs = new ScilabString(["2"]);
	input_port2.graphics.peout = new ScilabDouble([6]);
	input_port2.model.ipar = new ScilabDouble([2]);

	var ifthel = IFTHEL_f("define");
	ifthel.graphics.orig = new ScilabDouble([331,137]);
	ifthel.graphics.sz = new ScilabDouble([60,60]);
	ifthel.graphics.flip = new ScilabBoolean([true]);
	ifthel.graphics.pin = new ScilabDouble([9]);
	ifthel.graphics.pein = new ScilabDouble([12]);
	ifthel.graphics.peout = new ScilabDouble([8],[0]);

	var split = CLKSPLIT_f("define");
	split.graphics.orig = new ScilabDouble([234],[275.78348]);
	split.graphics.pein = new ScilabDouble([6]);
	split.graphics.peout = new ScilabDouble([11],[12]);

	var diagram = scicos_diagram();
	diagram.objs.push(andlog);
	diagram.objs.push(input_port1);
	diagram.objs.push(output_port);
	diagram.objs.push(scicos_link({xx: new ScilabDouble([169],[214],[214]),yy: new ScilabDouble([297],[297],[198.71]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([2,1]),to: new ScilabDouble([1,1])}));
	diagram.objs.push(input_port2);
	diagram.objs.push(scicos_link({xx: new ScilabDouble([161],[234],[234]),yy: new ScilabDouble([340],[340],[275.78]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([5,1]),to: new ScilabDouble([10,1])}));
	diagram.objs.push(ifthel);
	diagram.objs.push(scicos_link({xx: new ScilabDouble([351],[351],[450]),yy: new ScilabDouble([131.29],[93],[93]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([7,1]),to: new ScilabDouble([3,1])}));
	diagram.objs.push(scicos_link({xx: new ScilabDouble([262.57],[322.43]),yy: new ScilabDouble([163],[167]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([1,1]),to: new ScilabDouble([7,1])}));
	diagram.objs.push(split);
	diagram.objs.push(scicos_link({xx: new ScilabDouble([234],[234]),yy: new ScilabDouble([275.78],[198.71]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([10,1]),to: new ScilabDouble([1,2])}));
	diagram.objs.push(scicos_link({xx: new ScilabDouble([234],[361],[361]),yy: new ScilabDouble([275.78],[275.78],[202.71]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([10,2]),to: new ScilabDouble([7,1])}));
	this.x=scicos_block();
	this.x.gui = new ScilabString(["ANDBLK"]);
	this.x.graphics.sz = new ScilabDouble([2,2]);
	this.x.graphics.gr_i = new ScilabDouble();
	this.x.graphics.pein = new ScilabDouble([0],[0]);
	this.x.graphics.peout = new ScilabDouble([0]);
	this.x.model.sim = new ScilabString(["csuper"]);
	this.x.model.evtin = new ScilabDouble([1],[1]);
	this.x.model.evtout = new ScilabDouble([1]);
	this.x.model.blocktype = new ScilabString(["h"]);
	this.x.model.firing = new ScilabBoolean([false]);
	this.x.model.dep_ut = new ScilabBoolean([false,false]);
	this.x.model.rpar=diagram;
	return new BasicBlock(this.x)
}

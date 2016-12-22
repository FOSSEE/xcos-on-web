function MCLOCK_f () {


	var nn = 2;

	var dt = 0.1;

	var exprs = [[string(dt)],[string(nn)]];

	var mfclck = MFCLCK_f("define");
	mfclck.graphics.orig = new ScilabDouble([334,199]);
	mfclck.graphics.sz = new ScilabDouble([40,40]);
	mfclck.graphics.flip = new ScilabBoolean([true]);
	mfclck.graphics.exprs=exprs;
	mfclck.graphics.pein = new ScilabDouble([12]);
	mfclck.graphics.peout = new ScilabDouble([4],[3]);
	mfclck.model.rpar = new ScilabDouble([0.1]);
	mfclck.model.ipar=new ScilabDouble([nn]);
	mfclck.model.firing = new ScilabDouble([-1,0]);

	var clksom = CLKSOM_f("define");
	clksom.graphics.orig = new ScilabDouble([457,161]);
	clksom.graphics.sz = new ScilabDouble([16.666667,16.666667]);
	clksom.graphics.flip = new ScilabBoolean([true]);
	clksom.graphics.exprs = new ScilabString(["0.1";"0.1"]);
	clksom.graphics.pein = new ScilabDouble([4],[9],[0]);
	clksom.graphics.peout = new ScilabDouble([5]);

	var output_port1 = CLKOUT_f("define");
	output_port1.graphics.orig = new ScilabDouble([509,261]);
	output_port1.graphics.sz = new ScilabDouble([20,20]);
	output_port1.graphics.flip = new ScilabBoolean([true]);
	output_port1.graphics.exprs = new ScilabString(["1"]);
	output_port1.graphics.pein = new ScilabDouble([10]);
	output_port1.model.ipar = new ScilabDouble([1]);

	var output_port2 = CLKOUT_f("define");
	output_port2.graphics.orig = new ScilabDouble([509,142]);
	output_port2.graphics.sz = new ScilabDouble([20,20]);
	output_port2.graphics.flip = new ScilabBoolean([true]);
	output_port2.graphics.exprs = new ScilabString(["2"]);
	output_port2.graphics.pein = new ScilabDouble([13]);
	output_port2.model.ipar = new ScilabDouble([2]);

	var split1 = CLKSPLIT_f("define");
	split1.graphics.orig = new ScilabDouble([411.92504],[169.33333]);
	split1.graphics.pein = new ScilabDouble([3]);
	split1.graphics.peout = new ScilabDouble([9],[10]);

	var split2 = CLKSPLIT_f("define");
	split2.graphics.orig = new ScilabDouble([482.45315],[169.33333]);
	split2.graphics.pein = new ScilabDouble([5]);
	split2.graphics.peout = new ScilabDouble([12],[13]);

	var gr_i = [];

	var diagram = scicos_diagram();
	diagram.objs.push(mfclck);
	diagram.objs.push(clksom);
	diagram.objs.push(scicos_link({xx: new ScilabDouble([360.7],[360.7],[411.9]),yy: new ScilabDouble([193.3],[169.3],[169.3]),ct: new ScilabDouble([10,-1]),from: new ScilabDouble([1,2]),to: new ScilabDouble([8,1])}));
	diagram.objs.push(scicos_link({xx: new ScilabDouble([347.3],[347.3],[461.8],[461.8]),yy: new ScilabDouble([193.3],[155.5],[155.5],[161]),ct: new ScilabDouble([10,-1]),from: new ScilabDouble([1,1]),to: new ScilabDouble([2,1])}));
	diagram.objs.push(scicos_link({xx: new ScilabDouble([468.9],[482.5]),yy: new ScilabDouble([169.3],[169.3]),ct: new ScilabDouble([10,-1]),from: new ScilabDouble([2,1]),to: new ScilabDouble([11,1])}));
	diagram.objs.push(output_port1);
	diagram.objs.push(output_port2);
	diagram.objs.push(split1);
	diagram.objs.push(scicos_link({xx: new ScilabDouble([411.9],[457]),yy: new ScilabDouble([169.3],[169.3]),ct: new ScilabDouble([10,-1]),from: new ScilabDouble([8,1]),to: new ScilabDouble([2,2])}));
	diagram.objs.push(scicos_link({xx: new ScilabDouble([411.9],[411.9],[509]),yy: new ScilabDouble([169.3],[271],[271]),ct: new ScilabDouble([10,-1]),from: new ScilabDouble([8,2]),to: new ScilabDouble([6,1])}));
	diagram.objs.push(split2);
	diagram.objs.push(scicos_link({xx: new ScilabDouble([482.5],[489.6],[489.6],[354],[354]),yy: new ScilabDouble([169.3],[169.3],[338.3],[338.3],[244.7]),ct: new ScilabDouble([10,-1]),from: new ScilabDouble([11,1]),to: new ScilabDouble([1,1])}));
	diagram.objs.push(scicos_link({xx: new ScilabDouble([482.4],[482.4],[509]),yy: new ScilabDouble([169.3],[152],[152]),ct: new ScilabDouble([10,-1]),from: new ScilabDouble([11,2]),to: new ScilabDouble([7,1])}));
	this.x=scicos_block();
	this.x.gui = new ScilabString(["MCLOCK_f"]);
	this.x.graphics.sz = new ScilabDouble([3,2]);
	this.x.graphics.gr_i=gr_i;
	this.x.model.sim = new ScilabString(["csuper"]);
	this.x.model.evtout = new ScilabDouble([1],[1]);
	this.x.model.blocktype = new ScilabString(["h"]);
	this.x.model.rpar=diagram;
	this.x.graphics.peout = new ScilabDouble([0],[0]);
	return new BasicBlock(this.x)
}

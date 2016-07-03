function DELAY_f () {

    DELAY_f.prototype.define =function DELAY_f() {
    	var evtdly = new EVTDLY_f().internal();
    	evtdly.graphics.orig = new ScilabDouble([243,296]);
    	evtdly.graphics.sz = new ScilabDouble([40,40]);
    	evtdly.graphics.flip = new ScilabBoolean([true]);
    	evtdly.graphics.exprs = new ScilabString(["0.1"],["0"]);
    	evtdly.graphics.pein = new ScilabDouble([10]);
    	evtdly.graphics.peout = new ScilabDouble([7]);
    	evtdly.model.rpar = new ScilabDouble([0.1]);
    	evtdly.model.firing = new ScilabDouble([0]);
    	evtdly.model.uid = new ScilabString([count]); // changed
        evtdly.doc = list(new ScilabString([count++]));
        evtdly.model.outtyp = new ScilabDouble();
    
    	var register = new REGISTER_f().internal();
    	register.graphics.orig = new ScilabDouble([238,195]);
    	register.graphics.sz = new ScilabDouble([50,50]);
    	register.graphics.flip = new ScilabBoolean([true]);
    	register.graphics.exprs = new ScilabString(["0;0;0;0;0;0;0;0;0;0"]);
    	register.graphics.pin = new ScilabDouble([6]);
    	register.graphics.pout = new ScilabDouble([5]);
    	register.graphics.pein = new ScilabDouble([9]);
    	register.model.uid = new ScilabString([count]); // changed
        register.doc = list(new ScilabString([count++]));
        register.model.in2 = new ScilabDouble([1]);
        register.model.intyp = new ScilabDouble([1]);
        register.model.out2 = new ScilabDouble([1]);
    
    	var input_port = new IN_f().internal();
    	input_port.graphics.orig = new ScilabDouble([92,210]);
    	input_port.graphics.sz = new ScilabDouble([20,20]);
    	input_port.graphics.flip = new ScilabBoolean([true]);
    	input_port.graphics.exprs = new ScilabString(["1"],["1"]);
    	input_port.graphics.pout = new ScilabDouble([6]);
    	input_port.model.ipar = new ScilabDouble([1]);
    	input_port.model.uid = new ScilabString([count]); // changed
        input_port.doc = list(new ScilabString([count++]));
        input_port.model.outtyp = new ScilabDouble([-1]);
    
    	var output_port = new OUT_f().internal();
    	output_port.graphics.orig = new ScilabDouble([440,210]);
    	output_port.graphics.sz = new ScilabDouble([20,20]);
    	output_port.graphics.flip = new ScilabBoolean([true]);
    	output_port.graphics.exprs = new ScilabString(["1"],["1"]);
    	output_port.graphics.pin = new ScilabDouble([5]);
    	output_port.model.ipar = new ScilabDouble([1]);
    	output_port.model.uid = new ScilabString([count]); // changed
        output_port.doc = list(new ScilabString([count++]));
        output_port.model.outtyp = new ScilabDouble();
    
    	var split = new CLKSPLIT_f().internal();
    	split.graphics.orig = new ScilabDouble([263,271.2]);
    	split.graphics.pein = new ScilabDouble([7]);
    	split.graphics.peout = new ScilabDouble([9],[10]);
    	split.model.uid = new ScilabString([count]); // changed
        split.doc = list(new ScilabString([count++]));
    
    	var diagram = scicos_diagram();
    	diagram.objs.push(input_port);
    	diagram.objs.push(output_port);
    	diagram.objs.push(register);
    	diagram.objs.push(evtdly);
    	diagram.objs.push(split);
    	diagram.objs.push(scicos_link({
    	    xx: new ScilabDouble([296.6],[440]),
    	    yy: new ScilabDouble([220],[220]),
    	    from: new ScilabDouble([3,1,0]),
    	    to: new ScilabDouble([2,1,1])}));
    	diagram.objs.push(scicos_link({
    	    xx: new ScilabDouble([112],[229.4]),
    	    yy: new ScilabDouble([220],[220]),
    	    from: new ScilabDouble([1,1,0]),
    	    to: new ScilabDouble([3,1,1])}));
    	diagram.objs.push(scicos_link({
    	    xx: new ScilabDouble([263],[263]),
    	    yy: new ScilabDouble([290.3],[271.2]),
    	    ct: new ScilabDouble([5,-1]),
    	    from: new ScilabDouble([4,1,0]),
    	    to: new ScilabDouble([5,1,1])}));
    	diagram.objs.push(scicos_link({
    	    xx: new ScilabDouble([263],[263]),
    	    yy: new ScilabDouble([271.2],[250.7]),
    	    ct: new ScilabDouble([5,-1]),
    	    from: new ScilabDouble([5,1,0]),
    	    to: new ScilabDouble([3,1,1])}));
    	diagram.objs.push(scicos_link({
    	    xx: new ScilabDouble([263],[308.6],[308.6],[263],[263]),
    	    yy: new ScilabDouble([271.2],[271.2],[367],[367],[341.7]),
    	    ct: new ScilabDouble([5,-1]),
    	    from: new ScilabDouble([5,2,0]),
    	    to: new ScilabDouble([4,1,1])}));
    	
    	this.x=scicos_block();
    	this.x.gui = new ScilabString(["DELAY_f"]);
    	this.x.graphics.sz = new ScilabDouble([2,2]);
    	this.x.graphics.gr_i = new ScilabDouble();
    	this.x.graphics.pin = new ScilabDouble([0]);
    	this.x.graphics.pout = new ScilabDouble([0]);
    	this.x.model.sim = new ScilabString(["csuper"]);
    	this.x.model.in = new ScilabDouble([1]);
    	this.x.model.out = new ScilabDouble([1]);
    	this.x.model.blocktype = new ScilabString(["h"]);
    	this.x.model.dep_ut = new ScilabBoolean([false,false]);
    	this.x.model.rpar=diagram;
    	this.x.graphics.in_implicit = new ScilabString(["E"]);
    	this.x.graphics.in_style = new ScilabString([""]);
    	this.x.graphics.out_implicit = new ScilabString(["E"]);
    	this.x.graphics.out_style = new ScilabString([""]);
    	return new BasicBlock(this.x);
    }
    DELAY_f.prototype.details = function DELAY_f() {
        return this.x;
    }
}

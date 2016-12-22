function ZCROSS_f() {
	
    ZCROSS_f.prototype.define = function ZCROSS_f() {
        this.rpar = [[-1], [-1], [0], [0]];

        this.in = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["zcross"]), new ScilabDouble([1]));
        model.in = new ScilabDouble([this.in]);
        model.nzcross = new ScilabDouble([this.in]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([-1], [-1], [0], [0]);
        model.blocktype = new ScilabString(["z"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.in)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ZCROSS_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        
        return new BasicBlock(this.x);
    }
    
    ZCROSS_f.prototype.details = function ZCROSS_f() {
        return this.x;
    }
}

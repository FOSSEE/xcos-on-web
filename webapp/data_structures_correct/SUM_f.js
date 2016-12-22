function SUM_f() {
	
    SUM_f.prototype.define = function SUM_f() {
        var model = scicos_model();
        
        model.sim = list(new ScilabString(["plusblk"]), new ScilabDouble([2]));
        model.in = new ScilabDouble([-1], [-1], [-1]);
        model.out = new ScilabDouble([-1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SUM_f\",sz(1),sz(2));"]);
        var exprs = new ScilabString();
        
        this.x = new standard_define(new ScilabDouble([1, 1]), model, exprs, gr_i);
        
        return new RoundBlock(this.x);
        
    }

    SUM_f.prototype.details = function SUM_f() {
        return this.x;
        
    }
}

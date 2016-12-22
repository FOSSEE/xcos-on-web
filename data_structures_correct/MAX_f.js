function MAX_f() {
    
    MAX_f.prototype.define = function MAX_f() {
        this.in = new ScilabDouble([-1]);

        var model = scicos_model();
        model.sim = new ScilabString(["maxblk"]);
        model.in = this.in;
        model.out = new ScilabDouble(1);
        model.dstate = new ScilabDouble([0], [0]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([" "]);

        var gr_i = ["xstringb(orig(1),orig(2),\"MAX_f\",sz(1),sz(2));"];
        this.x = new standard_define(new ScilabDouble([2,2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    
    MAX_f.prototype.details = function MAX_f() {
        return this.x;
    }
}

function LOGBLK_f() {

    LOGBLK_f.prototype.define = function LOGBLK_f() {
        this.in1 = 1;
        this.a = Math.E;

        var model = scicos_model();
        model.sim = new ScilabString(["logblk"]);
        model.in = new ScilabDouble([-1]);
        model.out = new ScilabDouble([-1]);
        model.rpar = new ScilabDouble([this.a]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString(["%e"]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"LOGBLK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    LOGBLK_f.prototype.details = function LOGBLK_f() {
        return this.x;
    }
}


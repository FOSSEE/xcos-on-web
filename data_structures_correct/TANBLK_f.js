function TANBLK_f() {

    TANBLK_f.prototype.define = function TANBLK_f() {
        this.in1 = -1;

        var model = scicos_model();
        model.sim = new ScilabString(["tanblk"]);
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([this.in1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(in1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"TANBLK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    TANBLK_f.prototype.details = function TANBLK_f() {
        return this.x;
    }
}

function MIN_f() {

    MIN_f.prototype.define = function MIN_f() {
        this.in1 = -1;

        var model = scicos_model();
        model.sim = new ScilabString(["minblk"]);
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([0], [0]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.in1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MIN_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    MIN_f.prototype.details = function MIN_f() {
        return this.x;
    }
}


function DIFF_f() {

    DIFF_f.prototype.define = function DIFF_f() {
        this.x0 = [[0], [0]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["diffblk"]), new ScilabDouble([10001]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.state = new ScilabDouble(...this.x0);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString([sci2exp(this.x0[0])], [sci2exp(this.x0[1])]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DIFF_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DIFF_f.prototype.details = function DIFF_f() {
        return this.x;
    }
}


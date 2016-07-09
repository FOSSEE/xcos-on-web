function GAINBLK_f() {

    GAINBLK_f.prototype.define = function GAINBLK_f() {
        this.gain = 1;
        this.in1 = 1;
        this.out = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["gain"]);
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([this.out]);
        model.rpar = new ScilabDouble([this.gain]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.gain)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GAINBLK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    GAINBLK_f.prototype.details = function GAINBLK_f() {
        return this.x;
    }
}


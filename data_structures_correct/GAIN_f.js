function GAIN_f() {

    GAIN_f.prototype.define = function GAIN_f() {
        this.gain = 1;
        this.in1 = 1;
        this.out = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["gain"]);
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.gain]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.gain)], [sci2exp(this.in1)], [sci2exp(this.out)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GAIN_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    GAIN_f.prototype.details = function GAIN_f() {
        return this.x;
    }
}


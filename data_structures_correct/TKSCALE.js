function TKSCALE() {

    TKSCALE.prototype.define = function TKSCALE() {
        this.a = -10;
        this.b = 10;
        this.f = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["tkscaleblk"]), new ScilabDouble([5]));
        model.out = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.a], [this.b], [this.f]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp(this.a)], [sci2exp(this.b)], [sci2exp(this.f)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"TKSCALE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    TKSCALE.prototype.details = function TKSCALE() {
        return this.x;
    }
}

function INTEGRAL_f() {

    INTEGRAL_f.prototype.define = function INTEGRAL_f() {
        this.x0 = 0;

        var model = scicos_model();
        model.sim = new ScilabString(["integr"]);
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.state = new ScilabDouble([this.x0]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString([sci2exp(this.x0)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"INTEGRAL_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    INTEGRAL_f.prototype.details = function INTEGRAL_f() {
        return this.x;
    }
}


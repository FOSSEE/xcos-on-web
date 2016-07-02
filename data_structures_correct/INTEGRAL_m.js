function INTEGRAL_m() {

    INTEGRAL_m.prototype.define = function INTEGRAL_m() {
        this.maxp = 1;
        this.minp = -1;
        this.rpar = [];

        var model = scicos_model();
        model.state = new ScilabDouble([0]);
        model.sim = list(new ScilabString(["integral_func"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.rpar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString([0], [0], [0], [this.maxp], [this.minp]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"INTEGRAL_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    INTEGRAL_m.prototype.details = function INTEGRAL_m() {
        return this.x;
    }
}


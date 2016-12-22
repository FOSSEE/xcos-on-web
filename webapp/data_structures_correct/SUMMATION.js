function SUMMATION() {
    SUMMATION.prototype.define = function SUMMATION() {
        this.sgn = [[1],[-1]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["summation"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1], [-1]);
        model.out = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2], [-2]);
        model.out2 = new ScilabDouble([-2]);
        model.ipar = new ScilabDouble(...this.sgn);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.sgn)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SUMMATION\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 3]), model, exprs, gr_i);
        return new Summation(this.x);
    }

    SUMMATION.prototype.details = function SUMMATION() {
        return this.x;
    }
}

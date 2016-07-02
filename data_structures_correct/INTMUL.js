function INTMUL() {

    INTMUL.prototype.define = function INTMUL() {
        this.sgn = 0;

        var model = scicos_model();
        model.sim = list(new ScilabString(["matmul_i32"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1], [-2]);
        model.out = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2], [-3]);
        model.out2 = new ScilabDouble([-3]);
        model.intyp = new ScilabDouble([3, 3]);
        model.outtyp = new ScilabDouble([3]);
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble([this.sgn]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(3)], [sci2exp(0)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"INTMUL\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    INTMUL.prototype.details = function INTMUL() {
        return this.x;
    }
}


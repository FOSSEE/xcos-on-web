function MATMUL() {

    MATMUL.prototype.define = function MATMUL() {

        var model = scicos_model();
        model.sim = list(new ScilabString(["matmul_m"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1], [-2]);
        model.in2 = new ScilabDouble([-2], [-3]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-3]);
        model.dep_ut = new ScilabBoolean([true, false]);
        model.ipar = new ScilabDouble([1]);

        var label = new ScilabString([sci2exp(parseInt(getData(model.ipar)))]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATMUL\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATMUL.prototype.details = function MATMUL() {
        return this.x;
    }
}


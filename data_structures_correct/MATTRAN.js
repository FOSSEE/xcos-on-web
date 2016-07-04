function MATTRAN() {

    MATTRAN.prototype.define = function MATTRAN() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["mattran_m"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.out = new ScilabDouble([-2]);
        model.out2 = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATTRAN\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATTRAN.prototype.details = function MATTRAN() {
        return this.x;
    }
}


function SQRT() {

    SQRT.prototype.define = function SQRT() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["mat_sqrt"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SQRT\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }

    SQRT.prototype.details = function SQRT() {
        return this.x;
    }
}

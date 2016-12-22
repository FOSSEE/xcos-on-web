function DERIV() {

    DERIV.prototype.define = function DERIV() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["deriv"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1]);
        model.out = new ScilabDouble([-1]);
        model.blocktype = new ScilabString(["x"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabDouble();

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DERIV\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DERIV.prototype.details = function DERIV() {
        return this.x;
    }
}

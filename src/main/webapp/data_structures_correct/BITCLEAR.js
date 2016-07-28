function BITCLEAR() {
    BITCLEAR.prototype.define = function BITCLEAR() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["bit_clear_32"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([3]);
        model.outtyp = new ScilabDouble([3]);
        model.opar = list(int32([0]));
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(3)], [sci2exp(0)]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"BITCLEAR\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    BITCLEAR.prototype.details = function BITCLEAR() {
        return this.x;
    }
}

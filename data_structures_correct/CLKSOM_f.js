function CLKSOM_f() {

    CLKSOM_f.prototype.internal = function CLKSOM_f() {

        var model = scicos_model();
        model.sim = new ScilabString(["sum"]);
        model.evtin = new ScilabDouble([1], [1], [1]);
        model.evtout = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);
        model.outtyp = new ScilabDouble();

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKSOM_f\",sz(1),sz(2));"]);
        var block = standard_define(new ScilabDouble([1, 1]), model, [], gr_i);
        block.graphics.style = new ScilabString(["CLKSOM_f"])
        return block;
    }
}

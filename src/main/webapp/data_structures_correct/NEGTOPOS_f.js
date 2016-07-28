function NEGTOPOS_f() {

    NEGTOPOS_f.prototype.define = function NEGTOPOS_f() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["zcross"]), new ScilabDouble([1]));
        model.nzcross = new ScilabDouble([1]);
        model.in = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([-1], [-1], [0], [-1]);
        model.blocktype = new ScilabString(["z"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"NEGTOPOS_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }

    NEGTOPOS_f.prototype.details = function NEGTOPOS_f() {
        return this.x;
    }
}

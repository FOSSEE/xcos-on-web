function POSTONEG_f() {

    POSTONEG_f.prototype.define = function POSTONEG_f() {
        this.rpar = [[-1], [-1], [-1], [0]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["zcross"]), new ScilabDouble([1]));
        model.nzcross = new ScilabDouble([1]);
        model.in = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([-1], [-1], [-1], [0]);
        model.blocktype = new ScilabString(["z"]);
        model.dep_ut = new ScilabBoolean([true, false]);
        model.firing = new ScilabDouble([-1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"POSTONEG_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, [], gr_i);
        return new BasicBlock(this.x);
    }
    POSTONEG_f.prototype.details = function POSTONEG_f() {
        return this.x;
    }
}


function SWITCH2_m() {

    SWITCH2_m.prototype.define = function SWITCH2_m() {
        this.ipar = [0];
        this.nzz = 1;
        this.rpar = 0;

        var model = scicos_model();
        model.sim = list(new ScilabString(["switch2_m"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1], [1], [-1]);
        model.in2 = new ScilabDouble([-2], [1], [-2]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.outtyp = new ScilabDouble([1]);
        model.ipar = new ScilabDouble(this.ipar);
        model.rpar = new ScilabDouble([this.rpar]);
        model.nzcross = new ScilabDouble([this.nzz]);
        model.nmode = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([1], this.ipar, [this.rpar], [this.nzz]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SWITCH2_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    SWITCH2_m.prototype.details = function SWITCH2_m() {
        return this.x;
    }
}

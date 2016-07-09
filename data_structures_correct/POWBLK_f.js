function POWBLK_f() {

    POWBLK_f.prototype.define = function POWBLK_f() {
        this.in = 1;
        this.a = 1.5;

        var model = scicos_model();
        model.sim = new ScilabString(["powblk"]);
        model.in = new ScilabDouble([-1]);
        model.out = new ScilabDouble([-1]);
        model.rpar = new ScilabDouble([this.a]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.a]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"POWBLK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    POWBLK_f.prototype.details = function POWBLK_f() {
        return this.x;
    }
}

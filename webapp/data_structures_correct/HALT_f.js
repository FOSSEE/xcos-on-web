function HALT_f() {

    HALT_f.prototype.define = function HALT_f() {
        this.n = 0;

        var model = scicos_model();
        model.sim = new ScilabString(["hltblk"]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([0]);
        model.ipar = new ScilabDouble([0]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.n]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"HALT_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    HALT_f.prototype.details = function HALT_f() {
        return this.x;
    }
}


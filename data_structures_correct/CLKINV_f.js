function CLKINV_f() {

    CLKINV_f.prototype.define = function CLKINV_f() {
        this.prt = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["input"]);
        model.evtout = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([this.prt]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.prt]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKINV_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([1, 1]), model, exprs, gr_i);
        return new EventInBlock(this.x);
    }
    CLKINV_f.prototype.details = function CLKINV_f() {
        return this.x;
    }
}

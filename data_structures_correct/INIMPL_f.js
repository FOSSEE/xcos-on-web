function INIMPL_f() {

    INIMPL_f.prototype.define = function INIMPL_f() {
        var model = scicos_model();
        model.sim = new ScilabString(["inimpl"]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([1]);
        model.dep_ut = new ScilabBoolean([false, false]);
        model.blocktype = new ScilabString(["c"]);

        var mo = modelica();
        mo.model = new ScilabString(["PORT"]);
        mo.outputs = new ScilabString(["n"]);
        mo.inputs = new ScilabDouble();
        model.equations = mo;

        var exprs = new ScilabString(["1"]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),&quot;INIMPL_f&quot;,sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([1, 1]), model, exprs, gr_i);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new ImplicitInBlock(this.x);
    }
    INIMPL_f.prototype.details = function INIMPL_f() {
        return this.x;
    }
}

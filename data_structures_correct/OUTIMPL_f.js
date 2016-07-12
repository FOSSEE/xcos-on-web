function OUTIMPL_f() {

    OUTIMPL_f.prototype.define = function OUTIMPL_f() {
        var model = scicos_model();
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([1]);

        this.prt = 1;
        model.sim = new ScilabString(["outimpl"]);
        model.ipar = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["PORT"]);
        mo.inputs = new ScilabString(["n"]);
        mo.outputs = new ScilabDouble();
        model.equations = mo;

        var exprs = new ScilabString(["1"]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),&quot;OUTIMPL_f&quot;,sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([1, 1]), model, exprs, gr_i);
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        
        this.implicitOutBlock = new ImplicitOutBlock(this.x);
        this.displayParameter = [this.implicitOutBlock.ordering];
        return this.implicitOutBlock;
    }
    OUTIMPL_f.prototype.details = function OUTIMPL_f() {
        return this.x;
    }
}

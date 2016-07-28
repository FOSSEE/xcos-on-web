function GOTOMO() {

    GOTOMO.prototype.define = function GOTOMO() {

        var model = scicos_model();
        model.sim = new ScilabString(["gotomo"]);
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble();
        model.out = new ScilabDouble();
        model.out2 = new ScilabDouble();
        model.outtyp = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([1]);
        model.opar = list(new ScilabString(["A"]));
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["gotomo"]);
        mo.inputs = new ScilabString(["p"]);

        var exprs = new ScilabString(["A"], [sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GOTOMO\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 1]), model, exprs, gr_i);
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    GOTOMO.prototype.details = function GOTOMO() {
        return this.x;
    }
}


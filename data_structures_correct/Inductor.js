function Inductor() {

    Inductor.prototype.define = function Inductor() {
        this.L = 1.0E-5;

        var model = scicos_model();
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.L.toExponential(1)]);
        model.sim = new ScilabString(["Inductor"]);

        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["Inductor"]);
        mo.inputs = new ScilabString(["p"]);
        mo.outputs = new ScilabString(["n"]);
        mo.parameters = list(new ScilabString(["L"]), list(new ScilabDouble([this.L.toExponential(1)])));
        model.equations = mo;

        var exprs = new ScilabString([this.L]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Inductor\",sz(1),sz(2));"]);
        this.x = standard_define([2, 0.9], model, exprs, list(gr_i, 0));
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    Inductor.prototype.details = function Inductor() {
        return this.x;
    }
}


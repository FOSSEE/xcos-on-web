function Diode() {

    Diode.prototype.define = function Diode() {

        this.Ids = 1.e-6;
        this.Vt = 0.04;
        this.Maxexp = 15;
        this.R = 1.e8;

        var model = scicos_model();
        model.rpar = new ScilabDouble([this.Ids], [this.Vt], [this.Maxexp], [this.R]);
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.sim = new ScilabString(["Diode"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = modelica();
        mo.model = new ScilabString(["Diode"]);
        mo.inputs = new ScilabString(["p"]);
        mo.outputs = new ScilabString(["n"]);
        mo.parameters = list(new ScilabString(["Ids", "Vt", "Maxexp", "R"]), list(new ScilabDouble([this.Ids]), new ScilabDouble([this.Vt]), new ScilabDouble([this.Maxexp]), new ScilabDouble([this.R])));
        model.equations = mo;

        var exprs = new ScilabString([this.Ids], [this.Vt], [this.Maxexp], [this.R]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Diode\",sz(1),sz(2));"]);
        this.x = standard_define(new ScilabDouble([2, 1]), model, exprs, list(gr_i, 0));
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    Diode.prototype.details = function Diode() {
        return this.x;
    }
}

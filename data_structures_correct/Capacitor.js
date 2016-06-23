function Capacitor() {

    Capacitor.prototype.define = function Capacitor() {

        var model = scicos_model();
        var C = 0.01,v = 0;
        model.rpar = new ScilabDouble([C], [v]);
        model.sim = new ScilabString(["Capacitor"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = modelica();
        mo.model = new ScilabString(["Capacitor"]);
        mo.inputs = new ScilabString(["p"]);
        mo.outputs = new ScilabString(["n"]);
        mo.parameters = list(new ScilabString(["C", "v"]), list(new ScilabDouble([C]), new ScilabDouble([v])), new ScilabDouble([0, 1]));
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "*"), 1));
        model.out = new ScilabDouble(...ones(size(getData(mo.outputs), "*"), 1));

        var exprs = new ScilabString([C], [v]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Capacitor\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 1.1]), model, exprs, list(gr_i, new ScilabDouble([0])));
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    Capacitor.prototype.details = function Capacitor() {
        return this.x;
    }
}
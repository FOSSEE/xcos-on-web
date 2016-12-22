function SourceP() {

    SourceP.prototype.define = function SourceP() {
        var model = scicos_model();

        this.P0 = 300000;
        this.T0 = 290;
        this.H0 = 100000;
        this.option_temperature = 1;

        model.rpar = new ScilabDouble([this.P0], [this.T0], [this.H0], [this.option_temperature]);
        model.sim = new ScilabString(["Source"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["Source"]);
        mo.inputs = new ScilabDouble();
        mo.outputs = new ScilabString(["C"]);
        mo.parameters = list(new ScilabString(["P0"], ["T0"], ["H0"], ["option_temperature"]), new ScilabDouble([this.P0], [this.T0], [this.H0], [this.option_temperature]));
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "*"), 1));
        model.out = new ScilabDouble(...ones(size(getData(mo.outputs), "*"), 1));

        var exprs = new ScilabString([this.P0], [this.T0], [this.H0], [this.option_temperature]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SourceP\",sz(1),sz(2));"]);
        this.x = new standard_define([2.5, 2], model, exprs, list(gr_i, new ScilabDouble([0])));
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }

    SourceP.prototype.details = function SourceP() {
        return this.x;
    }
}

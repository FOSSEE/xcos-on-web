function PuitsP() {

    PuitsP.prototype.define = function PuitsP() {
        this.P0 = 100000;
        this.T0 = 290;
        this.H0 = 100000;
        this.option_temperature = 1;

        var model = scicos_model();
        model.rpar = new ScilabDouble([this.P0], [this.T0], [this.H0], [this.option_temperature]);
        model.sim = new ScilabString(["Puits"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["Puits"]);
        mo.inputs = new ScilabString(["C"]);
        mo.outputs = new ScilabDouble();
        mo.parameters = list(new ScilabString(["P0"], ["T0"], ["H0"], ["option_temperature"]), new ScilabDouble([this.P0], [this.T0], [this.H0], [this.option_temperature]));
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "*"), 1));

        var exprs = new ScilabString([this.P0], [this.T0], [this.H0], [this.option_temperature]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"PuitsP\",sz(1),sz(2));"]);
        this.x = standard_define([2.5, 2], model, exprs, list(gr_i, new ScilabDouble(0)));
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    PuitsP.prototype.details = function PuitsP() {
        return this.x;
    }
}


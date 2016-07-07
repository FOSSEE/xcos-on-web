function SineVoltage() {

    SineVoltage.prototype.define = function SineVoltage() {
        var model = scicos_model();
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);

        this.V = 1;
        this.ph = 0;
        this.frq = 1;
        this.offset = 0;
        this.start = 0;

        model.rpar = new ScilabDouble([this.V], [this.ph], [this.frq], [this.offset], [this.start]);
        model.sim = new ScilabString(["SineVoltage"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = modelica();
        mo.model = new ScilabString(["SineVoltage"]);
        mo.inputs = new ScilabString(["p"]);
        mo.outputs = new ScilabString(["n"]);
        mo.parameters = list(new ScilabString(["V"], ["phase"], ["freqHz"], ["offset"], ["startTime"]), list(new ScilabDouble([this.V]), new ScilabDouble([this.ph]), new ScilabDouble([this.frq]), new ScilabDouble([this.offset]), new ScilabDouble([this.start])));
        model.equations = mo;

        var exprs = new ScilabString([this.V], [this.ph], [this.frq], [this.offset], [this.start]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SineVoltage\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }

    SineVoltage.prototype.details = function SineVoltage() {
        return this.x;
    }
}

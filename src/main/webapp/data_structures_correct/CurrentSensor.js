function CurrentSensor() {

    CurrentSensor.prototype.define = function CurrentSensor() {
        var model = scicos_model();
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1], [1]);
        model.sim = new ScilabString(["CurrentSensor"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["CurrentSensor"]);
        mo.inputs = new ScilabString(["p"]);
        mo.outputs = new ScilabString(["n"], ["i"]);
        model.equations = mo;

        var exprs = new ScilabDouble();

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CurrentSensor\",sz(1),sz(2));"]);
        this.x = standard_define(new ScilabDouble([2, 2]), model, exprs, list(gr_i, new ScilabDouble([0])));
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"], ["E"]);
        return new BasicBlock(this.x);
    }

    CurrentSensor.prototype.details = function CurrentSensor() {
        return this.x;
    }
}

function VariableResistor() {

    VariableResistor.prototype.define = function VariableResistor() {
        var model = scicos_model();
        model.sim = new ScilabString(["VariableResistor"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["VariableResistor"]);
        mo.inputs = new ScilabString(["p", "R"]);
        mo.outputs = new ScilabString(["n"]);
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "*"), 1));
        model.out = new ScilabDouble(...ones(size(getData(mo.outputs), "*"), 1));

        var exprs = new ScilabDouble();

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"VariableResistor\",sz(1),sz(2));"]);;
        this.x = standard_define([2, 2], model, exprs, list(gr_i, 0));
        this.x.graphics.in_implicit = new ScilabString(["I", "E"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }

    VariableResistor.prototype.details = function VariableResistor() {
        return this.x;
    }
}

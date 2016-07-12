function VanneReglante() {

    VanneReglante.prototype.define = function VanneReglante() {
        var model = scicos_model();
        model.in = new ScilabDouble([1], [1]);
        model.out = new ScilabDouble([1]);

        this.Cvmax = 8005.42;
        this.p_rho = 0;

        model.rpar = new ScilabDouble([this.Cvmax], [this.p_rho]);
        model.sim = new ScilabString(["VanneReglante"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["VanneReglante"]);
        mo.inputs = new ScilabString(["C1", "Ouv"]);
        mo.outputs = new ScilabString(["C2"]);
        mo.parameters = list(new ScilabString(["Cvmax"], ["p_rho"]), new ScilabDouble([this.Cvmax], [this.p_rho]));
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "*"), 1));
        model.out = new ScilabDouble(...ones(size(getData(mo.outputs), "*"), 1));

        var exprs = new ScilabString([this.Cvmax], [this.p_rho]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"VanneReglante\",sz(1),sz(2));"]);
        this.x = standard_define([2, 2], model, exprs, list(gr_i, new ScilabDouble([0])));
        this.x.graphics.in_implicit = new ScilabString(["I"], ["E"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }

    VanneReglante.prototype.details = function VanneReglante() {
        return this.x;
    }
}

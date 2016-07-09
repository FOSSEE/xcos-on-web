function NMOS() {

    NMOS.prototype.define = function NMOS() {
        this.W = 20.e-6;
        this.L = 6.e-6;
        this.Beta = 0.041e-3;
        this.Vt = 0.8;
        this.K2 = 1.144;
        this.K5 = 0.7311;
        this.dW = -2.5e-6;
        this.dL = -1.5e-6;
        this.RDS = 1.e+7;

        var model = scicos_model();
        model.sim = new ScilabString(["NMOS"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["NMOS"]);
        mo.outputs = new ScilabString(["D"], ["B"], ["S"]);
        mo.inputs = new ScilabString(["G"]);
        mo.parameters = list(new ScilabString(["W"], ["L"], ["Beta"], ["Vt"], ["K2"], ["K5"], ["dW"], ["dL"], ["RDS"]), new ScilabDouble([this.W], [this.L], [this.Beta], [this.Vt], [this.K2], [this.K5], [this.dW], [this.dL], [this.RDS]));
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "*"), 1));
        model.out = new ScilabDouble(...ones(size(getData(mo.outputs), "*"), 1));

        var exprs = new ScilabString([this.W], [this.L], [this.Beta], [this.Vt], [this.K2], [this.K5], [this.dW], [this.dL], [this.RDS]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"NMOS\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"], ["I"], ["I"]);
        return new BasicBlock(this.x);
    }
    NMOS.prototype.details = function NMOS() {
        return this.x;
    }
}


function OpAmp() {

    OpAmp.prototype.define = function OpAmp() {
        this.S = [];
        this.Z = [];

        var model = scicos_model();
        model.sim = new ScilabString(["OpAmp"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = modelica();
        mo.model = model.sim;
        mo.inputs = new ScilabString(["in_p"], ["in_n"]);
        mo.outputs = new ScilabString(["out"]);
        mo.parameters = list(new ScilabDouble(), new ScilabDouble());
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "*"), 1));
        model.out = new ScilabDouble(...ones(size(getData(mo.outputs), "*"), 1));
        model.rpar = new ScilabDouble();

        var exprs = new ScilabString();

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"OpAmp\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 5]), model, exprs, gr_i);
        this.x.graphics.in_implicit = new ScilabString(["I"], ["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    OpAmp.prototype.details = function OpAmp() {
        return this.x;
    }
}


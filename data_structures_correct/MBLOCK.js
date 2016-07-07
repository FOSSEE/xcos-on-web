function MBLOCK() {

    MBLOCK.prototype.define = function MBLOCK() {
        this.in1 = ["u1"];
        this.intype = ["I"];
        this.out = [["y1"],["y2"]];
        this.outtype = [["I"],["E"]];
        this.param = [["R"],["L"]];
        this.paramv = list(new ScilabDouble([0.1]), new ScilabDouble([0.0001]));
        this.pprop = [[0],[0]];
        this.nameF = "generic";

        var exprs = tlist(["MBLOCK", "in", "intype", "out", "outtype", "param", "paramv", "pprop", "nameF", "funtxt"], new ScilabString(["MBLOCK", "in", "intype", "out", "outtype", "param", "paramv", "pprop", "nameF", "funtxt"]), new ScilabString([sci2exp(this.in1)]), new ScilabString([sci2exp(this.intype)]), new ScilabString([sci2exp(this.out)]), new ScilabString([sci2exp(this.outtype)]), new ScilabString([sci2exp(this.param)]), list(new ScilabString([0.1]), new ScilabString([0.0001])), new ScilabString([sci2exp(this.pprop)]), new ScilabString([this.nameF]), new ScilabDouble());

        var model = scicos_model();
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);
        model.rpar = [];

        for (var i = 0; i < this.paramv.length; i++) {
            model.rpar.push(getData(this.paramv[i]));
        }

        model.rpar = new ScilabDouble(...model.rpar);
        var mo = modelica();
        mo.model = new ScilabString([this.nameF]);
        mo.parameters = list(new ScilabString(...this.param), this.paramv);
        model.sim = list(mo.model, new ScilabDouble([30004]));
        mo.inputs = new ScilabString(this.in1);
        mo.outputs = new ScilabString(...this.out);
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "r"), 1));
        model.out = new ScilabDouble(...ones(size(getData(mo.outputs), "r"), 1));
        model.equations = mo;
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MBLOCK\",sz(1),sz(2));"]);

        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        this.x.graphics.in_implicit = new ScilabString(this.intype);
        this.x.graphics.out_implicit = new ScilabString(...this.outtype);
        return new BasicBlock(this.x);
    }

    MBLOCK.prototype.details = function MBLOCK() {
        return this.x;
    }
}

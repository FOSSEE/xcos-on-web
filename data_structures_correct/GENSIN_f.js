function GENSIN_f() {

    GENSIN_f.prototype.define = function GENSIN_f() {
        this.rpar = [[1], [1], [0]];

        var model = scicos_model();
        model.sim = new ScilabString(["gensin"]);
        model.in = new ScilabDouble();
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([1], [1], [0]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString(this.rpar[0], this.rpar[1], this.rpar[2]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GENSIN_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    GENSIN_f.prototype.details = function GENSIN_f() {
        return this.x;
    }
}


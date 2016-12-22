function CONST_f() {

    CONST_f.prototype.define = function CONST_f() {
        this.C = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["cstblk"]), new ScilabDouble([1]));
        model.in = new ScilabDouble();
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.C]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp(this.C)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONST_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    CONST_f.prototype.details = function CONST_f() {

        return this.x;
    }
}

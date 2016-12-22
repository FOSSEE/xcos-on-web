function QUANT_f() {

    QUANT_f.prototype.define = function QUANT_f() {
        this.pas = 0.1;
        this.meth = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["qzrnd"]);
        model.in = new ScilabDouble([-1]);
        model.out = new ScilabDouble([-1]);
        model.rpar = new ScilabDouble([this.pas]);
        model.ipar = new ScilabDouble([this.meth]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.pas], [this.meth]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"QUANT_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    QUANT_f.prototype.details = function QUANT_f() {
        return this.x;
    }
}


function CLKOUTV_f() {

    CLKOUTV_f.prototype.define = function CLKOUTV_f() {

        this.prt = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["output"]);
        model.evtin = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([this.prt]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.prt]);
        this.x = new standard_define(new ScilabDouble([1, 1]), model, exprs, new ScilabString([" "]));
        return new EventOutBlock(this.x);
    }

    CLKOUTV_f.prototype.internal = function CLKOUTV_f() {

        this.prt = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["output"]);
        model.evtin = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([this.prt]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.prt]);
        var block = new standard_define(new ScilabDouble([1, 1]), model, exprs, new ScilabString([" "]));
        return block;
    }

    CLKOUTV_f.prototype.details = function CLKOUTV_f() {
        return this.x;
    }
}

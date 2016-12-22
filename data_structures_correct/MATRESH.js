function MATRESH() {

    MATRESH.prototype.define = function MATRESH() {
        this.function_name = "mat_reshape";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)], [sci2exp([1, 1])], [sci2exp([1, 1])]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATRESH\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATRESH.prototype.details = function MATRESH() {
        return this.x;
    }
}


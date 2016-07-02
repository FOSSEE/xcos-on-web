function MATCATH() {

    MATCATH.prototype.define = function MATCATH() {
        this.funtyp = 4;
        this.function_name = "mat_cath";

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1], [-1]);
        model.in2 = new ScilabDouble([-2], [-3]);
        model.intyp = new ScilabDouble([1, 1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([0]);
        model.outtyp = new ScilabDouble([-1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(2)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATCATH\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 3]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATCATH.prototype.details = function MATCATH() {
        return this.x;
    }
}


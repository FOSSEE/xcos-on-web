function MATZREIM() {
    MATZREIM.prototype.define = function MATZREIM() {


        var model = scicos_model();

        this.function_name = "matz_reim";

        this.funtyp = new ScilabDouble([4]);
        model.sim = list(this.function_name, this.funtyp);
        model.in1 = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([2]);
        model.out = new ScilabDouble(-1, -1);
        model.out2 = new ScilabDouble(-2, -2);
        model.outtyp = new ScilabDouble([1,1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true,false]);

        this.label = sci2exp(new ScilabDouble(1));

        var gr_i = ["xstringb(orig(1),orig(2),\"MATZREIM\",sz(1),sz(2));"];
        this.x = new standard_define(new ScilabDouble([3,2]), model, this.label, gr_i);
        return new BasicBlock(this.x);
    }

    MATZREIM.prototype.details = function MATZREIM() {
        return this.x;
    }
}

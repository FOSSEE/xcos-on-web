function c_block() {

    c_block.prototype.define = function c_block() {

        this.in1 = 1;
        this.out = 1;
        this.rpar = [];
        this.typ = "c";
        this.funam = "toto";

        var model = scicos_model();
        model.sim = list(new ScilabString([" "]), new ScilabDouble([2001]));
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([this.out]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble([0]);
        model.blocktype = new ScilabString([this.typ]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = list(new ScilabString([sci2exp(this.in1)], [sci2exp(this.out)], [sci2exp(this.rpar)], [this.funam]), list(new ScilabDouble()));
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"c_block\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    c_block.prototype.details = function c_block() {
        return this.x;
    }
}

function scifunc_block_m() {

    scifunc_block_m.prototype.define = function scifunc_block_m() {
        this.in1 = 1;
        this.out = 1;
        this.clkin = [];
        this.clkout = [];
        this.x0 = [];
        this.z0 = [];
        this.typ = "c";
        this.auto = [];
        this.rpar = [];
        this.it = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["scifunc"]), new ScilabDouble([3]));
        model.in = new ScilabDouble([this.in1]);
        model.in2 = new ScilabDouble([this.in1]);
        model.intyp = new ScilabDouble([this.it]);
        model.out = new ScilabDouble([this.out]);
        model.out2 = new ScilabDouble([this.out]);
        model.outtyp = new ScilabDouble([this.it]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble([0]);
        model.opar = list();
        model.blocktype = new ScilabString([this.typ]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = list(new ScilabString([sci2exp([this.in1, this.in1])], [sci2exp([this.out, this.out])], [sci2exp(this.clkin)], [sci2exp(this.clkout)], [sci2exp(this.x0)], [sci2exp(this.z0)], [sci2exp(this.rpar)], [sci2exp(this.auto)], [sci2exp(0)]), list(new ScilabString(["y1=sin(u1)"]), new ScilabString([" "]), new ScilabString([" "]), new ScilabString(["y1=sin(u1)"]), new ScilabString([" "]), new ScilabString([" "]), new ScilabString([" "])));

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"scifunc_block_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    scifunc_block_m.prototype.details = function scifunc_block_m() {
        return this.x;
    }
}
function RAND_m() {

    RAND_m.prototype.define = function RAND_m() {
        this.a = 0;
        this.b = 1;
        this.dt = 0;
        this.flag = 0;
        this.function_name = "rndblk_m";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble();
        model.in2 = new ScilabDouble();
        model.intyp = new ScilabDouble();
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble([parseInt(Math.random() * 10000000)], [0 * this.a]);
        model.rpar = new ScilabDouble([this.a, this.b]);
        model.ipar = new ScilabDouble([this.flag]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp(1)], [this.flag], [sci2exp([this.a])], [sci2exp([this.b])], [sci2exp([parseInt(getData(model.dstate)[0]), parseInt(Math.random() * 10000000)])]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RAND_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    RAND_m.prototype.details = function RAND_m() {
        return this.x;
    }
}


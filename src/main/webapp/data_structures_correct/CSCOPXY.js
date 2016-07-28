function CSCOPXY() {

    CSCOPXY.prototype.define = function CSCOPXY() {
        this.win = -1;
        this.clrs = 4;
        this.siz = 1;
        this.wdim = [[600], [400]];
        this.wpos = [[-1], [-1]];
        this.N = 2;
        this.xmin = -15;
        this.xmax = 15;
        this.ymin = -15;
        this.ymax = 15;
        this.nbr_curves = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["cscopxy"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1], [1]);
        model.in2 = new ScilabDouble([1], [1]);
        model.intyp = new ScilabDouble([1], [1]);
        model.evtin = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.xmin], [this.xmax], [this.ymin], [this.ymax]);
        model.ipar = new ScilabDouble([this.win], [1], [this.N], [this.clrs], [this.siz], [1], ...this.wpos, ...this.wdim, [this.nbr_curves]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.nbr_curves], [sci2exp(this.clrs)], [sci2exp(this.siz)], [this.win], [sci2exp([])], [sci2exp(this.wdim)], [this.xmin], [this.xmax], [this.ymin], [this.ymax], [this.N]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CSCOPE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    CSCOPXY.prototype.details = function CSCOPXY() {
        return this.x;
    }
}


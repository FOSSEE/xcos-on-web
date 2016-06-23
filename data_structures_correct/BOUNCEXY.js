function BOUNCEXY() {

    BOUNCEXY.prototype.define = function BOUNCEXY() {
        this.win = -1;
        this.imode = 1;
        this.clrs = [[1],[2]];
        this.siz = [[1],[1]];
        this.xmin = -5;
        this.xmax = 5;
        this.ymin = 0;
        this.ymax = 15;

        var model = scicos_model();
        model.sim = list(new ScilabString(["bouncexy"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1], [-1]);
        model.in2 = new ScilabDouble([1], [1]);
        model.intyp = new ScilabDouble([1], [1]);
        model.evtin = new ScilabDouble([1]);


        this.z = [];

        for (var i = 0; i < size(this.clrs, "*"); i++) {
            this.z[6 * (i) + 0] = [0];
            this.z[6 * (i) + 1] = [0];
            this.z[6 * (i) + 2] = [2 * this.siz[i]];
            this.z[6 * (i) + 3] = [2 * this.siz[i]];
            this.z[6 * (i) + 4] = [0.000];
            this.z[6 * (i) + 5] = [64.0 * 360.000];

        }

        model.dstate = new ScilabDouble(...this.z);
        model.rpar = new ScilabDouble([this.xmin], [this.xmax], [this.ymin], [this.ymax]);
        model.ipar = new ScilabDouble([this.win], [this.imode], ...colon_operator(this.clrs));
        model.blocktype = new ScilabString("d");
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp(this.clrs)], [sci2exp(this.siz)], [sci2exp(this.win)], [sci2exp(1)], [sci2exp(this.xmin)], [sci2exp(this.xmax)], [sci2exp(this.ymin)], [sci2exp(this.ymax)]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"BOUNCEXY\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    BOUNCEXY.prototype.details = function BOUNCEXY() {

        return this.x;
    }
}
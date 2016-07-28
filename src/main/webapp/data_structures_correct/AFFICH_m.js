function AFFICH_m() {

    AFFICH_m.prototype.define = function AFFICH_m() {
        this.font = 1;
        this.fontsize = 1;
        this.colr = 1;
        this.nt = 5;
        this.nd = 1;
        this.in1 = [1, 1];

        var model = scicos_model();
        model.sim = list(new ScilabString(["affich2"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.in1[0]]);
        model.in2 = new ScilabDouble([this.in1[1]]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([-1], [0], [0], [1], [1], [0], ...zeros(this.in1[0] * this.in1[1], 1));
        model.ipar = new ScilabDouble([this.font], [this.fontsize], [this.colr], [1000], [this.nt], [this.nd], [this.in1[0]]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);
        model.label = new ScilabString([""]);
        var exprs = new ScilabString([sci2exp([parseFloat(...getData(model.in)), parseFloat(...getData(model.in2))])], [this.font.toString()], [this.fontsize.toString()], [this.colr.toString()], [this.nt.toString()], [this.nd.toString()], [(0).toString()]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"AFFICH_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        this.x.graphics.style = new ScilabString(["AFFICH_m"]);
        return new AfficheBlock(this.x);
    }

    AFFICH_m.prototype.details = function AFFICH_m() {
        return this.x;
    }
}

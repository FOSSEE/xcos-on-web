function SATURATION() {

    SATURATION.prototype.define = function SATURATION() {
        this.minp = -1;
        this.maxp = 1;
        this.rpar = [[this.maxp], [this.minp]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["satur"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.nzcross = new ScilabDouble([2]);
        model.nmode = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble(...this.rpar);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.maxp], [this.minp], [parseInt(getData(model.nmode)[0])]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SATURATION\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    SATURATION.prototype.details = function SATURATION() {
        return this.x;
    }
}


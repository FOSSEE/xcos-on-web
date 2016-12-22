function RATELIMITER() {

    RATELIMITER.prototype.define = function RATELIMITER() {
        this.minp = -1;
        this.maxp = 1;
        this.rpar = [[this.maxp], [this.minp]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["ratelimiter"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble(...this.rpar);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.maxp], [this.minp]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RATELIMITER\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3.5, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    RATELIMITER.prototype.details = function RATELIMITER() {
        return this.x;
    }
}


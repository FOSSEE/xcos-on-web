function M_freq() {

    M_freq.prototype.define = function M_freq() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["m_frequ"]), new ScilabDouble([4]));
        model.evtout = new ScilabDouble([1], [1], [1]);
        model.evtin = new ScilabDouble([1]);
        model.rpar = new ScilabDouble();
        model.opar = list(new ScilabDouble([1, 1, 0], [1, 1, 1], [1, 3, 2]), new ScilabDouble([1]), new ScilabDouble([0]), new ScilabDouble([0]));
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([0, -1, -1]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp([[1], [2]])], [sci2exp([[0], [0]])]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"M_freq\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    M_freq.prototype.details = function M_freq() {
        return this.x;
    }
}

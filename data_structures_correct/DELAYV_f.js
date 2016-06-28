function DELAYV_f() {

    DELAYV_f.prototype.define = function DELAYV_f() {
        this.nin = 1;
        this.z0 = zeros(11, 1);
        this.zz0 = math.subset(this.z0, math.index(math.range(0, math.size(this.z0)[0] - 1), 0));
        this.T = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["delayv"]), new ScilabDouble([1]));
        model.in = new ScilabDouble([this.nin], [1]);
        model.out = new ScilabDouble([this.nin]);
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1], [1]);
        model.dstate = new ScilabDouble(...this.z0);
        model.rpar = new ScilabDouble([this.T / (size(this.zz0, "*"))]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([0, -1]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.nin], [this.zz0.toString().replace(/,/g, ";")], [this.T]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DELAYV_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DELAYV_f.prototype.details = function DELAYV_f() {
        return this.x;
    }
}


function BPLATFORM() {

    BPLATFORM.prototype.define = function BPLATFORM() {

        this.plen = 2;
        this.csiz = 2;
        this.phi = 0;
        this.xmin = -5;
        this.xmax = 5;
        this.ymin = 0;
        this.ymax = 15;

        var model = scicos_model();
        model.sim = list(new ScilabString(["bplatform2"]), new ScilabDouble([5]));
        model.in = new ScilabDouble([1], [1]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([0]);
        model.rpar = new ScilabDouble([this.plen], [this.csiz], [this.phi], [this.xmin], [this.xmax], [this.ymin], [this.ymax]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.plen], [this.csiz], [this.phi], [this.xmin], [this.xmax], [this.ymin], [this.ymax]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"BPLATFORM\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    BPLATFORM.prototype.details = function BPLATFORM() {

        return this.x;
    }

}

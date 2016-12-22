function CONSTRAINT2_c() {

    CONSTRAINT2_c.prototype.define = function CONSTRAINT2_c() {
        this.x0 = 0;
        this.xd0 = 0;
        this.id = 0;

        var model = scicos_model();
        model.sim = list(new ScilabString(["constraint_c"]), new ScilabDouble([10004]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1], [1]);
        model.state = new ScilabDouble([this.x0], [this.xd0]);
        model.ipar = new ScilabDouble([this.id]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = list(new ScilabString([sci2exp(this.x0)]), new ScilabString([sci2exp(this.xd0)]), new ScilabString([sci2exp(this.id)]));

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONSTRAINT2_c\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    CONSTRAINT2_c.prototype.details = function CONSTRAINT2_c() {
        return this.x;
    }
}


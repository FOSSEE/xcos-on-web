function CONSTRAINT_c() {

    CONSTRAINT_c.prototype.define = function CONSTRAINT_c() {

        this.x0 = [[0],[0]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["constraint_c"]), new ScilabDouble([10004]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([0]);
        model.state = new ScilabDouble(...this.x0);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString([0]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONSTRAINT_c\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    CONSTRAINT_c.prototype.details = function CONSTRAINT_c() {
        return this.x;
    }
}

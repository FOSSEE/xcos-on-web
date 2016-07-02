function M_SWITCH() {

    M_SWITCH.prototype.define = function M_SWITCH() {
        this.in1 = [[1], [-1], [-1]];
        this.ipar = [[1], [3]];
        this.nin = 2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["mswitch"]), new ScilabDouble([4]));
        model.in = new ScilabDouble(...this.in1);
        model.out = new ScilabDouble([-1]);
        model.ipar = new ScilabDouble(...this.ipar);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.nin], ...this.ipar);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"M_SWITCH\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2.5, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    M_SWITCH.prototype.details = function M_SWITCH() {
        return this.x;
    }
}


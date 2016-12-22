function MAXMIN() {

    MAXMIN.prototype.define = function MAXMIN() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["minmax"]), new ScilabDouble([4]));
        model.out = new ScilabDouble([1]);
        model.in = new ScilabDouble([-1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);
        model.ipar = new ScilabDouble([0]);

        var exprs = new ScilabString(...math.transpose([[2, 1, 1]]));

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MAXMIN\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        this.x.graphics.style = new ScilabString(["MAXMIN;displayedLabel=MAX"]);
        return new BasicBlock(this.x);
    }

    MAXMIN.prototype.details = function MAXMIN() {
        return this.x;
    }
}

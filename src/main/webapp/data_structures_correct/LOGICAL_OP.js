function LOGICAL_OP() {

    LOGICAL_OP.prototype.define = function LOGICAL_OP() {
        this.in1 = [[-1], [-1]];
        this.ipar = 0;
        this.nin = 2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["logicalop"]), new ScilabDouble([4]));
        model.in = new ScilabDouble(...this.in1);
        model.out = new ScilabDouble([-1]);
        model.ipar = new ScilabDouble([this.ipar]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.nin], [this.ipar]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"LOGICAL_OP\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    LOGICAL_OP.prototype.details = function LOGICAL_OP() {
        return this.x;
    }
}


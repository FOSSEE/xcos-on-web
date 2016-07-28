function HYSTHERESIS() {

    HYSTHERESIS.prototype.define = function HYSTHERESIS() {
        this.in1 = 1;
        this.ipar = 0;
        this.nzz = 2;
        this.rpar = [[1], [0], [1], [0]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["hystheresis"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble(...this.rpar);
        model.nzcross = new ScilabDouble([this.nzz]);
        model.nmode = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString(...this.rpar, [Math.sign(this.nzz)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"HYSTHERESIS\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    HYSTHERESIS.prototype.details = function HYSTHERESIS() {
        return this.x;
    }
}


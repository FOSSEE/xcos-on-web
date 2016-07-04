function MUX() {

    MUX.prototype.define = function MUX() {
        this.in1 = 2;
        var arr = [];
        arr.push(math.range(-1, -this.in1, -1, true)._data);

        var model = scicos_model();
        model.sim = list(new ScilabString(["multiplex"]), new ScilabDouble([4]));
        model.in = new ScilabDouble(...math.transpose(arr));
        model.out = new ScilabDouble([0]);
        model.ipar = new ScilabDouble([this.in1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.in1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MUX\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([.5, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    MUX.prototype.details = function MUX() {
        return this.x;
    }
}


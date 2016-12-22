function DEMUX() {

    DEMUX.prototype.define = function DEMUX() {
        this.out = 2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["multiplex"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([0]);

        var arr = [];
        arr.push(math.range(-1, -this.out, -1, true)._data);
        model.out = new ScilabDouble(...math.transpose(arr));
        model.ipar = new ScilabDouble([this.out]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.out]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DEMUX\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([.5, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    DEMUX.prototype.details = function DEMUX() {
        return this.x;
    }
}

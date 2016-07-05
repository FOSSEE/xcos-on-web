function DEMUX_f() {

    DEMUX_f.prototype.define = function DEMUX_f() {
        this.out = 2;
        var arr = [];
        arr.push(math.range(-1, -this.out, -1, true)._data);

        var model = scicos_model();
        model.sim = list(new ScilabString(["demux"]), new ScilabDouble([1]));
        model.in = new ScilabDouble([0]);
        model.out = new ScilabDouble(...math.transpose(arr));
        model.ipar = new ScilabDouble([this.out]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.out]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DEMUX_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([.5, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DEMUX_f.prototype.details = function DEMUX_f() {
        return this.x;
    }
}


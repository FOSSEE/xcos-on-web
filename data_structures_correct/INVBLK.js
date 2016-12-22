function INVBLK() {

    INVBLK.prototype.define = function INVBLK() {
        this.in1 = -1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["invblk4"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([this.in1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([" "]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"INVBLK\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    INVBLK.prototype.details = function INVBLK() {
        return this.x;
    }
}


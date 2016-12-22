function TrigFun() {

    TrigFun.prototype.define = function TrigFun() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["sin_blk"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1]);
        model.out = new ScilabDouble([-1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString(["sin"]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"TrigFun\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    TrigFun.prototype.details = function TrigFun() {
        return this.x;
    }
}

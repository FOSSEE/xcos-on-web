function ABS_VALUE() {

    ABS_VALUE.prototype.define = function ABS_VALUE() {

        this.nu = -1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["absolute_value"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.nu]);
        model.out = new ScilabDouble([this.nu]);
        model.nzcross = new ScilabDouble([this.nu]);
        model.nmode = new ScilabDouble([this.nu]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ABS_VALUE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        this.x.graphics.style = new ScilabString(["ABS_VALUE"]);
        return new BasicBlock(this.x);

    }

    ABS_VALUE.prototype.details = function ABS_VALUE() {
        return this.x;
    }

}

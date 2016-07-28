function RAMP() {

    RAMP.prototype.define = function RAMP() {
        this.slope = 0;
        this.iout = 0;
        this.stt = 0;
        this.rpar = [[this.slope], [this.stt], [this.iout]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["ramp"]), new ScilabDouble([4]));
        model.in = new ScilabDouble();
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble(...this.rpar);
        model.blocktype = new ScilabString(["c"]);
        model.nmode = new ScilabDouble([1]);
        model.nzcross = new ScilabDouble([1]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString(...this.rpar);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RAMP\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    RAMP.prototype.details = function RAMP() {
        return this.x;
    }
}


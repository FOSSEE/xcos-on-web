function RELAY_f() {

    RELAY_f.prototype.define = function RELAY_f() {
        this.i0 = 0;
        this.in1 = [[-1], [-1]];
        this.nin = 2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["relay"]), new ScilabDouble([2]));
        model.in = new ScilabDouble(...this.in1);
        model.out = new ScilabDouble([-1]);
        model.evtin = new ScilabDouble(...ones(this.in1));
        model.dstate = new ScilabDouble([this.i0]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, true]);

        var exprs = new ScilabString([this.nin], [this.i0 + 1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RELAY_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    RELAY_f.prototype.details = function RELAY_f() {
        return this.x;
    }
}


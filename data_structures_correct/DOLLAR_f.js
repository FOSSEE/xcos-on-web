function DOLLAR_f() {

    DOLLAR_f.prototype.define = function DOLLAR_f() {
        this.z = 0;
        this.inh = 0;
        this.in1 = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["dollar"]);
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([this.in1]);
        model.evtin = new ScilabDouble([1 - this.inh]);
        model.dstate = new ScilabDouble([this.z]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.z], [this.inh]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DOLLAR_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DOLLAR_f.prototype.details = function DOLLAR_f() {
        return this.x;
    }
}


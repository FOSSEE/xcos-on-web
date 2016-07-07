function SAWTOOTH_f() {

    SAWTOOTH_f.prototype.define = function SAWTOOTH_f() {

        var model = scicos_model();
        model.sim = new ScilabString(["sawtth"]);
        model.out = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([0]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString([" "]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SAWTOOTH_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    SAWTOOTH_f.prototype.details = function SAWTOOTH_f() {
        return this.x;
    }
}

function CLINDUMMY_f() {

    CLINDUMMY_f.prototype.define = function CLINDUMMY_f() {
        this.x0 = 0;

        var model = scicos_model();
        model.sim = list(new ScilabString(["cdummy"]), new ScilabDouble([4]));
        model.state = new ScilabDouble([this.x0]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, true]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLINDUMMY_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }
    CLINDUMMY_f.prototype.details = function CLINDUMMY_f() {
        return this.x;
    }
}

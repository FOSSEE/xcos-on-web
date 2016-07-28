function LOOKUP_f() {

    LOOKUP_f.prototype.define = function LOOKUP_f() {

        var model = scicos_model();
        model.sim = new ScilabString(["lookup"]);
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([-2], [-1], [1], [2], [-1], [1], [-1], [1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"LOOKUP_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, [], gr_i);
        return new BasicBlock(this.x);
    }
    LOOKUP_f.prototype.details = function LOOKUP_f() {
        return this.x;
    }
}


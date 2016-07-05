function NRMSOM_f() {

    NRMSOM_f.prototype.define = function NRMSOM_f() {
        this.in1 = [[-1], [-1]];
        this.nin = 2;

        var model = scicos_model();
        model.sim = new ScilabString(["junk"]);
        model.in = new ScilabDouble(...this.in1);
        model.out = new ScilabDouble([-1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.nin]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"NRMSOM_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([.2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    NRMSOM_f.prototype.details = function NRMSOM_f() {
        return this.x;
    }
}


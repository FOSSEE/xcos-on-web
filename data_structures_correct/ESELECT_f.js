function ESELECT_f() {

    ESELECT_f.prototype.define = function ESELECT_f() {
        this.out = 2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["eselect"]), new ScilabDouble([-2]));
        model.in = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([-1]);
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble(...ones(this.out, 1));
        model.blocktype = new ScilabString(["l"]);
        model.firing = new ScilabDouble(...ones(this.out, 1));
        model.dep_ut = new ScilabBoolean([true, false]);
        model.nmode = new ScilabDouble([0]);
        model.nzcross = new ScilabDouble([0]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ESELECT_f\",sz(1),sz(2));"]);;

        var exprs = new ScilabString([this.out], [1], [parseInt(getData(model.nmode))]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    ESELECT_f.prototype.details = function ESELECT_f() {
        return this.x;
    }
}

function READAU_f() {

    READAU_f.prototype.define = function READAU_f() {
        this.frmt = "uc ";
        this.fname = "test.au";
        this.lunit = 0;
        this.N = 20;
        this.M = 1;
        this.tmask = [];
        this.swap = 0;
        this.offset = 1;
        this.outmask = 1;
        this.ievt = 0;
        this.nout = size(this.outmask, "*");
        var model = scicos_model();
        model.sim = list(new ScilabString(["readau"]), new ScilabDouble([2]));
        model.out = new ScilabDouble([this.nout]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([1], [1], [this.lunit], ...zeros(this.N * this.M, 1));
        model.ipar = new ScilabDouble([this.fname.length], ..._str2code(this.frmt), [this.ievt], [this.N], [this.M], [this.swap], [this.offset], ..._str2code(this.fname), [this.outmask]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.fname], [this.N], [this.swap]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"READAU_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([5, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    READAU_f.prototype.details = function READAU_f() {
        return this.x;
    }
}

function RFILE_f() {

    RFILE_f.prototype.define = function RFILE_f() {
        this.out = 1;
        this.nout = this.out;
        this.frmt = "(7(e10.3,1x))";
        this.fname = "foo";
        this.lunit = 0;
        this.N = 2;
        this.rpar = [];
        this.tmask = 0;
        this.outmask = 1;

        var ipar = new ScilabDouble([this.fname.length], [this.frmt.length], [0], [this.N], ..._str2code(this.fname), ..._str2code(this.frmt), [this.tmask], [this.outmask]);

        var dstate = new ScilabDouble([1], [1], [this.lunit], ...zeros((this.nout) * this.N, 1));

        var model = scicos_model();
        model.sim = new ScilabString(["readf"]);
        model.out = new ScilabDouble([this.nout]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = dstate;
        model.ipar = ipar;
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp([])], [sci2exp(this.outmask)], [this.fname], [this.frmt], [this.N], [this.out]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RFILE_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    RFILE_f.prototype.details = function RFILE_f() {
        return this.x;
    }
}

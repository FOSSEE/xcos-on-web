function WRITEC_f() {
	
    WRITEC_f.prototype.define = function WRITEC_f() {
        this.in = 1;
        this.nin = math.sum(this.in);
        this.frmt = "c  ";
        this.fname = "foo";
        this.swap = 0;
        this.lunit = 0;
        this.N = 2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["writec"]), new ScilabDouble([2]));
        model.in = new ScilabDouble([this.in]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([-1], [this.lunit], ...zeros((this.nin + 1) * this.N, 1));
        model.ipar = new ScilabDouble([this.fname.length], ..._str2code(this.frmt), [this.N], [this.swap], ..._str2code(this.fname));
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.in)], [this.fname], [this.frmt], [this.N], [this.swap]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"WRITEC_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    WRITEC_f.prototype.details = function WRITEC_f() {
        return this.x;
    }
}

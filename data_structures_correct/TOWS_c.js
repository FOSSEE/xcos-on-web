function TOWS_c() {

    TOWS_c.prototype.define = function TOWS_c() {
        this.nu = -1;
        this.nz = 128;
        this.varnam = "A";
        this.herit = 0;

        var model = scicos_model();
        model.sim = list(new ScilabString(["tows_c"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.nu]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([-1]);
        model.out = new ScilabDouble();
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble([this.nz], [this.varnam.length], ascii(this.varnam));
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"TOWS_c\",sz(1),sz(2));"]);;

        var exprs = new ScilabString([this.nz], [this.varnam], [this.herit]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    TOWS_c.prototype.details = function TOWS_c() {
        return this.x;
    }
}

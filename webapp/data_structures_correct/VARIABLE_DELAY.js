function VARIABLE_DELAY() {

    VARIABLE_DELAY.prototype.define = function VARIABLE_DELAY() {
        this.nin = 1;
        this.T = 1;
        this.init = 0;
        this.N = 1024;

        var model = scicos_model();
        model.sim = list(new ScilabString(["variable_delay"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.nin], [1]);
        model.out = new ScilabDouble([this.nin]);
        model.rpar = new ScilabDouble([this.T, this.init]);
        model.ipar = new ScilabDouble([this.N]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.T], [this.init], [this.N]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"VARIABLE_DELAY\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    VARIABLE_DELAY.prototype.details = function VARIABLE_DELAY() {
        return this.x;
    }
}

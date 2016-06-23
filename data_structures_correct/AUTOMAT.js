function AUTOMAT() {

    AUTOMAT.prototype.define = function AUTOMAT() {
        this.NMode = 2;
        this.Minitial = 1;
        this.NX = 1;
        this.X0 = [0.0];
        this.XP = [[1],[1]];
        this.C1 = [2];
        this.C2 = [1];

        var exprs = new ScilabString([this.NMode.toString()], [this.Minitial.toString()], [this.NX.toString()], [sci2exp(this.X0)], [sci2exp(this.XP)], [sci2exp(this.C1)], [sci2exp(this.C2)]);
        var ipar = new ScilabDouble([this.NMode], [this.Minitial], [this.NX], ...this.XP, this.C1, this.C2);
        var rpar = new ScilabDouble(this.X0);

        var model = scicos_model();
        model.sim = list(new ScilabString(["automat"]), new ScilabDouble([10004]));
        model.in = new ScilabDouble([2 * this.NX + 1], [2 * this.NX + 1]);
        model.out = new ScilabDouble([2], [2 * this.NX]);
        model.state = new ScilabDouble(...ones(2 * this.NX, 1));
        model.nzcross = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["c"]);
        model.evtout = new ScilabDouble([1]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, true]);
        model.ipar = ipar;
        model.rpar = rpar;

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"AUTOMAT\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);

    }

    AUTOMAT.prototype.details = function AUTOMAT() {
        return this.x;
    }
}

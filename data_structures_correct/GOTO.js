function GOTO() {

    GOTO.prototype.define = function GOTO() {
        var model = scicos_model();
        model.sim = new ScilabString(["goto"]);
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([-1]);
        model.out = new ScilabDouble();
        model.out2 = new ScilabDouble();
        model.outtyp = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([1]);
        model.opar = list(new ScilabString(["A"]));
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString(["A"], [sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GOTO\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 1]), model, exprs, gr_i);
        this.x.graphics.id = new ScilabString(["Goto"]);
        return new BasicBlock(this.x)
    }
    
    GOTO.prototype.details = function GOTO() {
        return this.x;
    }
}

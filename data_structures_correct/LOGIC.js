function LOGIC() {

    LOGIC.prototype.define = function LOGIC() {
        this.mat = [[0],[0],[0],[1]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["logic"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1], [1]);
        model.in2 = new ScilabDouble([1], [1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([5, 5]);
        model.outtyp = new ScilabDouble([5]);
        model.opar = list(int8(...this.mat));
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabBoolean([false]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.mat)], [sci2exp(0)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"LOGIC\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    
    LOGIC.prototype.details = function LOGIC() {
        return this.x;
    }
}

function CLKFROM() {

    CLKFROM.prototype.define = function CLKFROM() {
        var model = scicos_model();
        model.sim = new ScilabString(["clkfrom"]);
        model.evtout = new ScilabDouble([1]);
        model.opar = list(new ScilabString(["A"]));
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString(["A"]);
        this.x = new standard_define(new ScilabDouble([2, 1]), model, exprs, new ScilabString([" "]));
        this.x.graphics.id = new ScilabString(["From"]);
        return new BasicBlock(this.x);
    }
    CLKFROM.prototype.details = function CLKFROM() {
        return this.x;
    }
}
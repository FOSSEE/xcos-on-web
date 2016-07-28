function CONST() {


    CONST.prototype.define = function CONST() {

        this.C = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["cstblk4"]), new ScilabDouble([4]));
        model.in = new ScilabDouble();
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.C]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp(this.C)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONST\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    CONST.prototype.details = function CONST() {
        return this.x;
    }
}

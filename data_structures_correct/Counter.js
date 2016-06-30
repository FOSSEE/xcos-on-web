function Counter() {

    Counter.prototype.define = function Counter() {
        this.minim = 0;
        this.maxim = 2;
        this.rule = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["counter"]), new ScilabDouble([4]));
        model.evtin = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([0]);
        model.ipar = new ScilabDouble([this.rule], [this.maxim], [this.minim]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.minim], [this.maxim], [this.rule]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Counter\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    Counter.prototype.details = function Counter() {
        return this.x;
    }
}

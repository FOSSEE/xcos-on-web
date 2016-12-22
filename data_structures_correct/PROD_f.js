function PROD_f() {

    PROD_f.prototype.define = function PROD_f() {

        var model = scicos_model();
        model.sim = list(new ScilabString(["prod"]), new ScilabDouble([2]));
        model.in = new ScilabDouble([-1], [-1]);
        model.out = new ScilabDouble([-1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        this.x = new standard_define(new ScilabDouble([1, 1]), model, new ScilabDouble(), new ScilabString());
        return new RoundBlock(this.x);
    }
    PROD_f.prototype.details = function PROD_f() {
        return this.x;
    }
}


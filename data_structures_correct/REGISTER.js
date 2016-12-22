function REGISTER() {

    REGISTER.prototype.define = function REGISTER() {
        this.z0 = new ScilabDouble(...zeros(10, 1));

        var model = scicos_model();
        model.sim = list(new ScilabString(["delay4"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = this.z0;
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString(this.z0);

        var gr_i = ["xstringb(orig(1),orig(2),\"REGISTER\",sz(1),sz(2));"];
        this.x = new standard_define(new ScilabDouble([3,2]), model, exprs, gr_i);
        return new BasicBlock(this.x);

    }

    REGISTER.prototype.details = function REGISTER() {
        return this.x;
    }
}

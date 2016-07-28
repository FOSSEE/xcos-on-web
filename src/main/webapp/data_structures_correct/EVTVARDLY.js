function EVTVARDLY() {

    EVTVARDLY.prototype.define = function EVTVARDLY() {

        var model = scicos_model();
        model.sim = list(new ScilabString(["evtvardly"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([parseInt(getData(model.firing), 10)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EVTVARDLY\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    EVTVARDLY.prototype.details = function EVTVARDLY() {
        return this.x;
    }
}


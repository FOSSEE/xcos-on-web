function SampleCLK() {

    SampleCLK.prototype.define = function SampleCLK() {

        var model = scicos_model();
        model.sim = new ScilabString(["sampleclk"]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([1, 0]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp(1)], [sci2exp(0)]);

        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, ["xstringb(orig(1),orig(2),\"SampleCLK\",sz(1),sz(2));"]);
        return new BasicBlock(this.x);
    }
    SampleCLK.prototype.details = function SampleCLK() {
        return this.x;
    }
}


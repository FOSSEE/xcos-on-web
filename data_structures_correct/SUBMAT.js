function SUBMAT() {

    SUBMAT.prototype.define = function SUBMAT() {
        var model = scicos_model();

        this.function_name = new ScilabString(["submat"]);

        this.funtyp = new ScilabDouble([4]);
        model.sim = list(this.function_name, this.funtyp);
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble([1], [1], [1], [1]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        this.label = new ScilabString([sci2exp(1)], [sci2exp(1)], [sci2exp(1)], [sci2exp(1)], [sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SUBMAT\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2.5, 2]), model, this.label, gr_i);
		
        return new BasicBlock(this.x);
      
    }
    SUBMAT.prototype.details = function SUBMAT() {
        return this.x;
      
    }
}

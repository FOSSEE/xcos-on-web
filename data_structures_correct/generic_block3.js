function generic_block3() {

    generic_block3.prototype.define = function generic_block3() {
        var model = scicos_model();
        this.function_name = "sinblk";
        this.funtyp = 4;
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([this.function_name], [sci2exp(this.funtyp)], [sci2exp([parseInt(getData(model.in)[0]), parseInt(getData(model.in2)[0])])], [sci2exp(parseInt(getData(model.intyp)[0]))], [sci2exp([parseInt(getData(model.out)[0]), parseInt(getData(model.out2)[0])])], [sci2exp(parseInt(getData(model.outtyp)[0]))], [sci2exp(getData(model.evtin))], [sci2exp(getData(model.evtout))], [sci2exp(getData(model.state))], [sci2exp(getData(model.dstate))], [sci2exp(model.odstate)], [sci2exp(getData(model.rpar))], [sci2exp(getData(model.ipar))], [sci2exp(model.opar)], [sci2exp(parseInt(getData(model.nmode)[0]))], [sci2exp(parseInt(getData(model.nzcross)[0]))], [sci2exp(getData(model.firing))], ["y"], ["n"]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"generic_block3\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    generic_block3.prototype.details = function generic_block3() {
        return this.x;
    }
}

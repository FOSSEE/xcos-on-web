function CBLOCK4() {

    CBLOCK4.prototype.define = function CBLOCK4() {

        this.funam = "toto";

        var model = scicos_model();
        model.sim = list(new ScilabString([" "]), new ScilabDouble([2004]));
        model.in = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = list(new ScilabString([this.funam], ["n"], [sci2exp([parseFloat(...getData(model.in)), parseFloat(...getData(model.in2))])], [sci2exp(parseFloat(...getData(model.intyp)))], [sci2exp([parseFloat(...getData(model.out)), parseFloat(...getData(model.out2))])], [sci2exp(parseFloat(...getData(model.outtyp)))], [sci2exp(getData(model.evtin))], [sci2exp(getData(model.evtout))], [sci2exp(getData(model.state))], [sci2exp(getData(model.dstate))], [sci2exp(model.odstate)], [sci2exp(getData(model.rpar))], [sci2exp(getData(model.ipar))], [sci2exp(model.opar)], [sci2exp(parseFloat(...getData(model.nmode)))], [sci2exp(parseFloat(...getData(model.nzcross)))], [sci2exp(getData(model.firing))], ["y"], ["n"]), new ScilabDouble());

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CBLOCK4\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }

    CBLOCK4.prototype.details = function CBLOCK4() {
        return this.x;
    }
}

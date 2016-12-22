function Flowmeter() {

    Flowmeter.prototype.define = function Flowmeter() {
        this.ModelName = "Flowmeter";
        this.PrametersValue = 1;
        this.ParametersName = "Qini";

        var model = scicos_model();

        this.Typein = [];
        this.Typeout = [];

        this.MI = [];
        this.MO = [];
        this.P = [[50,105,-1,90],[0,10,2,0],[101,10,-2,0]];
        this.PortName = [["Mesure"],["C1"],["C2"]];

        for (var i = 0; i < size(this.P, "r"); i++) {
            if (this.P[i][2] == 1) {
                this.Typein.push(["E"]);
                this.MI.push(this.PortName[i]);
            }

            if (this.P[i][2] == 2) {
                this.Typein.push(["I"]);
                this.MI.push(this.PortName[i]);
            }
            if (this.P[i][2] == -1) {
                this.Typeout.push(["E"]);
                this.MO.push(this.PortName[i]);
            }
            if (this.P[i][2] == -2) {
                this.Typeout.push(["I"]);
                this.MO.push(this.PortName[i]);
            }
        }

        var mo = new modelica_function();
        model.sim = new ScilabString([this.ModelName]);
        mo.inputs = new ScilabString(...this.MI);
        mo.outputs = new ScilabString(...this.MO);
        model.rpar = new ScilabDouble([this.PrametersValue]);
        mo.parameters = list(new ScilabString([this.ParametersName]), new ScilabDouble([this.PrametersValue]), new ScilabDouble(zeros([this.ParametersName])));
        var exprs = new ScilabString(["1"]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Flowmeter\",sz(1),sz(2));"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);
        mo.model = new ScilabString([this.ModelName]);
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(this.MI, "*"), 1));
        model.out = new ScilabDouble(...ones(size(this.MO, "*"), 1));
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, list(new ScilabString([gr_i]), new ScilabDouble([0])));
        this.x.graphics.in_implicit = new ScilabDouble(this.Typein);
        this.x.graphics.out_implicit = new ScilabDouble(this.Typeout);
        return new BasicBlock(this.x);
    }

    Flowmeter.prototype.details = function Flowmeter() {
        return this.x;
    }
}

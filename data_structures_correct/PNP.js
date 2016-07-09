function PNP() {
    
    PNP.prototype.define = function PNP() {
        this.ModelName = "PNP";
        this.PrametersValue = [[50],[0.1],[0],[0.02],[1.200e-10],[5.000e-09],[1.000e-12],[4.000e-13],[5.000e-13],[0.8],[0.4],[0.8],[0.333],[1.000e-15],[1.000e-15],[0.02585],[40]];
        this.ParametersName = [["Bf"],["Br"],["Is"],["Vak"],["Tauf"],["Taur"],["Ccs"],["Cje"],["Cjc"],["Phie"],["Me"],["Phic"],["Mc"],["Gbc"],["Gbe"],["Vt"],["EMinMax"]];

        var model = scicos_model();
        this.Typein = [];
        this.Typeout = [];
        this.MI = [];
        this.MO = [];
        this.P = [[100, 90, -2, 0], [0, 50, 2, 0], [100, 10, -2, 0]];
        this.PortName = [["C"], ["B"], ["E"]];

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
        model.rpar = new ScilabDouble(...this.PrametersValue);
        
        var arr = [];
        arr.push(zeros(getData(this.ParametersName)));
        mo.parameters = list(new ScilabString(...this.ParametersName), new ScilabDouble(...this.PrametersValue), new ScilabDouble(...math.transpose(arr)));
        var exprs = new ScilabString(["50"], ["0.1"], ["1.e-16"], ["0.02"], ["0.12e-9"], ["5e-9"], ["1e-12"], ["0.4e-12"], ["0.5e-12"], ["0.8"], ["0.4"], ["0.8"], ["0.333"], ["1e-15"], ["1e-15"], ["0.02585"], ["40"]);
        var gr_i = "xstringb(orig(1),orig(2),\"PNP\",sz(1),sz(2));"
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);
        mo.model = new ScilabString([this.ModelName]);
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(this.MI, "*"), 1));
        model.out = new ScilabDouble(...ones(size(this.MO, "*"), 1));
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, list(new ScilabString([gr_i]), new ScilabDouble([0])));
        this.x.graphics.in_implicit = new ScilabDouble(...this.Typein);
        this.x.graphics.out_implicit = new ScilabDouble(...this.Typeout);

        return new BasicBlock(this.x);
    }

    PNP.prototype.details = function PNP() {
        return this.x;
    }
}

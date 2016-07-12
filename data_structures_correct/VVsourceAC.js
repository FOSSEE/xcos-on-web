function VVsourceAC() {
	
    VVsourceAC.prototype.define = function VVsourceAC() {
        var model = scicos_model();
        
        model.in = new ScilabDouble([1], [1]);
        model.out = new ScilabDouble([1]);

        this.VA = 220;
        this.FR = 50;
        
        model.rpar = new ScilabDouble([this.FR]);
        model.sim = new ScilabString(["VVsourceAC"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = modelica_function();
        mo.model = new ScilabString(["VVsourceAC"]);
        mo.inputs = new ScilabString(["p", "VA"]);
        mo.outputs = new ScilabString(["n"]);
        mo.parameters = list(new ScilabString(["f"]), list(new ScilabDouble([this.FR])));
        model.equations = mo;

        var exprs = new ScilabString([this.FR]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"VVsourceAC\",sz(1),sz(2));"]);
        
        
        this.x = standard_define([2, 2], model, exprs, list(gr_i, 0));
        this.x.graphics.in_implicit = new ScilabString(["I", "E"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        
        return new BasicBlock(this.x);
    }

    VVsourceAC.prototype.details = function VVsourceAC() {
        return this.x;
    }
}

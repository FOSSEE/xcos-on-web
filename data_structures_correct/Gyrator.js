function Gyrator () {

	Gyrator.prototype.define = function Gyrator() {
		this.ModelName = "Gyrator";
		this.PrametersValue = [[1],[1]];
		this.ParametersName = [["G1"],["G2"]];
		this.model = scicos_model();
		this.Typein = [];
		this.Typeout = [];
		this.MI = [];
		this.MO = [];
		this.P = [[2.5,90,2,0],[2.5,10,2,0],[97.5,90,-2,0],[97.5,10,-2,0]];
		this.PortName = [["p1"],["n1"],["p2"],["n2"]];

		for (var i=0; i<size(P,"r");i++) {
            if (P[i][2]==1) {
                this.Typein.push(["E"]);
                this.MI.push([this.PortName[i]]);
			}
            if (P[i][2]==2) {
                this.Typein.push(["I"]);
                this.MI.push([this.PortName[i]]);
            }
            if (P[i][2]==-1) {
                this.Typeout.push(["E"]);
                this.MO.push([this.PortName[i]]);
            }
            if (P[i][2]==-2) {
                this.Typeout.push(["I"]);
                this.MO.push([this.PortName[i]]);
            }
        }
		var model=scicos_model();
        var mo=modelica();
        model.sim=new ScilabString([this.ModelName]);
        mo.inputs=new ScilabString([this.MI]);
        mo.outputs=new ScilabString([this.MO]);
        model.rpar=new ScilabDouble([this.PrametersValue]);
        mo.parameters=list(new ScilabString([this.ParametersName]),new ScilabDouble([this.PrametersValue]),new ScilabDouble(...zeros(this.ParametersName)));
        exprs=new ScilabString(["1"],["1"]);
        gr_i=new ScilabString(["xstringb(orig(1),orig(2),&quot;Gyrator&quot;,sz(1),sz(2));"]);
        model.blocktype=new ScilabString(["c"]);
        model.dep_ut=new ScilabBoolean([false,true]);
        mo.model=new ScilabString([this.ModelName]);
        model.equations=mo;
        model.in=new ScilabDouble(...ones(size(MI,"*"),1));
        model.out=new ScilabDouble(...ones(size(MO,"*"),1));
        x=standard_define([2,2],model,exprs,list(gr_i,new ScilabDouble([0])));
        x.graphics.in_implicit=new ScilabString([this.Typein]);
        x.graphics.out_implicit=new ScilabString([this.Typeout]);
		return new BasicBlock(this.x);
	}
	Gyrator.prototype.details = function Gyrator() {
		return this.x;
	}
}

function EVTDLY_f () {

	EVTDLY_f.prototype.internal = function EVTDLY_f() {
		this.dt = 0.1;
		this.ff = this.dt;
	
		var model = scicos_model();
		model.sim = new ScilabString(["evtdly"]);
		model.evtin = new ScilabDouble([1]);
		model.evtout = new ScilabDouble([1]);
		model.rpar=new ScilabDouble([this.dt]);
		model.blocktype = new ScilabString(["d"]);
		model.firing=new ScilabDouble([this.ff]);
		model.dep_ut = new ScilabBoolean([false,false]);
	
		var exprs = new ScilabString([this.dt],[sci2exp(this.ff)]);
	
		var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EVTDLY_f\",sz(1),sz(2));"]);
		var block = new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
		block.graphics.style = new ScilabString(["EVTDLY_f"]);
		return block;
	}
}

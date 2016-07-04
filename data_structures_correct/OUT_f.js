function OUT_f () {

	OUT_f.prototype.internal = function OUT_f() {
		this.n = -1;
		this.prt = 1;
	
		var model = scicos_model();
		model.sim = new ScilabString(["output"]);
		model.in = new ScilabDouble([-1]);
		model.in2 = new ScilabDouble([-2]);
		model.intyp = new ScilabDouble([-1]);
		model.ipar=new ScilabDouble([this.prt]);
		model.blocktype = new ScilabString(["c"]);
		model.dep_ut = new ScilabBoolean([false,false]);
		var exprs = new ScilabString([sci2exp(this.prt)]);
		
		var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"OUT_f\",sz(1),sz(2));"]);
		var block=new standard_define(new ScilabDouble([1,1]),model,exprs,gr_i);
		block.graphics.style = new ScilabString(["OUT_f"]);  // changed
		block.graphics.in_style = new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]);
		block.graphics.in_label = new ScilabString([""]);
		block.graphics.in_implicit = new ScilabString(["E"]);
		return block;
	}
	
	OUT_f.prototype.define = function OUT_f() {
		this.n = -1;
		this.prt = 1;
	
		var model = scicos_model();
		model.sim = new ScilabString(["output"]);
		model.in1 = new ScilabDouble([-1]);
		model.in2 = new ScilabDouble([-2]);
		model.intyp = new ScilabDouble([-1]);
		model.ipar=new ScilabDouble([this.prt]);
		model.blocktype = new ScilabString(["c"]);
		model.dep_ut = new ScilabBoolean([false,false]);
	
		var exprs = new ScilabString([sci2exp(this.prt)]);
		
		var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"OUT_f\",sz(1),sz(2));"]);
		var block=new standard_define(new ScilabDouble([1,1]),model,exprs,gr_i);
		block.graphics.style = new ScilabString(["OUT_f"]);
		return new ExplicitOutBlock(this.x);
	}
	
	OUT_f.prototype.details = function OUT_f() {
		return this.x;
	}
}

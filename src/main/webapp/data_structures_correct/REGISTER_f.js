function REGISTER_f () {

	REGISTER_f.prototype.internal = function REGISTER_f() {
		this.z0 = zeros(10,1);
	
		var model = scicos_model();
		model.sim = new ScilabString(["delay"]);
		model.in = new ScilabDouble([1]);
		model.out = new ScilabDouble([1]);
		model.evtin = new ScilabDouble([1]);
		model.dstate= new ScilabDouble(...this.z0);
		model.blocktype = new ScilabString(["d"]);
		model.dep_ut = new ScilabBoolean([false,false]);
	
		var exprs = new ScilabString([this.z0.toString().replace(/,/g, ";")]);
	
		var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"REGISTER_f\",sz(1),sz(2));"]);
		var block=new standard_define(new ScilabDouble([2.5,2.5]),model,exprs,gr_i);
		block.graphics.style = new ScilabString(["REGISTER_f"]);
		block.graphics.in_implicit = new ScilabString(["E"]);  // changed
		block.graphics.out_implicit = new ScilabString(["E"]);
		block.graphics.in_style = new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]);
		block.graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
		block.graphics.in_label = new ScilabString([""]);
		block.graphics.out_label = new ScilabString([""]);
		return block;
	}
}

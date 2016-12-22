function IN_f () {

	IN_f.prototype.internal = function IN_f() {
		this.prt = 1;
	
		var model = scicos_model();
		model.sim = new ScilabString(["input"]);
		model.out = new ScilabDouble([-1]);
		model.out2 = new ScilabDouble([-2]);
		model.outtyp = new ScilabDouble([-1]);
		model.ipar=new ScilabDouble([this.prt]);
		model.blocktype = new ScilabString(["c"]);
		model.dep_ut = new ScilabBoolean([false,false]);
	
		var exprs = new ScilabString([sci2exp(this.prt)]);
	
		var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"IN_f\",sz(1),sz(2));"]);
		var block = new standard_define(new ScilabDouble([1,1]),model,exprs,gr_i);
		block.graphics.style = new ScilabString(["IN_f"]); // changed
		block.graphics.out_implicit = new ScilabString(["E"]);
		block.graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
		block.graphics.out_label = new ScilabString([""]);
 		return block;
	}
	
	IN_f.prototype.define = function IN_f() {
		this.prt = 1;
	
		var model = scicos_model();
		model.sim = new ScilabString(["input"]);
		model.out = new ScilabDouble([-1]);
		model.out2 = new ScilabDouble([-2]);
		model.outtyp = new ScilabDouble([-1]);
		model.ipar = new ScilabDouble([this.prt]);
		model.blocktype = new ScilabString(["c"]);
		model.dep_ut = new ScilabBoolean([false,false]);
	
		var exprs = new ScilabString([sci2exp(this.prt)]);
	
		var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"IN_f\",sz(1),sz(2));"]);
		this.x = new standard_define(new ScilabDouble([1,1]),model,exprs,gr_i);

		this.explicitInBlock = new ExplicitInBlock(this.x);
		this.displayParameter = [this.explicitInBlock.ordering];
		return this.explicitInBlock;
		
	}
	
	IN_f.prototype.details = function IN_f() {
		return this.x;
	}
}

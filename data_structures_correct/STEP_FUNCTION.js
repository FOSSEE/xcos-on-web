function STEP_FUNCTION () {

	STEP_FUNCTION.prototype.define = function STEP_FUNCTION() {
		var scs_m_1 = scicos_diagram();
		scs_m_1.objs.push(new STEP().internal());
		scs_m_1.objs.push(new OUT_f().internal());
		scs_m_1.objs.push(scicos_link({}));
		scs_m_1.objs.push(scicos_link({}));
	
		var blk = scs_m_1.objs[0];
	
		var graphics = blk.graphics;
	
		var model = blk.model;
		graphics.orig = new ScilabDouble([0,0]);
		graphics.sz = new ScilabDouble([40,40]);
		graphics.flip =  new ScilabBoolean([true]);
		graphics.pein = new ScilabDouble([4]);
		graphics.peout = new ScilabDouble([4]);
		graphics.pout = new ScilabDouble([3]);
		graphics.out_implicit = new ScilabString(["E"]);
		graphics.in_style = new ScilabDouble();
		graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
		graphics.in_label = new ScilabDouble();
		graphics.out_label = new ScilabString([""]);
		model.evtin= new ScilabDouble([-1]);
		model.evtout= new ScilabDouble([-1]);
		model.uid = new ScilabString([count]);
		blk.graphics=graphics;
		blk.model=model;
        blk.doc = list(new ScilabString([count++]));
		scs_m_1.objs[0]=blk;
		
		blk=scs_m_1.objs[1];
		graphics=blk.graphics;
		model=blk.model;
		graphics.orig = new ScilabDouble([80,10]);
		graphics.sz = new ScilabDouble([20,20]);
		graphics.flip =  new ScilabBoolean([true]);
		graphics.exprs = new ScilabString(["1"]);
		model.ipar = new ScilabDouble([1]);
		graphics.pin = new ScilabDouble([3]);
		model.outtyp= new ScilabDouble();
		model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
		blk.graphics=graphics;
		blk.model=model;
		scs_m_1.objs[1]=blk;
	
		var lnk = scs_m_1.objs[2];
		lnk.xx = new ScilabDouble([104],[136]);
		lnk.yy = new ScilabDouble([-40],[-60]);
		lnk.from = new ScilabDouble([1,1,0]);
		lnk.to = new ScilabDouble([2,1,1]);
		scs_m_1.objs[2]=lnk;
		
		lnk=scs_m_1.objs[3];
		lnk.xx = new ScilabDouble([0],[20],[-20],[-20],[20],[1]);
		lnk.yy = new ScilabDouble([0],[-20],[-20], [60],[60],[1]);
		lnk.ct = new ScilabDouble([5,-1]);
		lnk.from = new ScilabDouble([1,1,0]);
		lnk.to = new ScilabDouble([1,1,1]);
		scs_m_1.objs[3]=lnk;
		
		model=scicos_model();
		model.sim = new ScilabString(["csuper"]);
		model.out = new ScilabDouble([1]);
		model.out2 = new ScilabDouble([1]);
		model.outtyp = new ScilabDouble([1]);
		model.rpar=scs_m_1;
	
		var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"STEP_FUNCTION\",sz(1),sz(2));"]);
		this.x=new standard_define(new ScilabDouble([2,2]),model,new ScilabString(),gr_i);
		return new BasicBlock(this.x);
	}
	
		STEP_FUNCTION.prototype.details = function STEP_FUNCTION() {
			return this.x;
	}
}
function STEP_FUNCTION () {


	var scs_m_1 = scicos_diagram();
	scs_m_1.objs.push(STEP("define"));
	scs_m_1.objs.push(OUT_f("define"));
	scs_m_1.objs.push(scicos_link({}));
	scs_m_1.objs.push(scicos_link({}));

	var blk = scs_m_1.objs(1);

	var graphics = blk.graphics;

	var model = blk.model;
	graphics.orig = new ScilabDouble([0,0]);
	graphics.sz = new ScilabDouble([40,40]);
	graphics.pein = new ScilabDouble([4]);
	graphics.peout = new ScilabDouble([4]);
	graphics.pout = new ScilabDouble([3]);
	blk.graphics=graphics;
	blk.model=model;
	scs_m_1.objs.push(blk);
	blk=scs_m_1.objs(2);
	graphics=blk.graphics;
	model=blk.model;
	graphics.orig = new ScilabDouble([80,10]);
	graphics.sz = new ScilabDouble([20,20]);
	graphics.exprs = new ScilabString(["1"]);
	model.ipar = new ScilabDouble([1]);
	graphics.pin = new ScilabDouble([3]);
	blk.graphics=graphics;
	blk.model=model;
	scs_m_1.objs.push(blk);

	var lnk = scs_m_1.objs(3);
	lnk.from = new ScilabDouble([1,1,0]);
	lnk.to = new ScilabDouble([2,1,1]);
	scs_m_1.objs.push(lnk);
	lnk=scs_m_1.objs(4);
	lnk.xx = new ScilabDouble([0,20, -20,-20,20,1]);
	lnk.yy = new ScilabDouble([0,-20,-20, 60,60,1]);
	lnk.ct = new ScilabDouble([5,-1]);
	lnk.from = new ScilabDouble([1,1,0]);
	lnk.to = new ScilabDouble([1,1,1]);
	scs_m_1.objs.push(lnk);
	clear blk lnk
	model=scicos_model();
	model.sim = new ScilabString(["csuper"]);
	model.out = new ScilabDouble([1]);
	model.out2 = new ScilabDouble([1]);
	model.outtyp = new ScilabDouble([1]);
	model.rpar=scs_m_1;

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,[],gr_i);
	return new BasicBlock(this.x)
}

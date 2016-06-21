function EDGE_TRIGGER () {


	var scs_m_1 = scicos_diagram();
	scs_m_1.objs.push(EDGETRIGGER("define"));
	scs_m_1.objs.push(IFTHEL_f("define"));
	scs_m_1.objs.push(IN_f("define"));
	scs_m_1.objs.push(CLKOUTV_f("define"));
	scs_m_1.objs.push(scicos_link({}));
	scs_m_1.objs.push(scicos_link({}));
	scs_m_1.objs.push(scicos_link({}));

	var blk = scs_m_1.objs(1);

	var graphics = blk.graphics;

	var model = blk.model;
	graphics.orig = new ScilabDouble([60,0]);
	graphics.sz = new ScilabDouble([60,40]);
	graphics.exprs = new ScilabString(["0"]);
	model.ipar = new ScilabDouble([0]);
	graphics.pin = new ScilabDouble([5]);
	graphics.pout = new ScilabDouble([6]);
	blk.graphics=graphics;
	blk.model=model;
	scs_m_1.objs.push(blk);
	blk=scs_m_1.objs(2);
	graphics=blk.graphics;
	model=blk.model;
	graphics.orig = new ScilabDouble([160,0]);
	graphics.sz = new ScilabDouble([60,40]);
	graphics.exprs = new ScilabString(["0";"0"]);
	model.evtin = new ScilabDouble();
	model.nzcross = new ScilabDouble([0]);
	model.nmode = new ScilabDouble([0]);
	graphics.pin = new ScilabDouble([6]);
	graphics.peout = new ScilabDouble([7],[0]);
	blk.graphics=graphics;
	blk.model=model;
	scs_m_1.objs.push(blk);
	blk=scs_m_1.objs(3);
	graphics=blk.graphics;
	model=blk.model;
	graphics.orig = new ScilabDouble([0,10]);
	graphics.sz = new ScilabDouble([20,20]);
	graphics.exprs = new ScilabString(["1"]);
	model.ipar = new ScilabDouble([1]);
	graphics.pout = new ScilabDouble([5]);
	blk.graphics=graphics;
	blk.model=model;
	scs_m_1.objs.push(blk);
	blk=scs_m_1.objs(4);
	graphics=blk.graphics;
	model=blk.model;
	graphics.orig = new ScilabDouble([170,-60]);
	graphics.sz = new ScilabDouble([20,20]);
	graphics.exprs = new ScilabString(["1"]);
	model.ipar = new ScilabDouble([1]);
	graphics.pein = new ScilabDouble([7]);
	blk.graphics=graphics;
	blk.model=model;
	scs_m_1.objs.push(blk);

	var lnk = scs_m_1.objs(5);
	lnk.from = new ScilabDouble([3,1,0]);
	lnk.to = new ScilabDouble([1,1,1]);
	scs_m_1.objs.push(lnk);
	lnk=scs_m_1.objs(6);
	lnk.from = new ScilabDouble([1,1,0]);
	lnk.to = new ScilabDouble([2,1,1]);
	scs_m_1.objs.push(lnk);
	lnk=scs_m_1.objs(7);
	lnk.ct = new ScilabDouble([5,-1]);
	lnk.from = new ScilabDouble([2,1,0]);
	lnk.to = new ScilabDouble([4,1,1]);
	scs_m_1.objs.push(lnk);
	clear blk lnk
	model=scicos_model();
	model.sim = new ScilabString(["csuper"]);
	model.in1 = new ScilabDouble([1]);
	model.evtout = new ScilabDouble([1]);
	model.rpar=scs_m_1;

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,[],gr_i);
	return new BasicBlock(this.x)
}

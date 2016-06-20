function freq_div () {


	var scs_m_1 = scicos_diagram();
	scs_m_1.objs.push(Modulo_Count("define"));
	scs_m_1.objs.push(CLKINV_f("define"));
	scs_m_1.objs.push(CLKOUTV_f("define"));
	scs_m_1.objs.push(IFTHEL_f("define"));
	scs_m_1.objs.push(CLKSPLIT_f("define"));
	scs_m_1.objs.push(scicos_link({}));
	scs_m_1.objs.push(scicos_link({}));
	scs_m_1.objs.push(scicos_link({}));
	scs_m_1.objs.push(scicos_link({}));
	scs_m_1.objs.push(scicos_link({}));

	var blk = scs_m_1.objs(1);

	var graphics = blk.graphics;

	var model = blk.model;
	graphics.orig = new ScilabDouble([0,-100]);
	graphics.sz = new ScilabDouble([60,40]);
	graphics.exprs = new ScilabString(["0";"3"]);
	model.dstate = new ScilabDouble([3]);
	model.ipar = new ScilabDouble([3]);
	graphics.pout = new ScilabDouble([7]);
	graphics.pein = new ScilabDouble([10]);
	blk.graphics=graphics;
	blk.model=model;
	scs_m_1.objs.push(blk);
	blk=scs_m_1.objs(2);
	graphics=blk.graphics;
	model=blk.model;
	graphics.orig = new ScilabDouble([120,0]);
	graphics.sz = new ScilabDouble([20,20]);
	graphics.exprs = new ScilabString(["1"]);
	model.ipar = new ScilabDouble([1]);
	graphics.peout = new ScilabDouble([6]);
	blk.graphics=graphics;
	blk.model=model;
	scs_m_1.objs.push(blk);
	blk=scs_m_1.objs(3);
	graphics=blk.graphics;
	model=blk.model;
	graphics.orig = new ScilabDouble([130,-160]);
	graphics.sz = new ScilabDouble([20,20]);
	graphics.exprs = new ScilabString(["1"]);
	model.ipar = new ScilabDouble([1]);
	graphics.pein = new ScilabDouble([8]);
	blk.graphics=graphics;
	blk.model=model;
	scs_m_1.objs.push(blk);
	blk=scs_m_1.objs(4);
	graphics=blk.graphics;
	model=blk.model;
	graphics.orig = new ScilabDouble([100,-100]);
	graphics.sz = new ScilabDouble([60,40]);
	graphics.exprs = new ScilabString(["1";"0"]);
	model.ipar = new ScilabDouble([1]);
	graphics.pin = new ScilabDouble([7]);
	graphics.pein = new ScilabDouble([9]);
	graphics.peout = new ScilabDouble([0],[8]);
	blk.graphics=graphics;
	blk.model=model;
	scs_m_1.objs.push(blk);
	blk=scs_m_1.objs(5);
	graphics=blk.graphics;
	model=blk.model;
	graphics.orig = new ScilabDouble([127,-33]);
	graphics.sz = new ScilabDouble([7,7]);
	graphics.pein = new ScilabDouble([6]);
	graphics.peout = new ScilabDouble([9],[10]);
	blk.graphics=graphics;
	blk.model=model;
	scs_m_1.objs.push(blk);

	var lnk = scs_m_1.objs(6);
	lnk.ct = new ScilabDouble([5,-1]);
	lnk.from = new ScilabDouble([2,1,0]);
	lnk.to = new ScilabDouble([5,1,1]);
	scs_m_1.objs.push(lnk);
	lnk=scs_m_1.objs(7);
	lnk.from = new ScilabDouble([1,1,0]);
	lnk.to = new ScilabDouble([4,1,1]);
	scs_m_1.objs.push(lnk);
	lnk=scs_m_1.objs(8);
	lnk.ct = new ScilabDouble([5,-1]);
	lnk.from = new ScilabDouble([4,2,0]);
	lnk.to = new ScilabDouble([3,1,1]);
	scs_m_1.objs.push(lnk);
	lnk=scs_m_1.objs(9);
	lnk.ct = new ScilabDouble([5,-1]);
	lnk.from = new ScilabDouble([5,1,0]);
	lnk.to = new ScilabDouble([4,1,1]);
	scs_m_1.objs.push(lnk);
	lnk=scs_m_1.objs(10);
	lnk.xx = new ScilabDouble([0,30,1]);
	lnk.yy = new ScilabDouble([0,-30,1]);
	lnk.ct = new ScilabDouble([5,-1]);
	lnk.from = new ScilabDouble([5,2,0]);
	lnk.to = new ScilabDouble([1,1,1]);
	scs_m_1.objs.push(lnk);
	clear blk lnk
	model=scicos_model();
	model.sim = new ScilabString(["csuper"]);
	model.evtin = new ScilabDouble([1]);
	model.evtout = new ScilabDouble([1]);
	model.rpar=scs_m_1;

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,[],gr_i);
	return new  BasicBlock (this.x)
}

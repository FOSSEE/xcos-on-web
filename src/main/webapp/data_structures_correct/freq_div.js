function freq_div() {

    freq_div.prototype.define = function freq_div() {
        var scs_m_1 = scicos_diagram();
        scs_m_1.objs.push(new Modulo_Count().internal());
        scs_m_1.objs.push(new CLKINV_f().internal());
        scs_m_1.objs.push(new CLKOUTV_f().internal());
        scs_m_1.objs.push(new IFTHEL_f().internal());
        scs_m_1.objs.push(new CLKSPLIT_f().internal());
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));

        var blk = scs_m_1.objs[0];
        var graphics = blk.graphics;
        var model = blk.model;
        graphics.orig = new ScilabDouble([0, -100]);
        graphics.sz = new ScilabDouble([60, 40]);
        graphics.exprs = new ScilabString(["0"], ["3"]);
        model.dstate = new ScilabDouble([3]);
        model.ipar = new ScilabDouble([3]);
        graphics.pout = new ScilabDouble([7]);
        graphics.pein = new ScilabDouble([10]);
        graphics.out_implicit = new ScilabString(["E"]);
        graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
        graphics.out_label = new ScilabString([""]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[0] = blk;

        blk = scs_m_1.objs[1];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([120, 0]);
        graphics.sz = new ScilabDouble([20, 20]);
        graphics.exprs = new ScilabString(["1"]);
        model.ipar = new ScilabDouble([1]);
        graphics.peout = new ScilabDouble([6]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[1] = blk;

        blk = scs_m_1.objs[2];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([130, -160]);
        graphics.sz = new ScilabDouble([20, 20]);
        graphics.exprs = new ScilabString(["1"]);
        model.ipar = new ScilabDouble([1]);
        graphics.pein = new ScilabDouble([8]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[2] = blk;

        blk = scs_m_1.objs[3];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([100, -100]);
        graphics.sz = new ScilabDouble([60, 40]);
        graphics.exprs = new ScilabString(["1"], ["0"]);
        model.ipar = new ScilabDouble([1]);
        graphics.pin = new ScilabDouble([7]);
        graphics.pein = new ScilabDouble([9]);
        graphics.peout = new ScilabDouble([0], [8]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[3] = blk;

        blk = scs_m_1.objs[4];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([127, -33]);
        graphics.sz = new ScilabDouble([7, 7]);
        graphics.pein = new ScilabDouble([6]);
        graphics.peout = new ScilabDouble([9], [10]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[4] = blk;

        var lnk = scs_m_1.objs[5];
        lnk.xx = new ScilabDouble([170], [170.5]);
        lnk.yy = new ScilabDouble([-44], [-75]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([2, 1, 0]);
        lnk.to = new ScilabDouble([5, 1, 1]);
        scs_m_1.objs[5] = lnk;

        lnk = scs_m_1.objs[6];
        lnk.xx = new ScilabDouble([104], [136]);
        lnk.yy = new ScilabDouble([-100], [-100]);
        lnk.from = new ScilabDouble([1, 1, 0]);
        lnk.to = new ScilabDouble([4, 1, 1]);
        scs_m_1.objs[6] = lnk;

        lnk = scs_m_1.objs[7];
        lnk.xx = new ScilabDouble([180], [180]);
        lnk.yy = new ScilabDouble([-124], [-176]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([4, 2, 0]);
        lnk.to = new ScilabDouble([3, 1, 1]);
        scs_m_1.objs[7] = lnk;

        lnk = scs_m_1.objs[8];
        lnk.xx = new ScilabDouble([170], [170.5]);
        lnk.yy = new ScilabDouble([-44], [-75]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([5, 1, 0]);
        lnk.to = new ScilabDouble([4, 1, 1]);
        scs_m_1.objs[8] = lnk;

        lnk = scs_m_1.objs[9];
        lnk.xx = new ScilabDouble([169], [170]);
        lnk.yy = new ScilabDouble([-90], [-76]);
        lnk.xx = new ScilabDouble([0, 30, 1]);
        lnk.yy = new ScilabDouble([0, -30, 1]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([5, 2, 0]);
        lnk.to = new ScilabDouble([1, 1, 1]);
        scs_m_1.objs[9] = lnk;

        model = scicos_model();
        model.sim = new ScilabString(["csuper"]);
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = scs_m_1;

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),&quot;freq_div&quot;,sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }
    freq_div.prototype.details = function freq_div() {
        return this.x;
    }
}

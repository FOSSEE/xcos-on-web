function Extract_Activation() {

    Extract_Activation.prototype.define = function Extract_Activation() {
        var scs_m_1 = scicos_diagram();
        scs_m_1.objs.push(new IFTHEL_f().internal());
        scs_m_1.objs.push(new CLKSOMV_f().internal());
        scs_m_1.objs.push(new IN_f().internal());
        scs_m_1.objs.push(new CLKOUTV_f().internal());
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));

        var blk = scs_m_1.objs[0];
        var graphics = blk.graphics;

        var model = blk.model;
        graphics.orig = new ScilabDouble([80, 0]);
        graphics.sz = new ScilabDouble([60, 40]);
        graphics.flip = new ScilabBoolean([true]);
        graphics.exprs = new ScilabString(["0"], ["0"]);
        model.evtin = new ScilabDouble();
        model.nzcross = new ScilabDouble([0]);
        model.nmode = new ScilabDouble([0]);
        graphics.pin = new ScilabDouble([7]);
        graphics.peout = new ScilabDouble([5], [6]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[0] = blk;

        blk = scs_m_1.objs[1];
        graphics = blk.graphics;
        model = blk.model;
        model.outtyp = new ScilabDouble();
        model.evtin = new ScilabDouble([-1], [-1], [-1]);
        model.evtout = new ScilabDouble([-1]);
        graphics.orig = new ScilabDouble([80, -80]);
        graphics.sz = new ScilabDouble([80, 40]);
        graphics.flip = new ScilabBoolean([true]);
        graphics.pein = new ScilabDouble([5], [6], [0]);
        graphics.peout = new ScilabDouble([8]);
        graphics.style = new ScilabString(["CLKSOMV_f"]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[1] = blk;

        blk = scs_m_1.objs[2];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([0, 10]);
        graphics.sz = new ScilabDouble([20, 20]);
        graphics.flip = new ScilabBoolean([true]);
        graphics.exprs = new ScilabString(["1"]);
        model.ipar = new ScilabDouble([1]);
        graphics.pout = new ScilabDouble([7]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[2] = blk;

        blk = scs_m_1.objs[3];
        graphics = blk.graphics;
        model = blk.model;
        model.outtyp = new ScilabDouble();
        graphics.style = new ScilabString(["CLKOUTV_f"]);
        graphics.orig = new ScilabDouble([110, -140]);
        graphics.sz = new ScilabDouble([20, 20]);
        graphics.flip = new ScilabBoolean([true]);
        graphics.exprs = new ScilabString(["1"]);
        graphics.gr_i = list(new ScilabString(["xstringb(orig(1),orig(2),\"CLKOUTV_f\",sz(1),sz(2));"]), new ScilabDouble([8]));
        model.ipar = new ScilabDouble([1]);
        graphics.pein = new ScilabDouble([8]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[3] = blk;

        var lnk = scs_m_1.objs[4];
        lnk.xx = new ScilabDouble([140], [140]);
        lnk.yy = new ScilabDouble([-44], [-76]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([1, 1, 0]);
        lnk.to = new ScilabDouble([2, 1, 1]);
        scs_m_1.objs[4] = lnk;

        lnk = scs_m_1.objs[5];
        lnk.xx = new ScilabDouble([160], [160]);
        lnk.yy = new ScilabDouble([-44], [-76]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([1, 2, 0]);
        lnk.to = new ScilabDouble([2, 2, 1]);
        scs_m_1.objs[5] = lnk;

        lnk = scs_m_1.objs[6];
        lnk.xx = new ScilabDouble([64], [116]);
        lnk.yy = new ScilabDouble([-40], [-20]);
        lnk.from = new ScilabDouble([3, 1, 0]);
        lnk.to = new ScilabDouble([1, 1, 1]);
        scs_m_1.objs[6] = lnk;

        lnk = scs_m_1.objs[7];
        lnk.xx = new ScilabDouble([160], [160]);
        lnk.yy = new ScilabDouble([-124], [-176]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([2, 1, 0]);
        lnk.to = new ScilabDouble([4, 1, 1]);
        scs_m_1.objs[7] = lnk;

        model = scicos_model();
        model.sim = new ScilabString(["csuper"]);
        model.in = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = scs_m_1;

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Extract_Activation\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }

    Extract_Activation.prototype.details = function Extract_Activation() {
        return this.x;
    }
}

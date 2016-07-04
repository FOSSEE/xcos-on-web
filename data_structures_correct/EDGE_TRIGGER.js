function EDGE_TRIGGER() {

    EDGE_TRIGGER.prototype.define = function EDGE_TRIGGER() {
        var scs_m_1 = scicos_diagram();
        scs_m_1.objs.push(new EDGETRIGGER().internal());
        scs_m_1.objs.push(new IFTHEL_f().internal());
        scs_m_1.objs.push(new IN_f().internal());
        scs_m_1.objs.push(new CLKOUTV_f().internal());
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));

        var blk = scs_m_1.objs[0];
        var graphics = blk.graphics;
        var model = blk.model;
        graphics.orig = new ScilabDouble([60, 0]);
        graphics.sz = new ScilabDouble([60, 40]);
        graphics.exprs = new ScilabString(["0"]);
        graphics.in_implicit = new ScilabString(["E"]);
        graphics.out_implicit = new ScilabString(["E"]);
        graphics.in_style = new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]);
        graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
        graphics.in_label = new ScilabString([""]);
        graphics.out_label = new ScilabString([""]);
        model.ipar = new ScilabDouble([0]);
        graphics.pin = new ScilabDouble([5]);
        graphics.pout = new ScilabDouble([6]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[0] = blk;

        blk = scs_m_1.objs[1];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([160, 0]);
        graphics.sz = new ScilabDouble([60, 40]);
        graphics.exprs = new ScilabString(["0"], ["0"]);
        model.evtin = new ScilabDouble();
        model.nzcross = new ScilabDouble([0]);
        model.nmode = new ScilabDouble([0]);
        graphics.pin = new ScilabDouble([6]);
        graphics.peout = new ScilabDouble([7], [0]);
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
        graphics.exprs = new ScilabString(["1"]);
        model.ipar = new ScilabDouble([1]);
        graphics.pout = new ScilabDouble([5]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[2] = blk;

        blk = scs_m_1.objs[3];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([170, -60]);
        graphics.sz = new ScilabDouble([20, 20]);
        graphics.exprs = new ScilabString(["1"]);
        model.ipar = new ScilabDouble([1]);
        graphics.pein = new ScilabDouble([7]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[3] = blk;

        var lnk = scs_m_1.objs[4];
        lnk.xx = new ScilabDouble([64], [96]);
        lnk.yy = new ScilabDouble([-40], [-20]);
        lnk.from = new ScilabDouble([3, 1, 0]);
        lnk.to = new ScilabDouble([1, 1, 1]);
        scs_m_1.objs[4] = lnk;

        lnk = scs_m_1.objs[5];
        lnk.xx = new ScilabDouble([164], [196]);
        lnk.yy = new ScilabDouble([-20], [-20]);
        lnk.from = new ScilabDouble([1, 1, 0]);
        lnk.to = new ScilabDouble([2, 1, 1]);
        scs_m_1.objs[5] = lnk;

        lnk = scs_m_1.objs[6];
        lnk.xx = new ScilabDouble([220], [220]);
        lnk.yy = new ScilabDouble([-44], [-96]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([2, 1, 0]);
        lnk.to = new ScilabDouble([4, 1, 1]);
        scs_m_1.objs[6] = lnk;

        model = scicos_model();
        model.sim = new ScilabString(["csuper"]);
        model.in = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = scs_m_1;

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),&quot;EDGE_TRIGGER&quot;,sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }
    EDGE_TRIGGER.prototype.details = function EDGE_TRIGGER() {
        return this.x;
    }
}

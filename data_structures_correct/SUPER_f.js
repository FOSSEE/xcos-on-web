function SUPER_f() {

    SUPER_f.prototype.define = function SUPER_f() {
        var scs = scicos_diagram();
        scs.props.title = new ScilabString(["Super_Block"]);

        var in1 = new IN_f().internal();
        in1.graphics.orig = new ScilabDouble([40, 40]);
        in1.graphics.sz = new ScilabDouble([20, 20]);
        in1.graphics.flip = new ScilabBoolean([true]);
        in1.graphics.pout = new ScilabDouble([0]);
        in1.model.uid = new ScilabString([count]);
        in1.doc = list(new ScilabString([count++]));

        var out = new OUT_f().internal();
        out.graphics.orig = new ScilabDouble([240, 40]);
        out.graphics.sz = new ScilabDouble([20, 20]);
        out.graphics.flip = new ScilabBoolean([true]);
        out.graphics.pin = new ScilabDouble([0]);
        out.model.outtyp = new ScilabDouble();
        out.model.uid = new ScilabString([count]);
        out.doc = list(new ScilabString([count++]));
        scs.objs.push(in1);
        scs.objs.push(out);

        var model = scicos_model();
        model.sim = new ScilabString(["super"]);
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.rpar = scs;
        model.blocktype = new ScilabString(["h"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var gr_i = ["xstringb(orig(1),orig(2),\"SUPER_f\",sz(1),sz(2));"];
        this.x = new standard_define(new ScilabDouble([2, 2]), model, new ScilabDouble(), gr_i);
        return new SuperBlock(this.x);
    }

    SUPER_f.prototype.details = function SUPER_f() {
        return this.x;
    }
}

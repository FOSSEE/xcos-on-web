function IFTHEL_f() {

    IFTHEL_f.prototype.internal = function IFTHEL_f() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["ifthel"]), new ScilabDouble([-1]));
        model.in = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([-1]);
        model.evtin = new ScilabDouble([-1]);
        model.outtyp = new ScilabDouble(); // changed
        model.evtout = new ScilabDouble([-1], [-1]) // 1, 1 -> -1, -1 inverse
        model.blocktype = new ScilabString(["l"]);
        model.firing = new ScilabDouble([-1], [-1]); // inverse
        model.dep_ut = new ScilabBoolean([true, false]);
        model.nmode = new ScilabDouble([1]);
        model.nzcross = new ScilabDouble([1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"IFTHEL_f\",sz(1),sz(2));"]);
        var exprs = new ScilabString(["1"], ["1"]); // value model.in, model.nmode inverse

        var block = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 3 -> 80
        block.graphics.in_implicit = new ScilabString(["E"]);
        // changed
        block.graphics.in_label = new ScilabString([""]);
        block.graphics.in_style = new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]);
        block.graphics.style = new ScilabString(["IFTHEL_f"]);
        return block;
    }

    IFTHEL_f.prototype.define = function IFTHEL_f() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["ifthel"]), new ScilabDouble([-1]));
        model.in = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([-1]);
        model.evtin = new ScilabDouble([-1]);
        model.outtyp = new ScilabDouble(); // changed
        model.evtout = new ScilabDouble([-1], [-1]) // 1, 1 -> -1, -1 inverse
        model.blocktype = new ScilabString(["l"]);
        model.firing = new ScilabDouble([-1], [-1]); // inverse
        model.dep_ut = new ScilabBoolean([true, false]);
        model.nmode = new ScilabDouble([1]);
        model.nzcross = new ScilabDouble([1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"IFTHEL_f\",sz(1),sz(2));"]);
        var exprs = new ScilabString(["1"], ["1"]); // value model.in, model.nmode inverse

        this.x = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 3 -> 80
        this.x.graphics.in_implicit = new ScilabString(["E"]);
        // changed
        this.x.graphics.in_label = new ScilabString([""]);
        this, x.graphics.in_style = new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]);
        this.x.graphics.style = new ScilabString(["IFTHEL_f"]);
        return new BasicBlock(this.x);
    }

    IFTHEL_f.prototype.details = function IFTHEL_f() {
        return this.x;
    }
}

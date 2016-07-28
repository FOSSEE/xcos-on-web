function ANDLOG_f() {

    ANDLOG_f.prototype.internal = function ANDLOG_f() {
        var model = scicos_model();
        model.sim = new ScilabString(["andlog"]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]); // null -> 1
        model.evtin = new ScilabDouble([-1], [-1]); // 1, 1 -> -1, -1
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ANDLOG_f\",sz(1),sz(2));"]);
        var block = new standard_define(new ScilabDouble([80, 80]), model, new ScilabDouble(), gr_i); // 3 -> 80

        // Style
        block.graphics.out_implicit = new ScilabString(["E"]);
        // changed
        block.graphics.out_label = new ScilabString([""]);
        block.graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
        block.graphics.style = new ScilabString(["ANDLOG_f"]);
        return block;
    }

    ANDLOG_f.prototype.define = function ANDLOG_f() {
        var model = scicos_model();
        model.sim = new ScilabString(["andlog"]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]); // null -> 1
        model.evtin = new ScilabDouble([-1], [-1]); // 1, 1 -> -1, -1
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ANDLOG_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([80, 80]), model, new ScilabDouble(), gr_i); // 3 -> 80

        // Style
        this.x.graphics.out_implicit = new ScilabString(["E"]);
        // changed
        this.x.graphics.out_label = new ScilabString([""]);
        this.x.graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
        this.x.graphics.style = new ScilabString(["ANDLOG_f"]);
        return new BasicBlock(this.x);
    }

    ANDLOG_f.prototype.details = function ANDLOG() {
        return this.x;
    }
}

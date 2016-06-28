function DEBUG() {

    DEBUG.prototype.define = function DEBUG() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["%debug_scicos"]), new ScilabDouble([99]));
        model.blocktype = new ScilabString(["d"]);

        var exprs = list(new ScilabString([""]), new ScilabString(["xcos_debug_gui(flag,block);"]));

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DEBUG\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([8, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DEBUG.prototype.details = function DEBUG() {
        return this.x;
    }
}


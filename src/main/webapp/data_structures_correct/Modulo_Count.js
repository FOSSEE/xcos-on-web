function Modulo_Count() {

    Modulo_Count.prototype.define = function Modulo_Count() {
        this.ini_c = 0;
        this.base = 3;

        var model = scicos_model();
        model.sim = list(new ScilabString(["modulo_count"]), new ScilabDouble([4]));
        model.evtin = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([this.ini_c]);
        model.ipar = new ScilabDouble([this.base]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.ini_c], [this.base]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Modulo_Count\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    Modulo_Count.prototype.internal = function Modulo_Count() {
        this.ini_c = 0;
        this.base = 3;

        var model = scicos_model();
        model.sim = list(new ScilabString(["modulo_count"]), new ScilabDouble([4]));
        model.evtin = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([this.ini_c]);
        model.ipar = new ScilabDouble([this.base]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.ini_c], [this.base]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Modulo_Count\",sz(1),sz(2));"]);
        var block = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        block.graphics.style = new ScilabString(["Modulo_Count"]);
        return block;
    }
    Modulo_Count.prototype.details = function Modulo_Count() {
        return this.x;
    }
}

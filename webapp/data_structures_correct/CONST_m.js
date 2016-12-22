function CONST_m() {
    CONST_m.prototype.get = function CONST_m() {

        var options = {
            vec: ["Constant Value", this.c.toString()]
        };
        return options;
    }
    CONST_m.prototype.set = function CONST_m() {
        this.c = [parseInt(arguments[0]["vec"])];
        this.displayParameter = this.c;
        this.x.model.sim = list(new ScilabString(["cstblk4_m"]), new ScilabDouble([4]));
        this.x.model.opar = list(new ScilabDouble(this.c));
        this.x.model.rpar = new ScilabDouble();
        this.x.graphics.exprs = new ScilabString([sci2exp(this.c)]);
        return new BasicBlock(this.x);
    }
    CONST_m.prototype.internal = function CONST_m() {
        this.c = [1];
        var model = new scicos_model();
        model.sim = list(new ScilabString(["cstblk4"]), new ScilabDouble([4]));
        model.in = new ScilabDouble();
        model.out = new ScilabDouble([this.c.length]);
        model.in2 = new ScilabDouble();
        model.out2 = new ScilabDouble([this.c.length]);
        model.rpar = new ScilabDouble(this.c);
        model.opar = list();
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONST_m\",sz(1),sz(2));"]);
        var exprs = new ScilabString([sci2exp(this.c)]);
        var block = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 1 -> 80
        block.graphics.style = new ScilabString(["CONST_m"]);
        return block;
    }
    CONST_m.prototype.define = function CONST_m() {
        this.c = [1];
        var model = new scicos_model();
        model.sim = list(new ScilabString(["cstblk4"]), new ScilabDouble([4]));
        model.in = new ScilabDouble();
        model.out = new ScilabDouble([this.c.length]);
        model.in2 = new ScilabDouble();
        model.out2 = new ScilabDouble([this.c.length]);
        model.rpar = new ScilabDouble(this.c);
        model.opar = list();
        model.blocktype = new ScilabString(["d"]);
        this.displayParameter = [1];
        model.dep_ut = new ScilabBoolean([false, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONST_m\",sz(1),sz(2));"]);
        var exprs = new ScilabString([sci2exp(this.c)]);
        this.x = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 1 -> 80
        this.x.graphics.style = new ScilabString(["CONST_m"]);
        return new BasicBlock(this.x);
    }
    CONST_m.prototype.details = function CONST_m() {
        return this.x;

    }
}

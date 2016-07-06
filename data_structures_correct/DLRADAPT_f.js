function DLRADAPT_f() {

    DLRADAPT_f.prototype.define = function DLRADAPT_f() {
        this.p = [[0], [1]];
        this.rn = [];
        this.rd = [[math.complex(0.2, 0.8), math.complex(0.2, -0.8)], [math.complex(0.3, 0.7), math.complex(0.3, -0.7)]];
        this.g = [[1], [1]];
        this.last_u = [];
        this.last_y = [[0], [0]];

        var model = scicos_model();
        model.sim = new ScilabString(["dlradp"]);
        model.in = new ScilabDouble([1], [1]);
        model.out = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = new ScilabDouble(...this.last_y);
        model.rpar = new ScilabDouble(...this.p, ...real(colon_operator(this.rd)), ...math.im(colon_operator(this.rd)), ...this.g);
        model.ipar = new ScilabDouble([0], [2], [2]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.p)], [sci2exp(this.rn)], [sci2exp(this.rd, 0)], [sci2exp(this.g)], [sci2exp(this.last_u)], [sci2exp(this.last_y)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DLRADAPT_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DLRADAPT_f.prototype.details = function DLRADAPT_f() {
        return this.x;
    }
}

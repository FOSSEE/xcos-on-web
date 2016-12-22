function INTRP2BLK_f() {

    INTRP2BLK_f.prototype.define = function INTRP2BLK_f() {
        this.a = [[0],[1]];
        this.b = [[0],[1]];
        this.c = [[0,1],[1,2]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["intrp2"]), new ScilabDouble([1]));
        model.in = new ScilabDouble([1], [1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble(...this.a,...this.b,...colon_operator(this.c));
        model.ipar = new ScilabDouble([2], [2]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);
        
        var exprs = new ScilabString([sci2exp(this.a)],[sci2exp(this.b)],[sci2exp(this.c)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"INTRP2BLK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    INTRP2BLK_f.prototype.details = function INTRP2BLK_f() {
        return this.x;
    }
}


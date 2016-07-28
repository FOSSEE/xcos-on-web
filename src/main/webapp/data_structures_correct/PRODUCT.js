function PRODUCT() {

    PRODUCT.prototype.define = function PRODUCT() {
        this.sgn = [[1],[-1]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["product"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1], [-1]);
        model.out = new ScilabDouble([-1]);
        model.ipar = new ScilabDouble(...this.sgn);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.sgn)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),&quot;PRODUCT&quot;,sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 3]), model, exprs, gr_i);
        return new Product(this.x);
    }
    PRODUCT.prototype.details = function PRODUCT() {
        return this.x;
    }
}

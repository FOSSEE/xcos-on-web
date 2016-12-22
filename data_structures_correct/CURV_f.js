function CURV_f() {

    CURV_f.prototype.define = function CURV_f() {
        this.xx = [[0],[1],[2]];
        this.yy = [[-5],[5],[0]];
        this.rect = [0,-5,2,5];
        this.axisdata = [[2],[10],[2],[10]];
        this.ipar = new ScilabDouble([size(this.xx, 1)], ...this.axisdata);
        this.rpar = new ScilabDouble(...this.xx, ...this.yy, this.rect);

        var model = scicos_model();
        model.sim = new ScilabString(["intplt"]);
        model.in = new ScilabDouble();
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble(...this.xx, ...this.yy, ...colon_operator([this.rect]));
        model.ipar = new ScilabDouble([size(this.xx, 1)], ...this.axisdata);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CURV_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }
    CURV_f.prototype.details = function CURV_f() {
        return this.x;
    }
}

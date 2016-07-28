function BARXY() {

    BARXY.prototype.define = function BARXY() {

        var model = scicos_model();
        this.xmin = -15;
        this.xmax = 15;
        this.ymin = -15;
        this.ymax = 15;

        model.sim = list(new ScilabString(["BARXY_sim"]), new ScilabDouble([5]));
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([true, false]);
        model.in = new ScilabDouble([-1], [-1]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble();
        model.evtin = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.xmin], [this.xmax], [this.ymin], [this.ymax]);
        model.ipar = new ScilabDouble([1]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, [], []);
        this.x.graphics.in_implicit = new ScilabString(["E", , "E"]);
        this.x.graphics.out_implicit = new ScilabDouble();
        this.x.graphics.exprs = new ScilabString(["-15"], ["15"], ["-15"], ["15"], ["1"]);
        return new BasicBlock(this.x);
    }
    BARXY.prototype.details = function BARXY() {
        return this.x;
    }

}

function CANIMXY3D() {

    CANIMXY3D.prototype.define = function CANIMXY3D() {
		this.win = -1;
		this.N = 2;
		this.clrs = [[1],[2],[3],[4],[5],[6],[7],[13]];
		this.siz = [[1],[1],[1],[1],[1],[1],[1],[1]];
		this.wpos = [[-1],[-1]];
		this.wdim = [[-1],[-1]];
		this.param3ds = [[50],[280]];
		this.vec_x = [[-15],[15]];
		this.vec_y = [[-15],[15]];
		this.vec_z = [[-15],[15]];
		this.nbr_curves = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["canimxy3d"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1], [1], [1]);
        model.evtin = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1], [1], [1]);
        model.intyp = new ScilabDouble([1], [1], [1]);
        model.rpar = new ScilabDouble(...colon_operator(this.vec_x), ...colon_operator(this.vec_y), ...colon_operator(this.vec_z), ...colon_operator(this.param3ds));
        model.ipar = new ScilabDouble([this.win], [8], [this.N], ...colon_operator(this.clrs), ...colon_operator(this.siz), [8], ...colon_operator(this.wpos), ...colon_operator(this.wdim), [this.nbr_curves]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.nbr_curves], [this.clrs.toString().replace(/,/g, " ")], [this.siz.toString().replace(/,/g, " ")], [this.win], ["[]"], ["[]"], [this.vec_x.toString().replace(/,/g, " ")], [this.vec_y.toString().replace(/,/g, " ")], [this.vec_z.toString().replace(/,/g, " ")], [this.param3ds.toString().replace(/,/g, " ")], [this.N]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CANIMXY3D\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    CANIMXY3D.prototype.details = function CANIMXY3D() {
        return this.x;
    }

}

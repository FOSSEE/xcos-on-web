function CMSCOPE() {
    CMSCOPE.prototype.get = function CMSCOPE() {

        var options = {
            in1: ["Input ports sizes", this.in1.toString().replace(/,/g, " ")],
            clrs: ["Drawing colors (>0) or mark (<0)", this.clrs.toString().replace(/,/g, " ")],
            win: ["Output window number (-1 for automatic)", this.win],
            wpos: ["Output window position", sci2exp([])],
            wdim: ["Output window sizes", sci2exp([])],
            ymin: ["Ymin vector", this.ymin.toString().replace(/,/g, " ")],
            ymax: ["Ymax vector", this.ymax.toString().replace(/,/g, " ")],
            per: ["Refresh period", this.per.toString().replace(/,/g, " ")],
            N: ["Buffer size", this.N],
            heritance: ["Accept herited events 0/1", 0],
            nom: ["Name of Scope (label&Id)", ""]
        };
        return options;
    }
    CMSCOPE.prototype.set = function CMSCOPE() {
        this.in1 = inverse(arguments[0]["in1"]);
        this.clrs = inverse(arguments[0]["clrs"]);
        this.win = parseInt((arguments[0]["win"]));
        this.ymin = inverse(arguments[0]["ymin"]);
        this.ymax = inverse(arguments[0]["ymax"]);
        this.per = inverse(arguments[0]["per"]);
        this.N = parseInt((arguments[0]["N"]));
        this.heritance = parseInt((arguments[0]["heritance"]));
        this.nom = arguments[0]["nom"];
        this.yy = [...transpose(this.ymin), ...transpose(this.ymax)];
        this.period = transpose(this.per);
        this.x.model.ipar = new ScilabDouble([this.win], [this.in1.length], [this.N], ...this.wpos, ...this.wdim, ...this.in1, this.clrs[0], this.clrs[1],[this.heritance]);
        this.x.model.label = new ScilabString([this.nom]);
        this.x.model.evtin = new ScilabDouble(...ones(1-this.heritance,1));
        this.x.graphics.id = new ScilabString([this.nom]);
        this.x.model.rpar = new ScilabDouble([0], ...colon_operator(this.period), ...colon_operator(this.yy));
        this.x.graphics.exprs = new ScilabString([this.in1.toString().replace(/,/g, " ")], [this.clrs.toString().replace(/,/g, " ")], [this.win], [sci2exp([])], [sci2exp([])], [this.ymin.toString().replace(/,/g, " ")], [this.ymax.toString().replace(/,/g, " ")], [this.per.toString().replace(/,/g, " ")], [this.N], [0], [""]);
        return new BasicBlock(this.x);
    }
    CMSCOPE.prototype.define = function CMSCOPE() {
        this.win = -1;
        this.in1 = [[1],[1]];
        this.wdim = [[-1],[-1]];
        this.wpos = [[-1],[-1]];
        this.clrs = [[1],[3],[5],[7],[9],[11],[13],[15]];
        this.N = 20;
        this.ymin = [[-1],[-5]];
        this.ymax = [[1],[5]];
        this.per = [[30],[30]];
        this.yy = [...transpose(this.ymin), ...transpose(this.ymax)];
        this.period = transpose(this.per);


        var model = scicos_model();
        model.sim = list(new ScilabString(["cmscope"]), new ScilabDouble([4]));
        model.in = new ScilabDouble(...this.in1);
        model.in2 = new ScilabDouble([1], [1]);
        model.intyp = new ScilabDouble([1], [1]);
        model.evtin = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([0], ...colon_operator(this.period), ...colon_operator(this.yy));
        model.ipar = new ScilabDouble([this.win], [this.in1.length], [this.N], ...this.wpos, ...this.wdim, ...this.in1, this.clrs[0], this.clrs[1]);

        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);
        var exprs = new ScilabString([this.in1.toString().replace(/,/g, " ")], [this.clrs.toString().replace(/,/g, " ")], [this.win], [sci2exp([])], [sci2exp([])], [this.ymin.toString().replace(/,/g, " ")], [this.ymax.toString().replace(/,/g, " ")], [this.per.toString().replace(/,/g, " ")], [this.N], [0], [""]);
        var gr_i = list(new ScilabString(["xstringb(orig(1),orig(2),\"CMSCOPE\",sz(1),sz(2));"]), new ScilabDouble([8]));
        this.x = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 2 -> 80
        this.x.graphics.style = new ScilabString(["CMSCOPE"]);
        return new BasicBlock(this.x);
    }
    CMSCOPE.prototype.details = function CMSCOPE() {
        return this.x;
    }
}

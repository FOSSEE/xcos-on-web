function CMSCOPE() {
    switch (arguments[0]) {
        case "define":
            this.win = -1;
            this.in1 = [
                [1],
                [1]
            ];
            this.wdim = [
                [-1],
                [-1]
            ];
            this.wpos = [
                [-1],
                [-1]
            ];
            this.clrs = [
                [1],
                [3],
                [5],
                [7],
                [9],
                [11],
                [13],
                [15]
            ];
            this.N = 20;
            this.ymin = [
                [-1],
                [-5]
            ];
            this.ymax = [
                [1],
                [5]
            ];
            this.per = [
                [30],
                [30]
            ];
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
        case "details":
            return this.x;
    }
}
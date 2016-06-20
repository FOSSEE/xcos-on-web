function CONST_m() {

    switch (arguments[0]) {
        case "get":
            var options = {
                vec: ["Constant Value", this.c.toString()]
            };
            return options;
        case "set":
            this.c = [arguments[2]["vec"]];
            var dec = new mxCodec();
            var details = dec.decode(arguments[1]);
            details.realParameters = new ScilabDouble();
            details.exprs = new ScilabString([sci2exp(this.c)]);
            this.x.realParameters = new ScilabDouble();
            this.x.exprs = new ScilabString([sci2exp(this.c)]);
            return details;
        case "define":
            this.c = [1];
            var model = scicos_model();
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
            this.x = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 1 -> 80
            this.x.graphics.style = new ScilabString(["CONST_m"]);
            return new BasicBlock(this.x);
        case "details":
            return this.x;

    }
}
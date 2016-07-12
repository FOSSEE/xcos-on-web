function ABS_VALUE() {

    ABS_VALUE.prototype.define = function ABS_VALUE() {

        this.nu = -1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["absolute_value"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.nu]);
        model.out = new ScilabDouble([this.nu]);
        model.nzcross = new ScilabDouble([this.nu]);
        model.nmode = new ScilabDouble([this.nu]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ABS_VALUE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        this.x.graphics.style = new ScilabString(["ABS_VALUE"]);
        return new BasicBlock(this.x);

    }

    ABS_VALUE.prototype.details = function ABS_VALUE() {
        return this.x;
    }

}
function AFFICH_m() {

    AFFICH_m.prototype.define = function AFFICH_m() {
        this.font = 1;
        this.fontsize = 1;
        this.colr = 1;
        this.nt = 5;
        this.nd = 1;
        this.in1 = [1, 1];

        var model = scicos_model();
        model.sim = list(new ScilabString(["affich2"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.in1[0]]);
        model.in2 = new ScilabDouble([this.in1[1]]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([-1], [0], [0], [1], [1], [0], ...zeros(this.in1[0] * this.in1[1], 1));
        model.ipar = new ScilabDouble([this.font], [this.fontsize], [this.colr], [1000], [this.nt], [this.nd], [this.in1[0]]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);
        model.label = new ScilabString([""]);
        var exprs = new ScilabString([sci2exp([parseFloat(...getData(model.in)), parseFloat(...getData(model.in2))])], [this.font.toString()], [this.fontsize.toString()], [this.colr.toString()], [this.nt.toString()], [this.nd.toString()], [(0).toString()]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"AFFICH_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        this.x.graphics.style = new ScilabString(["AFFICH_m"]);
        return new AfficheBlock(this.x);
    }

    AFFICH_m.prototype.details = function AFFICH_m() {
        return this.x;
    }
}
function ANDBLK() {

    ANDBLK.prototype.define = function ANDBLK() {

        var andlog = new ANDLOG_f().internal();
        andlog.graphics.orig = new ScilabDouble([194, 133]);
        andlog.graphics.sz = new ScilabDouble([60, 60]);
        andlog.graphics.flip = new ScilabBoolean([true]);
        andlog.graphics.pout = new ScilabDouble([9]);
        andlog.graphics.pein = new ScilabDouble([4], [11]);
        andlog.model.uid = new ScilabString([count]);
        andlog.doc = list(new ScilabString([count++]));

        var input_port1 = new CLKIN_f().internal();
        input_port1.graphics.orig = new ScilabDouble([149, 287]);
        input_port1.graphics.sz = new ScilabDouble([20, 20]);
        input_port1.graphics.flip = new ScilabBoolean([true]);
        input_port1.graphics.exprs = new ScilabString(["1"]);
        input_port1.graphics.peout = new ScilabDouble([4]);
        input_port1.model.ipar = new ScilabDouble([1]);
        input_port1.model.uid = new ScilabString([count]);
        input_port1.doc = list(new ScilabString([count++]));

        var output_port = new CLKOUT_f().internal();
        output_port.graphics.orig = new ScilabDouble([450, 83]);
        output_port.graphics.sz = new ScilabDouble([20, 20]);
        output_port.graphics.flip = new ScilabBoolean([true]);
        output_port.graphics.exprs = new ScilabString(["1"]);
        output_port.graphics.pein = new ScilabDouble([8]);
        output_port.model.ipar = new ScilabDouble([1]);
        output_port.model.uid = new ScilabString([count]);
        output_port.doc = list(new ScilabString([count++]));

        var input_port2 = new CLKIN_f().internal();
        input_port2.graphics.orig = new ScilabDouble([141, 330]);
        input_port2.graphics.sz = new ScilabDouble([20, 20]);
        input_port2.graphics.flip = new ScilabBoolean([true]);
        input_port2.graphics.exprs = new ScilabString(["2"]);
        input_port2.graphics.peout = new ScilabDouble([6]);
        input_port2.model.ipar = new ScilabDouble([2]);
        input_port2.model.uid = new ScilabString([count]);
        input_port2.doc = list(new ScilabString([count++]));

        var ifthel = new IFTHEL_f().internal();
        ifthel.graphics.orig = new ScilabDouble([331, 137]);
        ifthel.graphics.sz = new ScilabDouble([60, 60]);
        ifthel.graphics.flip = new ScilabBoolean([true]);
        ifthel.graphics.pin = new ScilabDouble([9]);
        ifthel.graphics.pein = new ScilabDouble([12]);
        ifthel.graphics.peout = new ScilabDouble([8], [0]);
        ifthel.model.uid = new ScilabString([count]);
        ifthel.doc = list(new ScilabString([count++]));


        var split = new CLKSPLIT_f().internal();
        split.graphics.orig = new ScilabDouble([234, 275.78348]);
        split.graphics.pein = new ScilabDouble([6]);
        split.graphics.peout = new ScilabDouble([11], [12]);
        split.model.uid = new ScilabString([count]);
        split.doc = list(new ScilabString([count++]));

        var diagram = scicos_diagram();
        diagram.objs.push(andlog);
        diagram.objs.push(input_port1);
        diagram.objs.push(output_port);
        diagram.objs.push(input_port2);
        diagram.objs.push(ifthel);
        diagram.objs.push(split);
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([169], [214], [214]),
            yy: new ScilabDouble([297], [297], [198.71]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([2, 1, 0]),
            to: new ScilabDouble([1, 1, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([161], [234], [234]),
            yy: new ScilabDouble([340], [340], [275.78]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([4, 1, 0]),
            to: new ScilabDouble([6, 1, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([351], [351], [450]),
            yy: new ScilabDouble([131.29], [93], [93]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([5, 1, 0]),
            to: new ScilabDouble([3, 1, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([262.57], [322.43]),
            yy: new ScilabDouble([163], [167]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([1, 1, 0]),
            to: new ScilabDouble([5, 1, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([234], [234]),
            yy: new ScilabDouble([275.78], [198.71]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([6, 1, 0]),
            to: new ScilabDouble([1, 2, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([234], [361], [361]),
            yy: new ScilabDouble([275.78], [275.78], [202.71]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([6, 2, 0]),
            to: new ScilabDouble([5, 1, 1])
        }));
        this.x = scicos_block();
        this.x.gui = new ScilabString(["ANDBLK"]);
        this.x.graphics.sz = new ScilabDouble([2, 2]);
        this.x.graphics.gr_i = new ScilabDouble();
        this.x.graphics.pein = new ScilabDouble([0], [0]);
        this.x.graphics.peout = new ScilabDouble([0]);
        this.x.model.sim = new ScilabString(["csuper"]);
        this.x.model.evtin = new ScilabDouble([1], [1]);
        this.x.model.evtout = new ScilabDouble([1]);
        this.x.model.blocktype = new ScilabString(["h"]);
        this.x.model.firing = new ScilabBoolean([false]);
        this.x.model.dep_ut = new ScilabBoolean([false, false]);
        this.x.model.rpar = diagram;
        return new BasicBlock(this.x);
    }
    ANDBLK.prototype.details = function ANDBLK() {
        return this.x;
    }

}
function ANDLOG_f() {

    ANDLOG_f.prototype.internal = function ANDLOG_f() {
        var model = scicos_model();
        model.sim = new ScilabString(["andlog"]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]); // null -> 1
        model.evtin = new ScilabDouble([-1], [-1]); // 1, 1 -> -1, -1
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ANDLOG_f\",sz(1),sz(2));"]);
        var block = new standard_define(new ScilabDouble([80, 80]), model, new ScilabDouble(), gr_i); // 3 -> 80

        // Style
        block.graphics.out_implicit = new ScilabString(["E"]);
        // changed
        block.graphics.out_label = new ScilabString([""]);
        block.graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
        block.graphics.style = new ScilabString(["ANDLOG_f"]);
        return block;
    }

    ANDLOG_f.prototype.define = function ANDLOG_f() {
        var model = scicos_model();
        model.sim = new ScilabString(["andlog"]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]); // null -> 1
        model.evtin = new ScilabDouble([-1], [-1]); // 1, 1 -> -1, -1
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ANDLOG_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([80, 80]), model, new ScilabDouble(), gr_i); // 3 -> 80

        // Style
        this.x.graphics.out_implicit = new ScilabString(["E"]);
        // changed
        this.x.graphics.out_label = new ScilabString([""]);
        this.x.graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
        this.x.graphics.style = new ScilabString(["ANDLOG_f"]);
        return new BasicBlock(this.x);
    }

    ANDLOG_f.prototype.details = function ANDLOG() {
        return this.x;
    }
}
function AUTOMAT() {

    AUTOMAT.prototype.define = function AUTOMAT() {
        this.NMode = 2;
        this.Minitial = 1;
        this.NX = 1;
        this.X0 = [0.0];
        this.XP = [[1],[1]];
        this.C1 = [2];
        this.C2 = [1];

        var exprs = new ScilabString([this.NMode.toString()], [this.Minitial.toString()], [this.NX.toString()], [sci2exp(this.X0)], [sci2exp(this.XP)], [sci2exp(this.C1)], [sci2exp(this.C2)]);
        var ipar = new ScilabDouble([this.NMode], [this.Minitial], [this.NX], ...this.XP, this.C1, this.C2);
        var rpar = new ScilabDouble(this.X0);

        var model = scicos_model();
        model.sim = list(new ScilabString(["automat"]), new ScilabDouble([10004]));
        model.in = new ScilabDouble([2 * this.NX + 1], [2 * this.NX + 1]);
        model.out = new ScilabDouble([2], [2 * this.NX]);
        model.state = new ScilabDouble(...ones(2 * this.NX, 1));
        model.nzcross = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["c"]);
        model.evtout = new ScilabDouble([1]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, true]);
        model.ipar = ipar;
        model.rpar = rpar;

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"AUTOMAT\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);

    }

    AUTOMAT.prototype.details = function AUTOMAT() {
        return this.x;
    }
}
function Bache() {

    Bache.prototype.define = function Bache() {
        this.in1 = 2;
        this.out = 3;

        var model = scicos_model();
        model.in = new ScilabDouble(math.transpose(math.range(-1, -this.in1, -1, true)));
        model.out = new ScilabDouble(math.transpose(math.range(-1, -this.out, -1, true)));

        this.Patm = 1.013E5;
        this.A = 1;
        this.ze1 = 40;
        this.ze2 = 0;
        this.zs1 = 40;
        this.zs2 = 0;
        this.z0 = 30;
        this.T0 = 290;
        this.p_rho = 0;

        model.rpar = new ScilabDouble([this.Patm], [this.A], [this.ze1], [this.ze2], [this.zs1], [this.zs2], [this.z0], [this.T0], [this.p_rho]);
        model.sim = new ScilabString(["Bache"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["Bache"]);
        mo.inputs = new ScilabString(["Ce1", "Ce2"]);
        mo.outputs = new ScilabString(["Cs1", "Cs2", "yNiveau"]);
        mo.parameters = list(new ScilabString(["Patm"], ["A"], ["ze1"], ["ze2"], ["zs1"], ["zs2"], ["z0"], ["T0"], ["p_rho"]), new ScilabDouble([this.Patm], [this.A], [this.ze1], [this.ze2], [this.zs1], [this.zs2], [this.z0], [this.T0], [this.p_rho]));
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), '*'), 1));
        model.out = new ScilabDouble(...ones(size(getData(mo.outputs), '*'), 1));

        var exprs = new ScilabString([this.Patm.toString()], [this.A.toString()], [this.ze1.toString()], [this.ze2.toString()], [this.zs1.toString()], [this.zs2.toString()], [this.z0.toString()], [this.T0.toString()], [this.p_rho.toString()]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Bache\",sz(1),sz(2));"]);
        this.x = new standard_define([2, 2], model, exprs, list(gr_i, 0));
        this.x.graphics.in_implicit = new ScilabString(["I"], ["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"], ["I"], ["E"]);
        return new BasicBlock(this.x);
    }
    Bache.prototype.details = function Bache() {
        return this.x;
    }
}
function BACKLASH() {
    BACKLASH.prototype.define = function BACKLASH() {

        var exprs = new ScilabString(["0"], ["1"], ["1"]);
        var model = scicos_model();
        model.sim = list(new ScilabString(["backlash"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([0], [1]);
        model.nzcross = new ScilabDouble([2]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"BACKLASH\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x)
    }
    BACKLASH.prototype.details = function BACKLASH() {
        return this.x;
    }
}
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
function BIGSOM_f() {

    BIGSOM_f.prototype.define = function BIGSOM_f() {
        this.sgn = [[1],[1]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["sum"]), new ScilabDouble([2]));
        model.in = new ScilabDouble([-1], [-1]);
        model.out = new ScilabDouble([-1]);
        model.rpar = new ScilabDouble(...this.sgn);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.sgn)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"BIGSOM_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 3]), model, exprs, gr_i);
        this.x.graphics.style = new ScilabString(["BIGSOM_f"]);
        return new BigSom(this.x);
    }
    BIGSOM_f.prototype.details = function BIGSOM_f() {
        return this.x;
    }
}
function BITCLEAR() {
    BITCLEAR.prototype.define = function BITCLEAR() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["bit_clear_32"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([3]);
        model.outtyp = new ScilabDouble([3]);
        model.opar = list(int32([0]));
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(3)], [sci2exp(0)]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"BITCLEAR\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    BITCLEAR.prototype.details = function BITCLEAR() {
        return this.x;
    }
}
function BITSET() {

    BITSET.prototype.define = function BITSET() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["bit_set_32"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([3]);
        model.outtyp = new ScilabDouble([3]);
        model.opar = list(uint32([0]));
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(3)], [sci2exp(0)]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"BITSET\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    BITSET.prototype.details = function BITSET() {
        return this.x;
    }
}
function BOUNCE() {

    BOUNCE.prototype.define = function BOUNCE() {
        this.n = 2;

        this.k = 0;
        this.ipar = [];

        for (var i = 1; i <= this.n; i++) {
            for (var j = i + 1; j <= this.n; j++) {
                this.ipar[this.k] = [i];
                this.k++;
                this.ipar[this.k] = [j];
                this.k++;
            }
        }

        this.walls = [[0],[5],[0],[5]];
        this.x1 = [[2],[2.5]];
        this.xd = [[0],[0]];
        this.y1 = [[3],[5]];
        this.yd = [[0],[0]];
        this.g = 9.81;
        this.C = 0;
        this.rpar1 = ones(this.n, 1);
        this.rpar2 = this.rpar1;
        this.state = [...math.transpose(this.x1), ...math.transpose(this.xd), ...math.transpose(this.y1), ...math.transpose(this.yd)];

        var model = scicos_model();
        model.sim = list(new ScilabString(["bounce_ball"]), new ScilabDouble([4]));
        model.in = new ScilabDouble();
        model.out = new ScilabDouble([this.n], [this.n]);
        model.state = new ScilabDouble(...colon_operator(this.state));
        model.rpar = new ScilabDouble(...this.rpar1, ...this.rpar2, ...this.walls, [this.g], [this.C]);
        model.ipar = new ScilabDouble(...this.ipar);
        model.nzcross = new ScilabDouble([this.n * (this.n - 1) / 2 + 4 * this.n]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString([sci2exp(this.rpar1)], [sci2exp(this.rpar2)], [sci2exp(this.walls)], [sci2exp(this.x1)], [sci2exp(this.xd)], [sci2exp(this.y1)], [sci2exp(this.yd)]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"BOUNCE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);

        return new BasicBlock(this.x);
    }

    BOUNCE.prototype.details = function BOUNCE() {

        return this.x;
    }
}
function BOUNCEXY() {

    BOUNCEXY.prototype.define = function BOUNCEXY() {
        this.win = -1;
        this.imode = 1;
        this.clrs = [[1],[2]];
        this.siz = [[1],[1]];
        this.xmin = -5;
        this.xmax = 5;
        this.ymin = 0;
        this.ymax = 15;

        var model = scicos_model();
        model.sim = list(new ScilabString(["bouncexy"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1], [-1]);
        model.in2 = new ScilabDouble([1], [1]);
        model.intyp = new ScilabDouble([1], [1]);
        model.evtin = new ScilabDouble([1]);


        this.z = [];

        for (var i = 0; i < size(this.clrs, "*"); i++) {
            this.z[6 * (i) + 0] = [0];
            this.z[6 * (i) + 1] = [0];
            this.z[6 * (i) + 2] = [2 * this.siz[i]];
            this.z[6 * (i) + 3] = [2 * this.siz[i]];
            this.z[6 * (i) + 4] = [0.000];
            this.z[6 * (i) + 5] = [64.0 * 360.000];

        }

        model.dstate = new ScilabDouble(...this.z);
        model.rpar = new ScilabDouble([this.xmin], [this.xmax], [this.ymin], [this.ymax]);
        model.ipar = new ScilabDouble([this.win], [this.imode], ...colon_operator(this.clrs));
        model.blocktype = new ScilabString("d");
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp(this.clrs)], [sci2exp(this.siz)], [sci2exp(this.win)], [sci2exp(1)], [sci2exp(this.xmin)], [sci2exp(this.xmax)], [sci2exp(this.ymin)], [sci2exp(this.ymax)]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"BOUNCEXY\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    BOUNCEXY.prototype.details = function BOUNCEXY() {

        return this.x;
    }
}
function BPLATFORM() {

    BPLATFORM.prototype.define = function BPLATFORM() {

        this.plen = 2;
        this.csiz = 2;
        this.phi = 0;
        this.xmin = -5;
        this.xmax = 5;
        this.ymin = 0;
        this.ymax = 15;

        var model = scicos_model();
        model.sim = list(new ScilabString(["bplatform2"]), new ScilabDouble([5]));
        model.in = new ScilabDouble([1], [1]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([0]);
        model.rpar = new ScilabDouble([this.plen], [this.csiz], [this.phi], [this.xmin], [this.xmax], [this.ymin], [this.ymax]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.plen], [this.csiz], [this.phi], [this.xmin], [this.xmax], [this.ymin], [this.ymax]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"BPLATFORM\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    BPLATFORM.prototype.details = function BPLATFORM() {

        return this.x;
    }

}
function CANIMXY() {

    CANIMXY.prototype.define = function CANIMXY() {
        this.win = -1;
        this.clrs = -4;
        this.N = 2;
        this.siz = 1;
        this.wpos = [[-1],[-1]];
        this.wdim = [[-1],[-1]];
        this.xmin = -15;
        this.xmax = 15;
        this.ymin = -15;
        this.ymax = 15;
        this.nbr_curves = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["canimxy"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1], [1]);
        model.in2 = new ScilabDouble([1], [1]);
        model.intyp = new ScilabDouble([1], [1]);
        model.evtin = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.xmin], [this.xmax], [this.ymin], [this.ymax]);
        model.ipar = new ScilabDouble([this.win], [1], [this.N], [this.clrs], [this.siz], [0], ...this.wpos, ...this.wdim, [this.nbr_curves]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.nbr_curves], [this.clrs], [this.siz], [this.win], ["[]"], ["[]"], [this.xmin], [this.xmax], [this.ymin], [this.ymax], [this.N]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CANIMXY\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    CANIMXY.prototype.details = function CANIMXY() {
        return this.x;
    }
}
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
function Capacitor() {

    Capacitor.prototype.define = function Capacitor() {

        var model = scicos_model();
        var C = 0.01, v = 0;
        model.rpar = new ScilabDouble([C],[v]);
        model.sim = new ScilabString(["Capacitor"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["Capacitor"]);
        mo.inputs = new ScilabString(["p"]);
        mo.outputs = new ScilabString(["n"]);
        mo.parameters = list(new ScilabString(["C", "v"]), list(new ScilabDouble([C]), new ScilabDouble([v])), new ScilabDouble([0, 1]));
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "*"), 1));
        model.out = new ScilabDouble(...ones(size(getData(mo.outputs), "*"), 1));

        var exprs = new ScilabString([C], [v]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Capacitor\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 1.1]), model, exprs, list(gr_i, new ScilabDouble([0])));
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    Capacitor.prototype.details = function Capacitor() {
        return this.x;
    }
}
function CBLOCK() {

    CBLOCK.prototype.define = function CBLOCK() {
        this.in1 = 1;
        this.out = 1;
        this.clkin = [];
        this.clkout = [];
        this.x0 = [];
        this.z0 = [];
        this.typ = "c";
        this.auto = [];
        this.rpar = [];
        this.ipar = [];
        this.funam = "toto";
        this.ng = 0;

        var model = scicos_model();
        model.sim = list(new ScilabString([" "]), new ScilabDouble([2004]));
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([this.out]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString([this.typ]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);
        model.nzcross = new ScilabDouble([this.ng]);

        var label = list(new ScilabString([this.funam], ["n"], [sci2exp(this.in1)], [sci2exp(this.out)], [sci2exp(this.clkin)], [sci2exp(this.clkout)], [sci2exp(this.x0)], [sci2exp(0)], [sci2exp(this.z0)], [sci2exp(this.rpar)], [sci2exp(this.ipar)], [sci2exp(this.auto)], ["y"], ["n"]), new ScilabDouble());

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CBLOCK\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, label, gr_i);
        return new BasicBlock(this.x)
    }


    CBLOCK.prototype.details = function CBLOCK() {

        return this.x;
    }
}
function CBLOCK4() {

    CBLOCK4.prototype.define = function CBLOCK4() {

        this.funam = "toto";

        var model = scicos_model();
        model.sim = list(new ScilabString([" "]), new ScilabDouble([2004]));
        model.in = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = list(new ScilabString([this.funam], ["n"], [sci2exp([parseFloat(...getData(model.in)), parseFloat(...getData(model.in2))])], [sci2exp(parseFloat(...getData(model.intyp)))], [sci2exp([parseFloat(...getData(model.out)), parseFloat(...getData(model.out2))])], [sci2exp(parseFloat(...getData(model.outtyp)))], [sci2exp(getData(model.evtin))], [sci2exp(getData(model.evtout))], [sci2exp(getData(model.state))], [sci2exp(getData(model.dstate))], [sci2exp(model.odstate)], [sci2exp(getData(model.rpar))], [sci2exp(getData(model.ipar))], [sci2exp(model.opar)], [sci2exp(parseFloat(...getData(model.nmode)))], [sci2exp(parseFloat(...getData(model.nzcross)))], [sci2exp(getData(model.firing))], ["y"], ["n"]), new ScilabDouble());

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CBLOCK4\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }

    CBLOCK4.prototype.details = function CBLOCK4() {
        return this.x;
    }
}
function CCS() {

    CCS.prototype.define = function CCS() {
        this.ModelName = "CCS";
        this.PrametersValue = new ScilabDouble();
        this.ParametersName = new ScilabDouble();
        var model = scicos_model();
        this.Typein = [];
        this.Typeout = [];
        this.MI = [];
        this.MO = [];
        this.P = [[2,50,1,0],[70,98,2,0],[70,2,-2,0]];
        this.PortName = [["Iin"],["p"],["n"]];

        for (var i = 0; i < size(this.P, "r"); i++) {
            if (this.P[i][2] == 1) {
                this.Typein.push(["E"]);
                this.MI.push(this.PortName[i]);
            }

            if (this.P[i][2] == 2) {
                this.Typein.push(["I"]);
                this.MI.push(this.PortName[i]);
            }
            if (this.P[i][2] == -1) {
                this.Typeout.push(["E"]);
                this.MO.push(this.PortName[i]);
            }
            if (this.P[i][2] == -2) {
                this.Typeout.push(["I"]);
                this.MO.push(this.PortName[i]);
            }
        }

        var mo = new modelica_function();
        model.sim = new ScilabString([this.ModelName]);
        mo.inputs = new ScilabString(...this.MI);
        mo.outputs = new ScilabString(...this.MO);
        model.rpar = this.PrametersValue;
        mo.parameters = list(this.ParametersName, this.PrametersValue, new ScilabDouble(...zeros(getData(this.ParametersName))));
        var exprs = new ScilabDouble();
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CCS\",sz(1),sz(2));"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);
        mo.model = new ScilabString([this.ModelName]);
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(this.MI, "*"), 1));
        model.out = new ScilabDouble(...ones(size(this.MO, "*"), 1));
        this.x = new standard_define(new ScilabDouble([2.1, 3]), model, exprs, list(new ScilabString([gr_i]), new ScilabDouble([0])));
        this.x.graphics.in_implicit = new ScilabDouble(this.Typein);
        this.x.graphics.out_implicit = new ScilabDouble(this.Typeout);
        return new BasicBlock(this.x);
    }

    CCS.prototype.details = function CCS() {
        return this.x;
    }
}
function CEVENTSCOPE() {

    CEVENTSCOPE.prototype.define = function CEVENTSCOPE() {
        this.nclock = 1;
        this.win = -1;
        this.clrs = [[1],[3],[5],[7],[9],[11],[13],[15]];
        this.wdim = [[600],[400]];
        this.wpos = [[-1],[-1]];
        this.per = 30;

        var model = scicos_model();
        model.sim = list(new ScilabString(["cevscpe"]), new ScilabDouble([4]));
        model.evtin = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.per]);
        model.ipar = new ScilabDouble([this.win], [1], this.clrs[this.nclock - 1], ...this.wpos, ...this.wdim);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp(this.nclock)], this.clrs[this.nclock - 1], [this.win], [sci2exp([])], [sci2exp(this.wdim)], [this.per]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CEVENTSCOPE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    CEVENTSCOPE.prototype.details = function CEVENTSCOPE() {
        return this.x;
    }
}
function CFSCOPE() {

    CFSCOPE.prototype.define = function CFSCOPE() {
        this.win = -1;
        this.wdim = [[600],[400]];
        this.wpos = [[-1],[-1]];
        this.clrs = [[1],[3],[5],[7],[9],[11],[13],[15]];
        this.N = 2;
        this.ymin = -15;
        this.ymax = 15;
        this.per = 30;

        var model = scicos_model();
        model.sim = list(new ScilabString(["cfscope"]), new ScilabDouble([4]));
        model.evtin = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([0], [this.ymin], [this.ymax], [this.per]);
        model.ipar = new ScilabDouble([this.win], [1], [this.N], ...this.clrs, ...this.wpos, ...this.wdim, [1], [1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);
        var exprs = new ScilabString([this.clrs.toString().replace(/,/g, " ")], [this.win], [sci2exp([])], [sci2exp(this.wdim)], [this.ymin], [this.ymax], [this.per], [this.N], [1]);
        var gr_i = list(new ScilabString(["xstringb(orig(1),orig(2),\"CFSCOPE\",sz(1),sz(2));"]), new ScilabDouble([8]));
        this.x = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 2 -> 80
        this.x.graphics.style = new ScilabString(["CFSCOPE"]);
        return new BasicBlock(this.x);
    }
    CFSCOPE.prototype.details = function CFSCOPE() {
        return this.x;
    }
}
function CLINDUMMY_f() {

    CLINDUMMY_f.prototype.define = function CLINDUMMY_f() {
        this.x0 = 0;

        var model = scicos_model();
        model.sim = list(new ScilabString(["cdummy"]), new ScilabDouble([4]));
        model.state = new ScilabDouble([this.x0]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, true]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLINDUMMY_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }
    CLINDUMMY_f.prototype.details = function CLINDUMMY_f() {
        return this.x;
    }
}
function CLKFROM() {

    CLKFROM.prototype.define = function CLKFROM() {
        var model = scicos_model();
        model.sim = new ScilabString(["clkfrom"]);
        model.evtout = new ScilabDouble([1]);
        model.opar = list(new ScilabString(["A"]));
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString(["A"]);
        this.x = new standard_define(new ScilabDouble([2, 1]), model, exprs, new ScilabString([" "]));
        this.x.graphics.id = new ScilabString(["From"]);
        return new BasicBlock(this.x);
    }
    CLKFROM.prototype.details = function CLKFROM() {
        return this.x;
    }
}function CLKGOTO() {

    CLKGOTO.prototype.define = function CLKGOTO() {
        var model = scicos_model();
        model.sim = new ScilabString(["clkgoto"]);
        model.evtin = new ScilabDouble([1]);
        model.opar = list(new ScilabString(["A"]));
        model.ipar = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString(["A"], [sci2exp(1)]);
        this.x = new standard_define(new ScilabDouble([2, 1]), model, exprs, new ScilabString([" "]));
        this.x.graphics.id = new ScilabString(["Goto"]);
        return new BasicBlock(this.x);
    }

    CLKGOTO.prototype.details = function CLKGOTO() {
        return this.x;
    }
}
function CLKGotoTagVisibility() {

    CLKGotoTagVisibility.prototype.define = function CLKGotoTagVisibility() {
        var model = scicos_model();
        model.sim = new ScilabString(["clkgototagvisibility"]);
        model.in1 = new ScilabDouble();
        model.in2 = new ScilabDouble();
        model.out = new ScilabDouble();
        model.out2 = new ScilabDouble();
        model.evtin = new ScilabDouble();
        model.intyp = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.opar = list(new ScilabString(["A"]));
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabBoolean([false]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString(["A"]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKGotoTagVisibility\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    CLKGotoTagVisibility.prototype.details = function CLKGotoTagVisibility() {
        return this.x;
    }
}
function CLKINV_f() {

    CLKINV_f.prototype.define = function CLKINV_f() {
        this.prt = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["input"]);
        model.evtout = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([this.prt]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.prt]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKINV_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([1, 1]), model, exprs, gr_i);
        return new EventInBlock(this.x);
    }
    CLKINV_f.prototype.internal = function CLKINV_f() {
        this.prt = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["input"]);
        model.evtout = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([this.prt]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);
        model.outtyp = new ScilabDouble();

        var exprs = new ScilabString([this.prt]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKINV_f\",sz(1),sz(2));"]);
        var block = new standard_define(new ScilabDouble([1, 1]), model, exprs, gr_i);
        block.graphics.style = new ScilabString(["CLKINV_f"]);
        return block;
    }
    CLKINV_f.prototype.details = function CLKINV_f() {
        return this.x;
    }
}
function CLKOUTV_f() {

    CLKOUTV_f.prototype.define = function CLKOUTV_f() {

        this.prt = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["output"]);
        model.evtin = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([this.prt]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.prt]);
        this.x = new standard_define(new ScilabDouble([1, 1]), model, exprs, new ScilabString([" "]));
        return new EventOutBlock(this.x);
    }

    CLKOUTV_f.prototype.internal = function CLKOUTV_f() {

        this.prt = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["output"]);
        model.evtin = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([this.prt]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);
        model.outtyp = new ScilabDouble();
        var exprs = new ScilabString([this.prt]);
        var block = new standard_define(new ScilabDouble([1, 1]), model, exprs, new ScilabString([" "]));
        block.graphics.gr_i = list(new ScilabString(["xstringb(orig(1),orig(2),&quot;CLKOUTV_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8]));
        block.graphics.style = new ScilabString(["CLKOUTV_f"]);
        return block;
    }

    CLKOUTV_f.prototype.details = function CLKOUTV_f() {
        return this.x;
    }
}
function CLKSOMV_f() {

    CLKSOMV_f.prototype.internal = function CLKSOMV_f() {
        var model = scicos_model();
        model.sim = new ScilabString(["sum"]);
        model.evtin = new ScilabDouble([1], [1], [1]);
        model.evtout = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKSOMV_f\",sz(1),sz(2));"]);
        var block = new standard_define(new ScilabDouble([2, 2]), model, new ScilabDouble(), gr_i);
        return block;
    }

    CLKSOMV_f.prototype.define = function CLKSOMV_f() {
        var model = scicos_model();
        model.sim = new ScilabString(["sum"]);
        model.evtin = new ScilabDouble([1], [1], [1]);
        model.evtout = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKSOMV_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, new ScilabDouble(), gr_i);
        return new RoundBlock(this.x);
    }
    CLKSOMV_f.prototype.details = function CLKSOMV_f() {
        return this.x;
    }
}
function CLKSOM_f() {

    CLKSOM_f.prototype.internal = function CLKSOM_f() {

        var model = scicos_model();
        model.sim = new ScilabString(["sum"]);
        model.evtin = new ScilabDouble([1], [1], [1]);
        model.evtout = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);
        model.outtyp = new ScilabDouble();

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKSOM_f\",sz(1),sz(2));"]);
        var block = standard_define(new ScilabDouble([1, 1]), model, [], gr_i);
        block.graphics.style = new ScilabString(["CLKSOM_f"])
        return block;
    }
}
function CLOCK_c() {

    CLOCK_c.prototype.get = function CLOCK_c() {
        var options = {
            dt: ["Period", getData(this.x.model.rpar.objs[1].model.rpar)[0]],
            t0: ["Initialisation Time", getData(this.x.model.rpar.objs[1].model.firing)],
        };
        return options;
    }

    CLOCK_c.prototype.set = function CLOCK_c() {
        this.x.model.rpar.objs[1].model.firing = new ScilabDouble([arguments[0]["t0"]]);
        this.x.model.rpar.objs[1].model.rpar = new ScilabDouble([arguments[0]["dt"]], [arguments[0]["t0"]]);
        this.x.model.rpar.objs[1].graphics.exprs = new ScilabString([arguments[0]["dt"]], [arguments[0]["t0"]])
        return new BasicBlock(this.x);
    }

    CLOCK_c.prototype.define = function CLOCK_c() {
        var evtdly = new EVTDLY_c().internal();
        evtdly.graphics.orig = new ScilabDouble([320, 232]);
        evtdly.graphics.sz = new ScilabDouble([40, 40]);
        evtdly.graphics.flip = new ScilabBoolean([true]);
        evtdly.graphics.exprs = new ScilabString(["0.1"], ["0.1"]);
        evtdly.graphics.pein = new ScilabDouble([6]);
        evtdly.graphics.peout = new ScilabDouble([3]);
        evtdly.model.rpar = new ScilabDouble([0.1], [0.1]);
        evtdly.model.firing = new ScilabDouble([0.1]);

        evtdly.model.uid = new ScilabString([count]); // changed
        evtdly.doc = list(new ScilabString([count++]));
        evtdly.model.evtin = new ScilabDouble([-1]);
        evtdly.model.evtout = new ScilabDouble([-1]);
        evtdly.graphics.peout = new ScilabDouble([4]);

        var output_port = new CLKOUT_f().internal();
        output_port.graphics.orig = new ScilabDouble([399, 162]);
        output_port.graphics.sz = new ScilabDouble([20, 20]);
        output_port.graphics.flip = new ScilabBoolean([true]);
        output_port.graphics.exprs = new ScilabString(["1"]);
        output_port.graphics.pein = new ScilabDouble([5]);
        output_port.model.ipar = new ScilabDouble([1]);

        output_port.model.uid = new ScilabString([count]); // changed
        output_port.doc = list(new ScilabString([count++]));

        var split = new CLKSPLIT_f().internal();
        split.graphics.orig = new ScilabDouble([380.71066, 172]);
        split.graphics.pein = new ScilabDouble([3]);
        split.graphics.peout = new ScilabDouble([5], [6]);
        split.model.uid = new ScilabString([count]);
        split.doc = list(new ScilabString([count++]));
        split.graphics.pein = new ScilabDouble([4]); // changed

        var diagram = scicos_diagram();
        diagram.objs.push(output_port);
        diagram.objs.push(evtdly);
        diagram.objs.push(split);
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([340], [340], [380.71]),
            yy: new ScilabDouble([226.29], [172], [172]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([2, 1, 0]),
            to: new ScilabDouble([3, 1, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([380.71], [399]),
            yy: new ScilabDouble([172], [172]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([3, 1, 0]),
            to: new ScilabDouble([1, 1, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([380.71], [380.71], [340], [340]),
            yy: new ScilabDouble([172], [302], [302], [277.71]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([3, 2, 0]),
            to: new ScilabDouble([2, 1, 1])
        }));
        this.x = scicos_block();
        this.x.gui = new ScilabString(["CLOCK_c"]);
        this.x.graphics.sz = new ScilabDouble([2, 2]);
        this.x.graphics.gr_i = new ScilabString([]);
        this.x.graphics.peout = new ScilabDouble([0]);
        this.x.model.sim = new ScilabString(["csuper"]);
        this.x.model.evtout = new ScilabDouble([1]);
        this.x.model.blocktype = new ScilabString(["h"]);
        this.x.model.firing = new ScilabBoolean([false]);
        this.x.model.dep_ut = new ScilabBoolean([false, false]);
        this.x.model.rpar = diagram;
        return new BasicBlock(this.x);
    }
    CLOCK_c.prototype.details = function CLOCK_c() {
        return this.x;
    }
}
function CLR() {

    CLR.prototype.define = function CLR() {
        this.x0 = 0;
        this.A = -1;
        this.B = 1;
        this.C = 1;
        this.D = 0;

        var model = scicos_model();
        model.sim = list(new ScilabString(["csslti4"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.state = new ScilabDouble([this.x0]);
        model.rpar = new ScilabDouble([this.A], [this.B], [this.C], [this.D]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString(["1"], ["1+s"]);
        var gr_i = [];
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    CLR.prototype.details = function CLR() {
        return this.x;
    }
}
function CLSS() {

    CLSS.prototype.define = function CLSS() {
        this.x0 = 0;
        this.A = -1;
        this.B = 1;
        this.C = 1;
        this.D = 0;
        this.in1 = 1;
        this.out = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["csslti4"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([this.out]);
        model.state = new ScilabDouble([this.x0]);
        model.rpar = new ScilabDouble([this.A], [this.B], [this.C], [this.D]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString([this.A], [this.B], [this.C], [this.D], [this.x0]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLSS\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    CLSS.prototype.details = function CLSS() {
        return this.x;
    }
}
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
function CONST() {


    CONST.prototype.define = function CONST() {

        this.C = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["cstblk4"]), new ScilabDouble([4]));
        model.in = new ScilabDouble();
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.C]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp(this.C)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONST\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    CONST.prototype.details = function CONST() {
        return this.x;
    }
}
function ConstantVoltage() {

    ConstantVoltage.prototype.define = function ConstantVoltage() {
        this.V = 0.01;

        var model = scicos_model();
        model.rpar = new ScilabDouble([this.V]);
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.sim = new ScilabString(["ConstantVoltage"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["ConstantVoltage"]);
        mo.inputs = new ScilabString(["p"]);
        mo.outputs = new ScilabString(["n"]);
        mo.parameters = list(new ScilabString(["V"]), list(new ScilabDouble([this.V])));
        model.equations = mo;

        var exprs = new ScilabString([this.V]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ConstantVoltage\",sz(1),sz(2));"]);
        this.x = standard_define([1.5, 1.1], model, exprs, list(gr_i, new ScilabDouble([0])));
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    ConstantVoltage.prototype.details = function ConstantVoltage() {
        return this.x;
    }
}
function CONSTRAINT2_c() {

    CONSTRAINT2_c.prototype.define = function CONSTRAINT2_c() {
        this.x0 = 0;
        this.xd0 = 0;
        this.id = 0;

        var model = scicos_model();
        model.sim = list(new ScilabString(["constraint_c"]), new ScilabDouble([10004]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1], [1]);
        model.state = new ScilabDouble([this.x0], [this.xd0]);
        model.ipar = new ScilabDouble([this.id]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = list(new ScilabString([sci2exp(this.x0)]), new ScilabString([sci2exp(this.xd0)]), new ScilabString([sci2exp(this.id)]));

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONSTRAINT2_c\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    CONSTRAINT2_c.prototype.details = function CONSTRAINT2_c() {
        return this.x;
    }
}

function CONSTRAINT_c() {

    CONSTRAINT_c.prototype.define = function CONSTRAINT_c() {

        this.x0 = [[0],[0]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["constraint_c"]), new ScilabDouble([10004]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([0]);
        model.state = new ScilabDouble(...this.x0);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString([0]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONSTRAINT_c\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    CONSTRAINT_c.prototype.details = function CONSTRAINT_c() {
        return this.x;
    }
}
function CONST_f() {

    CONST_f.prototype.define = function CONST_f() {
        this.C = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["cstblk"]), new ScilabDouble([1]));
        model.in = new ScilabDouble();
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.C]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp(this.C)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONST_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    CONST_f.prototype.details = function CONST_f() {

        return this.x;
    }
}
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
function CONVERT() {

    CONVERT.prototype.define = function CONVERT() {
        this.sgn = 2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["convert"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1]);
        model.out = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.out2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([3]);
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble([this.sgn]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(1)], [sci2exp(3)], [sci2exp(0)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONVERT\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    CONVERT.prototype.details = function CONVERT() {
        return this.x;

    }

}
function COSBLK_f() {

    COSBLK_f.prototype.define = function COSBLK_f() {
        this.in1 = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["cosblk"]);
        model.in = new ScilabDouble([-1]);
        model.out = new ScilabDouble([-1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"COSBLK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }
    COSBLK_f.prototype.details = function COSBLK_f() {
        return this.x;
    }
}function Counter() {

    Counter.prototype.define = function Counter() {
        this.minim = 0;
        this.maxim = 2;
        this.rule = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["counter"]), new ScilabDouble([4]));
        model.evtin = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([0]);
        model.ipar = new ScilabDouble([this.rule], [this.maxim], [this.minim]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.minim], [this.maxim], [this.rule]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Counter\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    Counter.prototype.details = function Counter() {
        return this.x;
    }
}
function CSCOPE() {

    CSCOPE.prototype.define = function CSCOPE() {
        this.win = -1;
        this.wdim = [[600],[400]];
        this.wpos = [[-1],[-1]];
        this.clrs = [[1],[3],[5],[7],[9],[11],[13],[15]];
        this.N = 20;
        this.ymin = -15;
        this.ymax = 15;
        this.per = 30;

        var model = scicos_model();
        model.sim = list(new ScilabString(["cscope"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([0], [this.ymin], [this.ymax], [this.per]);
        model.ipar = new ScilabDouble([this.win], [1], [this.N], ...this.clrs, ...this.wpos, ...this.wdim);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.clrs.toString().replace(/,/g, " ")], [this.win], [sci2exp([])], [sci2exp(this.wdim)], [this.ymin], [this.ymax], [this.per], [this.N], [0], [""]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CSCOPE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    CSCOPE.prototype.details = function CSCOPE() {
        return this.x;
    }
}
function CSCOPXY() {

    CSCOPXY.prototype.define = function CSCOPXY() {
        this.win = -1;
        this.clrs = 4;
        this.siz = 1;
        this.wdim = [[600], [400]];
        this.wpos = [[-1], [-1]];
        this.N = 2;
        this.xmin = -15;
        this.xmax = 15;
        this.ymin = -15;
        this.ymax = 15;
        this.nbr_curves = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["cscopxy"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1], [1]);
        model.in2 = new ScilabDouble([1], [1]);
        model.intyp = new ScilabDouble([1], [1]);
        model.evtin = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.xmin], [this.xmax], [this.ymin], [this.ymax]);
        model.ipar = new ScilabDouble([this.win], [1], [this.N], [this.clrs], [this.siz], [1], ...this.wpos, ...this.wdim, [this.nbr_curves]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.nbr_curves], [sci2exp(this.clrs)], [sci2exp(this.siz)], [this.win], [sci2exp([])], [sci2exp(this.wdim)], [this.xmin], [this.xmax], [this.ymin], [this.ymax], [this.N]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CSCOPE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    CSCOPXY.prototype.details = function CSCOPXY() {
        return this.x;
    }
}

function CSCOPXY3D() {

    CSCOPXY3D.prototype.define = function CSCOPXY3D() {
        this.win = -1;
        this.clrs = [[1],[2],[3],[4],[5],[6],[7],[13]];
        this.siz = [[1],[1],[1],[1],[1],[1],[1],[1]];
        this.wdim = [[600],[400]];
        this.wpos = [[-1],[-1]];
        this.N = 2;
        this.param3ds = [[50],[280]];
        this.vec_x = [[-15],[15]];
        this.vec_y = [[-15],[15]];
        this.vec_z = [[-15],[15]];
        this.nbr_curves = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["cscopxy3d"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1], [1], [1]);
        model.in2 = new ScilabDouble([1], [1], [1]);
        model.intyp = new ScilabDouble([1], [1], [1]);
        model.evtin = new ScilabDouble([1]);
        model.rpar = new ScilabDouble(...this.vec_x, ...this.vec_y, ...this.vec_z, ...this.param3ds);
        model.ipar = new ScilabDouble([this.win], [8], [this.N], ...this.clrs, ...this.siz, [8], ...this.wpos, ...this.wdim, [this.nbr_curves]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.nbr_curves], [this.clrs.toString().replace(/,/g, " ")], [this.siz.toString().replace(/,/g, " ")], [this.win], [sci2exp([])], [sci2exp(this.wdim)], [this.vec_x.toString().replace(/,/g, " ")], [this.vec_y.toString().replace(/,/g, " ")], [this.vec_z.toString().replace(/,/g, " ")], [this.param3ds.toString().replace(/,/g, " ")], [this.N]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CSCOPE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    CSCOPXY3D.prototype.details = function CSCOPXY3D() {
        return this.x;
    }
}
function CUMSUM() {

    CUMSUM.prototype.define = function CUMSUM() {
        var model = scicos_model();

        this.function_name = "cumsum_m";
        this.funtyp = 4;

        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)], [sci2exp(0)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CUMSUM\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    CUMSUM.prototype.details = function CUMSUM() {
        return this.x;
    }
}
function CurrentSensor() {

    CurrentSensor.prototype.define = function CurrentSensor() {
        var model = scicos_model();
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1], [1]);
        model.sim = new ScilabString(["CurrentSensor"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["CurrentSensor"]);
        mo.inputs = new ScilabString(["p"]);
        mo.outputs = new ScilabString(["n"], ["i"]);
        model.equations = mo;

        var exprs = new ScilabDouble();

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CurrentSensor\",sz(1),sz(2));"]);
        this.x = standard_define(new ScilabDouble([2, 2]), model, exprs, list(gr_i, new ScilabDouble([0])));
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"], ["E"]);
        return new BasicBlock(this.x);
    }

    CurrentSensor.prototype.details = function CurrentSensor() {
        return this.x;
    }
}
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
function CVS() {

    CVS.prototype.define = function CVS() {
        this.ModelName = "CVS";
        this.PrametersValue = new ScilabDouble();
        this.ParametersName = new ScilabDouble();
        var model = scicos_model();
        this.Typein = [];
        this.Typeout = [];
        this.MI = [];
        this.MO = [];
        this.P = [[2,50,1,0],[70,98,2,0],[70,2,-2,0]];
        this.PortName = [["vin"],["p"],["n"]];

        for (var i = 0; i < size(this.P, "r"); i++) {
            if (this.P[i][2] == 1) {
                this.Typein.push(["E"]);
                this.MI.push(this.PortName[i]);
            }

            if (this.P[i][2] == 2) {
                this.Typein.push(["I"]);
                this.MI.push(this.PortName[i]);
            }
            if (this.P[i][2] == -1) {
                this.Typeout.push(["E"]);
                this.MO.push(this.PortName[i]);
            }
            if (this.P[i][2] == -2) {
                this.Typeout.push(["I"]);
                this.MO.push(this.PortName[i]);
            }
        }

        var mo = new modelica_function();
        model.sim = new ScilabString([this.ModelName]);
        mo.inputs = new ScilabString(...this.MI);
        mo.outputs = new ScilabString(...this.MO);
        model.rpar = this.PrametersValue;
        mo.parameters = list(this.ParametersName, this.PrametersValue, new ScilabDouble(...zeros(getData(this.ParametersName))));
        var exprs = new ScilabDouble();
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CVS\",sz(1),sz(2));"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);
        mo.model = new ScilabString([this.ModelName]);
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(this.MI, "*"), 1));
        model.out = new ScilabDouble(...ones(size(this.MO, "*"), 1));
        this.x = new standard_define(new ScilabDouble([2.1, 3]), model, exprs, list(new ScilabString([gr_i]), new ScilabDouble([0])));
        this.x.graphics.in_implicit = new ScilabDouble(this.Typein);
        this.x.graphics.out_implicit = new ScilabDouble(this.Typeout);
        return new BasicBlock(this.x);
    }

    CVS.prototype.details = function CVS() {
        return this.x;
    }
}
function c_block() {

    c_block.prototype.define = function c_block() {

        this.in1 = 1;
        this.out = 1;
        this.rpar = [];
        this.typ = "c";
        this.funam = "toto";

        var model = scicos_model();
        model.sim = list(new ScilabString([" "]), new ScilabDouble([2001]));
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([this.out]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble([0]);
        model.blocktype = new ScilabString([this.typ]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = list(new ScilabString([sci2exp(this.in1)], [sci2exp(this.out)], [sci2exp(this.rpar)], [this.funam]), list(new ScilabDouble()));
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"c_block\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    c_block.prototype.details = function c_block() {
        return this.x;
    }
}
function DEADBAND() {

    DEADBAND.prototype.define = function DEADBAND() {
        this.minp = -0.5;
        this.maxp = 0.5;
        this.rpar = new ScilabDouble([this.maxp], [this.minp]);

        var model = scicos_model();
        model.sim = list(new ScilabString(["deadband"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.nzcross = new ScilabDouble([2]);
        model.nmode = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.rpar = this.rpar;
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.maxp], [this.minp], [...getData(model.nmode).toString()]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DEADBAND\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DEADBAND.prototype.details = function DEADBAND() {
        return this.x;
    }
}
function DEBUG() {

    DEBUG.prototype.define = function DEBUG() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["%debug_scicos"]), new ScilabDouble([99]));
        model.blocktype = new ScilabString(["d"]);

        var exprs = list(new ScilabString([""]), new ScilabString(["xcos_debug_gui(flag,block);"]));

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DEBUG\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([8, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DEBUG.prototype.details = function DEBUG() {
        return this.x;
    }
}

function DELAYV_f() {

    DELAYV_f.prototype.define = function DELAYV_f() {
        this.nin = 1;
        this.z0 = zeros(11, 1);
        this.zz0 = math.subset(this.z0, math.index(math.range(0, math.size(this.z0)[0] - 1), 0));
        this.T = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["delayv"]), new ScilabDouble([1]));
        model.in = new ScilabDouble([this.nin], [1]);
        model.out = new ScilabDouble([this.nin]);
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1], [1]);
        model.dstate = new ScilabDouble(...this.z0);
        model.rpar = new ScilabDouble([this.T / (size(this.zz0, "*"))]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([0, -1]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.nin], [this.zz0.toString().replace(/,/g, ";")], [this.T]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DELAYV_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DELAYV_f.prototype.details = function DELAYV_f() {
        return this.x;
    }
}

function DELAY_f() {

    DELAY_f.prototype.define = function DELAY_f() {
        var evtdly = new EVTDLY_f().internal();
        evtdly.graphics.orig = new ScilabDouble([243, 296]);
        evtdly.graphics.sz = new ScilabDouble([40, 40]);
        evtdly.graphics.flip = new ScilabBoolean([true]);
        evtdly.graphics.exprs = new ScilabString(["0.1"], ["0"]);
        evtdly.graphics.pein = new ScilabDouble([10]);
        evtdly.graphics.peout = new ScilabDouble([7]);
        evtdly.model.rpar = new ScilabDouble([0.1]);
        evtdly.model.firing = new ScilabDouble([0]);
        evtdly.model.uid = new ScilabString([count]); // changed
        evtdly.doc = list(new ScilabString([count++]));
        evtdly.model.outtyp = new ScilabDouble();

        var register = new REGISTER_f().internal();
        register.graphics.orig = new ScilabDouble([238, 195]);
        register.graphics.sz = new ScilabDouble([50, 50]);
        register.graphics.flip = new ScilabBoolean([true]);
        register.graphics.exprs = new ScilabString(["0;0;0;0;0;0;0;0;0;0"]);
        register.graphics.pin = new ScilabDouble([6]);
        register.graphics.pout = new ScilabDouble([5]);
        register.graphics.pein = new ScilabDouble([9]);
        register.model.uid = new ScilabString([count]); // changed
        register.doc = list(new ScilabString([count++]));
        register.model.in2 = new ScilabDouble([1]);
        register.model.intyp = new ScilabDouble([1]);
        register.model.out2 = new ScilabDouble([1]);

        var input_port = new IN_f().internal();
        input_port.graphics.orig = new ScilabDouble([92, 210]);
        input_port.graphics.sz = new ScilabDouble([20, 20]);
        input_port.graphics.flip = new ScilabBoolean([true]);
        input_port.graphics.exprs = new ScilabString(["1"], ["1"]);
        input_port.graphics.pout = new ScilabDouble([6]);
        input_port.model.ipar = new ScilabDouble([1]);
        input_port.model.uid = new ScilabString([count]); // changed
        input_port.doc = list(new ScilabString([count++]));
        input_port.model.outtyp = new ScilabDouble([-1]);

        var output_port = new OUT_f().internal();
        output_port.graphics.orig = new ScilabDouble([440, 210]);
        output_port.graphics.sz = new ScilabDouble([20, 20]);
        output_port.graphics.flip = new ScilabBoolean([true]);
        output_port.graphics.exprs = new ScilabString(["1"], ["1"]);
        output_port.graphics.pin = new ScilabDouble([5]);
        output_port.model.ipar = new ScilabDouble([1]);
        output_port.model.uid = new ScilabString([count]); // changed
        output_port.doc = list(new ScilabString([count++]));
        output_port.model.outtyp = new ScilabDouble();

        var split = new CLKSPLIT_f().internal();
        split.graphics.orig = new ScilabDouble([263, 271.2]);
        split.graphics.pein = new ScilabDouble([7]);
        split.graphics.peout = new ScilabDouble([9], [10]);
        split.model.uid = new ScilabString([count]); // changed
        split.doc = list(new ScilabString([count++]));

        var diagram = scicos_diagram();
        diagram.objs.push(input_port);
        diagram.objs.push(output_port);
        diagram.objs.push(register);
        diagram.objs.push(evtdly);
        diagram.objs.push(split);
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([296.6], [440]),
            yy: new ScilabDouble([220], [220]),
            from: new ScilabDouble([3, 1, 0]),
            to: new ScilabDouble([2, 1, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([112], [229.4]),
            yy: new ScilabDouble([220], [220]),
            from: new ScilabDouble([1, 1, 0]),
            to: new ScilabDouble([3, 1, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([263], [263]),
            yy: new ScilabDouble([290.3], [271.2]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([4, 1, 0]),
            to: new ScilabDouble([5, 1, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([263], [263]),
            yy: new ScilabDouble([271.2], [250.7]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([5, 1, 0]),
            to: new ScilabDouble([3, 1, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([263], [308.6], [308.6], [263], [263]),
            yy: new ScilabDouble([271.2], [271.2], [367], [367], [341.7]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([5, 2, 0]),
            to: new ScilabDouble([4, 1, 1])
        }));

        this.x = scicos_block();
        this.x.gui = new ScilabString(["DELAY_f"]);
        this.x.graphics.sz = new ScilabDouble([2, 2]);
        this.x.graphics.gr_i = new ScilabDouble();
        this.x.graphics.pin = new ScilabDouble([0]);
        this.x.graphics.pout = new ScilabDouble([0]);
        this.x.model.sim = new ScilabString(["csuper"]);
        this.x.model.in = new ScilabDouble([1]);
        this.x.model.out = new ScilabDouble([1]);
        this.x.model.blocktype = new ScilabString(["h"]);
        this.x.model.dep_ut = new ScilabBoolean([false, false]);
        this.x.model.rpar = diagram;
        this.x.graphics.in_implicit = new ScilabString(["E"]);
        this.x.graphics.in_style = new ScilabString([""]);
        this.x.graphics.out_implicit = new ScilabString(["E"]);
        this.x.graphics.out_style = new ScilabString([""]);
        return new BasicBlock(this.x);
    }
    DELAY_f.prototype.details = function DELAY_f() {
        return this.x;
    }
}function DEMUX() {

    DEMUX.prototype.define = function DEMUX() {
        this.out = 2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["multiplex"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([0]);

        var arr = [];
        arr.push(math.range(-1, -this.out, -1, true)._data);
        model.out = new ScilabDouble(...math.transpose(arr));
        model.ipar = new ScilabDouble([this.out]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.out]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DEMUX\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([.5, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    DEMUX.prototype.details = function DEMUX() {
        return this.x;
    }
}
function DEMUX_f() {

    DEMUX_f.prototype.define = function DEMUX_f() {
        this.out = 2;
        var arr = [];
        arr.push(math.range(-1, -this.out, -1, true)._data);

        var model = scicos_model();
        model.sim = list(new ScilabString(["demux"]), new ScilabDouble([1]));
        model.in = new ScilabDouble([0]);
        model.out = new ScilabDouble(...math.transpose(arr));
        model.ipar = new ScilabDouble([this.out]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.out]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DEMUX_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([.5, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DEMUX_f.prototype.details = function DEMUX_f() {
        return this.x;
    }
}

function DERIV() {

    DERIV.prototype.define = function DERIV() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["deriv"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1]);
        model.out = new ScilabDouble([-1]);
        model.blocktype = new ScilabString(["x"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabDouble();

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DERIV\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DERIV.prototype.details = function DERIV() {
        return this.x;
    }
}
function DFLIPFLOP() {

    DFLIPFLOP.prototype.define = function DFLIPFLOP() {
        var scs_m = scicos_diagram({
            version: new ScilabString(["scicos4.2"]),
            props: scicos_params({
                wpar: new ScilabDouble([600, 450, 0, 0, 600, 450]),
                Title: new ScilabString(["DFLIPFLOP"]),
                tol: new ScilabDouble([0.0001], [0.000001], [Math.pow(10, -10)], [100001], [0], [0], [0]),
                tf: new ScilabDouble([100000]),
                context: new ScilabString([" "]),
                void1: new ScilabDouble(),
                options: tlist(["scsopt", "3D", "Background", "Link", "ID", "Cmap"], new ScilabString(["scsopt", "3D", "Background", "Link", "ID", "Cmap"]), list(new ScilabBoolean([true]), new ScilabDouble([33])), new ScilabDouble([8, 1]), new ScilabDouble([1, 5]), list(new ScilabDouble([5, 1]), new ScilabDouble([4, 1])), new ScilabDouble([0.8, 0.8, 0.8])),
                void2: new ScilabDouble(),
                void3: new ScilabDouble(),
                doc: list()
            })
        });
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["CONST_m"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([109.62561, 263.44465]),
                sz: new ScilabDouble([20], [20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["int8(0)"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble([6]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;CONST_m&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabString(["E"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["CONST_m"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["cstblk4_m"]), new ScilabDouble([4])),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble(),
                out: new ScilabDouble([1]),
                out2: new ScilabDouble([1]),
                outtyp: new ScilabDouble([5]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(int8([0])),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["IFTHEL_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([239.98293, 378.2166]),
                sz: new ScilabDouble([60, 60]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"], ["1"]),
                pin: new ScilabDouble([29]),
                pout: new ScilabDouble(),
                pein: new ScilabDouble([22]),
                peout: new ScilabDouble([16], [44]),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;IFTHEL_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabDouble(),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                style: new ScilabString(["IFTHEL_f"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["ifthel"]), new ScilabDouble([-1])),
                in: new ScilabDouble([1]),
                in2: new ScilabDouble([1]),
                intyp: new ScilabDouble([-1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble([1]),
                evtout: new ScilabDouble([1], [1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["l"]),
                firing: new ScilabDouble([-1, -1]),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([1]),
                nmode: new ScilabDouble([1]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["LOGICAL_OP"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([152.88902, 260.24498]),
                sz: new ScilabDouble([60, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["2"], ["1"], ["5"], ["0"]),
                pin: new ScilabDouble([11], [39]),
                pout: new ScilabDouble([5]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;LOGICAL_OP&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"], ["E"]),
                out_implicit: new ScilabString(["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""], [""]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["LOGICAL_OP"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["logicalop_i8"]), new ScilabDouble([4])),
                in: new ScilabDouble([-1], [-1]),
                in2: new ScilabDouble([-2], [-2]),
                intyp: new ScilabDouble([5], [5]),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble([-2]),
                outtyp: new ScilabDouble([5]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1], [0]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["SAMPHOLD_m"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([233.72156, 260.24498]),
                sz: new ScilabDouble([40, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["5"]),
                pin: new ScilabDouble([5]),
                pout: new ScilabDouble([33]),
                pein: new ScilabDouble([42]),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;SAMPHOLD_m&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["SAMPHOLD_m"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["samphold4_m"]), new ScilabDouble([4])),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble([-2]),
                intyp: new ScilabDouble([5]),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble([-2]),
                outtyp: new ScilabDouble([5]),
                evtin: new ScilabDouble([1]),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([221.46044], [225.15013]),
            yy: new ScilabDouble([280.24498], [280.24498]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([3, 1, 0]),
            to: new ScilabDouble([4, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([138.19704], [140.34523]),
            yy: new ScilabDouble([273.44465], [273.49157]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([1, 1, 0]),
            to: new ScilabDouble([38, 1, 1])
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["LOGICAL_OP"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([373.24106, 309.46812]),
                sz: new ScilabDouble([60, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"], ["5"], ["5"], ["0"]),
                pin: new ScilabDouble([36]),
                pout: new ScilabDouble([13]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;LOGICAL_OP&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["LOGICAL_OP"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["logicalop_i8"]), new ScilabDouble([4])),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble([-2]),
                intyp: new ScilabDouble([5]),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble([-2]),
                outtyp: new ScilabDouble([5]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([5], [0]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["IN_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([199.48466, 398.2166]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["3"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble([9]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;IN_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabString(["E"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["IN_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["input"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([-1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([3]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([219.48466], [222.54128]),
            yy: new ScilabDouble([408.2166], [408.2166]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([8, 1, 0]),
            to: new ScilabDouble([28, 1, 1])
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["IN_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([104.31759, 276.91165]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble([11]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;IN_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabString(["E"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["IN_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["input"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([-1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([124.31759], [144.31759]),
            yy: new ScilabDouble([286.91165], [286.91165]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([10, 1, 0]),
            to: new ScilabDouble([3, 1, 1])
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["OUT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([457.40928, 320.20131]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["2"]),
                pin: new ScilabDouble([13]),
                pout: new ScilabDouble(),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;OUT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabDouble(),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                style: new ScilabString(["OUT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["output"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([-1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([2]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([441.81249], [457.40928]),
            yy: new ScilabDouble([329.46812], [330.20131]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([7, 1, 0]),
            to: new ScilabDouble([12, 1, 1])
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["OUT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([376.4669, 270.83282]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble([37]),
                pout: new ScilabDouble(),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;OUT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabDouble(),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                style: new ScilabString(["OUT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["output"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([-1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));

        var scs_m_1 = scicos_diagram({
            version: new ScilabString(["scicos4.2"]),
            props: scicos_params({
                wpar: new ScilabDouble([600, 450, 0, 0, 600, 450]),
                Title: new ScilabString(["Untitled"]),
                tol: new ScilabDouble([0.0001], [0.000001], [Math.pow(10, -10)], [100001], [0], [0], [0]),
                tf: new ScilabDouble([100000]),
                context: new ScilabDouble(),
                void1: new ScilabDouble(),
                options: tlist(["scsopt", "3D", "Background", "Link", "ID", "Cmap"], new ScilabString(["scsopt", "3D", "Background", "Link", "ID", "Cmap"]), list(new ScilabBoolean([true]), new ScilabDouble([33])), new ScilabDouble([8, 1]), new ScilabDouble([1, 5]), list(new ScilabDouble([5, 1]), new ScilabDouble([4, 1])), new ScilabDouble([0.8, 0.8, 0.8])),
                void2: new ScilabDouble(),
                void3: new ScilabDouble(),
                doc: list()
            })
        });
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["ANDLOG_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([194, 133]),
                sz: new ScilabDouble([60, 60]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble(),
                pout: new ScilabDouble([9]),
                pein: new ScilabDouble([4], [11]),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;ANDLOG_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabString(["E"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["ANDLOG_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["andlog"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([1]),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble([1], [1]),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["CLKIN_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([149, 287]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble(),
                pein: new ScilabDouble(),
                peout: new ScilabDouble([4]),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;CLKIN_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabDouble(),
                style: new ScilabString(["CLKIN_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["input"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble([1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabDouble([-1]),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["CLKOUT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([450, 83]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble(),
                pein: new ScilabDouble([8]),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;CLKOUT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabDouble(),
                style: new ScilabString(["CLKOUT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["output"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble([1]),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([169], [214], [214]),
            yy: new ScilabDouble([297], [297], [198.71]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([2, 1]),
            to: new ScilabDouble([1, 1])
        }));
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["CLKIN_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([141, 330]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["2"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble(),
                pein: new ScilabDouble(),
                peout: new ScilabDouble([6]),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;CLKIN_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabDouble(),
                style: new ScilabString(["CLKIN_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["input"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble([1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([2]),
                opar: list(),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabDouble([-1]),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([161], [234], [234]),
            yy: new ScilabDouble([340], [340], [275.78]),
            thick: new ScilabDouble([0, 0]),
            id: new ScilabString(["drawlink"]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([5, 1]),
            to: new ScilabDouble([10, 1])
        }));
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["IFTHEL_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([331, 137]),
                sz: new ScilabDouble([60, 60]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"], ["1"]),
                pin: new ScilabDouble([9]),
                pout: new ScilabDouble(),
                pein: new ScilabDouble([12]),
                peout: new ScilabDouble([8], [0]),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;IFTHEL_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabDouble(),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                style: new ScilabString(["IFTHEL_f"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["ifthel"]), new ScilabDouble([-1])),
                in: new ScilabDouble([1]),
                in2: new ScilabDouble([1]),
                intyp: new ScilabDouble([-1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble([1]),
                evtout: new ScilabDouble([1], [1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["l"]),
                firing: new ScilabDouble([-1, -1]),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([1]),
                nmode: new ScilabDouble([1]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([351], [351], [450]),
            yy: new ScilabDouble([131.29], [93], [93]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([7, 1]),
            to: new ScilabDouble([3, 1])
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([262.57], [322.43]),
            yy: new ScilabDouble([163], [167]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([1, 1]),
            to: new ScilabDouble([7, 1])
        }));
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["CLKSPLIT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([234], [275.78348]),
                sz: new ScilabDouble([0.3333333, 0.3333333]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble(),
                pout: new ScilabDouble(),
                pein: new ScilabDouble([6]),
                peout: new ScilabDouble([11], [12]),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;CLKSPLIT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabDouble(),
                style: new ScilabString(["CLKSPLIT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["split"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble([1]),
                evtout: new ScilabDouble([1], [1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabBoolean([false, false, false]),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([234], [234]),
            yy: new ScilabDouble([275.78], [198.71]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([10, 1]),
            to: new ScilabDouble([1, 2])
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([234], [361], [361]),
            yy: new ScilabDouble([275.78], [275.78], [202.71]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([10, 2]),
            to: new ScilabDouble([7, 1])
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["ANDBLK"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([233.73039, 318.74407]),
                sz: new ScilabDouble([40, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble(),
                pout: new ScilabDouble(),
                pein: new ScilabDouble([19], [16]),
                peout: new ScilabDouble([17]),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;ANDBLK&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabDouble(),
                style: new ScilabString(["ANDBLK"])
            }),
            model: scicos_model({
                sim: new ScilabString(["csuper"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble([1], [1]),
                evtout: new ScilabDouble([1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: scs_m_1,
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["h"]),
                firing: new ScilabBoolean([false]),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([259.98293], [260.39705]),
            yy: new ScilabDouble([372.50232], [364.45835]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([2, 1, 0]),
            to: new ScilabDouble([15, 2, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([253.73039], [253.72572]),
            yy: new ScilabDouble([313.02978], [309.29537]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([15, 1, 0]),
            to: new ScilabDouble([41, 1, 1])
        }));
        scs_m_1 = scicos_diagram({
            version: new ScilabString(["scicos4.2"]),
            props: scicos_params({
                wpar: new ScilabDouble([600, 450, 0, 0, 600, 450]),
                Title: new ScilabString(["EDGE_TRIGGER", "./"]),
                tol: new ScilabDouble([0.0001], [0.000001], [Math.pow(10, -10)], [100001], [0], [0], [0]),
                tf: new ScilabDouble([30]),
                context: new ScilabString([" "]),
                void1: new ScilabDouble(),
                options: tlist(["scsopt", "3D", "Background", "Link", "ID", "Cmap"], new ScilabString(["scsopt", "3D", "Background", "Link", "ID", "Cmap"]), list(new ScilabBoolean([true]), new ScilabDouble([33])), new ScilabDouble([8, 1]), new ScilabDouble([1, 5]), list(new ScilabDouble([5, 1]), new ScilabDouble([4, 1])), new ScilabDouble([0.8, 0.8, 0.8])),
                void2: new ScilabDouble(),
                void3: new ScilabDouble(),
                doc: list()
            })
        });
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["EDGETRIGGER"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([288.58631, 257.1131]),
                sz: new ScilabDouble([60, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble([5]),
                pout: new ScilabDouble([3]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;EDGETRIGGER&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["EDGETRIGGER"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["edgetrig"]), new ScilabDouble([4])),
                in: new ScilabDouble([1]),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([1]),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble([0]),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([1]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["IFTHEL_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([388.28869, 247.1131]),
                sz: new ScilabDouble([60, 60]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["0"], ["0"]),
                pin: new ScilabDouble([3]),
                pout: new ScilabDouble(),
                pein: new ScilabDouble(),
                peout: new ScilabDouble([7], [0]),
                gr_i: new ScilabDouble(),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabDouble()
            }),
            model: scicos_model({
                sim: list(new ScilabString(["ifthel"]), new ScilabDouble([-1])),
                in: new ScilabDouble([1]),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble([1]),
                outtyp: new ScilabDouble(),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble([1], [1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["l"]),
                firing: new ScilabDouble([-1, -1]),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([357.15774], [362.99107], [379.71726]),
            yy: new ScilabDouble([277.1131], [277.1131], [277.1131]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([1, 1, 0]),
            to: new ScilabDouble([2, 1, 1])
        }));
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["IN_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([240.01488, 267.1131]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble([5]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;IN_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabString(["E"]),
                style: new ScilabString(["IN_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["input"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([-1]),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([260.01488], [280.01488]),
            yy: new ScilabDouble([277.1131], [277.1131]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([4, 1, 0]),
            to: new ScilabDouble([1, 1, 1])
        }));
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["CLKOUTV_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([398.28869, 181.39881]),
                sz: new ScilabDouble([20, 30]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble(),
                pein: new ScilabDouble([7]),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;CLKOUTV_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabDouble(),
                style: new ScilabString(["CLKOUTV_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["output"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble([1]),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([408.28869], [408.28869]),
            yy: new ScilabDouble([241.39881], [211.39881]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([2, 1, 0]),
            to: new ScilabDouble([6, 1, 1])
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["EDGE_TRIGGER"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([133.90637, 385.342]),
                sz: new ScilabDouble([60, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble([26]),
                pout: new ScilabDouble(),
                pein: new ScilabDouble(),
                peout: new ScilabDouble([19]),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;EDGE_TRIGGER&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabDouble(),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                style: new ScilabString(["EDGE_TRIGGER"])
            }),
            model: scicos_model({
                sim: new ScilabString(["csuper"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble([1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: scs_m_1,
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["h"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([163.90637], [163.90637], [247.06372]),
            yy: new ScilabDouble([379.62771], [364.45835], [364.45835]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([18, 1, 0]),
            to: new ScilabDouble([15, 1, 1])
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["IN_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([79.594811, 395.47647]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["2"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble([23]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;IN_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabString(["E"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["IN_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["input"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([-1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([2]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));

        scs_m_1 = scicos_diagram({
            version: new ScilabString(["scicos4.2"]),
            props: scicos_params({
                wpar: new ScilabDouble([600, 450, 0, 0, 600, 450]),
                Title: new ScilabString(["EXTRACT_ACTIVATION", "./"]),
                tol: new ScilabDouble([0.0001], [0.000001], [Math.pow(10, -10)], [100001], [0], [0], [0]),
                tf: new ScilabDouble([30]),
                context: new ScilabString([" "]),
                void1: new ScilabDouble(),
                options: tlist(["scsopt", "3D", "Background", "Link", "ID", "Cmap"], new ScilabString(["scsopt", "3D", "Background", "Link", "ID", "Cmap"]), list(new ScilabBoolean([true]), new ScilabDouble([33])), new ScilabDouble([8, 1]), new ScilabDouble([1, 5]), list(new ScilabDouble([5, 1]), new ScilabDouble([4, 1])), new ScilabDouble([0.8, 0.8, 0.8])),
                void2: new ScilabDouble(),
                void3: new ScilabDouble(),
                doc: list()
            })
        });
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["IFTHEL_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([150.65045, 143.82208]),
                sz: new ScilabDouble([60, 60]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["0"], ["0"]),
                pin: new ScilabDouble([6]),
                pout: new ScilabDouble(),
                pein: new ScilabDouble(),
                peout: new ScilabDouble([3], [4]),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;IFTHEL_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabDouble(),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                style: new ScilabString(["IFTHEL_f"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["ifthel"]), new ScilabDouble([-1])),
                in: new ScilabDouble([1]),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble([1], [1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["l"]),
                firing: new ScilabDouble([-1, -1]),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["CLKSOMV_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([169.82143, 96.146231]),
                sz: new ScilabDouble([16.666667, 16.666667]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble(),
                pout: new ScilabDouble(),
                pein: new ScilabDouble([3], [4], [0]),
                peout: new ScilabDouble([8]),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;CLKSOMV_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabDouble(),
                style: new ScilabString(["CLKSOMV_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["sum"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble([1], [1], [1]),
                evtout: new ScilabDouble([1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabDouble([-1]),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([170.65045], [170.65045], [150.04302], [150.04302], [169.82143]),
            yy: new ScilabDouble([138.10779], [128.235], [128.235], [104.47956], [104.47956]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([1, 1, 0]),
            to: new ScilabDouble([2, 1, 1])
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([190.65045], [190.65045], [178.15476]),
            yy: new ScilabDouble([138.10779], [111.55729], [112.8129]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([1, 2, 0]),
            to: new ScilabDouble([2, 2, 1])
        }));
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["IN_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([102.07902, 163.82208]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble([6]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;IN_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabString(["E"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["IN_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["input"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([-1]),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([122.07902], [142.07902]),
            yy: new ScilabDouble([173.82208], [173.82208]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([5, 1, 0]),
            to: new ScilabDouble([1, 1, 1])
        }));
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["CLKOUTV_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([168.15476, 38.527183]),
                sz: new ScilabDouble([20, 30]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble(),
                pein: new ScilabDouble([8]),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;CLKOUTV_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabDouble(),
                style: new ScilabString(["CLKOUTV_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["output"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble([1]),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([178.15476], [178.15476]),
            yy: new ScilabDouble([98.527183], [68.527183]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([2, 1, 0]),
            to: new ScilabDouble([7, 1, 1])
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["Extract_Activation"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([239.82193, 456.57677]),
                sz: new ScilabDouble([60, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble([31]),
                pout: new ScilabDouble(),
                pein: new ScilabDouble(),
                peout: new ScilabDouble([22]),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;Extract_Activation&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabDouble(),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                style: new ScilabString(["Extract_Activation"])
            }),
            model: scicos_model({
                sim: new ScilabString(["csuper"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble([1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: scs_m_1,
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["h"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([269.82193], [269.98293]),
            yy: new ScilabDouble([450.86248], [443.93089]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([21, 1, 0]),
            to: new ScilabDouble([2, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([99.594811], [110.25582]),
            yy: new ScilabDouble([405.47647], [405.42077]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([20, 1, 0]),
            to: new ScilabDouble([25, 1, 1])
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["SUM_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([200.5252, 469.13173]),
                sz: new ScilabDouble([16.666667, 16.666667]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble([27], [0], [30]),
                pout: new ScilabDouble([31]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;SUM_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"], ["E"], ["E"]),
                out_implicit: new ScilabString(["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""], [""], [""]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["SUM_f"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["plusblk"]), new ScilabDouble([2])),
                in: new ScilabDouble([-1], [-1], [-1]),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["SPLIT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([110.25582], [405.42077]),
                sz: new ScilabDouble([0.3333333, 0.3333333]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble([23]),
                pout: new ScilabDouble([26], [27]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;SPLIT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"], ["E"], ["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""], [""], [""]),
                style: new ScilabString(["SPLIT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["lsplit"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([-1], [-1], [-1]),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([110.25582], [114.33667], [125.33494]),
            yy: new ScilabDouble([405.42077], [405.39945], [405.342]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([25, 1, 0]),
            to: new ScilabDouble([18, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([110.25582], [110.25582], [208.85853]),
            yy: new ScilabDouble([405.42077], [469.13173], [469.13173]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([25, 2, 0]),
            to: new ScilabDouble([24, 1, 1])
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["SPLIT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([222.54128], [408.2166]),
                sz: new ScilabDouble([0.3333333, 0.3333333]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble([9]),
                pout: new ScilabDouble([29], [30]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;SPLIT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"], ["E"], ["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""], [""], [""]),
                style: new ScilabString(["SPLIT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["lsplit"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([-1], [-1], [-1]),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([222.54128], [231.4115]),
            yy: new ScilabDouble([408.2166], [408.2166]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([28, 1, 0]),
            to: new ScilabDouble([2, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([222.54128], [222.54128], [208.85853], [208.85853]),
            yy: new ScilabDouble([408.2166], [453.0015], [453.0015], [485.7984]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([28, 2, 0]),
            to: new ScilabDouble([24, 3, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([219.57282], [231.2505]),
            yy: new ScilabDouble([477.46506], [476.57677]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([24, 1, 0]),
            to: new ScilabDouble([21, 1, 1])
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["SELECT_m"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([298.86371, 253.57321]),
                sz: new ScilabDouble([40, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["5"], ["2"], ["1"]),
                pin: new ScilabDouble([33], [40]),
                pout: new ScilabDouble([34]),
                pein: new ScilabDouble([43], [44]),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;SELECT_m&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"], ["E"]),
                out_implicit: new ScilabString(["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""], [""]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["SELECT_m"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["selector_m"]), new ScilabDouble([4])),
                in: new ScilabDouble([-1], [-1]),
                in2: new ScilabDouble([-2], [-2]),
                intyp: new ScilabDouble([5], [5]),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble([-2]),
                outtyp: new ScilabDouble([5]),
                evtin: new ScilabDouble([1], [1]),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble([1]),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([282.29299], [290.29229]),
            yy: new ScilabDouble([280.24498], [280.23987]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([4, 1, 0]),
            to: new ScilabDouble([32, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([347.43514], [357.57328], [357.57328]),
            yy: new ScilabDouble([273.57321], [273.57321], [280.83282]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([32, 1, 0]),
            to: new ScilabDouble([35, 1, 1])
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["SPLIT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([357.57328, 280.83282]),
                sz: new ScilabDouble([0.3333333, 0.3333333]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble([34]),
                pout: new ScilabDouble([36], [37]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;SPLIT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"], ["E"], ["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""], [""], [""]),
                style: new ScilabString(["SPLIT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["lsplit"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([-1], [-1], [-1]),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([357.57328], [357.57328], [364.66964]),
            yy: new ScilabDouble([280.83282], [329.46812], [329.46812]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([35, 1, 0]),
            to: new ScilabDouble([7, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([357.57328], [376.4669]),
            yy: new ScilabDouble([280.83282], [280.83282]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([35, 2, 0]),
            to: new ScilabDouble([14, 1, 1])
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["SPLIT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([140.34523], [273.49157]),
                sz: new ScilabDouble([0.3333333, 0.3333333]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble([6]),
                pout: new ScilabDouble([39], [40]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;SPLIT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"], ["E"], ["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""], [""], [""]),
                style: new ScilabString(["SPLIT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["lsplit"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([-1], [-1], [-1]),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([140.34523], [144.31759]),
            yy: new ScilabDouble([273.49157], [273.57832]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([38, 1, 0]),
            to: new ScilabDouble([3, 2, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([140.34523], [140.34523], [290.29229], [290.29229]),
            yy: new ScilabDouble([273.49157], [247.70767], [247.70767], [266.90654]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([38, 2, 0]),
            to: new ScilabDouble([32, 2, 1])
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["CLKSPLIT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([253.72572], [309.29537]),
                sz: new ScilabDouble([0.3333333, 0.3333333]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble(),
                pout: new ScilabDouble(),
                pein: new ScilabDouble([17]),
                peout: new ScilabDouble([42], [43]),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;CLKSPLIT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabDouble(),
                style: new ScilabString(["CLKSPLIT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["split"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble([1]),
                evtout: new ScilabDouble([1], [1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabBoolean([false, false, false]),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([253.72572], [253.72156]),
            yy: new ScilabDouble([309.29537], [305.95927]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([41, 1, 0]),
            to: new ScilabDouble([4, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([253.72572], [312.19705], [312.19705]),
            yy: new ScilabDouble([309.29537], [309.29537], [299.28749]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([41, 2, 0]),
            to: new ScilabDouble([32, 1, 1])

        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([279.98293], [279.98293], [325.53038], [325.53038]),
            yy: new ScilabDouble([372.50232], [315.89455], [315.89455], [299.28749]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([2, 2, 0]),
            to: new ScilabDouble([32, 2, 1])
        }));

        var model = scicos_model();
        model.sim = new ScilabString(["csuper"]);
        model.in = new ScilabDouble([1], [1], [1]);
        model.in2 = new ScilabDouble([1], [1], [1]);
        model.out = new ScilabDouble([1], [1]);
        model.out2 = new ScilabDouble([1], [1]);
        model.intyp = new ScilabDouble([5, 1, 1]);
        model.outtyp = new ScilabDouble([5, 5]);
        model.blocktype = new ScilabString(["h"]);
        model.firing = new ScilabBoolean([false]);
        model.dep_ut = new ScilabBoolean([true, false]);
        model.rpar = scs_m;

        var gr_i = [];
        this.x = new standard_define(new ScilabDouble([2, 3]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }
    DFLIPFLOP.prototype.details = function DFLIPFLOP() {
        return this.x;
    }
}
function DIFF_f() {

    DIFF_f.prototype.define = function DIFF_f() {
        this.x0 = [[0], [0]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["diffblk"]), new ScilabDouble([10001]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.state = new ScilabDouble(...this.x0);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString([sci2exp(this.x0[0])], [sci2exp(this.x0[1])]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DIFF_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DIFF_f.prototype.details = function DIFF_f() {
        return this.x;
    }
}

function Diode() {

    Diode.prototype.define = function Diode() {

        this.Ids = 1.e-6;
        this.Vt = 0.04;
        this.Maxexp = 15;
        this.R = 1.e8;

        var model = scicos_model();
        model.rpar = new ScilabDouble([this.Ids], [this.Vt], [this.Maxexp], [this.R]);
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.sim = new ScilabString(["Diode"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["Diode"]);
        mo.inputs = new ScilabString(["p"]);
        mo.outputs = new ScilabString(["n"]);
        mo.parameters = list(new ScilabString(["Ids", "Vt", "Maxexp", "R"]), list(new ScilabDouble([this.Ids]), new ScilabDouble([this.Vt]), new ScilabDouble([this.Maxexp]), new ScilabDouble([this.R])));
        model.equations = mo;

        var exprs = new ScilabString([this.Ids], [this.Vt], [this.Maxexp], [this.R]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Diode\",sz(1),sz(2));"]);
        this.x = standard_define(new ScilabDouble([2, 1]), model, exprs, list(gr_i, 0));
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    Diode.prototype.details = function Diode() {
        return this.x;
    }
}
function DLR() {

    DLR.prototype.define = function DLR() {
        this.x0 = 0;
        this.A = -1;
        this.B = 1;
        this.C = 1;
        this.D = 0;

        var model = scicos_model();
        model.sim = list(new ScilabString(["dsslti4"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([this.x0]);
        model.rpar = new ScilabDouble([this.A], [this.B], [this.C], [this.D]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString(["1"], ["1+z"]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DLR\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DLR.prototype.details = function DLR() {
        return this.x;
    }
}

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
function DLSS() {

    DLSS.prototype.define = function DLSS() {
        this.x0 = 0;
        this.A = -1;
        this.B = 1;
        this.C = 1;
        this.D = 0;

        var model = scicos_model();
        model.sim = list(new ScilabString(["dsslti4"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([this.x0]);
        model.rpar = new ScilabDouble([this.A], [this.B], [this.C], [this.D]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp(this.A)], [sci2exp(this.B)], [sci2exp(this.C)], [sci2exp(this.D)], [sci2exp(this.x0)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DLSS\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DLSS.prototype.details = function DLSS() {
        return this.x;
    }
}

function DOLLAR() {

    DOLLAR.prototype.define = function DOLLAR() {
        this.z = 0;
        this.inh = 0;
        this.in1 = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["dollar4"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([this.in1]);
        model.evtin = new ScilabDouble([1 - this.inh]);
        model.dstate = new ScilabDouble([this.z]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.z], [this.inh]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DOLLAR\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DOLLAR.prototype.details = function DOLLAR() {
        return this.x;
    }
}

function DOLLAR_f() {

    DOLLAR_f.prototype.define = function DOLLAR_f() {
        this.z = 0;
        this.inh = 0;
        this.in1 = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["dollar"]);
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([this.in1]);
        model.evtin = new ScilabDouble([1 - this.inh]);
        model.dstate = new ScilabDouble([this.z]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.z], [this.inh]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DOLLAR_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DOLLAR_f.prototype.details = function DOLLAR_f() {
        return this.x;
    }
}

function DOLLAR_m() {

    DOLLAR_m.prototype.define = function DOLLAR_m() {
        this.z = 0;
        this.inh = 0;
        this.in1 = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["dollar4"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([this.in1]);
        model.evtin = new ScilabDouble([1 - this.inh]);
        model.dstate = new ScilabDouble([this.z]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.z], [this.inh]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DOLLAR_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    DOLLAR_m.prototype.details = function DOLLAR_m() {
        return this.x;
    }
}

function EDGETRIGGER() {

    EDGETRIGGER.prototype.internal = function EDGETRIGGER() {
        this.edge = 1;
        var model = scicos_model();
        model.sim = list(new ScilabString(["edgetrig"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([0]);
        model.nzcross = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([this.edge]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.edge]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),&quot;EDGETRIGGER&quot;,sz(1),sz(2));"]);
        var block = standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        block.graphics.style = new ScilabString(["EDGETRIGGER"]);
        return block;
    }
}
function EDGE_TRIGGER() {

    EDGE_TRIGGER.prototype.define = function EDGE_TRIGGER() {
        var scs_m_1 = scicos_diagram();
        scs_m_1.objs.push(new EDGETRIGGER().internal());
        scs_m_1.objs.push(new IFTHEL_f().internal());
        scs_m_1.objs.push(new IN_f().internal());
        scs_m_1.objs.push(new CLKOUTV_f().internal());
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));

        var blk = scs_m_1.objs[0];
        var graphics = blk.graphics;
        var model = blk.model;
        graphics.orig = new ScilabDouble([60, 0]);
        graphics.sz = new ScilabDouble([60, 40]);
        graphics.exprs = new ScilabString(["0"]);
        graphics.in_implicit = new ScilabString(["E"]);
        graphics.out_implicit = new ScilabString(["E"]);
        graphics.in_style = new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]);
        graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
        graphics.in_label = new ScilabString([""]);
        graphics.out_label = new ScilabString([""]);
        model.ipar = new ScilabDouble([0]);
        graphics.pin = new ScilabDouble([5]);
        graphics.pout = new ScilabDouble([6]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[0] = blk;

        blk = scs_m_1.objs[1];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([160, 0]);
        graphics.sz = new ScilabDouble([60, 40]);
        graphics.exprs = new ScilabString(["0"], ["0"]);
        model.evtin = new ScilabDouble();
        model.nzcross = new ScilabDouble([0]);
        model.nmode = new ScilabDouble([0]);
        graphics.pin = new ScilabDouble([6]);
        graphics.peout = new ScilabDouble([7], [0]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[1] = blk;

        blk = scs_m_1.objs[2];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([0, 10]);
        graphics.sz = new ScilabDouble([20, 20]);
        graphics.exprs = new ScilabString(["1"]);
        model.ipar = new ScilabDouble([1]);
        graphics.pout = new ScilabDouble([5]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[2] = blk;

        blk = scs_m_1.objs[3];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([170, -60]);
        graphics.sz = new ScilabDouble([20, 20]);
        graphics.exprs = new ScilabString(["1"]);
        model.ipar = new ScilabDouble([1]);
        graphics.pein = new ScilabDouble([7]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[3] = blk;

        var lnk = scs_m_1.objs[4];
        lnk.xx = new ScilabDouble([64], [96]);
        lnk.yy = new ScilabDouble([-40], [-20]);
        lnk.from = new ScilabDouble([3, 1, 0]);
        lnk.to = new ScilabDouble([1, 1, 1]);
        scs_m_1.objs[4] = lnk;

        lnk = scs_m_1.objs[5];
        lnk.xx = new ScilabDouble([164], [196]);
        lnk.yy = new ScilabDouble([-20], [-20]);
        lnk.from = new ScilabDouble([1, 1, 0]);
        lnk.to = new ScilabDouble([2, 1, 1]);
        scs_m_1.objs[5] = lnk;

        lnk = scs_m_1.objs[6];
        lnk.xx = new ScilabDouble([220], [220]);
        lnk.yy = new ScilabDouble([-44], [-96]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([2, 1, 0]);
        lnk.to = new ScilabDouble([4, 1, 1]);
        scs_m_1.objs[6] = lnk;

        model = scicos_model();
        model.sim = new ScilabString(["csuper"]);
        model.in = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = scs_m_1;

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),&quot;EDGE_TRIGGER&quot;,sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }
    EDGE_TRIGGER.prototype.details = function EDGE_TRIGGER() {
        return this.x;
    }
}
function ENDBLK() {

    ENDBLK.prototype.define = function ENDBLK() {
        var scs_m_1 = scicos_diagram({
            version: new ScilabString(["scicos4.2"]),
            props: scicos_params({
                wpar: new ScilabDouble([600, 450, 0, 0, 600, 450]),
                Title: new ScilabString(["ENDBLK"]),
                tol: new ScilabDouble([0.0001], [0.000001], [Math.pow(10, -10)], [100001], [0], [0], [0]),
                tf: new ScilabDouble([100000]),
                context: new ScilabString([" "]),
                void1: new ScilabDouble(),
                options: tlist(["scsopt", "3D", "Background", "Link", "ID", "Cmap"], new ScilabString(["scsopt", "3D", "Background", "Link", "ID", "Cmap"]), list(new ScilabBoolean([true]), new ScilabDouble([33])), new ScilabDouble([8, 1]), new ScilabDouble([1, 5]), list(new ScilabDouble([5, 1]), new ScilabDouble([4, 1])), new ScilabDouble([0.8, 0.8, 0.8])),
                void2: new ScilabDouble(),
                void3: new ScilabDouble(),
                doc: list()
            })
        });
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["END_c"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([272.104, 249.11733]),
                sz: new ScilabDouble([40, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1.000E+08"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble(),
                pein: new ScilabDouble([2]),
                peout: new ScilabDouble([2]),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;END_c&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabDouble(),
                style: new ScilabString(["END_c"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["scicosexit"]), new ScilabDouble([4])),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble(),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble(),
                evtin: new ScilabDouble([1]),
                evtout: new ScilabDouble([1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabDouble([1.000E+08]),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([292.104], [292.104], [261.83733], [261.83733], [292.104], [292.104]),
            yy: new ScilabDouble([243.40305], [234.45067], [234.45067], [305.584], [305.584], [294.83162]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([1, 1, 0]),
            to: new ScilabDouble([1, 1, 1])
        }));

        var model = scicos_model({
            sim: new ScilabString(["csuper"]),
            in: new ScilabDouble(),
            in2: new ScilabDouble(),
            intyp: new ScilabDouble([1]),
            out: new ScilabDouble(),
            out2: new ScilabDouble(),
            outtyp: new ScilabDouble([1]),
            evtin: new ScilabDouble(),
            evtout: new ScilabDouble(),
            state: new ScilabDouble(),
            dstate: new ScilabDouble(),
            odstate: list(),
            rpar: scs_m_1,
            ipar: new ScilabDouble(),
            opar: list(),
            blocktype: new ScilabString(["h"]),
            firing: new ScilabDouble(),
            dep_ut: new ScilabBoolean([false, false]),
            label: new ScilabString([""]),
            nzcross: new ScilabDouble([0]),
            nmode: new ScilabDouble([0]),
            equations: list()
        });

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),&quot;ENDBLK&quot;,sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }
    ENDBLK.prototype.details = function ENDBLK() {
        return this.x;
    }
}
function END_c() {

    END_c.prototype.define = function END_c() {
        this.tf = 100000000;

        var model = scicos_model();
        model.sim = list(new ScilabString(["scicosexit"]), new ScilabDouble([4]));
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.firing = new ScilabDouble([this.tf]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.tf]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"END_c\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    END_c.prototype.details = function END_c() {
        return this.x;
    }
}

function ESELECT_f() {

    ESELECT_f.prototype.define = function ESELECT_f() {
        this.out = 2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["eselect"]), new ScilabDouble([-2]));
        model.in = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([-1]);
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble(...ones(this.out, 1));
        model.blocktype = new ScilabString(["l"]);
        model.firing = new ScilabDouble(...ones(this.out, 1));
        model.dep_ut = new ScilabBoolean([true, false]);
        model.nmode = new ScilabDouble([0]);
        model.nzcross = new ScilabDouble([0]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ESELECT_f\",sz(1),sz(2));"]);;

        var exprs = new ScilabString([this.out], [1], [parseInt(getData(model.nmode))]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    ESELECT_f.prototype.details = function ESELECT_f() {
        return this.x;
    }
}
function EVTDLY_c() {

    EVTDLY_c.prototype.internal = function EVTDLY_c() {
        var dt = 0.1;
        var ff = 0.0;
        var model = scicos_model();
        model.sim = list(new ScilabString(["evtdly4"]), new ScilabDouble([4]));
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([dt], [ff]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([ff]);
        model.dep_ut = new ScilabBoolean([false, false]);
        // changed
        model.outtyp = new ScilabDouble();
        var exprs = new ScilabString([dt], [ff]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EVTDLY_c\",sz(1),sz(2));"]);
        var block = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 3,2 -> 80
        block.graphics.style = new ScilabString(["EVTDLY_c"]);
        return block;

    }

    EVTDLY_c.prototype.define = function EVTDLY_c() {
        this.dt = 0.1;
        this.ff = 0.0;
        var model = scicos_model();
        model.sim = list(new ScilabString(["evtdly4"]), new ScilabDouble([4]));
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.dt], [this.ff]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([this.ff]);
        model.dep_ut = new ScilabBoolean([false, false]);
        // changed
        model.outtyp = new ScilabDouble();
        var exprs = new ScilabString([this.dt], [this.ff]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EVTDLY_c\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 3,2 -> 80
        this.x.graphics.style = new ScilabString(["EVTDLY_c"]);
        return new BasicBlock(this.x);

    }

    EVTDLY_c.prototype.details = function EVTDLY_c() {

        return this.x;
    }
}
function EVTDLY_f() {

    EVTDLY_f.prototype.internal = function EVTDLY_f() {
        this.dt = 0.1;
        this.ff = this.dt;

        var model = scicos_model();
        model.sim = new ScilabString(["evtdly"]);
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.dt]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([this.ff]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.dt], [sci2exp(this.ff)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EVTDLY_f\",sz(1),sz(2));"]);
        var block = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        block.graphics.style = new ScilabString(["EVTDLY_f"]);
        return block;
    }
}function EVTGEN_f() {

    EVTGEN_f.prototype.define = function EVTGEN_f() {
        this.tt = 0;

        var model = scicos_model();
        model.sim = new ScilabString(["trash"]);
        model.evtout = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([this.tt]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.tt]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EVTGEN_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    EVTGEN_f.prototype.details = function EVTGEN_f() {
        return this.x;
    }
}
function EVTVARDLY() {

    EVTVARDLY.prototype.define = function EVTVARDLY() {

        var model = scicos_model();
        model.sim = list(new ScilabString(["evtvardly"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([parseInt(getData(model.firing), 10)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EVTVARDLY\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    EVTVARDLY.prototype.details = function EVTVARDLY() {
        return this.x;
    }
}

function EXPBLK_m() {

    EXPBLK_m.prototype.define = function EXPBLK_m() {
        this.in1 = 1;
        this.a = math.E;

        var model = scicos_model();
        model.sim = list(new ScilabString(["expblk_m"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.a]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString(["%e"]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EXPBLK_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    EXPBLK_m.prototype.details = function EXPBLK_m() {
        return this.x;
    }
}
function EXTRACT() {

    EXTRACT.prototype.define = function EXTRACT() {
        this.function_name = "extract";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble([1, 1, 1, 1]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)], [sci2exp([1])], [sci2exp([1])]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EXTRACT\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    EXTRACT.prototype.details = function EXTRACT() {
        return this.x;
    }
}

function EXTRACTBITS() {

    EXTRACTBITS.prototype.define = function EXTRACTBITS() {
        this.numb = [];

        var model = scicos_model();
        model.sim = list(new ScilabString(["extract_bit_32_UH0"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([3]);
        model.outtyp = new ScilabDouble([3]);
        model.ipar = new ScilabDouble([0, ...this.numb]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(3)], [sci2exp(1)], [sci2exp(0)], [sci2exp(0)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EXTRACTBITS\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    EXTRACTBITS.prototype.details = function EXTRACTBITS() {
        return this.x;
    }
}
function EXTRACTOR() {

    EXTRACTOR.prototype.define = function EXTRACTOR() {
        this.ind = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["extractor"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1]);
        model.out = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);
        model.ipar = new ScilabDouble([this.ind]);

        var exprs = new ScilabString([sci2exp(this.ind)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EXTRACTOR\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    EXTRACTOR.prototype.details = function EXTRACTOR() {
        return this.x;
    }
}

function Extract_Activation() {

    Extract_Activation.prototype.define = function Extract_Activation() {
        var scs_m_1 = scicos_diagram();
        scs_m_1.objs.push(new IFTHEL_f().internal());
        scs_m_1.objs.push(new CLKSOMV_f().internal());
        scs_m_1.objs.push(new IN_f().internal());
        scs_m_1.objs.push(new CLKOUTV_f().internal());
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));

        var blk = scs_m_1.objs[0];
        var graphics = blk.graphics;

        var model = blk.model;
        graphics.orig = new ScilabDouble([80, 0]);
        graphics.sz = new ScilabDouble([60, 40]);
        graphics.flip = new ScilabBoolean([true]);
        graphics.exprs = new ScilabString(["0"], ["0"]);
        model.evtin = new ScilabDouble();
        model.nzcross = new ScilabDouble([0]);
        model.nmode = new ScilabDouble([0]);
        graphics.pin = new ScilabDouble([7]);
        graphics.peout = new ScilabDouble([5], [6]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[0] = blk;

        blk = scs_m_1.objs[1];
        graphics = blk.graphics;
        model = blk.model;
        model.outtyp = new ScilabDouble();
        model.evtin = new ScilabDouble([-1], [-1], [-1]);
        model.evtout = new ScilabDouble([-1]);
        graphics.orig = new ScilabDouble([80, -80]);
        graphics.sz = new ScilabDouble([80, 40]);
        graphics.flip = new ScilabBoolean([true]);
        graphics.pein = new ScilabDouble([5], [6], [0]);
        graphics.peout = new ScilabDouble([8]);
        graphics.style = new ScilabString(["CLKSOMV_f"]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[1] = blk;

        blk = scs_m_1.objs[2];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([0, 10]);
        graphics.sz = new ScilabDouble([20, 20]);
        graphics.flip = new ScilabBoolean([true]);
        graphics.exprs = new ScilabString(["1"]);
        model.ipar = new ScilabDouble([1]);
        graphics.pout = new ScilabDouble([7]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[2] = blk;

        blk = scs_m_1.objs[3];
        graphics = blk.graphics;
        model = blk.model;
        model.outtyp = new ScilabDouble();
        graphics.style = new ScilabString(["CLKOUTV_f"]);
        graphics.orig = new ScilabDouble([110, -140]);
        graphics.sz = new ScilabDouble([20, 20]);
        graphics.flip = new ScilabBoolean([true]);
        graphics.exprs = new ScilabString(["1"]);
        graphics.gr_i = list(new ScilabString(["xstringb(orig(1),orig(2),\"CLKOUTV_f\",sz(1),sz(2));"]), new ScilabDouble([8]));
        model.ipar = new ScilabDouble([1]);
        graphics.pein = new ScilabDouble([8]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[3] = blk;

        var lnk = scs_m_1.objs[4];
        lnk.xx = new ScilabDouble([140], [140]);
        lnk.yy = new ScilabDouble([-44], [-76]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([1, 1, 0]);
        lnk.to = new ScilabDouble([2, 1, 1]);
        scs_m_1.objs[4] = lnk;

        lnk = scs_m_1.objs[5];
        lnk.xx = new ScilabDouble([160], [160]);
        lnk.yy = new ScilabDouble([-44], [-76]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([1, 2, 0]);
        lnk.to = new ScilabDouble([2, 2, 1]);
        scs_m_1.objs[5] = lnk;

        lnk = scs_m_1.objs[6];
        lnk.xx = new ScilabDouble([64], [116]);
        lnk.yy = new ScilabDouble([-40], [-20]);
        lnk.from = new ScilabDouble([3, 1, 0]);
        lnk.to = new ScilabDouble([1, 1, 1]);
        scs_m_1.objs[6] = lnk;

        lnk = scs_m_1.objs[7];
        lnk.xx = new ScilabDouble([160], [160]);
        lnk.yy = new ScilabDouble([-124], [-176]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([2, 1, 0]);
        lnk.to = new ScilabDouble([4, 1, 1]);
        scs_m_1.objs[7] = lnk;

        model = scicos_model();
        model.sim = new ScilabString(["csuper"]);
        model.in = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = scs_m_1;

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Extract_Activation\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }

    Extract_Activation.prototype.details = function Extract_Activation() {
        return this.x;
    }
}
function EXTTRI() {

    EXTTRI.prototype.define = function EXTTRI() {
        this.function_name = "extrilz";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)], [sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EXTTRI\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    EXTTRI.prototype.details = function EXTTRI() {
        return this.x;
    }
}

function Flowmeter() {

    Flowmeter.prototype.define = function Flowmeter() {
        this.ModelName = "Flowmeter";
        this.PrametersValue = 1;
        this.ParametersName = "Qini";

        var model = scicos_model();

        this.Typein = [];
        this.Typeout = [];

        this.MI = [];
        this.MO = [];
        this.P = [[50,105,-1,90],[0,10,2,0],[101,10,-2,0]];
        this.PortName = [["Mesure"],["C1"],["C2"]];

        for (var i = 0; i < size(this.P, "r"); i++) {
            if (this.P[i][2] == 1) {
                this.Typein.push(["E"]);
                this.MI.push(this.PortName[i]);
            }

            if (this.P[i][2] == 2) {
                this.Typein.push(["I"]);
                this.MI.push(this.PortName[i]);
            }
            if (this.P[i][2] == -1) {
                this.Typeout.push(["E"]);
                this.MO.push(this.PortName[i]);
            }
            if (this.P[i][2] == -2) {
                this.Typeout.push(["I"]);
                this.MO.push(this.PortName[i]);
            }
        }

        var mo = new modelica_function();
        model.sim = new ScilabString([this.ModelName]);
        mo.inputs = new ScilabString(...this.MI);
        mo.outputs = new ScilabString(...this.MO);
        model.rpar = new ScilabDouble([this.PrametersValue]);
        mo.parameters = list(new ScilabString([this.ParametersName]), new ScilabDouble([this.PrametersValue]), new ScilabDouble(zeros([this.ParametersName])));
        var exprs = new ScilabString(["1"]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Flowmeter\",sz(1),sz(2));"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);
        mo.model = new ScilabString([this.ModelName]);
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(this.MI, "*"), 1));
        model.out = new ScilabDouble(...ones(size(this.MO, "*"), 1));
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, list(new ScilabString([gr_i]), new ScilabDouble([0])));
        this.x.graphics.in_implicit = new ScilabDouble(this.Typein);
        this.x.graphics.out_implicit = new ScilabDouble(this.Typeout);
        return new BasicBlock(this.x);
    }

    Flowmeter.prototype.details = function Flowmeter() {
        return this.x;
    }
}
function fortran_block() {

    fortran_block.prototype.define = function fortran_block() {
        var model = scicos_model();
        model.sim = list(new ScilabString([" "]), new ScilabDouble([1001]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble([0]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        this.funam = "forty";

        var label = list(new ScilabString([sci2exp(parseInt(getData(model.in)))], [sci2exp(parseInt(getData(model.out)))], [sci2exp(getData(model.rpar))], [this.funam]), list(new ScilabDouble()));

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"fortran_block\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    fortran_block.prototype.details = function fortran_block() {
        return this.x;
    }
}
function freq_div() {

    freq_div.prototype.define = function freq_div() {
        var scs_m_1 = scicos_diagram();
        scs_m_1.objs.push(new Modulo_Count().internal());
        scs_m_1.objs.push(new CLKINV_f().internal());
        scs_m_1.objs.push(new CLKOUTV_f().internal());
        scs_m_1.objs.push(new IFTHEL_f().internal());
        scs_m_1.objs.push(new CLKSPLIT_f().internal());
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));

        var blk = scs_m_1.objs[0];
        var graphics = blk.graphics;
        var model = blk.model;
        graphics.orig = new ScilabDouble([0, -100]);
        graphics.sz = new ScilabDouble([60, 40]);
        graphics.exprs = new ScilabString(["0"], ["3"]);
        model.dstate = new ScilabDouble([3]);
        model.ipar = new ScilabDouble([3]);
        graphics.pout = new ScilabDouble([7]);
        graphics.pein = new ScilabDouble([10]);
        graphics.out_implicit = new ScilabString(["E"]);
        graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
        graphics.out_label = new ScilabString([""]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[0] = blk;

        blk = scs_m_1.objs[1];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([120, 0]);
        graphics.sz = new ScilabDouble([20, 20]);
        graphics.exprs = new ScilabString(["1"]);
        model.ipar = new ScilabDouble([1]);
        graphics.peout = new ScilabDouble([6]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[1] = blk;

        blk = scs_m_1.objs[2];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([130, -160]);
        graphics.sz = new ScilabDouble([20, 20]);
        graphics.exprs = new ScilabString(["1"]);
        model.ipar = new ScilabDouble([1]);
        graphics.pein = new ScilabDouble([8]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[2] = blk;

        blk = scs_m_1.objs[3];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([100, -100]);
        graphics.sz = new ScilabDouble([60, 40]);
        graphics.exprs = new ScilabString(["1"], ["0"]);
        model.ipar = new ScilabDouble([1]);
        graphics.pin = new ScilabDouble([7]);
        graphics.pein = new ScilabDouble([9]);
        graphics.peout = new ScilabDouble([0], [8]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[3] = blk;

        blk = scs_m_1.objs[4];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([127, -33]);
        graphics.sz = new ScilabDouble([7, 7]);
        graphics.pein = new ScilabDouble([6]);
        graphics.peout = new ScilabDouble([9], [10]);
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[4] = blk;

        var lnk = scs_m_1.objs[5];
        lnk.xx = new ScilabDouble([170], [170.5]);
        lnk.yy = new ScilabDouble([-44], [-75]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([2, 1, 0]);
        lnk.to = new ScilabDouble([5, 1, 1]);
        scs_m_1.objs[5] = lnk;

        lnk = scs_m_1.objs[6];
        lnk.xx = new ScilabDouble([104], [136]);
        lnk.yy = new ScilabDouble([-100], [-100]);
        lnk.from = new ScilabDouble([1, 1, 0]);
        lnk.to = new ScilabDouble([4, 1, 1]);
        scs_m_1.objs[6] = lnk;

        lnk = scs_m_1.objs[7];
        lnk.xx = new ScilabDouble([180], [180]);
        lnk.yy = new ScilabDouble([-124], [-176]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([4, 2, 0]);
        lnk.to = new ScilabDouble([3, 1, 1]);
        scs_m_1.objs[7] = lnk;

        lnk = scs_m_1.objs[8];
        lnk.xx = new ScilabDouble([170], [170.5]);
        lnk.yy = new ScilabDouble([-44], [-75]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([5, 1, 0]);
        lnk.to = new ScilabDouble([4, 1, 1]);
        scs_m_1.objs[8] = lnk;

        lnk = scs_m_1.objs[9];
        lnk.xx = new ScilabDouble([169], [170]);
        lnk.yy = new ScilabDouble([-90], [-76]);
        lnk.xx = new ScilabDouble([0, 30, 1]);
        lnk.yy = new ScilabDouble([0, -30, 1]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([5, 2, 0]);
        lnk.to = new ScilabDouble([1, 1, 1]);
        scs_m_1.objs[9] = lnk;

        model = scicos_model();
        model.sim = new ScilabString(["csuper"]);
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = scs_m_1;

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),&quot;freq_div&quot;,sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }
    freq_div.prototype.details = function freq_div() {
        return this.x;
    }
}
function FROM() {

    FROM.prototype.define = function FROM() {

        var model = scicos_model();
        model.sim = new ScilabString(["from"]);
        model.in = new ScilabDouble();
        model.in2 = new ScilabDouble();
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.outtyp = new ScilabDouble([-1]);
        model.ipar = new ScilabDouble();
        model.opar = list(new ScilabString(["A"]));
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString(["A"]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"FROM\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 1]), model, exprs, gr_i);
        this.x.graphics.id = new ScilabString(["From"]);
        return new BasicBlock(this.x);
    }
    FROM.prototype.details = function FROM() {
        return this.x;
    }
}

function FROMMO() {

    FROMMO.prototype.define = function FROMMO() {

        var model = scicos_model();
        model.sim = new ScilabString(["frommo"]);
        model.in = new ScilabDouble();
        model.in2 = new ScilabDouble();
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.outtyp = new ScilabDouble([-1]);
        model.ipar = new ScilabDouble();
        model.opar = list(new ScilabString(["A"]));
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["frommo"]);
        mo.outputs = new ScilabString(["n"]);

        var exprs = new ScilabString(["A"]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"FROMMO\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 1]), model, exprs, gr_i);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    FROMMO.prototype.details = function FROMMO() {
        return this.x;
    }
}

function FROMWSB() {

    FROMWSB.prototype.define = function FROMWSB() {
        var scs_m_1 = scicos_diagram({
            version: new ScilabString(["scicos4.2"]),
            props: scicos_params({
                wpar: new ScilabDouble([600, 450, 0, 0, 450, 600]),
                Title: new ScilabString(["FROMWSB"]),
                tol: new ScilabDouble([0.0001], [0.000001], [Math.pow(10, -10)], [100001], [0], [0], [0]),
                tf: new ScilabDouble([100000]),
                context: new ScilabString([" "]),
                void1: new ScilabDouble(),
                options: tlist(["scsopt", "3D", "Background", "Link", "ID", "Cmap"], new ScilabString(["scsopt", "3D", "Background", "Link", "ID", "Cmap"]), list(new ScilabBoolean([true]), new ScilabDouble([33])), new ScilabDouble([8, 1]), new ScilabDouble([1, 5]), list(new ScilabDouble([5, 1]), new ScilabDouble([4, 1])), new ScilabDouble([0.8, 0.8, 0.8])),
                void2: new ScilabDouble(),
                void3: new ScilabDouble(),
                doc: list()
            })
        });
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["FROMWS_c"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([260.37067, 261.584]),
                sz: new ScilabDouble([70, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["V"], ["1"], ["1"], ["0"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble([4]),
                pein: new ScilabDouble([2]),
                peout: new ScilabDouble([2]),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;FROMWS_c&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabString(["E"]),
                out_style: new ScilabString(["ExplicitOutputPort"]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["FROMWS_c"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["fromws_c"]), new ScilabDouble([4])),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble(),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble([-2]),
                outtyp: new ScilabDouble([-1]),
                evtin: new ScilabDouble([1]),
                evtout: new ScilabDouble([1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1], [-31], [1], [1], [0]),
                opar: list(),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabDouble([0]),
                dep_ut: new ScilabBoolean([false, true]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["OUT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([358.9421, 271.584]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble([4]),
                pout: new ScilabDouble(),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;OUT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabDouble(),
                in_style: new ScilabString(["ExplicitInputPort"]),
                in_label: new ScilabString([""]),
                style: new ScilabString(["OUT_f"])

            }),
            model: scicos_model({
                sim: new ScilabString(["output"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble([-2]),
                intyp: new ScilabDouble([-1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble(),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([295.37067], [295.37067], [233.23733], [233.23733], [295.37067], [295.37067]),
            yy: new ScilabDouble([255.86971], [223.45067], [223.45067], [337.85067], [337.85067], [307.29829]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([1, 1, 0]),
            to: new ScilabDouble([1, 1, 1])
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([338.9421], [358.9421]),
            yy: new ScilabDouble([281.584], [281.584]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([1, 1, 0]),
            to: new ScilabDouble([3, 1, 1])
        }));

        var model = scicos_model({
            sim: new ScilabString(["csuper"]),
            in: new ScilabDouble(),
            in2: new ScilabDouble(),
            intyp: new ScilabDouble([1]),
            out: new ScilabDouble([-1]),
            out2: new ScilabDouble([-2]),
            outtyp: new ScilabDouble([1]),
            evtin: new ScilabDouble(),
            evtout: new ScilabDouble(),
            state: new ScilabDouble(),
            dstate: new ScilabDouble(),
            odstate: list(),
            rpar: scs_m_1,
            ipar: new ScilabDouble(),
            opar: list(),
            blocktype: new ScilabString(["h"]),
            firing: new ScilabDouble(),
            dep_ut: new ScilabBoolean([false, false]),
            label: new ScilabString([""]),
            nzcross: new ScilabDouble([0]),
            nmode: new ScilabDouble([0]),
            equations: list()
        });
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"FROMWSB\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([5, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }
    FROMWSB.prototype.details = function FROMWSB() {
        return this.x;
    }
}function GAINBLK() {

    GAINBLK.prototype.define = function GAINBLK() {
        this.gain = 1;
        this.in1 = -1;
        this.out = -1;
        this.in2 = -2;
        this.out2 = -2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["gainblk"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([this.out]);
        model.in2 = new ScilabDouble([this.in2]);
        model.out2 = new ScilabDouble([this.out2]);
        model.rpar = new ScilabDouble([this.gain]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.gain)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GAINBLK\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    GAINBLK.prototype.details = function GAINBLK() {
        return this.x;
    }
}

function GAINBLK_f() {

    GAINBLK_f.prototype.define = function GAINBLK_f() {
        this.gain = 1;
        this.in1 = 1;
        this.out = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["gain"]);
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([this.out]);
        model.rpar = new ScilabDouble([this.gain]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.gain)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GAINBLK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    GAINBLK_f.prototype.details = function GAINBLK_f() {
        return this.x;
    }
}

function GAIN_f() {

    GAIN_f.prototype.define = function GAIN_f() {
        this.gain = 1;
        this.in1 = 1;
        this.out = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["gain"]);
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.gain]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.gain)], [sci2exp(this.in1)], [sci2exp(this.out)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GAIN_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    GAIN_f.prototype.details = function GAIN_f() {
        return this.x;
    }
}

function GENERAL_f() {

    GENERAL_f.prototype.define = function GENERAL_f() {
        var rpar = [[0],[0],[0],[0]];

        this.in1 = 1;
        this.out = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["zcross"]), new ScilabDouble([1]));
        model.nzcross = new ScilabDouble([this.in1]);
        model.in = new ScilabDouble([this.in1]);
        model.evtout = new ScilabDouble(...ones(this.out, 1));
        model.rpar = new ScilabDouble([0], [0], [0], [0]);
        model.blocktype = new ScilabString(["z"]);
        model.firing = -new ScilabDouble(...ones(this.out, 1));
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.in1)], [sci2exp(this.out)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GENERAL_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    GENERAL_f.prototype.details = function GENERAL_f() {
        return this.x;
    }
}
function generic_block3() {

    generic_block3.prototype.define = function generic_block3() {
        var model = scicos_model();
        this.function_name = "sinblk";
        this.funtyp = 4;
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([this.function_name], [sci2exp(this.funtyp)], [sci2exp([parseInt(getData(model.in)[0]), parseInt(getData(model.in2)[0])])], [sci2exp(parseInt(getData(model.intyp)[0]))], [sci2exp([parseInt(getData(model.out)[0]), parseInt(getData(model.out2)[0])])], [sci2exp(parseInt(getData(model.outtyp)[0]))], [sci2exp(getData(model.evtin))], [sci2exp(getData(model.evtout))], [sci2exp(getData(model.state))], [sci2exp(getData(model.dstate))], [sci2exp(model.odstate)], [sci2exp(getData(model.rpar))], [sci2exp(getData(model.ipar))], [sci2exp(model.opar)], [sci2exp(parseInt(getData(model.nmode)[0]))], [sci2exp(parseInt(getData(model.nzcross)[0]))], [sci2exp(getData(model.firing))], ["y"], ["n"]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"generic_block3\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    generic_block3.prototype.details = function generic_block3() {
        return this.x;
    }
}
function GENSIN_f() {

    GENSIN_f.prototype.define = function GENSIN_f() {
        this.rpar = [[1], [1], [0]];

        var model = scicos_model();
        model.sim = new ScilabString(["gensin"]);
        model.in = new ScilabDouble();
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([1], [1], [0]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString(this.rpar[0], this.rpar[1], this.rpar[2]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GENSIN_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    GENSIN_f.prototype.details = function GENSIN_f() {
        return this.x;
    }
}

function GENSQR_f() {

    GENSQR_f.prototype.define = function GENSQR_f() {
        this.Amplitude = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["gensqr"]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([this.Amplitude]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.Amplitude]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GENSQR_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    GENSQR_f.prototype.details = function GENSQR_f() {
        return this.x;
    }
}
function GOTO() {

    GOTO.prototype.define = function GOTO() {
        var model = scicos_model();
        model.sim = new ScilabString(["goto"]);
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([-1]);
        model.out = new ScilabDouble();
        model.out2 = new ScilabDouble();
        model.outtyp = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([1]);
        model.opar = list(new ScilabString(["A"]));
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString(["A"], [sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GOTO\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 1]), model, exprs, gr_i);
        this.x.graphics.id = new ScilabString(["Goto"]);
        return new BasicBlock(this.x)
    }
    
    GOTO.prototype.details = function GOTO() {
        return this.x;
    }
}
function GOTOMO() {

    GOTOMO.prototype.define = function GOTOMO() {

        var model = scicos_model();
        model.sim = new ScilabString(["gotomo"]);
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble();
        model.out = new ScilabDouble();
        model.out2 = new ScilabDouble();
        model.outtyp = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([1]);
        model.opar = list(new ScilabString(["A"]));
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["gotomo"]);
        mo.inputs = new ScilabString(["p"]);

        var exprs = new ScilabString(["A"], [sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GOTOMO\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 1]), model, exprs, gr_i);
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    GOTOMO.prototype.details = function GOTOMO() {
        return this.x;
    }
}

function GotoTagVisibility() {

    GotoTagVisibility.prototype.define = function GotoTagVisibility() {

        var model = scicos_model();
        model.sim = new ScilabString(["gototagvisibility"]);
        model.in1 = new ScilabDouble();
        model.in2 = new ScilabDouble();
        model.out = new ScilabDouble();
        model.out2 = new ScilabDouble();
        model.evtin = new ScilabDouble();
        model.intyp = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.opar = list(new ScilabString(["A"]));
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabBoolean([false]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString(["A"]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GotoTagVisibility\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    GotoTagVisibility.prototype.details = function GotoTagVisibility() {

        return this.x;
    }
}
function GotoTagVisibilityMO() {

    GotoTagVisibilityMO.prototype.define = function GotoTagVisibilityMO() {

        var model = scicos_model();
        model.sim = new ScilabString(["gototagvisibilitymo"]);
        model.in = new ScilabDouble();
        model.in2 = new ScilabDouble();
        model.out = new ScilabDouble();
        model.out2 = new ScilabDouble();
        model.evtin = new ScilabDouble();
        model.intyp = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.opar = list(new ScilabString(["A"]));
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabBoolean([false]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString(["A"]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GotoTagVisibilityMO\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    GotoTagVisibilityMO.prototype.details = function GotoTagVisibilityMO() {
        return this.x;
    }
}

function Ground() {

    Ground.prototype.define = function Ground() {

        var model = scicos_model();
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble();
        model.sim = new ScilabString(["Ground"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["Ground"]);
        mo.inputs = new ScilabString(["p"]);
        mo.outputs = new ScilabDouble();
        model.equations = mo;

        var exprs = new ScilabString([""]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Ground\",sz(1),sz(2));"]);
        this.x = standard_define(new ScilabDouble([1, 1]), model, exprs, list(gr_i, new ScilabDouble([0])));
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new GroundBlock(this.x);
    }
    
    Ground.prototype.details = function Ground() {
        return this.x;
    }
}
function Gyrator() {

    Gyrator.prototype.define = function Gyrator() {
        this.ModelName = "Gyrator";
        this.PrametersValue = [[1],[1]];
        this.ParametersName = [["G1"],["G2"]];
        this.model = scicos_model();
        this.Typein = [];
        this.Typeout = [];
        this.MI = [];
        this.MO = [];
        this.P = [[2.5, 90, 2, 0],[2.5, 10, 2, 0],[97.5, 90, -2, 0],[97.5, 10, -2, 0]];
        this.PortName = [["p1"],["n1"],["p2"],["n2"]];

        for (var i = 0; i < size(this.P, "r"); i++) {
            if (this.P[i][2] == 1) {
                this.Typein.push(["E"]);
                this.MI.push(this.PortName[i]);
            }
            if (this.P[i][2] == 2) {
                this.Typein.push(["I"]);
                this.MI.push(this.PortName[i]);
            }
            if (this.P[i][2] == -1) {
                this.Typeout.push(["E"]);
                this.MO.push(this.PortName[i]);
            }
            if (this.P[i][2] == -2) {
                this.Typeout.push(["I"]);
                this.MO.push(this.PortName[i]);
            }
        }
        var model = scicos_model();
        var mo = new modelica_function();
        model.sim = new ScilabString([this.ModelName]);
        mo.inputs = new ScilabString(...this.MI);
        mo.outputs = new ScilabString(...this.MO);
        console.log(this.MI);
        model.rpar = new ScilabDouble(...this.PrametersValue);
        mo.parameters = list(new ScilabString(...this.ParametersName), new ScilabDouble(...this.PrametersValue), new ScilabDouble(...zeros(this.ParametersName)));
        var exprs = new ScilabString(["1"], ["1"]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),&quot;Gyrator&quot;,sz(1),sz(2));"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);
        mo.model = new ScilabString([this.ModelName]);
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(this.MI, "*"), 1));
        model.out = new ScilabDouble(...ones(size(this.MO, "*"), 1));
        this.x = standard_define([2, 2], model, exprs, list(gr_i, new ScilabDouble([0])));
        this.x.graphics.in_implicit = new ScilabString(...this.Typein);
        this.x.graphics.out_implicit = new ScilabString(...this.Typeout);
        return new BasicBlock(this.x);
    }
    Gyrator.prototype.details = function Gyrator() {
        return this.x;
    }
}
function HALT_f() {

    HALT_f.prototype.define = function HALT_f() {
        this.n = 0;

        var model = scicos_model();
        model.sim = new ScilabString(["hltblk"]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([0]);
        model.ipar = new ScilabDouble([0]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.n]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"HALT_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    HALT_f.prototype.details = function HALT_f() {
        return this.x;
    }
}

function HYSTHERESIS() {

    HYSTHERESIS.prototype.define = function HYSTHERESIS() {
        this.in1 = 1;
        this.ipar = 0;
        this.nzz = 2;
        this.rpar = [[1], [0], [1], [0]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["hystheresis"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble(...this.rpar);
        model.nzcross = new ScilabDouble([this.nzz]);
        model.nmode = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString(...this.rpar, [Math.sign(this.nzz)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"HYSTHERESIS\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    HYSTHERESIS.prototype.details = function HYSTHERESIS() {
        return this.x;
    }
}

function IdealTransformer() {

    IdealTransformer.prototype.define = function IdealTransformer() {
        this.ModelName = "IdealTransformer";
        this.PrametersValue = [1];
        this.ParametersName = ["N"];

        var model = scicos_model();

        this.Typein = [];
        this.Typeout = [];
        this.MI = [];
        this.MO = [];
        this.P = [[2.5,90,2,0],[2.5,10,2,0],[97.5,90,-2,0],[97.5,10,-2,0]];
        this.PortName = [["p1"],["n1"],["p2"],["n2"]];

        for (var i = 0; i < size(this.P, "r"); i++) {
            if (this.P[i][2] == 1) {
                this.Typein.push(["E"]);
                this.MI.push(this.PortName[i]);
            }

            if (this.P[i][2] == 2) {
                this.Typein.push(["I"]);
                this.MI.push(this.PortName[i]);
            }
            if (this.P[i][2] == -1) {
                this.Typeout.push(["E"]);
                this.MO.push(this.PortName[i]);
            }
            if (this.P[i][2] == -2) {
                this.Typeout.push(["I"]);
                this.MO.push(this.PortName[i]);
            }
        }
        var mo = new modelica_function();
        model.sim = new ScilabString([this.ModelName]);
        mo.inputs = new ScilabString(...this.MI);
        mo.outputs = new ScilabString(...this.MO);
        model.rpar = new ScilabDouble(this.PrametersValue);
        mo.parameters = list(new ScilabString(this.ParametersName), new ScilabDouble(this.PrametersValue), new ScilabDouble(zeros(getData(this.ParametersName))));
        var exprs = new ScilabString(["1"]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"IdealTransformer\",sz(1),sz(2));"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);
        mo.model = new ScilabString([this.ModelName]);
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(this.MI, "*"), 1));
        model.out = new ScilabDouble(...ones(size(this.MO, "*"), 1));
        this.x = new standard_define(new ScilabDouble([2,2]), model, exprs, list(gr_i), new ScilabDouble([0]));
        this.x.graphics.in_implicit = new ScilabDouble(this.Typein);
        this.x.graphics.out_implicit = new ScilabDouble(this.Typeout);
        return new BasicBlock(this.x);
    }

    IdealTransformer.prototype.details = function IdealTransformer() {
        return this.x;
    }

}
function IFTHEL_f() {

    IFTHEL_f.prototype.internal = function IFTHEL_f() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["ifthel"]), new ScilabDouble([-1]));
        model.in = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([-1]);
        model.evtin = new ScilabDouble([-1]);
        model.outtyp = new ScilabDouble(); // changed
        model.evtout = new ScilabDouble([-1], [-1]) // 1, 1 -> -1, -1 inverse
        model.blocktype = new ScilabString(["l"]);
        model.firing = new ScilabDouble([-1], [-1]); // inverse
        model.dep_ut = new ScilabBoolean([true, false]);
        model.nmode = new ScilabDouble([1]);
        model.nzcross = new ScilabDouble([1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"IFTHEL_f\",sz(1),sz(2));"]);
        var exprs = new ScilabString(["1"], ["1"]); // value model.in, model.nmode inverse

        var block = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 3 -> 80
        block.graphics.in_implicit = new ScilabString(["E"]);
        // changed
        block.graphics.in_label = new ScilabString([""]);
        block.graphics.in_style = new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]);
        block.graphics.style = new ScilabString(["IFTHEL_f"]);
        return block;
    }

    IFTHEL_f.prototype.define = function IFTHEL_f() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["ifthel"]), new ScilabDouble([-1]));
        model.in = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([-1]);
        model.evtin = new ScilabDouble([-1]);
        model.outtyp = new ScilabDouble(); // changed
        model.evtout = new ScilabDouble([-1], [-1]) // 1, 1 -> -1, -1 inverse
        model.blocktype = new ScilabString(["l"]);
        model.firing = new ScilabDouble([-1], [-1]); // inverse
        model.dep_ut = new ScilabBoolean([true, false]);
        model.nmode = new ScilabDouble([1]);
        model.nzcross = new ScilabDouble([1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"IFTHEL_f\",sz(1),sz(2));"]);
        var exprs = new ScilabString(["1"], ["1"]); // value model.in, model.nmode inverse

        this.x = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 3 -> 80
        this.x.graphics.in_implicit = new ScilabString(["E"]);
        // changed
        this.x.graphics.in_label = new ScilabString([""]);
        this.x.graphics.in_style = new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]);
        this.x.graphics.style = new ScilabString(["IFTHEL_f"]);
        return new BasicBlock(this.x);
    }

    IFTHEL_f.prototype.details = function IFTHEL_f() {
        return this.x;
    }
}
function Inductor() {

    Inductor.prototype.define = function Inductor() {
        this.L = 1.0E-5;

        var model = scicos_model();
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.L.toExponential(1)]);
        model.sim = new ScilabString(["Inductor"]);

        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["Inductor"]);
        mo.inputs = new ScilabString(["p"]);
        mo.outputs = new ScilabString(["n"]);
        mo.parameters = list(new ScilabString(["L"]), list(new ScilabDouble([this.L.toExponential(1)])));
        model.equations = mo;

        var exprs = new ScilabString([this.L]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Inductor\",sz(1),sz(2));"]);
        this.x = standard_define([2, 0.9], model, exprs, list(gr_i, 0));
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    Inductor.prototype.details = function Inductor() {
        return this.x;
    }
}

function INIMPL_f() {

    INIMPL_f.prototype.define = function INIMPL_f() {
        var model = scicos_model();
        model.sim = new ScilabString(["inimpl"]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([1]);
        model.dep_ut = new ScilabBoolean([false, false]);
        model.blocktype = new ScilabString(["c"]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["PORT"]);
        mo.outputs = new ScilabString(["n"]);
        mo.inputs = new ScilabDouble();
        model.equations = mo;

        var exprs = new ScilabString(["1"]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),&quot;INIMPL_f&quot;,sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([1, 1]), model, exprs, gr_i);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new ImplicitInBlock(this.x);
    }
    INIMPL_f.prototype.details = function INIMPL_f() {
        return this.x;
    }
}
function INTEGRAL_f() {

    INTEGRAL_f.prototype.define = function INTEGRAL_f() {
        this.x0 = 0;

        var model = scicos_model();
        model.sim = new ScilabString(["integr"]);
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.state = new ScilabDouble([this.x0]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString([sci2exp(this.x0)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"INTEGRAL_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    INTEGRAL_f.prototype.details = function INTEGRAL_f() {
        return this.x;
    }
}

function INTEGRAL_m() {

    INTEGRAL_m.prototype.define = function INTEGRAL_m() {
        this.maxp = 1;
        this.minp = -1;
        this.rpar = [];

        var model = scicos_model();
        model.state = new ScilabDouble([0]);
        model.sim = list(new ScilabString(["integral_func"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.in2 = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.rpar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString([0], [0], [0], [this.maxp], [this.minp]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"INTEGRAL_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    INTEGRAL_m.prototype.details = function INTEGRAL_m() {
        return this.x;
    }
}

function INTMUL() {

    INTMUL.prototype.define = function INTMUL() {
        this.sgn = 0;

        var model = scicos_model();
        model.sim = list(new ScilabString(["matmul_i32"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1], [-2]);
        model.out = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2], [-3]);
        model.out2 = new ScilabDouble([-3]);
        model.intyp = new ScilabDouble([3, 3]);
        model.outtyp = new ScilabDouble([3]);
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble([this.sgn]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(3)], [sci2exp(0)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"INTMUL\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    INTMUL.prototype.details = function INTMUL() {
        return this.x;
    }
}

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

function INTRPLBLK_f() {

    INTRPLBLK_f.prototype.define = function INTRPLBLK_f() {
        this.a = [[0],[1]];

        this.b = [[0],[1]];

        var model = scicos_model();
        model.sim = new ScilabString(["intrpl"]);
        model.in = new ScilabDouble(1);
        model.out = new ScilabDouble(1);
        model.rpar = new ScilabDouble(...this.a, ...this.b);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true,false]);

        var exprs = new ScilabString([sci2exp(this.a)], [sci2exp(this.b)]);

        var gr_i = ["xstringb(orig(1),orig(2),\"INTRPLBLK_f\",sz(1),sz(2));"];
        this.x = new standard_define(new ScilabDouble([2,2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    INTRPLBLK_f.prototype.details = function INTRPLBLK_f() {
        return this.x;
    }
}
function INVBLK() {

    INVBLK.prototype.define = function INVBLK() {
        this.in1 = -1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["invblk4"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([this.in1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([" "]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"INVBLK\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    INVBLK.prototype.details = function INVBLK() {
        return this.x;
    }
}

function IN_f () {

	IN_f.prototype.internal = function IN_f() {
		this.prt = 1;
	
		var model = scicos_model();
		model.sim = new ScilabString(["input"]);
		model.out = new ScilabDouble([-1]);
		model.out2 = new ScilabDouble([-2]);
		model.outtyp = new ScilabDouble([-1]);
		model.ipar=new ScilabDouble([this.prt]);
		model.blocktype = new ScilabString(["c"]);
		model.dep_ut = new ScilabBoolean([false,false]);
	
		var exprs = new ScilabString([sci2exp(this.prt)]);
	
		var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"IN_f\",sz(1),sz(2));"]);
		var block = new standard_define(new ScilabDouble([1,1]),model,exprs,gr_i);
		block.graphics.style = new ScilabString(["IN_f"]); // changed
		block.graphics.out_implicit = new ScilabString(["E"]);
		block.graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
		block.graphics.out_label = new ScilabString([""]);
 		return block;
	}
	
	IN_f.prototype.define = function IN_f() {
		this.prt = 1;
	
		var model = scicos_model();
		model.sim = new ScilabString(["input"]);
		model.out = new ScilabDouble([-1]);
		model.out2 = new ScilabDouble([-2]);
		model.outtyp = new ScilabDouble([-1]);
		model.ipar = new ScilabDouble([this.prt]);
		model.blocktype = new ScilabString(["c"]);
		model.dep_ut = new ScilabBoolean([false,false]);
	
		var exprs = new ScilabString([sci2exp(this.prt)]);
	
		var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"IN_f\",sz(1),sz(2));"]);
		this.x = new standard_define(new ScilabDouble([1,1]),model,exprs,gr_i);
		return new ExplicitInBlock(this.x);
	}
	
	IN_f.prototype.details = function IN_f() {
		return this.x;
	}
}
function ISELECT_m() {

    ISELECT_m.prototype.define = function ISELECT_m() {
        this.z0 = 1;
        this.nout = 2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["selector_m"]), new ScilabDouble([4]));
        model.out = new ScilabDouble([-1], [-1]);
        model.out2 = new ScilabDouble([-2], [-2]);
        model.outtyp = new ScilabDouble([1]);
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.firing = new ScilabDouble();
        model.evtin = new ScilabDouble(...ones(this.nout, 1));
        model.dstate = new ScilabDouble([this.z0]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(1)], [sci2exp(this.nout)], [sci2exp(this.z0)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ISELECT_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    ISELECT_m.prototype.details = function ISELECT_m() {
        return this.x;
    }
}

function LOGBLK_f() {

    LOGBLK_f.prototype.define = function LOGBLK_f() {
        this.in1 = 1;
        this.a = Math.E;

        var model = scicos_model();
        model.sim = new ScilabString(["logblk"]);
        model.in = new ScilabDouble([-1]);
        model.out = new ScilabDouble([-1]);
        model.rpar = new ScilabDouble([this.a]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString(["%e"]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"LOGBLK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    LOGBLK_f.prototype.details = function LOGBLK_f() {
        return this.x;
    }
}

function LOGICAL_OP() {

    LOGICAL_OP.prototype.define = function LOGICAL_OP() {
        this.in1 = [[-1], [-1]];
        this.ipar = 0;
        this.nin = 2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["logicalop"]), new ScilabDouble([4]));
        model.in = new ScilabDouble(...this.in1);
        model.out = new ScilabDouble([-1]);
        model.ipar = new ScilabDouble([this.ipar]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.nin], [this.ipar]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"LOGICAL_OP\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    LOGICAL_OP.prototype.details = function LOGICAL_OP() {
        return this.x;
    }
}

function LOOKUP_f() {

    LOOKUP_f.prototype.define = function LOOKUP_f() {

        var model = scicos_model();
        model.sim = new ScilabString(["lookup"]);
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([-2], [-1], [1], [2], [-1], [1], [-1], [1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"LOOKUP_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, [], gr_i);
        return new BasicBlock(this.x);
    }
    LOOKUP_f.prototype.details = function LOOKUP_f() {
        return this.x;
    }
}

function MATBKSL() {

    MATBKSL.prototype.define = function MATBKSL() {
        this.function_name = "mat_bksl";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1], [-1]);
        model.in2 = new ScilabDouble([-2], [-3]);
        model.intyp = new ScilabDouble([1, 1]);
        model.out = new ScilabDouble([-2]);
        model.out2 = new ScilabDouble([-3]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATBKSL\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATBKSL.prototype.details = function MATBKSL() {
        return this.x;
    }
}

function MATCATH() {

    MATCATH.prototype.define = function MATCATH() {
        this.funtyp = 4;
        this.function_name = "mat_cath";

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1], [-1]);
        model.in2 = new ScilabDouble([-2], [-3]);
        model.intyp = new ScilabDouble([1, 1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([0]);
        model.outtyp = new ScilabDouble([-1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(2)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATCATH\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 3]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATCATH.prototype.details = function MATCATH() {
        return this.x;
    }
}

function MATCATV() {

    MATCATV.prototype.define = function MATCATV() {
        this.l1 = [[2], [2]];
        this.function_name = "mat_catv";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in2 = new ScilabDouble([-1], [-1]);
        model.in = new ScilabDouble([-2], [-3]);
        model.intyp = new ScilabDouble([-1, -1]);
        model.out = new ScilabDouble([0]);
        model.out2 = new ScilabDouble([-1]);
        model.outtyp = new ScilabDouble([-1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(2)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATCATV\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 3]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATCATV.prototype.details = function MATCATV() {
        return this.x;
    }
}

function MATDET() {

    MATDET.prototype.define = function MATDET() {
        var model = scicos_model();

        this.function_name = "mat_det";
        this.funtyp = 4;

        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-1]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATDET\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }

    MATDET.prototype.details = function MATDET() {
        return this.x;
    }
}
function MATDIAG() {

    MATDIAG.prototype.define = function MATDIAG() {
        this.function_name = "mat_diag";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-1]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATDIAG\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATDIAG.prototype.details = function MATDIAG() {
        return this.x;
    }
}

function MATDIV() {

    MATDIV.prototype.define = function MATDIV() {
        var model = scicos_model();

        this.function_name = "mat_div";
        this.funtyp = 4;

        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1], [-2]);
        model.in2 = new ScilabDouble([-3], [-3]);
        model.intyp = new ScilabDouble([1, 1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATDIV\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }

    MATDIV.prototype.details = function MATDIV() {
        return this.x;
    }

}
function MATEIG() {

    MATEIG.prototype.define = function MATEIG() {
        this.function_name = "mat_vps";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-1]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([2]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)], [sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATEIG\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATEIG.prototype.details = function MATEIG() {
        return this.x;
    }
}

function MATEXPM() {

    MATEXPM.prototype.define = function MATEXPM() {
        this.function_name = "mat_expm";
        this.funtyp = 4;
        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-1]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-1]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATEXPM\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATEXPM.prototype.details = function MATEXPM() {
        return this.x;
    }
}

function MATINV() {

    MATINV.prototype.define = function MATINV() {
        this.function_name = "mat_inv";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-1]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-1]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATINV\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATINV.prototype.details = function MATINV() {
        return this.x;
    }
}

function MATLU() {

    MATLU.prototype.define = function MATLU() {
        this.function_name = "mat_lu";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-1]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1], [-1]);
        model.out2 = new ScilabDouble([-1], [-1]);
        model.outtyp = new ScilabDouble([1, 1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATLU\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATLU.prototype.details = function CSCOPE() {
        return this.x;
    }
}

function MATMAGPHI() {

    MATMAGPHI.prototype.define = function MATMAGPHI() {
        this.function_name = "matz_abs";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([2]);
        model.out = new ScilabDouble([-1], [-1]);
        model.out2 = new ScilabDouble([-2], [-2]);
        model.outtyp = new ScilabDouble([1, 1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATMAGPHI\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATMAGPHI.prototype.details = function MATMAGPHI() {
        return this.x;
    }
}

function MATMUL() {

    MATMUL.prototype.define = function MATMUL() {

        var model = scicos_model();
        model.sim = list(new ScilabString(["matmul_m"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1], [-2]);
        model.in2 = new ScilabDouble([-2], [-3]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-3]);
        model.dep_ut = new ScilabBoolean([true, false]);
        model.ipar = new ScilabDouble([1]);

        var label = new ScilabString([sci2exp(parseInt(getData(model.ipar)))]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATMUL\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATMUL.prototype.details = function MATMUL() {
        return this.x;
    }
}

function MATPINV() {

    MATPINV.prototype.define = function MATPINV() {
        this.function_name = "mat_pinv";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-2]);
        model.out2 = new ScilabDouble([-1]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATPINV\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATPINV.prototype.details = function MATPINV() {
        return this.x;
    }
}

function MATRESH() {

    MATRESH.prototype.define = function MATRESH() {
        this.function_name = "mat_reshape";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)], [sci2exp([1, 1])], [sci2exp([1, 1])]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATRESH\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATRESH.prototype.details = function MATRESH() {
        return this.x;
    }
}

function MATSING() {

    MATSING.prototype.define = function MATSING() {
        var model = scicos_model();

        this.function_name = "mat_sing";
        this.funtyp = 4;

        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)], [sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATSING\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }

    MATSING.prototype.details = function MATSING() {
        return this.x;
    }
}
function MATSUM() {

    MATSUM.prototype.define = function MATSUM() {
        this.function_name = "mat_sum";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)], [sci2exp(0)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATSUM\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATSUM.prototype.details = function MATSUM() {
        return this.x;
    }
}

function MATTRAN() {

    MATTRAN.prototype.define = function MATTRAN() {

        var model = scicos_model();
        model.sim = list(new ScilabString(["mattran_m"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.out = new ScilabDouble([-2]);
        model.out2 = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATTRAN\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATTRAN.prototype.details = function MATTRAN() {
        return this.x;
    }
}

function MATZCONJ() {

    MATZCONJ.prototype.define = function MATZCONJ() {
        this.function_name = "matz_conj";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([2]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.outtyp = new ScilabDouble([2]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabDouble();

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATZCONJ\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    MATZCONJ.prototype.details = function MATZCONJ() {
        return this.x;
    }
}

function MATZREIM() {
    MATZREIM.prototype.define = function MATZREIM() {
        var model = scicos_model();
        
        this.function_name = "matz_reim";
        this.funtyp = new ScilabDouble([4]);
        model.sim = list(this.function_name, this.funtyp);
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([2]);
        model.out = new ScilabDouble(-1, -1);
        model.out2 = new ScilabDouble(-2, -2);
        model.outtyp = new ScilabDouble([1,1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true,false]);

        this.label = sci2exp(new ScilabDouble(1));

        var gr_i = ["xstringb(orig(1),orig(2),\"MATZREIM\",sz(1),sz(2));"];
        this.x = new standard_define(new ScilabDouble([3,2]), model, this.label, gr_i);
        return new BasicBlock(this.x);
    }

    MATZREIM.prototype.details = function MATZREIM() {
        return this.x;
    }
}
function MAXMIN() {

    MAXMIN.prototype.define = function MAXMIN() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["minmax"]), new ScilabDouble([4]));
        model.out = new ScilabDouble([1]);
        model.in = new ScilabDouble([-1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);
        model.ipar = new ScilabDouble([0]);

        var exprs = new ScilabString(...math.transpose([[2, 1, 1]]));

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MAXMIN\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        this.x.graphics.style = new ScilabString(["MAXMIN;displayedLabel=MAX"]);
        return new BasicBlock(this.x);
    }

    MAXMIN.prototype.details = function MAXMIN() {
        return this.x;
    }
}
function MAX_f() {
    
    MAX_f.prototype.define = function MAX_f() {
        this.in = new ScilabDouble([-1]);

        var model = scicos_model();
        model.sim = new ScilabString(["maxblk"]);
        model.in = this.in;
        model.out = new ScilabDouble(1);
        model.dstate = new ScilabDouble([0], [0]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([" "]);

        var gr_i = ["xstringb(orig(1),orig(2),\"MAX_f\",sz(1),sz(2));"];
        this.x = new standard_define(new ScilabDouble([2,2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    
    MAX_f.prototype.details = function MAX_f() {
        return this.x;
    }
}
function MBLOCK() {

    MBLOCK.prototype.define = function MBLOCK() {
        this.in1 = ["u1"];
        this.intype = ["I"];
        this.out = [["y1"],["y2"]];
        this.outtype = [["I"],["E"]];
        this.param = [["R"],["L"]];
        this.paramv = list(new ScilabDouble([0.1]), new ScilabDouble([0.0001]));
        this.pprop = [[0],[0]];
        this.nameF = "generic";

        var exprs = tlist(["MBLOCK", "in", "intype", "out", "outtype", "param", "paramv", "pprop", "nameF", "funtxt"], new ScilabString(["MBLOCK", "in", "intype", "out", "outtype", "param", "paramv", "pprop", "nameF", "funtxt"]), new ScilabString([sci2exp(this.in1)]), new ScilabString([sci2exp(this.intype)]), new ScilabString([sci2exp(this.out)]), new ScilabString([sci2exp(this.outtype)]), new ScilabString([sci2exp(this.param)]), list(new ScilabString([0.1]), new ScilabString([0.0001])), new ScilabString([sci2exp(this.pprop)]), new ScilabString([this.nameF]), new ScilabDouble());

        var model = scicos_model();
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);
        model.rpar = [];

        for (var i = 0; i < this.paramv.length; i++) {
            model.rpar.push(getData(this.paramv[i]));
        }

        model.rpar = new ScilabDouble(...model.rpar);
        var mo = new modelica_function();
        mo.model = new ScilabString([this.nameF]);
        mo.parameters = list(new ScilabString(...this.param), this.paramv);
        model.sim = list(mo.model, new ScilabDouble([30004]));
        mo.inputs = new ScilabString(this.in1);
        mo.outputs = new ScilabString(...this.out);
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "r"), 1));
        model.out = new ScilabDouble(...ones(size(getData(mo.outputs), "r"), 1));
        model.equations = mo;
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MBLOCK\",sz(1),sz(2));"]);

        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        this.x.graphics.in_implicit = new ScilabString(this.intype);
        this.x.graphics.out_implicit = new ScilabString(...this.outtype);
        return new BasicBlock(this.x);
    }

    MBLOCK.prototype.details = function MBLOCK() {
        return this.x;
    }
}
function MCLOCK_f() {

    MCLOCK_f.prototype.define = function MCLOCK_f() {
        this.nn = 2;
        this.dt = 0.1;
        var exprs = new ScilabString([this.dt], [this.nn]);

        var mfclck = new MFCLCK_f().internal();
        mfclck.graphics.orig = new ScilabDouble([334, 199]);
        mfclck.graphics.sz = new ScilabDouble([40, 40]);
        mfclck.graphics.flip = new ScilabBoolean([true]);
        mfclck.graphics.exprs = exprs;
        mfclck.graphics.pein = new ScilabDouble([12]);
        mfclck.graphics.peout = new ScilabDouble([4], [3]);
        mfclck.model.rpar = new ScilabDouble([0.1]);
        mfclck.model.ipar = new ScilabDouble([this.nn]);
        mfclck.model.firing = new ScilabDouble([-1, 0]);
        mfclck.model.uid = new ScilabString([count]);
        mfclck.doc = list(new ScilabString([count++]));

        var clksom = new CLKSOM_f().internal();
        clksom.graphics.orig = new ScilabDouble([457, 161]);
        clksom.graphics.sz = new ScilabDouble([16.666667, 16.666667]);
        clksom.graphics.flip = new ScilabBoolean([true]);
        clksom.graphics.exprs = new ScilabString(["0.1"], ["0.1"]);
        clksom.graphics.pein = new ScilabDouble([4], [9], [0]);
        clksom.graphics.peout = new ScilabDouble([5]);
        clksom.model.uid = new ScilabString([count]);
        clksom.doc = list(new ScilabString([count++]));

        var output_port1 = new CLKOUT_f().internal();
        output_port1.graphics.orig = new ScilabDouble([509, 261]);
        output_port1.graphics.sz = new ScilabDouble([20, 20]);
        output_port1.graphics.flip = new ScilabBoolean([true]);
        output_port1.graphics.exprs = new ScilabString(["1"]);
        output_port1.graphics.pein = new ScilabDouble([10]);
        output_port1.model.ipar = new ScilabDouble([1]);
        output_port1.model.uid = new ScilabString([count]);
        output_port1.doc = list(new ScilabString([count++]));

        var output_port2 = new CLKOUT_f().internal();
        output_port2.graphics.orig = new ScilabDouble([509, 142]);
        output_port2.graphics.sz = new ScilabDouble([20, 20]);
        output_port2.graphics.flip = new ScilabBoolean([true]);
        output_port2.graphics.exprs = new ScilabString(["2"]);
        output_port2.graphics.pein = new ScilabDouble([13]);
        output_port2.model.ipar = new ScilabDouble([2]);
        output_port2.model.uid = new ScilabString([count]);
        output_port2.doc = list(new ScilabString([count++]));

        var split1 = new CLKSPLIT_f().internal();
        split1.graphics.orig = new ScilabDouble([411.92504, 169.33333]);
        split1.graphics.pein = new ScilabDouble([3]);
        split1.graphics.peout = new ScilabDouble([9], [10]);
        split1.model.uid = new ScilabString([count]);
        split1.doc = list(new ScilabString([count++]));

        var split2 = new CLKSPLIT_f().internal();
        split2.graphics.orig = new ScilabDouble([482.45315, 169.33333]);
        split2.graphics.pein = new ScilabDouble([5]);
        split2.graphics.peout = new ScilabDouble([12], [13]);
        split2.model.uid = new ScilabString([count]);
        split2.doc = list(new ScilabString([count++]));

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),&quot;MCLOCK_f&quot;,sz(1),sz(2));"]);

        var diagram = scicos_diagram();
        diagram.objs.push(mfclck);
        diagram.objs.push(clksom);
        diagram.objs.push(output_port1);
        diagram.objs.push(output_port2);
        diagram.objs.push(split1);
        diagram.objs.push(split2);

        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([360.7], [360.7], [411.9]),
            yy: new ScilabDouble([193.3], [169.3], [169.3]),
            ct: new ScilabDouble([10, -1]),
            from: new ScilabDouble([1, 2, 0]),
            to: new ScilabDouble([5, 1, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([347.3], [347.3], [461.8], [461.8]),
            yy: new ScilabDouble([193.3], [155.5], [155.5], [161]),
            ct: new ScilabDouble([10, -1]),
            from: new ScilabDouble([1, 1, 0]),
            to: new ScilabDouble([2, 1, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([468.9], [482.5]),
            yy: new ScilabDouble([169.3], [169.3]),
            ct: new ScilabDouble([10, -1]),
            from: new ScilabDouble([2, 1, 0]),
            to: new ScilabDouble([6, 1, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([411.9], [457]),
            yy: new ScilabDouble([169.3], [169.3]),
            ct: new ScilabDouble([10, -1]),
            from: new ScilabDouble([5, 1, 0]),
            to: new ScilabDouble([2, 2, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([411.9], [411.9], [509]),
            yy: new ScilabDouble([169.3], [271], [271]),
            ct: new ScilabDouble([10, -1]),
            from: new ScilabDouble([5, 2, 0]),
            to: new ScilabDouble([3, 1, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([482.5], [489.6], [489.6], [354], [354]),
            yy: new ScilabDouble([169.3], [169.3], [338.3], [338.3], [244.7]),
            ct: new ScilabDouble([10, -1]),
            from: new ScilabDouble([6, 1, 0]),
            to: new ScilabDouble([1, 1, 1])
        }));
        diagram.objs.push(scicos_link({
            xx: new ScilabDouble([482.4], [482.4], [509]),
            yy: new ScilabDouble([169.3], [152], [152]),
            ct: new ScilabDouble([10, -1]),
            from: new ScilabDouble([6, 2, 0]),
            to: new ScilabDouble([4, 1, 1])
        }));

        this.x = scicos_block();
        this.x.gui = new ScilabString(["MCLOCK_f"]);
        this.x.graphics.sz = new ScilabDouble([3, 2]);
        this.x.graphics.gr_i = gr_i;
        this.x.model.sim = new ScilabString(["csuper"]);
        this.x.model.evtout = new ScilabDouble([1], [1]);
        this.x.model.blocktype = new ScilabString(["h"]);
        this.x.model.rpar = diagram;
        this.x.graphics.peout = new ScilabDouble([0], [0]);
        return new BasicBlock(this.x);
    }
    MCLOCK_f.prototype.details = function MCLOCK_f() {
        return this.x;
    }
}
function MFCLCK_f() {

    MFCLCK_f.prototype.define = function MFCLCK_f() {
        this.nn = 2;
        this.dt = 0.1;

        var model = scicos_model();
        model.sim = new ScilabString(["mfclck"]);
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1], [1]);
        model.dstate = new ScilabDouble([0]);
        model.rpar = new ScilabDouble([this.dt]);
        model.ipar = new ScilabDouble([this.nn]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1], [0]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.dt], [this.nn]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MFCLCK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    MFCLCK_f.prototype.internal = function MFCLCK_f() {
        this.nn = 2;
        this.dt = 0.1;

        var model = scicos_model();
        model.sim = new ScilabString(["mfclck"]);
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1], [1]);
        model.dstate = new ScilabDouble([0]);
        model.rpar = new ScilabDouble([this.dt]);
        model.ipar = new ScilabDouble([this.nn]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1], [0]);
        model.dep_ut = new ScilabBoolean([false, false]);
        model.outtyp = new ScilabDouble();

        var exprs = new ScilabString([this.dt], [this.nn]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MFCLCK_f\",sz(1),sz(2));"]);
        var block = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        block.graphics.style = new ScilabString(["MFCLCK_f"]);
        return block;
    }
    MFCLCK_f.prototype.details = function MFCLCK_f() {
        return this.x;
    }
}
function MIN_f() {

    MIN_f.prototype.define = function MIN_f() {
        this.in1 = -1;

        var model = scicos_model();
        model.sim = new ScilabString(["minblk"]);
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([0], [0]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.in1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MIN_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    MIN_f.prototype.details = function MIN_f() {
        return this.x;
    }
}

function Modulo_Count() {

    Modulo_Count.prototype.define = function Modulo_Count() {
        this.ini_c = 0;
        this.base = 3;

        var model = scicos_model();
        model.sim = list(new ScilabString(["modulo_count"]), new ScilabDouble([4]));
        model.evtin = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([this.ini_c]);
        model.ipar = new ScilabDouble([this.base]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.ini_c], [this.base]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Modulo_Count\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    Modulo_Count.prototype.internal = function Modulo_Count() {
        this.ini_c = 0;
        this.base = 3;

        var model = scicos_model();
        model.sim = list(new ScilabString(["modulo_count"]), new ScilabDouble([4]));
        model.evtin = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([this.ini_c]);
        model.ipar = new ScilabDouble([this.base]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.ini_c], [this.base]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Modulo_Count\",sz(1),sz(2));"]);
        var block = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        block.graphics.style = new ScilabString(["Modulo_Count"]);
        return block;
    }
    Modulo_Count.prototype.details = function Modulo_Count() {
        return this.x;
    }
}
function MUX() {

    MUX.prototype.define = function MUX() {
        this.in1 = 2;
        var arr = [];
        arr.push(math.range(-1, -this.in1, -1, true)._data);

        var model = scicos_model();
        model.sim = list(new ScilabString(["multiplex"]), new ScilabDouble([4]));
        model.in = new ScilabDouble(...math.transpose(arr));
        model.out = new ScilabDouble([0]);
        model.ipar = new ScilabDouble([this.in1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.in1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MUX\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([.5, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    MUX.prototype.details = function MUX() {
        return this.x;
    }
}

function MUX_f() {

    MUX_f.prototype.define = function MUX_f() {
        this.in1 = 2;
        var arr = [];
        arr.push(math.range(-1, -this.in1, -1, true)._data);

        var model = scicos_model();
        model.sim = list(new ScilabString(["mux"]), new ScilabDouble([1]));
        model.in = new ScilabDouble(...math.transpose(arr));
        model.out = new ScilabDouble([0]);
        model.ipar = new ScilabDouble([this.in1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.in1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MUX_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([0.5, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    MUX_f.prototype.details = function MUX_f() {
        return this.x;
    }
}

function M_freq() {

    M_freq.prototype.define = function M_freq() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["m_frequ"]), new ScilabDouble([4]));
        model.evtout = new ScilabDouble([1], [1], [1]);
        model.evtin = new ScilabDouble([1]);
        model.rpar = new ScilabDouble();
        model.opar = list(new ScilabDouble([1, 1, 0], [1, 1, 1], [1, 3, 2]), new ScilabDouble([1]), new ScilabDouble([0]), new ScilabDouble([0]));
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([0, -1, -1]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp([[1], [2]])], [sci2exp([[0], [0]])]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"M_freq\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    M_freq.prototype.details = function M_freq() {
        return this.x;
    }
}
function M_SWITCH() {

    M_SWITCH.prototype.define = function M_SWITCH() {
        this.in1 = [[1], [-1], [-1]];
        this.ipar = [[1], [3]];
        this.nin = 2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["mswitch"]), new ScilabDouble([4]));
        model.in = new ScilabDouble(...this.in1);
        model.out = new ScilabDouble([-1]);
        model.ipar = new ScilabDouble(...this.ipar);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.nin], ...this.ipar);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"M_SWITCH\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2.5, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    M_SWITCH.prototype.details = function M_SWITCH() {
        return this.x;
    }
}

function NEGTOPOS_f() {

    NEGTOPOS_f.prototype.define = function NEGTOPOS_f() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["zcross"]), new ScilabDouble([1]));
        model.nzcross = new ScilabDouble([1]);
        model.in = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([-1], [-1], [0], [-1]);
        model.blocktype = new ScilabString(["z"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"NEGTOPOS_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }

    NEGTOPOS_f.prototype.details = function NEGTOPOS_f() {
        return this.x;
    }
}
function NMOS() {

    NMOS.prototype.define = function NMOS() {
        this.W = 20.e-6;
        this.L = 6.e-6;
        this.Beta = 0.041e-3;
        this.Vt = 0.8;
        this.K2 = 1.144;
        this.K5 = 0.7311;
        this.dW = -2.5e-6;
        this.dL = -1.5e-6;
        this.RDS = 1.e+7;

        var model = scicos_model();
        model.sim = new ScilabString(["NMOS"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["NMOS"]);
        mo.outputs = new ScilabString(["D"], ["B"], ["S"]);
        mo.inputs = new ScilabString(["G"]);
        mo.parameters = list(new ScilabString(["W"], ["L"], ["Beta"], ["Vt"], ["K2"], ["K5"], ["dW"], ["dL"], ["RDS"]), new ScilabDouble([this.W], [this.L], [this.Beta], [this.Vt], [this.K2], [this.K5], [this.dW], [this.dL], [this.RDS]));
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "*"), 1));
        model.out = new ScilabDouble(...ones(size(getData(mo.outputs), "*"), 1));

        var exprs = new ScilabString([this.W], [this.L], [this.Beta], [this.Vt], [this.K2], [this.K5], [this.dW], [this.dL], [this.RDS]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"NMOS\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"], ["I"], ["I"]);
        return new BasicBlock(this.x);
    }
    NMOS.prototype.details = function NMOS() {
        return this.x;
    }
}

function NPN() {

    NPN.prototype.define = function NPN() {
        this.ModelName = "NPN";
        this.PrametersValue = [[50], [0.1], [0], [0.02], [1.200e-10], [5.000e-09], [1.000e-12], [4.000e-13], [5.000e-13], [0.8], [0.4], [0.8], [0.333], [1.000e-15], [1.000e-15], [0.02585], [40]];
        this.ParametersName = [["Bf"], ["Br"], ["Is"], ["Vak"], ["Tauf"], ["Taur"], ["Ccs"], ["Cje"], ["Cjc"], ["Phie"], ["Me"], ["Phic"], ["Mc"], ["Gbc"], ["Gbe"], ["Vt"], ["EMinMax"]];
        this.model = scicos_model();
        this.Typein = [];
        this.Typeout = [];
        this.MI = [];
        this.MO = [];
        this.P = [[100, 90, -2, 0], [0, 50, 2, 0], [100, 10, -2, 0]];
        this.PortName = [["C"], ["B"], ["E"]];

        for (var i = 0; i < size(this.P, "r"); i++) {
            if (this.P[i][2] == 1) {
                this.Typein.push(["E"]);
                this.MI.push(this.PortName[i]);
            }
            if (this.P[i][2] == 2) {
                this.Typein.push(["I"]);
                this.MI.push(this.PortName[i]);
            }
            if (this.P[i][2] == -1) {
                this.Typeout.push(["E"]);
                this.MO.push(this.PortName[i]);
            }
            if (this.P[i][2] == -2) {
                this.Typeout.push(["I"]);
                this.MO.push(this.PortName[i]);
            }
        }
        var model = scicos_model();
        var mo = new modelica_function();
        model.sim = new ScilabString([this.ModelName]);
        mo.inputs = new ScilabString(...this.MI);
        mo.outputs = new ScilabString(...this.MO);
        model.rpar = new ScilabDouble(...this.PrametersValue);
        mo.parameters = list(new ScilabString(...this.ParametersName), new ScilabDouble(...this.PrametersValue), new ScilabDouble(...zeros(this.ParametersName)));
        var exprs = new ScilabString(["50"], ["0.1"], ["1.e-16"], ["0.02"], ["0.12e-9"], ["5e-9"], ["1e-12"], ["0.4e-12"], ["0.5e-12"], ["0.8"], ["0.4"], ["0.8"], ["0.333"], ["1e-15"], ["1e-15"], ["0.02585"], ["40"]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),&quot;NPN&quot;,sz(1),sz(2));"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);
        mo.model = new ScilabString([this.ModelName]);
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(this.MI, "*"), 1));
        model.out = new ScilabDouble(...ones(size(this.MO, "*"), 1));
        this.x = standard_define([2, 2], model, exprs, list(gr_i, new ScilabDouble([0])));
        this.x.graphics.in_implicit = new ScilabString(...this.Typein);
        this.x.graphics.out_implicit = new ScilabString(...this.Typeout);
        return new BasicBlock(this.x);
    }
    NPN.prototype.details = function NPN() {
        return this.x;
    }
}
function NRMSOM_f() {

    NRMSOM_f.prototype.define = function NRMSOM_f() {
        this.in1 = [[-1], [-1]];
        this.nin = 2;

        var model = scicos_model();
        model.sim = new ScilabString(["junk"]);
        model.in = new ScilabDouble(...this.in1);
        model.out = new ScilabDouble([-1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.nin]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"NRMSOM_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([.2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    NRMSOM_f.prototype.details = function NRMSOM_f() {
        return this.x;
    }
}

function OpAmp() {

    OpAmp.prototype.define = function OpAmp() {
        this.S = [];
        this.Z = [];

        var model = scicos_model();
        model.sim = new ScilabString(["OpAmp"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = model.sim;
        mo.inputs = new ScilabString(["in_p"], ["in_n"]);
        mo.outputs = new ScilabString(["out"]);
        mo.parameters = list(new ScilabDouble(), new ScilabDouble());
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "*"), 1));
        model.out = new ScilabDouble(...ones(size(getData(mo.outputs), "*"), 1));
        model.rpar = new ScilabDouble();

        var exprs = new ScilabString();

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"OpAmp\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 5]), model, exprs, gr_i);
        this.x.graphics.in_implicit = new ScilabString(["I"], ["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    OpAmp.prototype.details = function OpAmp() {
        return this.x;
    }
}

function OUTIMPL_f() {

    OUTIMPL_f.prototype.define = function OUTIMPL_f() {
        var model = scicos_model();
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([1]);

        this.prt = 1;
        model.sim = new ScilabString(["outimpl"]);
        model.ipar = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["PORT"]);
        mo.inputs = new ScilabString(["n"]);
        mo.outputs = new ScilabDouble();
        model.equations = mo;

        var exprs = new ScilabString(["1"]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),&quot;OUTIMPL_f&quot;,sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([1, 1]), model, exprs, gr_i);
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        return new ImplicitOutBlock(this.x);
    }
    OUTIMPL_f.prototype.details = function OUTIMPL_f() {
        return this.x;
    }
}
function OUT_f () {

	OUT_f.prototype.internal = function OUT_f() {
		this.n = -1;
		this.prt = 1;
	
		var model = scicos_model();
		model.sim = new ScilabString(["output"]);
		model.in = new ScilabDouble([-1]);
		model.in2 = new ScilabDouble([-2]);
		model.intyp = new ScilabDouble([-1]);
		model.ipar = new ScilabDouble([this.prt]);
		model.blocktype = new ScilabString(["c"]);
		model.dep_ut = new ScilabBoolean([false,false]);
		var exprs = new ScilabString([sci2exp(this.prt)]);
		
		var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"OUT_f\",sz(1),sz(2));"]);
		var block=new standard_define(new ScilabDouble([1,1]),model,exprs,gr_i);
		block.graphics.style = new ScilabString(["OUT_f"]);  // changed
		block.graphics.in_style = new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]);
		block.graphics.in_label = new ScilabString([""]);
		block.graphics.in_implicit = new ScilabString(["E"]);
		return block;
	}
	
	OUT_f.prototype.define = function OUT_f() {
		this.n = -1;
		this.prt = 1;
	
		var model = scicos_model();
		model.sim = new ScilabString(["output"]);
		model.in = new ScilabDouble([-1]);
		model.in2 = new ScilabDouble([-2]);
		model.intyp = new ScilabDouble([-1]);
		model.ipar=new ScilabDouble([this.prt]);
		model.blocktype = new ScilabString(["c"]);
		model.dep_ut = new ScilabBoolean([false,false]);
	
		var exprs = new ScilabString([sci2exp(this.prt)]);
		
		var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"OUT_f\",sz(1),sz(2));"]);
		this.x = new standard_define(new ScilabDouble([1,1]),model,exprs,gr_i);
		this.x.graphics.style = new ScilabString(["OUT_f"]);
		return new ExplicitOutBlock(this.x);
	}
	
	OUT_f.prototype.details = function OUT_f() {
		return this.x;
	}
}
function PDE() {

    PDE.prototype.define = function PDE() {
        this.params_pde = tlist(["paramspde", "a", "b", "txt_exp", "check_op1", "a1", "b1", "check_op2", "a2", "b2", "check_op3", "a3", "b3", "check_op4", "a4", "b4", "check_op5", "a5", "b5", "check_op6", "a6", "b6", "check_op7", "a7", "b7", "discr_cst", "discr_non_cst", "signe", "rad_automatique", "rad_manuel", "methode", "ord1", "ord2", "ord3", "degre", "nnode", "txt_pas", "CI", "dCI", "CLa", "CLa_exp", "CLb", "CLb_exp", "points"], new ScilabString(["paramspde"], ["a"], ["b"], ["txt_exp"], ["check_op1"], ["a1"], ["b1"], ["check_op2"], ["a2"], ["b2"], ["check_op3"], ["a3"], ["b3"], ["check_op4"], ["a4"], ["b4"], ["check_op5"], ["a5"], ["b5"], ["check_op6"], ["a6"], ["b6"], ["check_op7"], ["a7"], ["b7"], ["discr_cst"], ["discr_non_cst"], ["signe"], ["rad_automatique"], ["rad_manuel"], ["methode"], ["ord1"], ["ord2"], ["ord3"], ["degre"], ["nnode"], ["txt_pas"], ["CI"], ["dCI"], ["CLa"], ["CLa_exp"], ["CLb"], ["CLb_exp"], ["points"]), new ScilabString([""]), new ScilabString([""]), new ScilabString([""]), new ScilabString(["0"]), new ScilabString([""]), new ScilabString(["IN_EDP1(t)"]), new ScilabString(["0"]), new ScilabString([""]), new ScilabString(["IN_EDP2(t)"]), new ScilabString(["0"]), new ScilabString([""]), new ScilabString(["IN_EDP3(t)"]), new ScilabString(["0"]), new ScilabString([""]), new ScilabString(["IN_EDP4(t)"]), new ScilabString(["0"]), new ScilabString([""]), new ScilabString(["IN_EDP5(t)"]), new ScilabString(["0"]), new ScilabString([""]), new ScilabString(["IN_EDP6(t)"]), new ScilabString(["0"]), new ScilabString([""]), new ScilabString(["IN_EDP7(t)"]), new ScilabString(["0"]), new ScilabString(["0"]), new ScilabString(["0"]), new ScilabString(["0"]), new ScilabString(["0"]), new ScilabString(["0"]), new ScilabString([""]), new ScilabString([""]), new ScilabString([""]), new ScilabString([""]), new ScilabString([""]), new ScilabString([""]), new ScilabString([""]), new ScilabString([""]), new ScilabString(["0"]), new ScilabString(["IN_CL1(t)"]), new ScilabString(["0"]), new ScilabString(["IN_CL2(t)"]), new ScilabString([""]));

        var model = scicos_model();
        model.state = new ScilabDouble(...zeros(10, 1));
        model.sim = list(new ScilabString(["PDE"]), new ScilabDouble([0]));
        model.in = new ScilabDouble([1], [1], [1], [1], [1]);
        model.out = new ScilabDouble([10], [0]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var label = list(this.params_pde, new ScilabDouble(), new ScilabString([""]));

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"PDE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 3]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    PDE.prototype.details = function PDE() {
        return this.x;
    }
}

function PerteDP() {

    PerteDP.prototype.define = function PerteDP() {
        this.L = 10;
        this.D = 0.2;
        this.lambda = 0.03;
        this.z1 = 0;
        this.z2 = 0;
        this.p_rho = 0;

        var model = scicos_model();
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.L], [this.D], [this.lambda], [this.z1], [this.z2], [this.p_rho]);
        model.sim = new ScilabString(["PerteDP"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["PerteDP"]);
        mo.inputs = new ScilabString(["C1"]);
        mo.outputs = new ScilabString(["C2"]);
        mo.parameters = list(new ScilabString(["L"], ["D"], ["lambda"], ["z1"], ["z2"], ["p_rho"]), new ScilabDouble([this.L], [this.D], [this.lambda], [this.z1], [this.z2], [this.p_rho]));
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "*"), 1));
        model.out = new ScilabDouble(...ones(size(getData(mo.outputs), "*"), 1));

        var exprs = new ScilabString([this.L], [this.D], [this.lambda], [this.z1], [this.z2], [this.p_rho]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"PerteDP\",sz(1),sz(2));"]);
        this.x = standard_define([2, 1], model, exprs, list(gr_i, 0));
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    PerteDP.prototype.details = function PerteDP() {
        return this.x;
    }

}

function PID() {

    PID.prototype.define = function PID() {
        var scs_m = scicos_diagram({
            version: new ScilabString(["scicos4.2"]),
            props: scicos_params({
                wpar: new ScilabDouble([600, 450, 0, 0, 600, 450]),
                Title: new ScilabString(["PID"]),
                tol: new ScilabDouble([0.0001], [0.000001], [1.000E-10], [100001], [0], [0], [0]),
                tf: new ScilabDouble([100000]),
                context: new ScilabString([" "]),
                void1: new ScilabDouble(),
                options: tlist(["scsopt", "3D", "Background", "Link", "ID", "Cmap"], new ScilabString(["scsopt", "3D", "Background", "Link", "ID", "Cmap"]), list(new ScilabBoolean([true]), new ScilabDouble([33])), new ScilabDouble([8, 1]), new ScilabDouble([1, 5]), list(new ScilabDouble([5, 1]), new ScilabDouble([4, 1])), new ScilabDouble([0.8, 0.8, 0.8])),
                void2: new ScilabDouble(),
                void3: new ScilabDouble(),
                doc: list()
            })
        });
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["INTEGRAL_m"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([318.304, 183.11733]),
                sz: new ScilabDouble([40, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["0"], ["0"], ["0"], ["1"], ["-1"]),
                pin: new ScilabDouble([7]),
                pout: new ScilabDouble([9]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;INTEGRAL_m&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString(["1/s"]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["INTEGRAL_m"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["integral_func"]), new ScilabDouble([4])),
                in: new ScilabDouble([1]),
                in2: new ScilabDouble([1]),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([1]),
                out2: new ScilabDouble([1]),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble([0]),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, true]),
                label: new ScilabString(["1/s"]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["SUMMATION"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([387.97067, 172.85067]),
                sz: new ScilabDouble([40, 60]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"], ["[1;1;1]"]),
                pin: new ScilabDouble([10], [9], [11]),
                pout: new ScilabDouble([19]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;SUMMATION&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"], ["E"], ["E"]),
                out_implicit: new ScilabString(["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""], [""], [""]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["SUMMATION"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["summation"]), new ScilabDouble([4])),
                in: new ScilabDouble([-1], [-1], [-1]),
                in2: new ScilabDouble([-2], [-2], [-2]),
                intyp: new ScilabDouble([1], [1], [1]),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble([-2]),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1], [1], [1]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["GAINBLK"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([321.23733, 235.91733]),
                sz: new ScilabDouble([40, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble([17]),
                pout: new ScilabDouble([10]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;GAINBLK&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["GAINBLK"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["gainblk"]), new ScilabDouble([4])),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble([-2]),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble([-2]),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble([1]),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["DERIV"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([319.03733, 135.45067]),
                sz: new ScilabDouble([40, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble([8]),
                pout: new ScilabDouble([11]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;DERIV&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString(["s"]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["DERIV"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["deriv"]), new ScilabDouble([4])),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble([-2]),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble([-2]),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["x"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString(["s"]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["GAINBLK"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([255.23733, 183.11733]),
                sz: new ScilabDouble([40, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble([13]),
                pout: new ScilabDouble([7]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;GAINBLK&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["GAINBLK"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["gainblk"]), new ScilabDouble([4])),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble([-2]),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble([-2]),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble([1]),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["GAINBLK"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([255.23733, 135.45067]),
                sz: new ScilabDouble([40, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble([14]),
                pout: new ScilabDouble([8]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;GAINBLK&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["GAINBLK"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["gainblk"]), new ScilabDouble([4])),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble([-2]),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble([-2]),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble([1]),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["SPLIT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([234.704, 203.11733]),
                sz: new ScilabDouble([0.3333333, 0.3333333]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble([16]),
                pout: new ScilabDouble([16], [17], [0]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;SPLIT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"], ["E"], ["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""], [""], [""]),
                style: new ScilabString(["SPLIT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["lsplit"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble([1]),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([-1], [-1], [-1]),
                out2: new ScilabDouble([1], [1], [1]),
                outtyp: new ScilabDouble([1], [1], [1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["SPLIT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([233.97067, 203.11733]),
                sz: new ScilabDouble([0.3333333, 0.3333333]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble([21]),
                pout: new ScilabDouble([18], [19], [0]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;SPLIT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"], ["E"], ["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""], [""], [""]),
                style: new ScilabString(["SPLIT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["lsplit"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble([1]),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([-1], [-1], [-1]),
                out2: new ScilabDouble([1], [1], [1]),
                outtyp: new ScilabDouble([1], [1], [1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["OUT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([456.5421, 192.85067]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble([19]),
                pout: new ScilabDouble(),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;OUT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabDouble(),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                style: new ScilabString(["OUT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["output"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble([1]),
                intyp: new ScilabDouble([-1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble(),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["IN_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([193.97067, 193.11733]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble([21]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;IN_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabString(["E"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["IN_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["input"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble(),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble([1]),
                outtyp: new ScilabDouble([-1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));

        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([303.80876], [309.73257]),
            yy: new ScilabDouble([203.11733], [203.11733]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([5, 1, 0]),
            to: new ScilabDouble([1, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([303.80876], [310.4659]),
            yy: new ScilabDouble([155.45067], [155.45067]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([6, 1, 0]),
            to: new ScilabDouble([4, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([366.87543], [379.39924]),
            yy: new ScilabDouble([203.11733], [202.85067]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([1, 1, 0]),
            to: new ScilabDouble([2, 2, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([369.80876], [379.39924], [379.39924]),
            yy: new ScilabDouble([255.91733], [255.91733], [217.85067]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([3, 1, 0]),
            to: new ScilabDouble([2, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([367.60876], [379.39924], [379.39924]),
            yy: new ScilabDouble([155.45067], [155.45067], [187.85067]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([4, 1, 0]),
            to: new ScilabDouble([2, 3, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([234.704], [246.6659]),
            yy: new ScilabDouble([203.11733], [203.11733]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([12, 1, 0]),
            to: new ScilabDouble([5, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([234.704], [234.704], [246.6659]),
            yy: new ScilabDouble([203.11733], [155.45067], [155.45067]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([12, 2, 0]),
            to: new ScilabDouble([6, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([233.97067], [234.704]),
            yy: new ScilabDouble([203.11733], [203.11733]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([15, 1, 0]),
            to: new ScilabDouble([12, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([233.97067], [233.97067], [312.6659]),
            yy: new ScilabDouble([203.11733], [255.91733], [255.91733]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([15, 2, 0]),
            to: new ScilabDouble([3, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([436.5421], [456.5421]),
            yy: new ScilabDouble([202.85067], [202.85067]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([2, 1, 0]),
            to: new ScilabDouble([18, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([213.97067], [233.97067]),
            yy: new ScilabDouble([203.11733], [203.11733]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([20, 1, 0]),
            to: new ScilabDouble([15, 1, 1])
        }));

        var model = scicos_model();
        model.sim = new ScilabString(["csuper"]);
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["h"]);
        model.firing = new ScilabBoolean([false]);
        model.dep_ut = new ScilabBoolean([false, false]);
        model.rpar = scs_m;

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"PID\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }
    PID.prototype.details = function PID() {
        return this.x;
    }
}
function PNP() {
    
    PNP.prototype.define = function PNP() {
        this.ModelName = "PNP";
        this.PrametersValue = [[50],[0.1],[0],[0.02],[1.200e-10],[5.000e-09],[1.000e-12],[4.000e-13],[5.000e-13],[0.8],[0.4],[0.8],[0.333],[1.000e-15],[1.000e-15],[0.02585],[40]];
        this.ParametersName = [["Bf"],["Br"],["Is"],["Vak"],["Tauf"],["Taur"],["Ccs"],["Cje"],["Cjc"],["Phie"],["Me"],["Phic"],["Mc"],["Gbc"],["Gbe"],["Vt"],["EMinMax"]];

        var model = scicos_model();
        this.Typein = [];
        this.Typeout = [];
        this.MI = [];
        this.MO = [];
        this.P = [[100, 90, -2, 0], [0, 50, 2, 0], [100, 10, -2, 0]];
        this.PortName = [["C"], ["B"], ["E"]];

        for (var i = 0; i < size(this.P, "r"); i++) {
            if (this.P[i][2] == 1) {
                this.Typein.push(["E"]);
                this.MI.push(this.PortName[i]);
            }

            if (this.P[i][2] == 2) {
                this.Typein.push(["I"]);
                this.MI.push(this.PortName[i]);
            }
            if (this.P[i][2] == -1) {
                this.Typeout.push(["E"]);
                this.MO.push(this.PortName[i]);
            }
            if (this.P[i][2] == -2) {
                this.Typeout.push(["I"]);
                this.MO.push(this.PortName[i]);
            }
        }

        var mo = new modelica_function();
        model.sim = new ScilabString([this.ModelName]);
        mo.inputs = new ScilabString(...this.MI);
        mo.outputs = new ScilabString(...this.MO);
        model.rpar = new ScilabDouble(...this.PrametersValue);
        
        var arr = [];
        arr.push(zeros(getData(this.ParametersName)));
        mo.parameters = list(new ScilabString(...this.ParametersName), new ScilabDouble(...this.PrametersValue), new ScilabDouble(...math.transpose(arr)));
        var exprs = new ScilabString(["50"], ["0.1"], ["1.e-16"], ["0.02"], ["0.12e-9"], ["5e-9"], ["1e-12"], ["0.4e-12"], ["0.5e-12"], ["0.8"], ["0.4"], ["0.8"], ["0.333"], ["1e-15"], ["1e-15"], ["0.02585"], ["40"]);
        var gr_i = "xstringb(orig(1),orig(2),\"PNP\",sz(1),sz(2));"
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);
        mo.model = new ScilabString([this.ModelName]);
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(this.MI, "*"), 1));
        model.out = new ScilabDouble(...ones(size(this.MO, "*"), 1));
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, list(new ScilabString([gr_i]), new ScilabDouble([0])));
        this.x.graphics.in_implicit = new ScilabDouble(...this.Typein);
        this.x.graphics.out_implicit = new ScilabDouble(...this.Typeout);

        return new BasicBlock(this.x);
    }

    PNP.prototype.details = function PNP() {
        return this.x;
    }
}
function POSTONEG_f() {

    POSTONEG_f.prototype.define = function POSTONEG_f() {
        this.rpar = [[-1], [-1], [-1], [0]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["zcross"]), new ScilabDouble([1]));
        model.nzcross = new ScilabDouble([1]);
        model.in = new ScilabDouble([1]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([-1], [-1], [-1], [0]);
        model.blocktype = new ScilabString(["z"]);
        model.dep_ut = new ScilabBoolean([true, false]);
        model.firing = new ScilabDouble([-1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"POSTONEG_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, [], gr_i);
        return new BasicBlock(this.x);
    }
    POSTONEG_f.prototype.details = function POSTONEG_f() {
        return this.x;
    }
}

function PotentialSensor() {

    PotentialSensor.prototype.define = function PotentialSensor() {

        var model = scicos_model();
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble();
        model.sim = new ScilabString(["PotentialSensor"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["PotentialSensor"]);
        mo.inputs = new ScilabString(["p"]);
        mo.outputs = new ScilabString(["v"]);
        model.equations = mo;

        var exprs = new ScilabString([""]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"PotentialSensor\",sz(1),sz(2));"]);
        this.x = standard_define([2, 2], model, exprs, list(gr_i, 0));
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["E"]);
        return new BasicBlock(this.x);
    }
    PotentialSensor.prototype.details = function PotentialSensor() {
        return this.x;
    }
}

function POWBLK_f() {

    POWBLK_f.prototype.define = function POWBLK_f() {
        this.in = 1;
        this.a = 1.5;

        var model = scicos_model();
        model.sim = new ScilabString(["powblk"]);
        model.in = new ScilabDouble([-1]);
        model.out = new ScilabDouble([-1]);
        model.rpar = new ScilabDouble([this.a]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.a]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"POWBLK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    POWBLK_f.prototype.details = function POWBLK_f() {
        return this.x;
    }
}
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
function PROD_f() {

    PROD_f.prototype.define = function PROD_f() {

        var model = scicos_model();
        model.sim = list(new ScilabString(["prod"]), new ScilabDouble([2]));
        model.in = new ScilabDouble([-1], [-1]);
        model.out = new ScilabDouble([-1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        this.x = new standard_define(new ScilabDouble([1, 1]), model, new ScilabDouble(), new ScilabString());
        return new RoundBlock(this.x);
    }
    PROD_f.prototype.details = function PROD_f() {
        return this.x;
    }
}

function PuitsP() {

    PuitsP.prototype.define = function PuitsP() {
        this.P0 = 100000;
        this.T0 = 290;
        this.H0 = 100000;
        this.option_temperature = 1;

        var model = scicos_model();
        model.rpar = new ScilabDouble([this.P0], [this.T0], [this.H0], [this.option_temperature]);
        model.sim = new ScilabString(["Puits"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["Puits"]);
        mo.inputs = new ScilabString(["C"]);
        mo.outputs = new ScilabDouble();
        mo.parameters = list(new ScilabString(["P0"], ["T0"], ["H0"], ["option_temperature"]), new ScilabDouble([this.P0], [this.T0], [this.H0], [this.option_temperature]));
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "*"), 1));

        var exprs = new ScilabString([this.P0], [this.T0], [this.H0], [this.option_temperature]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"PuitsP\",sz(1),sz(2));"]);
        this.x = standard_define([2.5, 2], model, exprs, list(gr_i, new ScilabDouble(0)));
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    PuitsP.prototype.details = function PuitsP() {
        return this.x;
    }
}

function QUANT_f() {

    QUANT_f.prototype.define = function QUANT_f() {
        this.pas = 0.1;
        this.meth = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["qzrnd"]);
        model.in = new ScilabDouble([-1]);
        model.out = new ScilabDouble([-1]);
        model.rpar = new ScilabDouble([this.pas]);
        model.ipar = new ScilabDouble([this.meth]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.pas], [this.meth]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"QUANT_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    QUANT_f.prototype.details = function QUANT_f() {
        return this.x;
    }
}

function RAMP() {

    RAMP.prototype.define = function RAMP() {
        this.slope = 0;
        this.iout = 0;
        this.stt = 0;
        this.rpar = [[this.slope], [this.stt], [this.iout]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["ramp"]), new ScilabDouble([4]));
        model.in = new ScilabDouble();
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble(...this.rpar);
        model.blocktype = new ScilabString(["c"]);
        model.nmode = new ScilabDouble([1]);
        model.nzcross = new ScilabDouble([1]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString(...this.rpar);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RAMP\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    RAMP.prototype.details = function RAMP() {
        return this.x;
    }
}

function RAND_m() {

    RAND_m.prototype.define = function RAND_m() {
        this.a = 0;
        this.b = 1;
        this.dt = 0;
        this.flag = 0;
        this.function_name = "rndblk_m";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble();
        model.in2 = new ScilabDouble();
        model.intyp = new ScilabDouble();
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble([parseInt(Math.random() * 10000000)], [0 * this.a]);
        model.rpar = new ScilabDouble([this.a, this.b]);
        model.ipar = new ScilabDouble([this.flag]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp(1)], [this.flag], [sci2exp([this.a])], [sci2exp([this.b])], [sci2exp([parseInt(getData(model.dstate)[0]), parseInt(Math.random() * 10000000)])]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RAND_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    RAND_m.prototype.details = function RAND_m() {
        return this.x;
    }
}

function RATELIMITER() {

    RATELIMITER.prototype.define = function RATELIMITER() {
        this.minp = -1;
        this.maxp = 1;
        this.rpar = [[this.maxp], [this.minp]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["ratelimiter"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble(...this.rpar);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.maxp], [this.minp]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RATELIMITER\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3.5, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    RATELIMITER.prototype.details = function RATELIMITER() {
        return this.x;
    }
}

function READAU_f() {

    READAU_f.prototype.define = function READAU_f() {
        this.frmt = "uc ";
        this.fname = "test.au";
        this.lunit = 0;
        this.N = 20;
        this.M = 1;
        this.tmask = [];
        this.swap = 0;
        this.offset = 1;
        this.outmask = 1;
        this.ievt = 0;
        this.nout = size(this.outmask, "*");
        var model = scicos_model();
        model.sim = list(new ScilabString(["readau"]), new ScilabDouble([2]));
        model.out = new ScilabDouble([this.nout]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([1], [1], [this.lunit], ...zeros(this.N * this.M, 1));
        model.ipar = new ScilabDouble([this.fname.length], ..._str2code(this.frmt), [this.ievt], [this.N], [this.M], [this.swap], [this.offset], ..._str2code(this.fname), [this.outmask]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([this.fname], [this.N], [this.swap]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"READAU_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([5, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    READAU_f.prototype.details = function READAU_f() {
        return this.x;
    }
}
function READC_f() {

    READC_f.prototype.define = function READC_f() {
        this.frmt = "d  ";
        this.fname = "foo";
        this.lunit = 0;
        this.N = 20;
        this.M = 1;
        this.rpar = [];
        this.tmask = 0;
        this.swap = 0;
        this.offset = 1;
        this.outmask = 1;
        this.ievt = 0;
        this.nout = size(this.outmask, "*");

        var ipar = new ScilabDouble([this.fname.length], ..._str2code(this.frmt), [this.ievt], [this.N], [this.M], [this.swap], [this.offset], ..._str2code(this.fname), [this.tmask], [this.outmask]);

        var model = scicos_model();
        model.sim = list(new ScilabString(["readc"]), new ScilabDouble([2]));
        model.out = new ScilabDouble([this.nout]);
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble();
        model.dstate = new ScilabDouble([1], [1], [this.lunit], ...zeros(this.N * this.M, 1));
        model.ipar = ipar;
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString(["[]"], [this.outmask], [this.fname], [this.frmt], [this.M], [this.N], [this.offset], [this.swap]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"READC_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    READC_f.prototype.details = function READC_f() {
        return this.x;
    }
}
function REGISTER() {

    REGISTER.prototype.define = function REGISTER() {
        this.z0 = new ScilabDouble(...zeros(10, 1));

        var model = scicos_model();
        model.sim = list(new ScilabString(["delay4"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = this.z0;
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString(this.z0);

        var gr_i = ["xstringb(orig(1),orig(2),\"REGISTER\",sz(1),sz(2));"];
        this.x = new standard_define(new ScilabDouble([3,2]), model, exprs, gr_i);
        return new BasicBlock(this.x);

    }

    REGISTER.prototype.details = function REGISTER() {
        return this.x;
    }
}
function REGISTER_f () {

	REGISTER_f.prototype.internal = function REGISTER_f() {
		this.z0 = zeros(10,1);
	
		var model = scicos_model();
		model.sim = new ScilabString(["delay"]);
		model.in = new ScilabDouble([1]);
		model.out = new ScilabDouble([1]);
		model.evtin = new ScilabDouble([1]);
		model.dstate= new ScilabDouble(...this.z0);
		model.blocktype = new ScilabString(["d"]);
		model.dep_ut = new ScilabBoolean([false,false]);
	
		var exprs = new ScilabString([this.z0.toString().replace(/,/g, ";")]);
	
		var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"REGISTER_f\",sz(1),sz(2));"]);
		var block=new standard_define(new ScilabDouble([2.5,2.5]),model,exprs,gr_i);
		block.graphics.style = new ScilabString(["REGISTER_f"]);
		block.graphics.in_implicit = new ScilabString(["E"]);  // changed
		block.graphics.out_implicit = new ScilabString(["E"]);
		block.graphics.in_style = new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]);
		block.graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
		block.graphics.in_label = new ScilabString([""]);
		block.graphics.out_label = new ScilabString([""]);
		return block;
	}
}
function RELATIONALOP() {

    RELATIONALOP.prototype.define = function RELATIONALOP() {
        this.ipar = 2;
        this.label = "&lt";

        var model = scicos_model();
        model.sim = list(new ScilabString(["relationalop"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1], [1]);
        model.out = new ScilabDouble([1]);
        model.ipar = new ScilabDouble([this.ipar]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.ipar], [0]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RELATIONALOP\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        this.x.graphics.style = new ScilabString(["fontSize=13;fontStyle=1;displayedLabel=" + label]);
        return new BasicBlock(this.x);
    }
    RELATIONALOP.prototype.details = function RELATIONALOP() {
        return this.x;
    }
}

function RELAY_f() {

    RELAY_f.prototype.define = function RELAY_f() {
        this.i0 = 0;
        this.in1 = [[-1], [-1]];
        this.nin = 2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["relay"]), new ScilabDouble([2]));
        model.in = new ScilabDouble(...this.in1);
        model.out = new ScilabDouble([-1]);
        model.evtin = new ScilabDouble(...ones(this.in1));
        model.dstate = new ScilabDouble([this.i0]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, true]);

        var exprs = new ScilabString([this.nin], [this.i0 + 1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RELAY_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    RELAY_f.prototype.details = function RELAY_f() {
        return this.x;
    }
}

function Resistor() {

    Resistor.prototype.define = function Resistor() {
        this.R = 0.01;

        var model = scicos_model();
        model.rpar = new ScilabDouble([this.R]);
        model.sim = new ScilabString(["resistor"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["Resistor"]);
        mo.inputs = new ScilabString(["p"]);
        mo.outputs = new ScilabString(["n"]);
        mo.parameters = list(new ScilabString(["R"]), list(new ScilabDouble([this.R])));
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "*"), 1));
        model.out = new ScilabDouble(...ones(size(getData(mo.outputs), "*"), 1));

        var exprs = new ScilabString([this.R]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Resistor\",sz(1),sz(2));"]);
        this.x = standard_define([2, 1], model, exprs, list(gr_i, 0));
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }
    Resistor.prototype.details = function Resistor() {
        return this.x;
    }
}

function RFILE_f() {

    RFILE_f.prototype.define = function RFILE_f() {
        this.out = 1;
        this.nout = this.out;
        this.frmt = "(7(e10.3,1x))";
        this.fname = "foo";
        this.lunit = 0;
        this.N = 2;
        this.rpar = [];
        this.tmask = 0;
        this.outmask = 1;

        var ipar = new ScilabDouble([this.fname.length], [this.frmt.length], [0], [this.N], ..._str2code(this.fname), ..._str2code(this.frmt), [this.tmask], [this.outmask]);

        var dstate = new ScilabDouble([1], [1], [this.lunit], ...zeros((this.nout) * this.N, 1));

        var model = scicos_model();
        model.sim = new ScilabString(["readf"]);
        model.out = new ScilabDouble([this.nout]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = dstate;
        model.ipar = ipar;
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp([])], [sci2exp(this.outmask)], [this.fname], [this.frmt], [this.N], [this.out]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RFILE_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    RFILE_f.prototype.details = function RFILE_f() {
        return this.x;
    }
}
function RICC() {

    RICC.prototype.define = function RICC() {
        this.function_name = "ricc_m";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1], [-1], [-1]);
        model.in2 = new ScilabDouble([-1], [-1], [-1]);
        model.intyp = new ScilabDouble([1, 1, 1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-1]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble([1], [1]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)], [sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RICC\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    RICC.prototype.details = function RICC() {
        return this.x;
    }
}

function ROOTCOEF() {

    ROOTCOEF.prototype.define = function ROOTCOEF() {
        this.function_name = "root_coef";
        this.funtyp = 4;

        var model = scicos_model();
        model.sim = list(new ScilabString([this.function_name]), new ScilabDouble([this.funtyp]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([1]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-2]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)], [sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ROOTCOEF\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }
    ROOTCOEF.prototype.details = function ROOTCOEF() {
        return this.x;
    }
}

function SAMPHOLD_m() {

    SAMPHOLD_m.prototype.define = function SAMPHOLD_m() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["samphold4_m"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.evtin = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = [sci2exp(1)];

        var gr_i = ["xstringb(orig(1),orig(2),\"SAMPHOLD_m\",sz(1),sz(2));"];
        this.x = new standard_define(new ScilabDouble([2, 2]), model, label, gr_i);
        return new BasicBlock(this.x);

    }

    SAMPHOLD_m.prototype.details = function SAMPHOLD_m() {
        return this.x;
    }
}
function SampleCLK() {

    SampleCLK.prototype.define = function SampleCLK() {

        var model = scicos_model();
        model.sim = new ScilabString(["sampleclk"]);
        model.evtout = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([1, 0]);
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble([-1]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp(1)], [sci2exp(0)]);

        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, ["xstringb(orig(1),orig(2),\"SampleCLK\",sz(1),sz(2));"]);
        return new BasicBlock(this.x);
    }
    SampleCLK.prototype.details = function SampleCLK() {
        return this.x;
    }
}

function SATURATION() {

    SATURATION.prototype.define = function SATURATION() {
        this.minp = -1;
        this.maxp = 1;
        this.rpar = [[this.maxp], [this.minp]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["satur"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([1]);
        model.nzcross = new ScilabDouble([2]);
        model.nmode = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);
        model.rpar = new ScilabDouble(...this.rpar);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.maxp], [this.minp], [parseInt(getData(model.nmode)[0])]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SATURATION\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    SATURATION.prototype.details = function SATURATION() {
        return this.x;
    }
}

function SAWTOOTH_f() {

    SAWTOOTH_f.prototype.define = function SAWTOOTH_f() {

        var model = scicos_model();
        model.sim = new ScilabString(["sawtth"]);
        model.out = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.dstate = new ScilabDouble([0]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString([" "]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SAWTOOTH_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    SAWTOOTH_f.prototype.details = function SAWTOOTH_f() {
        return this.x;
    }
}
function SCALAR2VECTOR() {

    SCALAR2VECTOR.prototype.define = function SCALAR2VECTOR() {
        this.nout = -1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["scalar2vector"]), new ScilabDouble([4]));
        model.out = new ScilabDouble([this.nout]);
        model.in = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([this.nout]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SCALAR2VECTOR\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    SCALAR2VECTOR.prototype.details = function SCALAR2VECTOR() {
        return this.x;
    }
}

function scifunc_block_m() {

    scifunc_block_m.prototype.define = function scifunc_block_m() {
        this.in1 = 1;
        this.out = 1;
        this.clkin = [];
        this.clkout = [];
        this.x0 = [];
        this.z0 = [];
        this.typ = "c";
        this.auto = [];
        this.rpar = [];
        this.it = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["scifunc"]), new ScilabDouble([3]));
        model.in = new ScilabDouble([this.in1]);
        model.in2 = new ScilabDouble([this.in1]);
        model.intyp = new ScilabDouble([this.it]);
        model.out = new ScilabDouble([this.out]);
        model.out2 = new ScilabDouble([this.out]);
        model.outtyp = new ScilabDouble([this.it]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble([0]);
        model.opar = list();
        model.blocktype = new ScilabString([this.typ]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = list(new ScilabString([sci2exp([this.in1, this.in1])], [sci2exp([this.out, this.out])], [sci2exp(this.clkin)], [sci2exp(this.clkout)], [sci2exp(this.x0)], [sci2exp(this.z0)], [sci2exp(this.rpar)], [sci2exp(this.auto)], [sci2exp(0)]), list(new ScilabString(["y1=sin(u1)"]), new ScilabString([" "]), new ScilabString([" "]), new ScilabString(["y1=sin(u1)"]), new ScilabString([" "]), new ScilabString([" "]), new ScilabString([" "])));

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"scifunc_block_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    scifunc_block_m.prototype.details = function scifunc_block_m() {
        return this.x;
    }
}
function SELECT_m() {

    SELECT_m.prototype.define = function SELECT_m() {
        this.z0 = 1;
        this.nin = 2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["selector_m"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1], [-1]);
        model.in2 = new ScilabDouble([-2], [-2]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.outtyp = new ScilabDouble([1]);
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble();
        model.firing = new ScilabDouble();
        model.evtin = new ScilabDouble(...ones(this.nin, 1));
        model.dstate = new ScilabDouble([this.z0]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(1)], [sci2exp([this.nin])], [sci2exp([this.z0])]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SELECT_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    SELECT_m.prototype.details = function SELECT_m() {
        return this.x;
    }
}

function SHIFT() {

    SHIFT.prototype.define = function SHIFT() {
        this.sgn = [[0],[0]];
        this.OPER = 0;

        var model = scicos_model();
        model.sim = list(new ScilabString(["shift_32_LA"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1]);
        model.out = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.out2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([3]);
        model.outtyp = new ScilabDouble([3]);
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble(...this.sgn);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(3)], [sci2exp(0)], [sci2exp(0)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SHIFT\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    
    SHIFT.prototype.details = function SHIFT() {
        return this.x;
    }
}
function Sigbuilder() {

    Sigbuilder.prototype.define = function Sigbuilder() {
        var scs_m_1 = scicos_diagram({
            version: new ScilabString(["scicos4.2"]),
            props: scicos_params({
                wpar: new ScilabDouble([600, 450, 0, 0, 450, 600]),
                Title: new ScilabString(["Sigbuilder"]),
                tol: new ScilabDouble([0.0001], [0.000001], [Math.pow(10, -10)], [100001], [0], [0], [0]),
                tf: new ScilabDouble([100]),
                context: new ScilabString([" "]),
                void1: new ScilabDouble(),
                options: tlist(["scsopt", "3D", "Background", "Link", "ID", "Cmap"], new ScilabString(["scsopt", "3D", "Background", "Link", "ID", "Cmap"]), list(new ScilabBoolean([true]), new ScilabDouble([33])), new ScilabDouble([8, 1]), new ScilabDouble([1, 5]), list(new ScilabDouble([5, 1]), new ScilabDouble([4, 1])), new ScilabDouble([0.8, 0.8, 0.8])),
                void2: new ScilabDouble(),
                void3: new ScilabDouble(),
                doc: list()
            })
        });
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["CURVE_c"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([329.63473, 606.18517]),
                sz: new ScilabDouble([40, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["3"], ["[0,1,2]"], ["[10,20,-30]"], ["y"], ["n"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble([6]),
                pein: new ScilabDouble([4]),
                peout: new ScilabDouble([2]),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;CURVE_c&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabString(["E"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["CURVE_c"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["curve_c"]), new ScilabDouble([4])),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble(),
                out: new ScilabDouble([1]),
                out2: new ScilabDouble([1]),
                outtyp: new ScilabDouble([1]),
                evtin: new ScilabDouble([1]),
                evtout: new ScilabDouble([1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble([0], [1], [2], [10], [20], [-30]),
                ipar: new ScilabDouble([3], [3], [1]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble([0]),
                dep_ut: new ScilabBoolean([false, true]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["CLKSPLIT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([349.49528, 565.10704]),
                sz: new ScilabDouble([0.3333333, 0.3333333]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble(),
                pout: new ScilabDouble(),
                pein: new ScilabDouble([2]),
                peout: new ScilabDouble([8], [4]),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;CLKSPLIT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabDouble(),
                style: new ScilabString(["CLKSPLIT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["split"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble(),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble(),
                evtin: new ScilabDouble([1]),
                evtout: new ScilabDouble([1], [1]),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabBoolean([-1], [-1]),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["OUT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([398.20616, 616.18517]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble([6]),
                pout: new ScilabDouble(),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;OUT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabDouble(),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                style: new ScilabString(["OUT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["output"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble([-2]),
                intyp: new ScilabDouble([-1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble(),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_block({
            gui: new ScilabString(["CLKOUTV_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([339.49528, 505.10704]),
                sz: new ScilabDouble([20, 30]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble(),
                pein: new ScilabDouble([8]),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;CLKOUTV_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabDouble(),
                style: new ScilabString(["CLKOUTV_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["output"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble(),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble(),
                evtin: new ScilabDouble([1]),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([349.63473], [349.49528]),
            yy: new ScilabDouble([600.47089], [565.10704]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([1, 1, 0]),
            to: new ScilabDouble([3, 1, 1])
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([349.49528], [266.69602], [266.69602], [270.35525], [342.80795], [342.80795], [349.63473]),
            yy: new ScilabDouble([565.10704], [565.10704], [680.99483], [680.99483], [680.99483], [651.89946], [651.89946]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([3, 2, 0]),
            to: new ScilabDouble([1, 1, 1])
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([378.20616], [398.20616]),
            yy: new ScilabDouble([626.18517], [626.18517]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([1, 1, 0]),
            to: new ScilabDouble([5, 1, 1])
        }));
        scs_m_1.objs.push(scicos_link({
            xx: new ScilabDouble([349.49528], [349.49528]),
            yy: new ScilabDouble([565.10704], [535.10704]),
            id: new ScilabString(["drawlink"]),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([5, -1]),
            from: new ScilabDouble([3, 1, 0]),
            to: new ScilabDouble([7, 1, 1])
        }));

        var model = scicos_model({
            sim: new ScilabString(["csuper"]),
            in: new ScilabDouble(),
            in2: new ScilabDouble(),
            intyp: new ScilabDouble(),
            out: new ScilabDouble([-1]),
            out2: new ScilabDouble([1]),
            outtyp: new ScilabDouble([1]),
            evtin: new ScilabDouble(),
            evtout: new ScilabDouble([1]),
            state: new ScilabDouble(),
            dstate: new ScilabDouble(),
            odstate: list(),
            rpar: scs_m_1,
            ipar: new ScilabDouble(),
            opar: list(),
            blocktype: new ScilabString(["h"]),
            firing: new ScilabDouble(),
            dep_ut: new ScilabBoolean([false, false]),
            label: new ScilabString([""]),
            nzcross: new ScilabDouble([0]),
            nmode: new ScilabDouble([0]),
            equations: list()
        });

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Sigbuilder\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }
    Sigbuilder.prototype.details = function Sigbuilder() {
        return this.x;
    }
}
function SIGNUM() {

    SIGNUM.prototype.define = function SIGNUM() {
        this.nu = -1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["signum"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.nu]);
        model.out = new ScilabDouble([this.nu]);
        model.nzcross = new ScilabDouble([this.nu]);
        model.nmode = new ScilabDouble([this.nu]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SIGNUM\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    SIGNUM.prototype.details = function SIGNUM() {
        return this.x;
    }
}

function SINBLK_f() {

    SINBLK_f.prototype.define = function SINBLK_f() {

        var model = scicos_model();
        model.sim = new ScilabString(["sinblk"]);
        model.in = new ScilabDouble([-1]);
        model.out = new ScilabDouble([-1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([" "]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SINBLK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }
    SINBLK_f.prototype.details = function SINBLK_f() {
        return this.x;
    }
}

function SineVoltage() {

    SineVoltage.prototype.define = function SineVoltage() {
        var model = scicos_model();
        model.in = new ScilabDouble([1]);
        model.out = new ScilabDouble([1]);

        this.V = 1;
        this.ph = 0;
        this.frq = 1;
        this.offset = 0;
        this.start = 0;

        model.rpar = new ScilabDouble([this.V], [this.ph], [this.frq], [this.offset], [this.start]);
        model.sim = new ScilabString(["SineVoltage"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["SineVoltage"]);
        mo.inputs = new ScilabString(["p"]);
        mo.outputs = new ScilabString(["n"]);
        mo.parameters = list(new ScilabString(["V"], ["phase"], ["freqHz"], ["offset"], ["startTime"]), list(new ScilabDouble([this.V]), new ScilabDouble([this.ph]), new ScilabDouble([this.frq]), new ScilabDouble([this.offset]), new ScilabDouble([this.start])));
        model.equations = mo;

        var exprs = new ScilabString([this.V], [this.ph], [this.frq], [this.offset], [this.start]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SineVoltage\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        this.x.graphics.in_implicit = new ScilabString(["I"]);
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }

    SineVoltage.prototype.details = function SineVoltage() {
        return this.x;
    }
}
function SOM_f() {

    SOM_f.prototype.define = function SOM_f() {
        this.sgn = [[1], [1], [1]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["sum"]), new ScilabDouble([2]));
        model.in = new ScilabDouble([-1], [-1], [-1]);
        model.out = new ScilabDouble([-1]);
        model.rpar = new ScilabDouble(...this.sgn);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(1)], [sci2exp(this.sgn)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SOM_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    SINBLK_f.prototype.details = function SINBLK_f() {
        return this.x;
    }
}
function SourceP() {

    SourceP.prototype.define = function SourceP() {
        var model = scicos_model();

        this.P0 = 300000;
        this.T0 = 290;
        this.H0 = 100000;
        this.option_temperature = 1;

        model.rpar = new ScilabDouble([this.P0], [this.T0], [this.H0], [this.option_temperature]);
        model.sim = new ScilabString(["Source"]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var mo = new modelica_function();
        mo.model = new ScilabString(["Source"]);
        mo.inputs = new ScilabDouble();
        mo.outputs = new ScilabString(["C"]);
        mo.parameters = list(new ScilabString(["P0"], ["T0"], ["H0"], ["option_temperature"]), new ScilabDouble([this.P0], [this.T0], [this.H0], [this.option_temperature]));
        model.equations = mo;
        model.in = new ScilabDouble(...ones(size(getData(mo.inputs), "*"), 1));
        model.out = new ScilabDouble(...ones(size(getData(mo.outputs), "*"), 1));

        var exprs = new ScilabString([this.P0], [this.T0], [this.H0], [this.option_temperature]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SourceP\",sz(1),sz(2));"]);
        this.x = new standard_define([2.5, 2], model, exprs, list(gr_i, new ScilabDouble([0])));
        this.x.graphics.out_implicit = new ScilabString(["I"]);
        return new BasicBlock(this.x);
    }

    SourceP.prototype.details = function SourceP() {
        return this.x;
    }
}
function SQRT() {

    SQRT.prototype.define = function SQRT() {
        var model = scicos_model();
        model.sim = list(new ScilabString(["mat_sqrt"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var label = new ScilabString([sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SQRT\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, label, gr_i);
        return new BasicBlock(this.x);
    }

    SQRT.prototype.details = function SQRT() {
        return this.x;
    }
}
function SRFLIPFLOP() {

    SRFLIPFLOP.prototype.define = function SRFLIPFLOP() {
        var scs_m = scicos_diagram({
            version: new ScilabString(["scicos4.2"]),
            props: scicos_params({
                wpar: new ScilabDouble([600, 450, 0, 0, 450, 600]),
                Title: new ScilabString(["SRFLIPFLOP"]),
                tol: new ScilabDouble([0.0001], [0.000001], [Math.pow(10, -10)], [100001], [0], [0], [0]),
                tf: new ScilabDouble([100000]),
                context: new ScilabString([" "]),
                void1: new ScilabDouble(),
                options: tlist(["scsopt", "3D", "Background", "Link", "ID", "Cmap"], new ScilabString(["scsopt", "3D", "Background", "Link", "ID", "Cmap"]), list(new ScilabBoolean([true]), new ScilabDouble([33])), new ScilabDouble([8, 1]), new ScilabDouble([1, 5]), list(new ScilabDouble([5, 1]), new ScilabDouble([4, 1])), new ScilabDouble([0.8, 0.8, 0.8])),
                void2: new ScilabDouble(),
                void3: new ScilabDouble(),
                doc: list()
            })
        });
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["LOGIC"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([298.504, 201.45067]),
                sz: new ScilabDouble([40, 40]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["[0 1;1 0;1 0;1 0;0 1;0 1;0 0;0 0]"], ["1"]),
                pin: new ScilabDouble([4], [10], [12]),
                pout: new ScilabDouble([3], [8]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;LOGIC&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"], ["E"], ["E"]),
                out_implicit: new ScilabString(["E"], ["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""], [""], [""]),
                out_label: new ScilabString([""], [""]),
                style: new ScilabString(["LOGIC"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["logic"]), new ScilabDouble([4])),
                in: new ScilabDouble([1], [1], [1]),
                in2: new ScilabDouble([1], [1], [1]),
                intyp: new ScilabDouble([5], [5], [5]),
                out: new ScilabDouble([1], [1]),
                out2: new ScilabDouble([1], [1]),
                outtyp: new ScilabDouble([5], [5]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(int8([0, 1], [1, 0], [1, 0], [1, 0], [0, 1], [0, 1], [0, 0], [0, 0])),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabBoolean([false]),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["DOLLAR_m"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([299.23733, 254.25067]),
                sz: new ScilabDouble([40, 40]),
                flip: new ScilabBoolean([false]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["int8(0)"], ["1"]),
                pin: new ScilabDouble([6]),
                pout: new ScilabDouble([4]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;DOLLAR_m&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["DOLLAR_m"])
            }),
            model: scicos_model({
                sim: list(new ScilabString(["dollar4_m"]), new ScilabDouble([4])),
                in: new ScilabDouble([1]),
                in2: new ScilabDouble([1]),
                intyp: new ScilabDouble([5]),
                out: new ScilabDouble([1]),
                out2: new ScilabDouble([1]),
                outtyp: new ScilabDouble([5]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(int8([0])),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["d"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["SPLIT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([363.03733, 248.584]),
                sz: new ScilabDouble([0.3333333, 0.3333333]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabDouble(),
                pin: new ScilabDouble([3]),
                pout: new ScilabDouble([10], [14], [0]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;SPLIT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabString(["E"], ["E"], ["E"]),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"], ["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                out_label: new ScilabString([""], [""], [""]),
                style: new ScilabString(["SPLIT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["lsplit"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble([1]),
                intyp: new ScilabDouble([1]),
                out: new ScilabDouble([-1], [-1], [-1]),
                out2: new ScilabDouble([1], [1], [1]),
                outtyp: new ScilabDouble([1], [1], [1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble(),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([true, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["OUT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([367.07543, 204.784]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["2"]),
                pin: new ScilabDouble([8]),
                pout: new ScilabDouble(),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;OUT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabDouble(),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                style: new ScilabString(["OUT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["output"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble([1]),
                intyp: new ScilabDouble([-1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble(),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([2]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["IN_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([249.93257, 211.45067]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble([10]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;IN_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabString(["E"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["IN_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["input"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble(),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble([1]),
                outtyp: new ScilabDouble([-1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["IN_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([249.93257, 201.45067]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["2"]),
                pin: new ScilabDouble(),
                pout: new ScilabDouble([12]),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;IN_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabDouble(),
                out_implicit: new ScilabString(["E"]),
                out_style: new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]),
                out_label: new ScilabString([""]),
                style: new ScilabString(["IN_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["input"]),
                in: new ScilabDouble(),
                in2: new ScilabDouble(),
                intyp: new ScilabDouble(),
                out: new ScilabDouble([-1]),
                out2: new ScilabDouble([1]),
                outtyp: new ScilabDouble([-1]),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([2]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));
        scs_m.objs.push(scicos_block({
            gui: new ScilabString(["OUT_f"]),
            graphics: scicos_graphics({
                orig: new ScilabDouble([383.03733, 238.584]),
                sz: new ScilabDouble([20, 20]),
                flip: new ScilabBoolean([true]),
                theta: new ScilabDouble([0]),
                exprs: new ScilabString(["1"]),
                pin: new ScilabDouble([14]),
                pout: new ScilabDouble(),
                pein: new ScilabDouble(),
                peout: new ScilabDouble(),
                gr_i: list(new ScilabString(["xstringb(orig(1),orig(2),&quot;OUT_f&quot;,sz(1),sz(2));"]), new ScilabDouble([8])),
                id: new ScilabString([""]),
                in_implicit: new ScilabString(["E"]),
                out_implicit: new ScilabDouble(),
                in_style: new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]),
                in_label: new ScilabString([""]),
                style: new ScilabString(["OUT_f"])
            }),
            model: scicos_model({
                sim: new ScilabString(["output"]),
                in: new ScilabDouble([-1]),
                in2: new ScilabDouble([1]),
                intyp: new ScilabDouble([-1]),
                out: new ScilabDouble(),
                out2: new ScilabDouble(),
                outtyp: new ScilabDouble(),
                evtin: new ScilabDouble(),
                evtout: new ScilabDouble(),
                state: new ScilabDouble(),
                dstate: new ScilabDouble(),
                odstate: list(),
                rpar: new ScilabDouble(),
                ipar: new ScilabDouble([1]),
                opar: list(),
                blocktype: new ScilabString(["c"]),
                firing: new ScilabDouble(),
                dep_ut: new ScilabBoolean([false, false]),
                label: new ScilabString([""]),
                nzcross: new ScilabDouble([0]),
                nmode: new ScilabDouble([0]),
                equations: list(),
                uid: new ScilabString([count])
            }),
            doc: list(new ScilabString([count++]))
        }));

        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([347.07543], [363.03733], [363.03733]),
            yy: new ScilabDouble([228.11733], [228.11733], [248.584]),
            id: new ScilabString(['drawlink']),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([1, 1, 0]),
            to: new ScilabDouble([5, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([290.6659], [272.104], [272.104], [289.93257]),
            yy: new ScilabDouble([274.25067], [274.25067], [231.45067], [231.45067]),
            id: new ScilabString(['drawlink']),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([2, 1, 0]),
            to: new ScilabDouble([1, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([363.03733], [363.03733], [344.95162]),
            yy: new ScilabDouble([248.584], [274.25067], [274.25067]),
            id: new ScilabString(['drawlink']),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([5, 1, 0]),
            to: new ScilabDouble([2, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([347.07543], [367.07543]),
            yy: new ScilabDouble([214.784], [214.784]),
            id: new ScilabString(['drawlink']),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([1, 2, 0]),
            to: new ScilabDouble([7, 1, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([269.93257], [289.93257]),
            yy: new ScilabDouble([221.45067], [221.45067]),
            id: new ScilabString(['drawlink']),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([9, 1, 0]),
            to: new ScilabDouble([1, 2, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([269.93257], [289.93257]),
            yy: new ScilabDouble([211.45067], [221.45067]),
            id: new ScilabString(['drawlink']),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([11, 1, 0]),
            to: new ScilabDouble([1, 3, 1])
        }));
        scs_m.objs.push(scicos_link({
            xx: new ScilabDouble([363.03733], [383.03733]),
            yy: new ScilabDouble([248.584], [248.584]),
            id: new ScilabString(['drawlink']),
            thick: new ScilabDouble([0, 0]),
            ct: new ScilabDouble([1, 1]),
            from: new ScilabDouble([5, 2, 0]),
            to: new ScilabDouble([13, 1, 1])
        }));

        var model = scicos_model();
        model.sim = new ScilabString(["csuper"]);
        model.in = new ScilabDouble([1], [1]);
        model.in2 = new ScilabDouble([1], [1]);
        model.out = new ScilabDouble([1], [1]);
        model.out2 = new ScilabDouble([1], [1]);
        model.intyp = new ScilabDouble([5, 5]);
        model.outtyp = new ScilabDouble([5, 5]);
        model.blocktype = new ScilabString(["h"]);
        model.firing = new ScilabBoolean([false]);
        model.dep_ut = new ScilabBoolean([true, false]);
        model.rpar = scs_m;

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SRFLIPFLOP\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 3]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }
    SRFLIPFLOP.prototype.details = function SRFLIPFLOP() {
        return this.x;
    }
}
function STEP_FUNCTION() {

    STEP_FUNCTION.prototype.define = function STEP_FUNCTION() {
        var scs_m_1 = scicos_diagram();
        scs_m_1.objs.push(new STEP().internal());
        scs_m_1.objs.push(new OUT_f().internal());
        scs_m_1.objs.push(scicos_link({}));
        scs_m_1.objs.push(scicos_link({}));

        var blk = scs_m_1.objs[0];
        var graphics = blk.graphics;

        var model = blk.model;
        graphics.orig = new ScilabDouble([0, 0]);
        graphics.sz = new ScilabDouble([40, 40]);
        graphics.flip = new ScilabBoolean([true]);
        graphics.pein = new ScilabDouble([4]);
        graphics.peout = new ScilabDouble([4]);
        graphics.pout = new ScilabDouble([3]);
        graphics.out_implicit = new ScilabString(["E"]);
        graphics.in_style = new ScilabDouble();
        graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
        graphics.in_label = new ScilabDouble();
        graphics.out_label = new ScilabString([""]);
        model.evtin = new ScilabDouble([-1]);
        model.evtout = new ScilabDouble([-1]);
        model.uid = new ScilabString([count]);
        blk.graphics = graphics;
        blk.model = model;
        blk.doc = list(new ScilabString([count++]));
        scs_m_1.objs[0] = blk;

        blk = scs_m_1.objs[1];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = new ScilabDouble([80, 10]);
        graphics.sz = new ScilabDouble([20, 20]);
        graphics.flip = new ScilabBoolean([true]);
        graphics.exprs = new ScilabString(["1"]);
        model.ipar = new ScilabDouble([1]);
        graphics.pin = new ScilabDouble([3]);
        model.outtyp = new ScilabDouble();
        model.uid = new ScilabString([count]);
        blk.doc = list(new ScilabString([count++]));
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[1] = blk;

        var lnk = scs_m_1.objs[2];
        lnk.xx = new ScilabDouble([104], [136]);
        lnk.yy = new ScilabDouble([-40], [-60]);
        lnk.from = new ScilabDouble([1, 1, 0]);
        lnk.to = new ScilabDouble([2, 1, 1]);
        scs_m_1.objs[2] = lnk;

        lnk = scs_m_1.objs[3];
        lnk.xx = new ScilabDouble([0], [20], [-20], [-20], [20], [1]);
        lnk.yy = new ScilabDouble([0], [-20], [-20], [60], [60], [1]);
        lnk.ct = new ScilabDouble([5, -1]);
        lnk.from = new ScilabDouble([1, 1, 0]);
        lnk.to = new ScilabDouble([1, 1, 1]);
        scs_m_1.objs[3] = lnk;

        model = scicos_model();
        model.sim = new ScilabString(["csuper"]);
        model.out = new ScilabDouble([1]);
        model.out2 = new ScilabDouble([1]);
        model.outtyp = new ScilabDouble([1]);
        model.rpar = scs_m_1;

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"STEP_FUNCTION\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, new ScilabString(), gr_i);
        return new BasicBlock(this.x);
    }

    STEP_FUNCTION.prototype.details = function STEP_FUNCTION() {
        return this.x;
    }
}
function SUBMAT() {

    SUBMAT.prototype.define = function SUBMAT() {
        var model = scicos_model();

        this.function_name = new ScilabString(["submat"]);

        this.funtyp = new ScilabDouble([4]);
        model.sim = list(this.function_name, this.funtyp);
        model.in = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.outtyp = new ScilabDouble([1]);
        model.evtin = new ScilabDouble();
        model.evtout = new ScilabDouble();
        model.state = new ScilabDouble();
        model.dstate = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble([1], [1], [1], [1]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, false]);

        this.label = new ScilabString([sci2exp(1)], [sci2exp(1)], [sci2exp(1)], [sci2exp(1)], [sci2exp(1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SUBMAT\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2.5, 2]), model, this.label, gr_i);
		
        return new BasicBlock(this.x);
      
    }
    SUBMAT.prototype.details = function SUBMAT() {
        return this.x;
      
    }
}
function SUMMATION() {
    SUMMATION.prototype.define = function SUMMATION() {
        this.sgn = [[1],[-1]];

        var model = scicos_model();
        model.sim = list(new ScilabString(["summation"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1], [-1]);
        model.out = new ScilabDouble([-1]);
        model.in2 = new ScilabDouble([-2], [-2]);
        model.out2 = new ScilabDouble([-2]);
        model.ipar = new ScilabDouble(...this.sgn);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(this.sgn)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SUMMATION\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 3]), model, exprs, gr_i);
        return new Summation(this.x);
    }

    SUMMATION.prototype.details = function SUMMATION() {
        return this.x;
    }
}
function SUM_f() {
	
    SUM_f.prototype.define = function SUM_f() {
        var model = scicos_model();
        
        model.sim = list(new ScilabString(["plusblk"]), new ScilabDouble([2]));
        model.in = new ScilabDouble([-1], [-1], [-1]);
        model.out = new ScilabDouble([-1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SUM_f\",sz(1),sz(2));"]);
        var exprs = new ScilabString();
        
        this.x = new standard_define(new ScilabDouble([1, 1]), model, exprs, gr_i);
        
        return new RoundBlock(this.x);
        
    }

    SUM_f.prototype.details = function SUM_f() {
        return this.x;
        
    }
}
function SWITCH2_m() {

    SWITCH2_m.prototype.define = function SWITCH2_m() {
        this.ipar = [0];
        this.nzz = 1;
        this.rpar = 0;

        var model = scicos_model();
        model.sim = list(new ScilabString(["switch2_m"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([-1], [1], [-1]);
        model.in2 = new ScilabDouble([-2], [1], [-2]);
        model.intyp = new ScilabDouble([1]);
        model.out = new ScilabDouble([-1]);
        model.out2 = new ScilabDouble([-2]);
        model.outtyp = new ScilabDouble([1]);
        model.ipar = new ScilabDouble(this.ipar);
        model.rpar = new ScilabDouble([this.rpar]);
        model.nzcross = new ScilabDouble([this.nzz]);
        model.nmode = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([1], this.ipar, [this.rpar], [this.nzz]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SWITCH2_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    SWITCH2_m.prototype.details = function SWITCH2_m() {
        return this.x;
    }
}
function SWITCH_f() {

    SWITCH_f.prototype.define = function SWITCH_f() {
        this.i0 = 0;
        this.in1 = [[-1], [-1]];
        this.nin = 2;

        var model = scicos_model();
        model.sim = list(new ScilabString(["switchn"]), new ScilabDouble([2]));
        model.in = new ScilabDouble(...this.in1);
        model.out = new ScilabDouble([-1]);
        model.ipar = new ScilabDouble([this.i0]);
        model.blocktype = new ScilabString(["c"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([true, true]);

        var exprs = new ScilabString([this.nin], [this.i0 + 1]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SWITCH_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    SWITCH_f.prototype.details = function SWITCH_f() {
        return this.x;
    }
}
function TANBLK_f() {

    TANBLK_f.prototype.define = function TANBLK_f() {
        this.in1 = -1;

        var model = scicos_model();
        model.sim = new ScilabString(["tanblk"]);
        model.in = new ScilabDouble([this.in1]);
        model.out = new ScilabDouble([this.in1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([true, false]);

        var exprs = new ScilabString([sci2exp(in1)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"TANBLK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    TANBLK_f.prototype.details = function TANBLK_f() {
        return this.x;
    }
}
function TCLSS() {

    TCLSS.prototype.define = function TCLSS() {
        this.x0 = 0;
        this.A = 0;
        this.B = 1;
        this.C = 1;
        this.D = 0;
        this.in1 = 1;
        this.nx = size(this.x0, "*");
        this.out = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["tcslti4"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.in1], [this.nx]);
        model.out = new ScilabDouble([this.out]);
        model.evtin = new ScilabDouble([1]);
        model.state = new ScilabDouble([this.x0]);
        model.rpar = new ScilabDouble([this.A], [this.B], [this.C], [this.D]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString([sci2exp(this.A)], [sci2exp(this.B)], [sci2exp(this.C)], [sci2exp(this.D)], [sci2exp(this.x0)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"TCLSS\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }


    TCLSS.prototype.details = function TCLSS() {
        return this.x;
    }
}
function TEXT_f() {

    TEXT_f.prototype.define = function TEXT_f() {
        this.font = 2;
        this.siz = 1;

        var model = scicos_model();
        model.sim = new ScilabString(["text"]);
        model.rpar = new ScilabString(["Text"]);
        model.ipar = new ScilabDouble([this.font], [this.siz]);

        var exprs = ["Text", this.font, this.siz];

        var graphics = scicos_graphics();
        graphics.orig = new ScilabDouble([0, 0]);
        graphics.sz = new ScilabDouble([2, 1]);
        graphics.exprs = new ScilabString(exprs);
        this.x = mlist(["Text", "graphics", "model", "void", "gui"], new ScilabString(["Text", "graphics", "model", "void", "gui"]), graphics, model, new ScilabString([" "]), new ScilabString(["TEXT_f"]));
        return new TextBlock(this.x);
    }

    TEXT_f.prototype.details = function TEXT_f() {
        return this.x;
    }
}
function TIME_DELAY() {

    TIME_DELAY.prototype.define = function TIME_DELAY() {
        this.nin = 1;
        this.T = 1;
        this.init = 0;
        this.N = 1024;

        var model = scicos_model();
        model.sim = list(new ScilabString(["time_delay"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.nin]);
        model.out = new ScilabDouble([this.nin]);
        model.rpar = new ScilabDouble([this.T, this.init]);
        model.ipar = new ScilabDouble([this.N]);
        model.blocktype = new ScilabString(["x"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var exprs = new ScilabString([this.T], [this.init], [this.N]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"TIME_DELAY\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3.5, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    TIME_DELAY.prototype.details = function TIME_DELAY() {
        return this.x;
    }
}
function TIME_f() {

    TIME_f.prototype.define = function TIME_f() {
        var model = scicos_model();
        model.sim = new ScilabString(["timblk"]);
        model.out = new ScilabDouble([1]);
        model.blocktype = new ScilabString(["c"]);
        model.dep_ut = new ScilabBoolean([false, true]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"TIME_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2, 2]), model, new ScilabDouble(), gr_i);
        return new BasicBlock(this.x);
    }

    TIME_f.prototype.details = function TIME_f() {
        return this.x;
    }
}
function TKSCALE() {

    TKSCALE.prototype.define = function TKSCALE() {
        this.a = -10;
        this.b = 10;
        this.f = 1;

        var model = scicos_model();
        model.sim = list(new ScilabString(["tkscaleblk"]), new ScilabDouble([5]));
        model.out = new ScilabDouble([1]);
        model.evtin = new ScilabDouble([1]);
        model.rpar = new ScilabDouble([this.a], [this.b], [this.f]);
        model.blocktype = new ScilabString(["d"]);
        model.dep_ut = new ScilabBoolean([false, false]);

        var exprs = new ScilabString([sci2exp(this.a)], [sci2exp(this.b)], [sci2exp(this.f)]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"TKSCALE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    TKSCALE.prototype.details = function TKSCALE() {
        return this.x;
    }
}
function TOWS_c() {

    TOWS_c.prototype.define = function TOWS_c() {
        this.nu = -1;
        this.nz = 128;
        this.varnam = "A";
        this.herit = 0;

        var model = scicos_model();
        model.sim = list(new ScilabString(["tows_c"]), new ScilabDouble([4]));
        model.in = new ScilabDouble([this.nu]);
        model.in2 = new ScilabDouble([-2]);
        model.intyp = new ScilabDouble([-1]);
        model.out = new ScilabDouble();
        model.evtin = new ScilabDouble([1]);
        model.evtout = new ScilabDouble();
        model.rpar = new ScilabDouble();
        model.ipar = new ScilabDouble([this.nz], [this.varnam.length], ascii(this.varnam));
        model.blocktype = new ScilabString(["d"]);
        model.firing = new ScilabDouble();
        model.dep_ut = new ScilabBoolean([false, false]);

        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"TOWS_c\",sz(1),sz(2));"]);;

        var exprs = new ScilabString([this.nz], [this.varnam], [this.herit]);
        this.x = new standard_define(new ScilabDouble([4, 2]), model, exprs, gr_i);
        return new BasicBlock(this.x);
    }

    TOWS_c.prototype.details = function TOWS_c() {
        return this.x;
    }
}

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

    ANDLOG_f.prototype.define = function ANDLOG() {
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

        var mo = modelica();
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
        model.rpar = new ScilabDouble([xmin], [xmax], [ymin], [ymax]);
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
}function BPLATFORM() {

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

        var mo = modelica();
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
function CLKFROM () {

    CLKFROM.prototype.define = function CLKFROM() {
    	var model = scicos_model();
    	model.sim = new ScilabString(["clkfrom"]);
    	model.evtout = new ScilabDouble([1]);
    	model.opar=list(new ScilabString(["A"]));
    	model.blocktype = new ScilabString(["d"]);
    	model.firing = new ScilabDouble([-1]);
    	model.dep_ut = new ScilabBoolean([false,false]);
    
    	var exprs = new ScilabString(["A"]);
    	this.x=new standard_define(new ScilabDouble([2,1]),model,exprs,new ScilabString([" "]));
    	this.x.graphics.id = new ScilabString(["From"]);
    	return new BasicBlock(this.x);
    }
    CLKFROM.prototype.details = function CLKFROM() {
        return this.x;
    }
}
function CLKGOTO() {

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

        var exprs = new ScilabString([this.prt]);
        var block = new standard_define(new ScilabDouble([1, 1]), model, exprs, new ScilabString([" "]));
        return block;
    }

    CLKOUTV_f.prototype.details = function CLKOUTV_f() {
        return this.x;
    }
}
function CLKSOMV_f() {

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
function CLOCK_c() {
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
function Counter() {

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

        var mo = modelica();
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

function DEMUX() {

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

        var mo = modelica();
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
function EVTGEN_f() {

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

        var mo = modelica();
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

function GAINBLK() {

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

        var mo = modelica();
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
        var mo = modelica();
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
        this, x.graphics.in_style = new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]);
        this.x.graphics.style = new ScilabString(["IFTHEL_f"]);
        return new BasicBlock(this.x);
    }

    IFTHEL_f.prototype.details = function IFTHEL_f() {
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

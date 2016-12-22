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

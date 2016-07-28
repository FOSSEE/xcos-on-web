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

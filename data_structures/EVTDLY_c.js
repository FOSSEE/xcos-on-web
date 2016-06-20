function EVTDLY_c() {
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
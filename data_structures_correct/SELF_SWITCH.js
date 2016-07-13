function SELF_SWITCH() {

    SELF_SWITCH.prototype.define = function SELF_SWITCH() {
        this.stateOpen = true;

        this.x = scicos_block();
        this.x.gui = new ScilabString(["SELF_SWITCH"]);
        this.x.graphics.sz = new ScilabDouble([2, 2]);
        this.x.graphics.gr_i = new ScilabDouble();
        this.x.graphics.pin = new ScilabDouble([0]);
        this.x.graphics.pout = new ScilabDouble([0]);
        this.x.model.sim = new ScilabString(["csuper"]);
        this.x.model.in = new ScilabDouble([1]);
        this.x.model.out = new ScilabDouble([1]);
        this.x.model.blocktype = new ScilabString(["h"]);
        this.x.model.dep_ut = new ScilabBoolean([false, false]);
        this.x.model.rpar = genSwitchInnerDiagram(this.stateOpen);
        this.x.model.opar = list(new ScilabBoolean([this.stateOpen]));
        this.x.graphics.in_implicit = new ScilabString(["E"]);
        this.x.graphics.in_style = new ScilabString([""]);
        this.x.graphics.out_implicit = new ScilabString(["E"]);
        this.x.graphics.out_style = new ScilabString([""]);
        this.x.graphics.style = new ScilabString(["SELF_SWITCH;SELF_SWITCH_OFF"]);
        return new BasicBlock(this.x);
    }

    SELF_SWITCH.prototype.details = function SELF_SWITCH() {
        return this.x;
    }
}

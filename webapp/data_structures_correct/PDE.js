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


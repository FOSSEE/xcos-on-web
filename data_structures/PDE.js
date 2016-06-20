function PDE () {


	var model = scicos_model();
	model.state=zeros(10,1);
	model.sim=list(new ScilabString(["PDE"]),new ScilabDouble([0]));
	model.in = new ScilabDouble([1],[1],[1],[1],[1]);
	model.out = new ScilabDouble([10],[0]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,true]);

	var params_pde = tlist(["paramspde";"a";"b";"txt_exp";"check_op1";"a1";"b1";"check_op2";"a2";"b2";"check_op3";"a3";"b3";"check_op4";"a4";"b4";"check_op5";"a5";"b5";"check_op6";"a6";"b6";"check_op7";"a7";"b7";"discr_cst";"discr_non_cst";"signe";"rad_automatique";"rad_manuel";"methode";"ord1";"ord2";"ord3";"degre";"nnode";"txt_pas";"CI";"dCI";"CLa";"CLa_exp";"CLb";"CLb_exp";"points"],"","","","0","","IN_EDP1(t)","0","","IN_EDP2(t)","0","","IN_EDP3(t)","0","","IN_EDP4(t)","0","","IN_EDP5(t)","0","","IN_EDP6(t)","0","","IN_EDP7(t)","0","0","0","0","0","0","","","","","","","","","0","IN_CL1(t)","0","IN_CL2(t)","");

	var label = list(params_pde,[],"");

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,3]),model,label,gr_i);
	return new  BasicBlock (this.x)
}

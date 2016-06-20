function PerteDP () {


	var model = scicos_model();
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);

	var L = 10;

	var D = 0.2;

	var lambda = 0.03;

	var z1 = 0;

	var z2 = 0;

	var p_rho = 0;
	model.rpar = new ScilabDouble([L],[D],[lambda],[z1],[z2],[p_rho]);
	model.sim = new ScilabString(["PerteDP"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["PerteDP"]);
	mo.inputs = new ScilabString(["C1"]);
	mo.outputs = new ScilabString(["C2"]);
	mo.parameters=list(["L";"D";"lambda";"z1";"z2";"p_rho"],[L],[D],[lambda],[z1],[z2],[p_rho]);
	model.equations=mo;
	model.in=ones(size(mo.inputs,"*"),1);
	model.out=ones(size(mo.outputs,"*"),1);

	var exprs = [[L.toString()],[D.toString()],[lambda.toString()],[z1.toString()],[z2.toString()],[p_rho.toString()]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,1]),model,exprs,list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I"]);
	this.x.graphics.out_implicit = new ScilabString(["I"]);
}

function NMOS () {


	var model = scicos_model();

	var W = 20.e-6;

	var L = 6.e-6;

	var Beta = 0.041e-3;

	var Vt = 0.8;

	var K2 = 1.144;

	var K5 = 0.7311;

	var dW = -2.5e-6;

	var dL = -1.5e-6;

	var RDS = 1.e+7;
	model.sim = new ScilabString(["NMOS"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["NMOS"]);
	mo.outputs = new ScilabString(["D";"B";"S"]);
	mo.inputs = new ScilabString(["G"]);
	mo.parameters=list(new ScilabString(["W";"L";"Beta";"Vt";"K2";"K5";"dW";"dL";"RDS"]),[W],[L],[Beta],[Vt],[K2],[K5],[dW],[dL],[RDS]);
	model.equations=mo;
	model.in=ones(size(mo.inputs,"*"),1);
	model.out=ones(size(mo.outputs,"*"),1);

	var exprs = [[string(W)],[string(L)],[string(Beta)],[string(Vt)],[string(K2)],[string(K5)],[string(dW)],[string(dL)],[string(RDS)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	this.x.graphics.in_implicit = new ScilabString(["I"]);
	this.x.graphics.out_implicit = new ScilabString(["I";"I";"I"]);
	return new  BasicBlock (this.x)
}

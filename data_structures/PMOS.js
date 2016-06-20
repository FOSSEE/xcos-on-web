function PMOS () {


	var model = scicos_model();

	var W = 50.0e-6;

	var L = 6.0e-6;

	var Beta = 0.0105e-3;

	var Vt = -1;

	var K2 = 0.41;

	var K5 = 0.839;

	var dW = -2.5e-6;

	var dL = -2.1e-6;

	var RDS = 1.e+7;
	model.sim = new ScilabString(["PMOS"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["PMOS"]);
	mo.outputs = new ScilabString(["D";"B";"S"]);
	mo.inputs = new ScilabString(["G"]);
	mo.parameters=list(["W";"L";"Beta";"Vt";"K2";"K5";"dW";"dL";"RDS"],[W],[L],[Beta],[Vt],[K2],[K5],[dW],[dL],[RDS]);
	model.equations=mo;
	model.in=ones(size(mo.inputs,"*"),1);
	model.out=ones(size(mo.outputs,"*"),1);

	var exprs = [[W.toString()],[L.toString()],[Beta.toString()],[Vt.toString()],[K2.toString()],[K5.toString()],[dW.toString()],[dL.toString()],[RDS.toString()]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	this.x.graphics.in_implicit = new ScilabString(["I"]);
	this.x.graphics.out_implicit = new ScilabString(["I";"I";"I"]);
}

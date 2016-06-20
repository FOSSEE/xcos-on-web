function VanneReglante () {


	var model = scicos_model();
	model.in = new ScilabDouble([1],[1]);
	model.out = new ScilabDouble([1]);

	var Cvmax = 8005.42;

	var p_rho = 0;
	model.rpar = new ScilabDouble([Cvmax],[p_rho]);
	model.sim = new ScilabString(["VanneReglante"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["VanneReglante"]);
	mo.inputs = new ScilabString(["C1" "Ouv"]);
	mo.outputs = new ScilabString(["C2"]);
	mo.parameters=list(["Cvmax";"p_rho"],[Cvmax],[p_rho]);
	model.equations=mo;
	model.in=ones(size(mo.inputs,"*"),1);
	model.out=ones(size(mo.outputs,"*"),1);

	var exprs = [[Cvmax.toString()],[p_rho.toString()]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I";"E"]);
	this.x.graphics.out_implicit = new ScilabString(["I"]);
}

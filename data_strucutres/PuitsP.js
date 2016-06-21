function PuitsP () {


	var model = scicos_model();

	var P0 = 100000;

	var T0 = 290;

	var H0 = 100000;

	var option_temperature = 1;
	model.rpar = new ScilabDouble([P0],[T0],[H0],[option_temperature]);
	model.sim = new ScilabString(["Puits"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["Puits"]);
	mo.inputs = new ScilabString(["C"]);
	mo.parameters=list(["P0";"T0";"H0";"option_temperature"],[P0],[T0],[H0],[option_temperature]);
	model.equations=mo;
	model.in=ones(size(mo.inputs,"*"),1);

	var exprs = [[P0.toString()],[T0.toString()],[H0.toString()],[option_temperature.toString()]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2.5,2]),model,exprs,list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I"]);
}

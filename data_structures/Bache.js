function Bache () {


	var in1 = 2;

	var out = 3;

	var model = scicos_model();
	
	model.in = new ScilabDouble(math.transpose(math.range(-1,-in1,-1,true)));
	model.out = new ScilabDouble(math.transpose(math.range(-1,-out,-1,true)));

	var Patm = 1.013E5;

	var A = 1;

	var ze1 = 40;

	var ze2 = 0;

	var zs1 = 40;

	var zs2 = 0;

	var z0 = 30;

	var T0 = 290;

	var p_rho = 0;
	model.rpar = new ScilabDouble([Patm],[A],[ze1],[ze2],[zs1],[zs2],[z0],[T0],[p_rho]);
	model.sim = new ScilabString(["Bache"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["Bache"]);
	mo.inputs = new ScilabString(["Ce1","Ce2"]);
	mo.outputs = new ScilabString(["Cs1","Cs2","yNiveau"]);
	mo.parameters=list(new ScilabString(["Patm"],["A"],["ze1"],["ze2"],["zs1"],["zs2"],["z0"],["T0"],["p_rho"]),new ScilabDouble([Patm],[A],[ze1],[ze2],[zs1],[zs2],[z0],[T0],[p_rho]));
	model.equations=mo;
	model.in=new ScilabDouble(...ones(size(getData(mo.inputs),'*'),1));
	model.out=new ScilabDouble(...ones(size(getData(mo.outputs),'*'),1));

	var exprs = new ScilabString([Patm.toString()],[A.toString()],[ze1.toString()],[ze2.toString()],[zs1.toString()],[zs2.toString()],[z0.toString()],[T0.toString()],[p_rho.toString()]);

	var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Bache\",sz(1),sz(2));"]);
	this.x= new standard_define([2,2],model,exprs,list(gr_i,0));
	this.x.graphics.in_implicit = new ScilabString(["I"],["I"]);
	this.x.graphics.out_implicit = new ScilabString(["I"],["I"],["E"]);
	return new  BasicBlock (this.x)
}

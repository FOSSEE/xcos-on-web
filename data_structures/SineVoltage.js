function SineVoltage () {


	var model = scicos_model();
	model.in = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);

	var V = 1;

	var ph = 0;

	var frq = 1;

	var offset = 0;

	var start = 0;
	model.rpar = new ScilabDouble([V],[ph],[frq],[offset],[start]);
	model.sim = new ScilabString(["SineVoltage"]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var mo = modelica();
	mo.model = new ScilabString(["SineVoltage"]);
	mo.inputs = new ScilabString(["p"]);
	mo.outputs = new ScilabString(["n"]);
	mo.parameters=list(new ScilabString(["V";"phase";"freqHz";"offset";"startTime"]),list(V,ph,frq,offset,start));
	model.equations=mo;

	var exprs = [[string(V)],[string(ph)],[string(frq)],[string(offset)],[string(start)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	this.x.graphics.in_implicit = new ScilabString(["I"]);
	this.x.graphics.out_implicit = new ScilabString(["I"]);
	return new  BasicBlock (this.x)
}

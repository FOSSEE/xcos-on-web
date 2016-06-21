function WRITEC_f () {


	var in1 = 1;

	var nin = sum(in1);

	var frmt = "c, ";

	var fname = "foo";

	var swap = 0;

	var lunit = 0;

	var N = 2;

	var model = scicos_model();
	model.sim=list(new ScilabString(["writec"]),new ScilabDouble([2]));
	model.in1.push(new ScilabDouble([in1]));
	model.evtin = new ScilabDouble([1]);
	model.dstate = new ScilabDouble([-1],[lunit],[zeros((nin+1)*N,1)]);
	model.ipar = new ScilabDouble([length(fname)],[_str2code(frmt)],[N],[swap],[_str2code(fname)]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[sci2exp(in1)],[fname],[frmt],[string(N)string(swap)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([4,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

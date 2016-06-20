function WFILE_f () {


	var in = 1;

	var nin = sum(in);

	var frmt = "(7(e10.3,1x))";

	var fname = "foo";

	var lunit = 0;

	var N = 2;

	var model = scicos_model();
	model.sim = new ScilabString(["writef"]);
	model.in=new ScilabDouble([in]);
	model.evtin = new ScilabDouble([1]);
	model.dstate = new ScilabDouble([-1],[lunit],[zeros((nin+1)*N,1)]);
	model.ipar = new ScilabDouble([length(fname)],[length(frmt)],[0],[N],[_str2code(fname)],[_str2code(frmt)]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[sci2exp(in)],[fname],[frmt],[string(N)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

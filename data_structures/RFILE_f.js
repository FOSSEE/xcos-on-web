function RFILE_f () {


	var out = 1;

	var nout = sum(out);

	var frmt = "(7(e10.3,1x))";

	var fname = "foo";

	var lunit = 0;

	var N = 2;

	var rpar = [];

	var tmask = 0;

	var outmask = 1;

	var ipar = [[,length(fname)],[length(frmt)],[0],[N],[,_str2code(fname)],[_str2code(frmt)],[,tmask],[outmask,]];

	var dstate = [[1],[,1],[,lunit],[,zeros((nout)*N,,1)]];

	var model = scicos_model();
	model.sim = new ScilabString(["readf"]);
	model.out=nout;
	model.evtin = new ScilabDouble([1]);
	model.dstate=new ScilabDouble([dstate]);
	model.ipar = new ScilabDouble([,length(fname)],[length(frmt)],[0],[N],[,_str2code(fname)],[_str2code(frmt)],[,tmask],[outmask,]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[sci2exp([])],[sci2exp(outmask)],[fname],[frmt],[string(N)],[sci2exp(out)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

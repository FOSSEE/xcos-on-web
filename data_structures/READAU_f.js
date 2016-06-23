function READAU_f () {


	var frmt = "uc,";

	var fname = "test.au";

	var lunit = 0;

	var N = 20;

	var M = 1;

	var tmask = [];

	var swap = 0;

	var offset = 1;

	var outmask = 1;

	var ievt = 0;

	var nout = size(outmask,"*");

	var model = scicos_model();
	model.sim=list(new ScilabString(["readau"]),new ScilabDouble([2]));
	model.out=nout;
	model.evtin = new ScilabDouble([1]);
	model.dstate = new ScilabDouble([1],[1],[lunit],[zeros(N*M,1)]);
	model.ipar = new ScilabDouble([length(fname)],[_str2code(frmt)],[ievt],[N],[M],[swap],[offset],[_str2code(fname)],[tmask],[outmask]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[fname],[string(N)],[string(swap)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([5,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

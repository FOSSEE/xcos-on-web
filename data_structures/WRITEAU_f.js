function WRITEAU_f () {


	var in = 1;

	var nin = sum(in);

	var frmt = "uc,";

	var fname = "/dev/audio";

	var swap = 0;

	var lunit = 0;

	var N = 2;

	var model = scicos_model();
	model.sim=list(new ScilabString(["writeau"]),new ScilabDouble([2]));
	model.in=new ScilabDouble([in]);
	model.evtin = new ScilabDouble([1]);
	model.dstate = new ScilabDouble([-1],[lunit],[zeros((nin+1)*N,1)]);
	model.ipar = new ScilabDouble([length(fname)],[_str2code(frmt)],[N],[swap],[_str2code(fname)]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [string(N)string(swap)];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([4,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

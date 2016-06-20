function CEVENTSCOPE () {


	var nclock = 1;

	var win = -1;

	var clrs = [[1],[3],[5],[7],[9],[11],[13],[15]];

	var wdim = [[600],[400]];

	var wpos = [[-1],[-1]];

	var per = 30;

	var model = scicos_model();
	model.sim=list(new ScilabString(["cevscpe"]),new ScilabDouble([4]));
	model.evtin = new ScilabDouble([1]);
	model.rpar=new ScilabDouble([per]);
	model.ipar = new ScilabDouble([win],[1],[...colon_operator(clrs,nclock)],[wpos(,)],[...wdim]);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([false,false]);

	var exprs = [[sci2exp(nclock);strcat(sci2exp(clrs(nclock))," ")],[string(win)],[sci2exp([])],[sci2exp(wdim)],[string(per)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

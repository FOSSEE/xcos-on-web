function CURV_f () {


	var xx = [[0],[1],[2]];

	var yy = [[-5],[5],[0]];

	var rect = [0,-5,2,5];

	var axisdata = [[2],[10],[2],[10]];

	var ipar = [[size(xx,1)],[...axisdata]];

	var rpar = [[xx],[yy],[...rect]];

	var model = scicos_model();
	model.sim = new ScilabString(["intplt"]);
	model.in1 = new ScilabDouble();
	model.out = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([xx],[yy],[...rect]);
	model.ipar = new ScilabDouble([size(xx,1)],[...axisdata]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,true]);

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,[],gr_i);
	return new BasicBlock(this.x)
}

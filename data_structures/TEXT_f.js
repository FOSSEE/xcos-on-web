function TEXT_f () {


	var font = 2;

	var siz = 1;

	var model = scicos_model();
	model.sim = new ScilabString(["text"]);
	model.rpar = new ScilabString(["Text"]);
	model.ipar = new ScilabDouble([font],[siz]);

	var exprs = [["Text"],[string(font)],[,string(siz)]];

	var graphics = scicos_graphics();
	graphics.orig = new ScilabDouble([0,0]);
	graphics.sz = new ScilabDouble([2,1]);
	graphics.exprs=new ScilabString([exprs]);
	this.x=mlist(new ScilabString(["Text","graphics","model","void","gui"]),graphics,model,new ScilabString([" "]),new ScilabString(["TEXT_f"]));
	return new  TextBlock (this.x)
}

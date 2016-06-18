function BARXY () {


	var model = scicos_model();

	var xmin = -15;

	var xmax = 15;

	var ymin = -15;

	var ymax = 15;
	model.sim=list("BARXY_sim",,5);
	model.blocktype = new ScilabString(["d"]);
	model.dep_ut = new ScilabBoolean([true,false]);
	model.in = new ScilabDouble([-1],[-1]);
	model.intyp = new ScilabDouble([1]);
	model.out = new ScilabDouble();
	model.evtin = new ScilabDouble([1]);
	model.rpar = new ScilabDouble([xmin,],[,xmax,],[,ymin,],[,ymax]);
	model.ipar = new ScilabDouble([1]);
	this.x=new standard_define(new ScilabDouble([2,2]),model,[],[]);
	this.x.graphics.in_implicit = new ScilabString(["E",,"E"]);
	this.x.graphics.out_implicit = new ScilabDouble();
	this.x.graphics.exprs = new ScilabString(["-15";"15";"-15";"15";"1"]);
}

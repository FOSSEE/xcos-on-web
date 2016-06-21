function TOWS_c () {


	var nu = -1;

	var nz = 128;

	var varnam = "A";

	var herit = 0;

	var model = scicos_model();
	model.sim=list("tows_c",,4);
	model.in = new ScilabDouble([nu]);
	model.in2 = new ScilabDouble([-2]);
	model.intyp = new ScilabDouble([-1]);
	model.out = new ScilabDouble();
	model.evtin = new ScilabDouble([1]);
	model.evtout = new ScilabDouble();
	model.rpar = new ScilabDouble();
	model.ipar = new ScilabDouble([nz],[,length(varnam)],[,ascii(varnam)']);
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([false,false]);

	var gr_i = [];

	var exprs = [[nz.toString()],[,varnam.toString()],[,herit.toString()]];
	this.x=new standard_define(new ScilabDouble([4,2]),,model,,exprs,,gr_i);
}

function scifunc_block_m () {


	var in = 1;

	var out = 1;

	var clkin = [];

	var clkout = [];

	var x0 = [];

	var z0 = [];

	var typ = "c";

	var auto = [];

	var rpar = [];

	var it = 1;

	var model = scicos_model();
	model.sim=list(new ScilabString(["scifunc"]),new ScilabDouble([3]));
	model.in=new ScilabDouble([in]);
	model.in2.push(new ScilabDouble([in]));
	model.intyp=new ScilabDouble([it]);
	model.out=new ScilabDouble([out]);
	model.out2.push(new ScilabDouble([out]));
	model.outtyp=new ScilabDouble([it]);
	model.evtin=clkin;
	model.evtout=clkout;
	model.state=x0;
	model.dstate=z0;
	model.rpar=rpar;
	model.ipar = new ScilabDouble([0]);
	model.opar=list();
	model.blocktype=new ScilabString([typ]);
	model.firing=auto;
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = list([sci2exp([in,in])],[sci2exp([out,out])],[sci2exp(clkin)],[sci2exp(clkout);
	strcat(sci2exp(x0));strcat(sci2exp(z0));

	var strcat(sci2exp(rpar));sci2exp(auto);sci2exp(0)],list("y1 = sin(u1)"," "," ","y1=sin(u1)"," "," "," "));

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([4,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

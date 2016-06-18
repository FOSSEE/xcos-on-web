function DELAYV_f () {


	var nin = 1;

	var z0 = zeros(11,1);

	var zz0 = ...colon_operator(z0,1,$-1);

	var T = 1;

	var model = scicos_model();
	model.sim=list("delayv",1);
	model.in = new ScilabDouble([nin],[1]);
	model.out=new ScilabDouble([nin]);
	model.evtin = new ScilabDouble([1]);
	model.evtout = new ScilabDouble([1],[1]);
	model.dstate=z0;
	model.rpar=T/(size(zz0,"*"));
	model.blocktype = new ScilabString(["d"]);
	model.firing = new ScilabDouble([0,-1]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[nin....colon_operator(toString,);strcat(z0(1,$-1.toString()),";")],[T.toString()]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
}

function TCLSS () {


	var x0 = [0],[A=0],[B=1],[C=1],[D=0];

	var in = 1;

	var nx = size(x0,"*");

	var out = 1;

	var model = scicos_model();
	model.sim=list("tcslti4",4);
	model.in = new ScilabDouble([in],[nx]);
	model.out=new ScilabDouble([out]);
	model.evtin = new ScilabDouble([1]);
	model.state=new ScilabDouble([x0]);
	model.rpar = new ScilabDouble([...colon_operator(A,:)],[...B],[C(,)],[...D]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,true]);

	var exprs = [[strcat(sci2exp(A))],[strcat(sci2exp(B))],[strcat(sci2exp(C))],[strcat(sci2exp(D))],[strcat(sci2exp(x0))]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
}

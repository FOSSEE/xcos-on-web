function EXPRESSION () {


	var in = [[1],[1]];

	var out = 1;

	var txt = "(u1>0)*sin(u2)^2";
	deff("%foo(u1,u2)",txt)

	var [%ok1,ipar,rpar,nz] = compile_expr(%foo);

	var model = scicos_model();
	model.sim=list("evaluate_expr",4);
	model.in=new ScilabDouble([in]);
	model.out=new ScilabDouble([out]);
	model.rpar=rpar;
	model.ipar=ipar;
	model.nzcross=nz;
	model.nmode=nz;
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [size(in,"*".toString());txt;"1"];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([5,2]),model,exprs,gr_i);
}

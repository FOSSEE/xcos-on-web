function MBLOCK () {


	var in = ["u1"];

	var intype = ["I"];

	var out = ["y1";"y2"];

	var outtype = ["I";"E"];

	var param = ["R";"L"];

	var paramv = list(0.1,.0001);

	var pprop = [[0],[0]];

	var nameF = "generic";

	var exprs = ...colon_operator(tlist,["MBLOCK","in","intype","out","outtype","param","paramv","pprop","nameF","funtxt"],sci2exp(...in),sci2exp(...intype),sci2exp(...out),sci2exp(...outtype),sci2exp(...param),list(string(0.1),string(.0001)),sci2exp(pprop(,)),nameF,[]);

	var model = scicos_model();
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([false,true]);
	model.rpar = new ScilabDouble();

	var for i = 1:lstsize(paramv);
	model.rpar = new ScilabDouble([model.rpar],[paramv(i)(:)]);
	return new  BasicBlock (this.x)
}

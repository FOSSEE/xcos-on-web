function BIGSOM_f () {
	
	switch(arguments[0])
	{
		case "define":
				var sgn = [[1],[1]];

				var model = scicos_model();
				model.sim=list(new ScilabString(["sum"]),new ScilabDouble([2]));
				model.in = new ScilabDouble([-1],[-1]);
				model.out = new ScilabDouble([-1]);
				model.rpar=new ScilabDouble(...sgn);
				model.blocktype = new ScilabString(["c"]);
				model.dep_ut = new ScilabBoolean([true,false]);
		
				var exprs = new ScilabString([sci2exp(sgn)]);
			
				var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"BIGSOM_f\",sz(1),sz(2));"]);
				this.x=new standard_define(new ScilabDouble([2,3]),model,exprs,gr_i);
				return new  BigSom(this.x);
			
		case "details":
			return this.x;
	}
}

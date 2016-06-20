function AFFICH_m () {
	switch(arguments[0])
	{
		case "define":
			var font = 1;
			var fontsize = 1;
			var colr = 1;
			var nt = 5;
			var nd = 1;
			var in1 = [1,1];
		
			var model = scicos_model();
			model.sim=list(new ScilabString(["affich2"]),new ScilabDouble([4]));
			model.in=new ScilabDouble([in1[0]]);
			model.in2= new ScilabDouble([in1[1]]);
			model.evtin = new ScilabDouble([1]);
			model.dstate = new ScilabDouble([-1],[0],[0],[1],[1],[0],...zeros(in1[0]*in1[1],1));
			model.ipar = new ScilabDouble([font],[fontsize],[colr],[1000],[nt],[nd],[in1[0]]);
			model.blocktype = new ScilabString(["c"]);
			model.firing = new ScilabDouble();
			model.dep_ut = new ScilabBoolean([true,false]);
			model.label = new ScilabString([""]);
			var exprs = new ScilabString([sci2exp([parseFloat(...getData(model.in)),parseFloat(...getData(model.in2))])],[font.toString()],[fontsize.toString()],[colr.toString()],[nt.toString()],[nd.toString()],[(0).toString()]);
		
			 var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"AFFICH_m\",sz(1),sz(2));"]);
			this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
			this.x.graphics.style = new ScilabString(["AFFICH_m"]);
			return new  AfficheBlock (this.x);
		case "details":
			return this.x;
	}
}

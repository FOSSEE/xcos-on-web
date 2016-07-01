function GAINBLK () {

	GAINBLK.prototype.define = function GAINBLK() {
	this.gain = 1;
	this.in1 = -1;
	this.out=-1;
	this.in2 = -2;
	this.out2=-2;

	var model = scicos_model();
	model.sim=list(new ScilabString(["gainblk"]),new ScilabDouble([4]));
	model.in=new ScilabDouble([this.in1]);
	model.out=new ScilabDouble([this.out]);
	model.in2=new ScilabDouble([this.in2]);
	model.out2= new ScilabDouble([this.out2]);
	model.rpar=new ScilabDouble([this.gain]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = new ScilabString([sci2exp(this.gain)]);

	var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GAINBLK\",sz(1),sz(2));"]);
	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
	return new BasicBlock(this.x);
	}
	GAINBLK.prototype.details = function GAINBLK() {
        return this.x;
    }
}


function CEVENTSCOPE () {

    CEVENTSCOPE.prototype.define = function CEVENTSCOPE() {
    	this.nclock = 1;
    	this.win = -1;    
    	this.clrs = [[1],[3],[5],[7],[9],[11],[13],[15]];
    	this.wdim = [[600],[400]];
    	this.wpos = [[-1],[-1]];
    	this.per = 30;
    
    	var model = scicos_model();
    	model.sim=list(new ScilabString(["cevscpe"]),new ScilabDouble([4]));
    	model.evtin = new ScilabDouble([1]);
    	model.rpar=new ScilabDouble([this.per]);
    	model.ipar = new ScilabDouble([this.win],[1],this.clrs[this.nclock-1],...this.wpos,...this.wdim);
    	model.blocktype = new ScilabString(["d"]);
    	model.dep_ut = new ScilabBoolean([false,false]);
    
    	var exprs = new ScilabString([sci2exp(this.nclock)],this.clrs[this.nclock-1],[this.win],[sci2exp([])],[sci2exp(this.wdim)],[this.per]);
    	var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CEVENTSCOPE\",sz(1),sz(2));"]);
    	this.x=new standard_define(new ScilabDouble([2,2]),model,exprs,gr_i);
    	return new BasicBlock(this.x);
    }
    CEVENTSCOPE.prototype.details = function CEVENTSCOPE() {
        return this.x;
    }
}

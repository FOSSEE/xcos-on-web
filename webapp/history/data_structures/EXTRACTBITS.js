function EXTRACTBITS () {


	var numb = [];

	var model = scicos_model();
	model.sim=list(new ScilabString(["extract_bit_32_UH0"]),new ScilabDouble([4]));
	model.in1 = new ScilabDouble([1]);
	model.in2 = new ScilabDouble([1]);
	model.out = new ScilabDouble([1]);
	model.out2 = new ScilabDouble([1]);
	model.intyp = new ScilabDouble([3]);
	model.outtyp = new ScilabDouble([3]);
	model.ipar = new ScilabDouble([0,numb]);
	model.blocktype = new ScilabString(["c"]);
	model.dep_ut = new ScilabBoolean([true,false]);

	var exprs = [[sci2exp(3)],[sci2exp(1)],[sci2exp(0)],[sci2exp(0)]];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([4,2]),model,exprs,gr_i);
	return new BasicBlock(this.x)
}

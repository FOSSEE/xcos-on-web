function CVS () {


	var ModelName = "CVS";

	var PrametersValue = [];

	var ParametersName = [];

	var model = scicos_model();

	var Typein = [];

	var Typeout = [];

	var MI = [];

	var MO = [];

	var P = [[2,50,1,0],[,70,98,2,0],[70,2,-2,0]];

	var PortName = ["vin";"p";"n"];

	var for i = 1:size(P,"r");

	var if P(i,3) = =1, then;
	Typein = new ScilabDouble([Typein;,"E"]);
	MI = new ScilabDouble([MI],[PortName(i)]);
}

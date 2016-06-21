function Gyrator () {


	var ModelName = "Gyrator";

	var PrametersValue = [[1],[1]];

	var ParametersName = ["G1";"G2"];

	var model = scicos_model();

	var Typein = [];

	var Typeout = [];

	var MI = [];

	var MO = [];

	var P = [[2.5,90,2,0],[2.5,10,2,0],[97.5,90,-2,0],[97.5,10,-2,0]];

	var PortName = ["p1";"n1";"p2";"n2"];

	var for i = 1:size(P,"r");

	var if P(i,3) = =1, then;
	Typein = new ScilabDouble([Typein;,"E"]);
	MI = new ScilabDouble([MI],[PortName(i)]);
	return new BasicBlock(this.x)
}

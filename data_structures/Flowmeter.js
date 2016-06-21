function Flowmeter () {


	var ModelName = "Flowmeter";

	var PrametersValue = 1;

	var ParametersName = "Qini";

	var model = scicos_model();

	var Typein = [];

	var Typeout = [];

	var MI = [];

	var MO = [];

	var P = [[50,105,-1,90],[0,10,2,0],[101,10,-2,0]];

	var PortName = ["Mesure";"C1";"C2"];

	var for i = 1:size(P,"r");

	var if P(i,3) = =1, then;
	Typein = new ScilabDouble([Typein;,"E"]);
	MI = new ScilabDouble([MI],[PortName(i)]);
	return new BasicBlock(this.x)
}

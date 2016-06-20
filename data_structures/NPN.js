function NPN () {


	var ModelName = "NPN";

	var PrametersValue = [[50],[0.1],[0],[0.02],[1.200D-10],[5.000D-09],[1.000D-12],[4.000D-13],[5.000D-13],[0.8],[0.4],[0.8],[0.333],[1.000D-15],[1.000D-15],[0.02585],[40]];

	var ParametersName = ["Bf";"Br";"Is";"Vak";"Tauf";"Taur";"Ccs";"Cje";"Cjc";"Phie";"Me";"Phic";"Mc";"Gbc";"Gbe";"Vt";"EMinMax"];

	var model = scicos_model();

	var Typein = [];

	var Typeout = [];

	var MI = [];

	var MO = [];

	var P = [[100,90,-2,0],[,0,50,2,0],[,100,10,-2,0]];

	var PortName = ["C";"B";"E"];

	var for i = 1:size(P,"r");

	var if P(i,3) = =1, then;
	Typein = new ScilabDouble([Typein;,"E"]);
	MI = new ScilabDouble([MI],[PortName(i)]);
	return new  BasicBlock (this.x)
}

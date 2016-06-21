function BOUNCEXY () {


	var win = -1;

	var imode = 1;

	var clrs = [[1],[2]];

	var siz = [[1],[1]];

	var xmin = -5;

	var xmax = 5;

	var ymin = 0;

	var ymax = 15;

	var model = scicos_model();
	model.sim=list("bouncexy",4);
	model.in = new ScilabDouble([-1],[-1]);
	model.in2 = new ScilabDouble([1],[1]);
	model.intyp = new ScilabDouble([1],[1]);
	model.evtin = new ScilabDouble([1]);

	var z = [];

	var for i = 1:size(clrs,"*");

	var z(6*(i-1)+1) = 0;

	var z(6*(i-1)+2) = 0;

	var z(6*(i-1)+3) = 2*siz(i);

	var z(6*(i-1)+4) = 2*siz(i);

	var z(6*(i-1)+5) = 0.000;

	var z(6*(i-1)+6) = 64.0*360.000;
}

function PULSE_SC () {


	var scs_m_1 = scicos_diagram(version="scicos4.2",props=scicos_params(wpar=[-162.7581,435.54369,67.607292,416.67644,827,479,0,15,827,480,715,167,1.4],Title=["SuperBlock","/home/fady/Scicos_examples/"],tol=[0.0001;0.000001;1.000D-10;100001;0;0;0],tf=10,context=["E2=E+W/100*F";
	"if (W<0 | W>100) then error(''Width must be between 0 and 100'');end";

	var "if (E2 > = F),then,error,(''Offset,must,be,lower,than,(frequency*(1-Width/100))'');,end"],void1=[],options=tlist(["scsopt","3D","Background","Link","ID","Cmap"],list(%t,33),[8,1],[1,5],list([5,1],[4,1]),[0.8,0.8,0.8]),void2=[],void3=[],doc=list()));
	scs_m_1.objs.push(scicos_block(gui="CONST_m",graphics=scicos_graphics(orig=[30.801202,158.91733],sz=[40,40],flip=%t,theta=0,exprs="A",pin=[],pout=5,pein=[],peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim=list("cstblk4_m",4),in=[],in2=[],intyp=1,out=1,out2=1,outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(1),blocktype="d",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m_1.objs.push(scicos_block(gui="Ground_g",graphics=scicos_graphics(orig=[31.534535,215.384],sz=[40,40],flip=%t,theta=0,exprs=[],pin=[],pout=4,pein=[],peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim=list("cstblk4_m",4),in=[],in2=[],intyp=1,out=1,out2=1,outtyp=-1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(0),blocktype="d",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m_1.objs.push(scicos_block(gui="SELECT_m",graphics=scicos_graphics(orig=[106.00652,186.09381],sz=[40,40],flip=%t,theta=0,exprs=["-1";"2";"1"],pin=[4;5],pout=11,pein=[9;8],peout=[],gr_i=[],id="",in_implicit=["E";"E"],out_implicit="E"),model=scicos_model(sim=list("selector_m",4),in=[-1;-1],in2=[-2;-2],intyp=[-1;-1],out=-1,out2=-2,outtyp=-1,evtin=[1;1],evtout=[],state=[],dstate=1,odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[%t,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m_1.objs.push(scicos_link({xx: new ScilabDouble([80.105964),yy: new ScilabDouble([235.384),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([2,1,0]),to: new ScilabDouble([3,1,1])}));
	scs_m_1.objs.push(scicos_link({xx: new ScilabDouble([79.372631),yy: new ScilabDouble([178.91733),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([1,1,0]),to: new ScilabDouble([3,2,1])}));
	scs_m_1.objs.push(scicos_block(gui="SampleCLK",graphics=scicos_graphics(orig=[82.349744,274.21741],sz=[60,40],flip=%t,theta=0,exprs=["F";"E2"],pin=[],pout=[],pein=[],peout=9,gr_i=[],id="",in_implicit=[],out_implicit=[]),model=scicos_model(sim="sampleclk",in=[],in2=[],intyp=1,out=[],out2=[],outtyp=1,evtin=[],evtout=1,state=[],dstate=[],odstate=list(),rpar=[1;0.4],ipar=[],opar=list(),blocktype="d",firing=-1,dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m_1.objs.push(scicos_block(gui="SampleCLK",graphics=scicos_graphics(orig=[160.48879,274.21741],sz=[60,40],flip=%t,theta=0,exprs=["F";"E"],pin=[],pout=[],pein=[],peout=8,gr_i=[],id="",in_implicit=[],out_implicit=[]),model=scicos_model(sim="sampleclk",in=[],in2=[],intyp=1,out=[],out2=[],outtyp=1,evtin=[],evtout=1,state=[],dstate=[],odstate=list(),rpar=[1;0.1],ipar=[],opar=list(),blocktype="d",firing=-1,dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m_1.objs.push(scicos_link({xx: new ScilabDouble([190.48879),yy: new ScilabDouble([274.21741),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([7,1,0]),to: new ScilabDouble([3,2,1])}));
	scs_m_1.objs.push(scicos_link({xx: new ScilabDouble([112.34974),yy: new ScilabDouble([274.21741),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([6,1,0]),to: new ScilabDouble([3,1,1])}));
	scs_m_1.objs.push(scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[174.57795,196.09381],sz=[20,20],flip=%t,theta=0,exprs="1",pin=11,pout=[],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in=-1,in2=-2,intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m_1.objs.push(scicos_link({xx: new ScilabDouble([154.57795),yy: new ScilabDouble([206.09381),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([3,1,0]),to: new ScilabDouble([10,1,1])}));

	var model = scicos_model();
	model.sim = new ScilabString(["csuper"]);
	model.in = new ScilabDouble();
	model.in2 = new ScilabDouble();
	model.intyp = new ScilabDouble([1]);
	model.out = new ScilabDouble([-1]);
	model.out2 = new ScilabDouble([-2]);
	model.outtyp = new ScilabDouble([-1]);
	model.evtin = new ScilabDouble();
	model.evtout = new ScilabDouble();
	model.state = new ScilabDouble();
	model.dstate = new ScilabDouble();
	model.odstate=list();
	model.rpar=scs_m_1;
	model.ipar = new ScilabDouble([1]);
	model.opar=list();
	model.blocktype = new ScilabString(["h"]);
	model.firing = new ScilabDouble();
	model.dep_ut = new ScilabBoolean([false,false]);
	model.label = new ScilabString([""]);
	model.nzcross = new ScilabDouble([0]);
	model.nmode = new ScilabDouble([0]);
	model.equations=list();

	var E = 0.1;

	var W = 30;

	var F = 1;

	var A = 1;

	var exprs = [sci2exp(E)sci2exp(W)sci2exp(F)sci2exp(A)];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,exprs,gr_i);
	return new  BasicBlock (this.x)
}

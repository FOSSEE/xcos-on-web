function DLATCH () {


	var scs_m = scicos_diagram(version="scicos4.2",props=scicos_params(wpar=[600,450,0,0,600,450],Title=["DLATCH"],tol=[0.0001,0.000001,1.000E-10,100001,0,0],tf=100000,context=" ",void1=[],options=tlist(["scsopt","3D","Background","Link","ID","Cmap"],list(%t,33),[8,1],[1,5],list([5,1],[4,1]),[0.8,0.8,0.8]),void2=[],void3=[],doc=list()));
	scs_m.objs.push(scicos_block(gui="CONST_m",graphics=scicos_graphics(orig=[109.62561,263.44465],sz=[20;20],flip=%t,theta=0,exprs="int8(0)",pin=[],pout=7,pein=[],peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim=list("cstblk4_m",4),in1=[],in2=[],intyp=1,out=1,out2=1,outtyp=5,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(new ScilabInteger([0])),blocktype="d",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_block(gui="IFTHEL_f",graphics=scicos_graphics(orig=[233.37693,320.30536],sz=[60,60],flip=%t,theta=0,exprs=["0";"1"],pin=13,pout=[],pein=[],peout=[6;0],gr_i=list(["txt=[''If,in>0'';'','';'',then, , else'']";"xstringb(orig(1),orig(2),txt,sz(1),sz(2),''fill'');"],8),id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim=list("ifthel",-1),in1=1,in2=1,intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[1;1],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="l",firing=[-1,-1],dep_ut=[%t,%f],label="",nzcross=1,nmode=1,equations=list()),doc=list()));
	scs_m.objs.push(scicos_block(gui="LOGICAL_OP",graphics=scicos_graphics(orig=[152.88902,260.24498],sz=[60,40],flip=%t,theta=0,exprs=["2";"1";"5";"0"],pin=[15;7],pout=5,pein=[],peout=[],gr_i=list("xstringb(orig(1),orig(2),[''Logical,Op,'';OPER],sz(1),sz(2),''fill'');",8),id="",in_implicit=["E";"E"],out_implicit="E"),model=scicos_model(sim=list("logicalop_i8",4),in1=[-1;-1],in2=[-2;-2],intyp=[5;5],out=-1,out2=-2,outtyp=5,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[1;0],opar=list(),blocktype="c",firing=[],dep_ut=[%t,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_block(gui="SAMPHOLD_m",graphics=scicos_graphics(orig=[233.72156,260.24498],sz=[40,40],flip=%t,theta=0,exprs="5",pin=5,pout=9,pein=6,peout=[],gr_i=list("xstringb(orig(1),orig(2),''S/H'',sz(1),sz(2),''fill'')",8),id="",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("samphold4_m",4),in1=-1,in2=-2,intyp=5,out=-1,out2=-2,outtyp=5,evtin=1,evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="d",firing=[],dep_ut=[%t,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([221.46044),yy: new ScilabDouble([280.24498),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([3,1,0]),to: new ScilabDouble([4,1,1])}));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([253.37693),yy: new ScilabDouble([314.59108),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([2,1,0]),to: new ScilabDouble([4,1,1])}));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([138.19704),yy: new ScilabDouble([273.44465),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([1,1,0]),to: new ScilabDouble([3,2,1])}));
	scs_m.objs.push(scicos_block(gui="LOGICAL_OP",graphics=scicos_graphics(orig=[317.46698,309.46812],sz=[60,40],flip=%t,theta=0,exprs=["1";"5";"5";"0"],pin=11,pout=17,pein=[],peout=[],gr_i=list("xstringb(orig(1),orig(2),[''Logical,Op,'';OPER],sz(1),sz(2),''fill'');",8),id="",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("logicalop_i8",4),in1=-1,in2=-2,intyp=5,out=-1,out2=-2,outtyp=5,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[5;0],opar=list(),blocktype="c",firing=[],dep_ut=[%t,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([282.29299),yy: new ScilabDouble([280.24498),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([4,1,0]),to: new ScilabDouble([10,1,1])}));
	scs_m.objs.push(scicos_block(gui="SPLIT_f",graphics=scicos_graphics(orig=[305.09603,280.83282],sz=[0.3333333,0.3333333],flip=%t,theta=0,exprs=[],pin=9,pout=[11;19],pein=[],peout=[],gr_i=list([],8),id="",in_implicit="E",out_implicit=["E";"E";"E"]),model=scicos_model(sim="lsplit",in1=-1,in2=[],intyp=1,out=[-1;-1;-1],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[%t,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([305.09603),yy: new ScilabDouble([280.83282),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([10,1,0]),to: new ScilabDouble([8,1,1])}));
	scs_m.objs.push(scicos_block(gui="IN_f",graphics=scicos_graphics(orig=[184.8055,340.30536],sz=[20,20],flip=%t,theta=0,exprs="2",pin=[],pout=13,pein=[],peout=[],gr_i=list(" ",8),id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim="input",in1=[],in2=[],intyp=1,out=-1,out2=[],outtyp=-1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=2,opar=list(),blocktype="c",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([204.8055),yy: new ScilabDouble([350.30536),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([12,1,0]),to: new ScilabDouble([2,1,1])}));
	scs_m.objs.push(scicos_block(gui="IN_f",graphics=scicos_graphics(orig=[104.31759,276.91165],sz=[20,20],flip=%t,theta=0,exprs="1",pin=[],pout=15,pein=[],peout=[],gr_i=list(" ",8),id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim="input",in1=[],in2=[],intyp=1,out=-1,out2=[],outtyp=-1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([124.31759),yy: new ScilabDouble([286.91165),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([14,1,0]),to: new ScilabDouble([3,1,1])}));
	scs_m.objs.push(scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[406.03841,319.46812],sz=[20,20],flip=%t,theta=0,exprs="2",pin=17,pout=[],pein=[],peout=[],gr_i=list(" ",8),id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in1=-1,in2=[],intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=2,opar=list(),blocktype="c",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([386.03841),yy: new ScilabDouble([329.46812),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([8,1,0]),to: new ScilabDouble([16,1,1])}));
	scs_m.objs.push(scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[325.09603,270.83282],sz=[20,20],flip=%t,theta=0,exprs="1",pin=19,pout=[],pein=[],peout=[],gr_i=list(" ",8),id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in1=-1,in2=[],intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([305.09603),yy: new ScilabDouble([280.83282),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([10,2,0]),to: new ScilabDouble([18,1,1])}));

	var model = scicos_model();
	model.sim = new ScilabString(["csuper"]);
	model.in1 = new ScilabDouble([1],[1]);
	model.in2 = new ScilabDouble([1],[1]);
	model.out = new ScilabDouble([1],[1]);
	model.out2 = new ScilabDouble([1],[1]);
	model.intyp = new ScilabDouble([5,-1]);
	model.outtyp = new ScilabDouble([5,5]);
	model.blocktype = new ScilabString(["h"]);
	model.firing = new ScilabBoolean([false]);
	model.dep_ut = new ScilabBoolean([true,false]);
	model.rpar=scs_m;

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,3]),model,[],gr_i);
	return new BasicBlock(this.x)
}

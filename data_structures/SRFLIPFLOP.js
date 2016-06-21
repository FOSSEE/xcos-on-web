function SRFLIPFLOP () {


	var scs_m = scicos_diagram(version="scicos4.2",props=scicos_params(wpar=[600,450,0,0,600,450],Title=["SRFLIPFLOP"],tol=[0.0001;0.000001;1.000E-10;100001;0;0;0],tf=60,context=" ",void1=[],options=tlist(["scsopt","3D","Background","Link","ID","Cmap"],list(%t,33),[8,1],[1,5],list([5,1],[4,1]),[0.8,0.8,0.8]),void2=[],void3=[],doc=list()));
	scs_m.objs.push(scicos_block(gui="LOGIC",graphics=scicos_graphics(orig=[298.504,201.45067],sz=[40,40],flip=%t,theta=0,exprs=["[0,1;1,0;1,0;1,0;0,1;0,1;0,0;0,0]";"1"],pin=[4;10;12],pout=[3;8],pein=[],peout=[],gr_i=[],id="",in_implicit=["E";"E";"E"],out_implicit=["E";"E"]),model=scicos_model(sim=list("logic",4),in1=[1],[1],[1],in2=[1],[1],[1],intyp=[5],[5],[5],out=[1],[1],out2=[1],[1],outtyp=[5],[5],evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(new ScilabInteger([0,1);
	1,0;
	1,0;
	1,0;
	0,1;
	0,1;
	0,0;

	var 0,0])),blocktype = "c",firing=%f,dep_ut=[%t,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list());
	scs_m.objs.push(scicos_block(gui="DOLLAR_m",graphics=scicos_graphics(orig=[299.23733,254.25067],sz=[40,40],flip=%f,theta=0,exprs=["new ScilabInteger(0)";"1"],pin=6,pout=4,pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("dollar4_m",4),in1=1,in2=1,intyp=5,out=1,out2=1,outtyp=5,evtin=[],evtout=[],state=[],dstate=[],odstate=list(new ScilabInteger(0)),rpar=[],ipar=[],opar=list(),blocktype="d",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([347.07543),yy: new ScilabDouble([228.11733),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([1,1,0]),to: new ScilabDouble([5,1,1])}));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([290.6659),yy: new ScilabDouble([274.25067),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([2,1,0]),to: new ScilabDouble([1,1,1])}));
	scs_m.objs.push(scicos_block(gui="SPLIT_f",graphics=scicos_graphics(orig=[363.03733,248.584],sz=[0.3333333,0.3333333],flip=%t,theta=0,exprs=[],pin=3,pout=[6;14],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=["E";"E";"E"]),model=scicos_model(sim="lsplit",in1=-1,in2=[],intyp=1,out=[-1;-1;-1],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[%t,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([363.03733),yy: new ScilabDouble([248.584),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([5,1,0]),to: new ScilabDouble([2,1,1])}));
	scs_m.objs.push(scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[367.07543,204.784],sz=[20,20],flip=%t,theta=0,exprs="2",pin=8,pout=[],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in1=-1,in2=[],intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=2,opar=list(),blocktype="c",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([347.07543),yy: new ScilabDouble([214.784),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([1,2,0]),to: new ScilabDouble([7,1,1])}));
	scs_m.objs.push(scicos_block(gui="IN_f",graphics=scicos_graphics(orig=[249.93257,211.45067],sz=[20,20],flip=%t,theta=0,exprs="1",pin=[],pout=10,pein=[],peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim="input",in1=[],in2=[],intyp=1,out=-1,out2=[],outtyp=-1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([269.93257),yy: new ScilabDouble([221.45067),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([9,1,0]),to: new ScilabDouble([1,2,1])}));
	scs_m.objs.push(scicos_block(gui="IN_f",graphics=scicos_graphics(orig=[249.93257,201.45067],sz=[20,20],flip=%t,theta=0,exprs="2",pin=[],pout=12,pein=[],peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim="input",in1=[],in2=[],intyp=1,out=-1,out2=[],outtyp=-1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=2,opar=list(),blocktype="c",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([269.93257),yy: new ScilabDouble([211.45067),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([11,1,0]),to: new ScilabDouble([1,3,1])}));
	scs_m.objs.push(scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[383.03733,238.584],sz=[20,20],flip=%t,theta=0,exprs="1",pin=14,pout=[],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in1=-1,in2=[],intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([363.03733),yy: new ScilabDouble([248.584),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([5,2,0]),to: new ScilabDouble([13,1,1])}));

	var model = scicos_model();
	model.sim = new ScilabString(["csuper"]);
	model.in1 = new ScilabDouble([1],[1]);
	model.in2 = new ScilabDouble([1],[1]);
	model.out = new ScilabDouble([1],[1]);
	model.out2 = new ScilabDouble([1],[1]);
	model.intyp = new ScilabDouble([5,5]);
	model.outtyp = new ScilabDouble([5,5]);
	model.blocktype = new ScilabString(["h"]);
	model.firing = new ScilabBoolean([false]);
	model.dep_ut = new ScilabBoolean([true,false]);
	model.rpar=scs_m;

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,3]),model,[],gr_i);
	return new BasicBlock(this.x)
}

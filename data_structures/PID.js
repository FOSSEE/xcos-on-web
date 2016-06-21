function PID () {


	var scs_m = scicos_diagram(version="scicos4.2",props=scicos_params(wpar=[600,450,0,0,600,450],Title=["PID"],tol=[0.0001,0.000001,1.000E-10,100001,0,0],tf=100000,context=" ",void1=[],options=tlist(["scsopt","3D","Background","Link","ID","Cmap"],list(%t,33),[8,1],[1,5],list([5,1],[4,1]),[0.8,0.8,0.8]),void2=[],void3=[],doc=list()));
	scs_m.objs.push(scicos_block(gui="INTEGRAL_m",graphics=scicos_graphics(orig=[318.304,183.11733],sz=[40,40],flip=%t,theta=0,exprs=["0";"0";"0";"1";"-1"],pin=7,pout=9,pein=[],peout=[],gr_i=[],id="1/s",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("integral_func",4),in1=1,in2=1,intyp=1,out=1,out2=1,outtyp=1,evtin=[],evtout=[],state=0,dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[%f,%t],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_block(gui="SUMMATION",graphics=scicos_graphics(orig=[387.97067,172.85067],sz=[40,60],flip=%t,theta=0,exprs=["1";"[1;1;1]"],pin=[10;9;11],pout=19,pein=[],peout=[],gr_i=[],id="",in_implicit=["E";"E";"E"],out_implicit="E"),model=scicos_model(sim=list("summation",4),in1=[-1;-1;-1],in2=[-2;-2;-2],intyp=[1;1;1],out=-1,out2=-2,outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[1;1;1],opar=list(),blocktype="c",firing=[],dep_ut=[%t,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_block(gui="GAINBLK",graphics=scicos_graphics(orig=[321.23733,235.91733],sz=[40,40],flip=%t,theta=0,exprs="1",pin=17,pout=10,pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("gainblk",4),in1=-1,in2=-2,intyp=1,out=-1,out2=-2,outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=1,ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[%t,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_block(gui="DERIV",graphics=scicos_graphics(orig=[319.03733,135.45067],sz=[40,40],flip=%t,theta=0,exprs=[],pin=8,pout=11,pein=[],peout=[],gr_i=[],id="s",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("deriv",4),in1=-1,in2=-2,intyp=1,out=-1,out2=-2,outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="x",firing=[],dep_ut=[%t,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_block(gui="GAINBLK",graphics=scicos_graphics(orig=[255.23733,183.11733],sz=[40,40],flip=%t,theta=0,exprs="1",pin=13,pout=7,pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("gainblk",4),in1=-1,in2=-2,intyp=1,out=-1,out2=-2,outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=1,ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[%t,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_block(gui="GAINBLK",graphics=scicos_graphics(orig=[255.23733,135.45067],sz=[40,40],flip=%t,theta=0,exprs="1",pin=14,pout=8,pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("gainblk",4),in1=-1,in2=-2,intyp=1,out=-1,out2=-2,outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=1,ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[%t,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([303.80876),yy: new ScilabDouble([203.11733),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([5,1,0]),to: new ScilabDouble([1,1,1])}));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([303.80876),yy: new ScilabDouble([155.45067),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([6,1,0]),to: new ScilabDouble([4,1,1])}));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([366.87543),yy: new ScilabDouble([203.11733),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([1,1,0]),to: new ScilabDouble([2,2,1])}));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([369.80876),yy: new ScilabDouble([255.91733),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([3,1,0]),to: new ScilabDouble([2,1,1])}));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([367.60876),yy: new ScilabDouble([155.45067),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([4,1,0]),to: new ScilabDouble([2,3,1])}));
	scs_m.objs.push(scicos_block(gui="SPLIT_f",graphics=scicos_graphics(orig=[234.704;203.11733],sz=[0.3333333,0.3333333],flip=%t,theta=0,exprs=[],pin=16,pout=[13;14],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=["E";"E";"E"]),model=scicos_model(sim="lsplit",in1=-1,in2=[],intyp=1,out=[-1;-1;-1],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[%t,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([234.704),yy: new ScilabDouble([203.11733),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([12,1,0]),to: new ScilabDouble([5,1,1])}));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([234.704),yy: new ScilabDouble([203.11733),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([12,2,0]),to: new ScilabDouble([6,1,1])}));
	scs_m.objs.push(scicos_block(gui="SPLIT_f",graphics=scicos_graphics(orig=[233.97067;203.11733],sz=[0.3333333,0.3333333],flip=%t,theta=0,exprs=[],pin=21,pout=[16;17],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=["E";"E";"E"]),model=scicos_model(sim="lsplit",in1=-1,in2=[],intyp=1,out=[-1;-1;-1],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[%t,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([233.97067),yy: new ScilabDouble([203.11733),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([15,1,0]),to: new ScilabDouble([12,1,1])}));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([233.97067),yy: new ScilabDouble([203.11733),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([15,2,0]),to: new ScilabDouble([3,1,1])}));
	scs_m.objs.push(scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[456.5421,192.85067],sz=[20,20],flip=%t,theta=0,exprs="1",pin=19,pout=[],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in1=-1,in2=[],intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([436.5421),yy: new ScilabDouble([202.85067),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([2,1,0]),to: new ScilabDouble([18,1,1])}));
	scs_m.objs.push(scicos_block(gui="IN_f",graphics=scicos_graphics(orig=[193.97067,193.11733],sz=[20,20],flip=%t,theta=0,exprs="1",pin=[],pout=21,pein=[],peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim="input",in1=[],in2=[],intyp=1,out=-1,out2=[],outtyp=-1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m.objs.push(scicos_link({xx: new ScilabDouble([213.97067),yy: new ScilabDouble([203.11733),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([20,1,0]),to: new ScilabDouble([15,1,1])}));

	var model = scicos_model();
	model.sim = new ScilabString(["csuper"]);
	model.in1 = new ScilabDouble([-1]);
	model.in2 = new ScilabDouble([-2]);
	model.out = new ScilabDouble([-1]);
	model.out2 = new ScilabDouble([-2]);
	model.intyp = new ScilabDouble([1]);
	model.outtyp = new ScilabDouble([1]);
	model.blocktype = new ScilabString(["h"]);
	model.firing = new ScilabBoolean([false]);
	model.dep_ut = new ScilabBoolean([false,false]);
	model.rpar=scs_m;

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,[],gr_i);
	return new BasicBlock(this.x)
}

function Sigbuilder () {


	var scs_m_1 = [scicos_diagram(version="scicos4.2",props=scicos_params(wpar=[600,450,0,0,600,450],Title=["Sigbuilder","./"],tol=[0.0001;0.000001;1.000D-10;100001;0;0;0],tf=100,context=" ",void1=[],options=tlist(["scsopt","3D","Background","Link","ID","Cmap"],list(%t,33),[8,1],[1,5],list([5,1],[4,1]),[0.8,0.8,0.8]),void2=[],void3=[],doc=list()))];
	scs_m_1.objs.push(scicos_block(gui="CURVE_c",graphics=scicos_graphics(orig=[329.63473,606.18517],sz=[40,40],flip=%t,theta=0,exprs=["3";"[0,1,2]";"[10,20,-30]";"y";"n"],pin=[],pout=6,pein=4,peout=2,gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim=list("curve_c",4),in=[],in2=[],intyp=1,out=1,out2=[],outtyp=1,evtin=1,evtout=1,state=[],dstate=[],odstate=list(),rpar=[0;1;2;10;20;-30],ipar=[3;3;1],opar=list(),blocktype="c",firing=0,dep_ut=[%f,%t],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m_1.objs.push(scicos_link({xx: new ScilabDouble([349.63473),yy: new ScilabDouble([600.47089),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([1,1,0]),to: new ScilabDouble([3,1,1])}));
	scs_m_1.objs.push(scicos_block(gui="CLKSPLIT_f",graphics=scicos_graphics(orig=[349.49528;565.10704],sz=[0.3333333,0.3333333],flip=%t,theta=0,exprs=[],pin=[],pout=[],pein=2,peout=[8;4],gr_i=[],id="",in_implicit=[],out_implicit=[]),model=scicos_model(sim="split",in=[],in2=[],intyp=1,out=[],out2=[],outtyp=1,evtin=1,evtout=[1;1],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="d",firing=[%f,%f,%f],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m_1.objs.push(scicos_link({xx: new ScilabDouble([349.49528),yy: new ScilabDouble([565.10704),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([3,2,0]),to: new ScilabDouble([1,1,1])}));
	scs_m_1.objs.push(scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[398.20616,616.18517],sz=[20,20],flip=%t,theta=0,exprs="1",pin=6,pout=[],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in=-1,in2=-2,intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m_1.objs.push(scicos_link({xx: new ScilabDouble([378.20616),yy: new ScilabDouble([626.18517),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([1,1,0]),to: new ScilabDouble([5,1,1])}));
	scs_m_1.objs.push(scicos_block(gui="CLKOUTV_f",graphics=scicos_graphics(orig=[339.49528,505.10704],sz=[20,30],flip=%t,theta=0,exprs="1",pin=[],pout=[],pein=8,peout=[],gr_i=[],id="",in_implicit=[],out_implicit=[]),model=scicos_model(sim="output",in=[],in2=[],intyp=1,out=[],out2=[],outtyp=1,evtin=1,evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="d",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m_1.objs.push(scicos_link({xx: new ScilabDouble([349.49528),yy: new ScilabDouble([565.10704),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([3,1,0]),to: new ScilabDouble([7,1,1])}));

	var model = [scicos_model(sim="csuper",in=[],in2=[],intyp=1,out=-1,out2=[],outtyp=1,evtin=[],evtout=1,state=[],dstate=[],odstate=list(),rpar=scs_m_1,ipar=[],opar=list(),blocktype="h",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list())];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([3,2]),model,[],gr_i);
}

function FROMWSB () {


	var scs_m_1 = [scicos_diagram(version="scicos4.2",props=scicos_params(wpar=[-159.096,811.104,-121.216,617.984,1323,1008,331,284,630,480,1426,231,1.4],Title="FROMWSB",tol=[0.0001,0.000001,1.000D-10,100001,0,0],tf=100000,context=" ",void1=[],options=tlist(["scsopt","3D","Background","Link","ID","Cmap"],list(%t,33),[8,1],[1,5],list([5,1],[4,1]),[0.8,0.8,0.8]),void2=[],void3=[],doc=list()))];
	scs_m_1.objs.push(scicos_block(gui="FROMWS_c",graphics=scicos_graphics(orig=[260.37067,261.584],sz=[70,40],flip=%t,theta=0,exprs=["V";"1";"1";"0"],pin=[],pout=4,pein=2,peout=2,gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim=list("fromws_c",4),in=[],in2=[],intyp=1,out=-1,out2=-2,outtyp=-1,evtin=1,evtout=1,state=[],dstate=[],odstate=list(),rpar=[],ipar=[1;-31;1;1;0],opar=list(),blocktype="d",firing=0,dep_ut=[%f,%t],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m_1.objs.push(scicos_link({xx: new ScilabDouble([295.37067),yy: new ScilabDouble([255.86971),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([1,1,0]),to: new ScilabDouble([1,1,1])}));
	scs_m_1.objs.push(scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[358.9421,271.584],sz=[20,20],flip=%t,theta=0,exprs="1",pin=4,pout=[],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in=-1,in2=-2,intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m_1.objs.push(scicos_link({xx: new ScilabDouble([338.9421),yy: new ScilabDouble([281.584),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([1,1]),from: new ScilabDouble([1,1,0]),to: new ScilabDouble([3,1,1])}));

	var model = [scicos_model(sim="csuper",in=[],in2=[],intyp=1,out=-1,out2=-2,outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=scs_m_1,ipar=[],opar=list(),blocktype="h",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list())];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([5,2]),model,[],gr_i);
}

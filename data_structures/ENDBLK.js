function ENDBLK () {


	var scs_m_1 = [scicos_diagram(version="scicos4.2",props=scicos_params(wpar=[-159.096,811.104,-121.216,617.984,1323,1008,331,284,630,480,0,7,1.4],Title="ENDBLK",tol=[0.0001,0.000001,1.000E-10,100001,0,0],tf=100000,context=" ",void1=[],options=tlist(["scsopt","3D","Background","Link","ID","Cmap"],list(%t,33),[8,1],[1,5],list([5,1],[4,1]),[0.8,0.8,0.8]),void2=[],void3=[],doc=list()))];
	scs_m_1.objs.push(scicos_block(gui="END_c",graphics=scicos_graphics(orig=[272.104,249.11733],sz=[40,40],flip=%t,theta=0,exprs="1.000E+08",pin=[],pout=[],pein=2,peout=2,gr_i=[],id="",in_implicit=[],out_implicit=[]),model=scicos_model(sim=list("scicosexit",4),in=[],in2=[],intyp=1,out=[],out2=[],outtyp=1,evtin=1,evtout=1,state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="d",firing=1.000E+08,dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list()),doc=list()));
	scs_m_1.objs.push(scicos_link({xx: new ScilabDouble([292.104),yy: new ScilabDouble([243.40305),thick: new ScilabDouble([0,0]),ct: new ScilabDouble([5,-1]),from: new ScilabDouble([1,1,0]),to: new ScilabDouble([1,1,1])}));

	var model = [scicos_model(sim="csuper",in=[],in2=[],intyp=1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=scs_m_1,ipar=[],opar=list(),blocktype="h",firing=[],dep_ut=[%f,%f],label="",nzcross=0,nmode=0,equations=list())];

	var gr_i = [];
	this.x=new standard_define(new ScilabDouble([2,2]),model,[],gr_i);
}

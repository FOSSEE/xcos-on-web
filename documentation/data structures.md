

Data Structures to build .xcos
===================
####@ASP1234

This document contains description and flow used to write the **Data Structures** in **details.js **[^details.js] file. It can be considered as helpful for someone who wants to understand and write the Data Structures for newly added blocks

----------
## Table of contents
[TOC]

##Basic Outline


Scilab stores the Data Structures of all the blocks present in xcos as **.sci** files. These files are present in *scilab-5.5.2\modules\scicos_blocks\macros*  -- Navigate to the folder where your block is present. For instance, ANDBLK.sci is an Event Block so it is in Events directory.

Generally, these files consist of **function** for the respective block. These functions takes three args - job, arg1, arg2.

> **Note:**

> - job defines the case used for **select** statement. Most often, it is **set** or **define**. 
	>  - **set** is user inputs case. Basically, it prompts the user for input and validate the data entered. Then, it sets the respective fields for the particular block.
	>  - **define** is default case. Basically, it fills the different field for the particular block with default values. Also, it is this case which is used to define the data structure for the different blocks.
	
> - **arg1** consist of user inputs which is used in **set** case.


#### Define a Block

        case "define" then
        andlog=ANDLOG_f("define")
        andlog.graphics.orig=[194,133]
        andlog.graphics.sz=[60,60]
        andlog.graphics.flip=%t
        andlog.graphics.pout=9
        andlog.graphics.pein=[4;11]

        input_port1=CLKIN_f("define")
        input_port1.graphics.orig=[149,287]
        input_port1.graphics.sz=[20,20]
        input_port1.graphics.flip=%t
        input_port1.graphics.exprs="1"
        input_port1.graphics.peout=4
        input_port1.model.ipar=1

        output_port=CLKOUT_f("define")
        output_port.graphics.orig=[450,83]
        output_port.graphics.sz=[20,20]
        output_port.graphics.flip=%t
        output_port.graphics.exprs="1"
        output_port.graphics.pein=8
        output_port.model.ipar=1

        input_port2=CLKIN_f("define")
        input_port2.graphics.orig=[141,330]
        input_port2.graphics.sz=[20,20]
        input_port2.graphics.flip=%t
        input_port2.graphics.exprs="2"
        input_port2.graphics.peout=6
        input_port2.model.ipar=2

        ifthel=IFTHEL_f("define")
        ifthel.graphics.orig=[331,137]
        ifthel.graphics.sz=[60,60]
        ifthel.graphics.flip=%t
        ifthel.graphics.pin=9
        ifthel.graphics.pein=12
        ifthel.graphics.peout=[8;0]

        split=CLKSPLIT_f("define")
        split.graphics.orig=[234;275.78348]
        split.graphics.pein=6,
        split.graphics.peout=[11;12]


        diagram=scicos_diagram()
        diagram.objs(1)=andlog
        diagram.objs(2)=input_port1
        diagram.objs(3)=output_port
        diagram.objs(4)=scicos_link(xx=[169;214;214],yy=[297;297;198.71],..
        ct=[5,-1],from=[2,1],to=[1,1])
        diagram.objs(5)=input_port2
        diagram.objs(6)=scicos_link(xx=[161;234;234],yy=[340;340;275.78],..
        ct=[5,-1],from=[5,1],to=[10,1])
        diagram.objs(7)=ifthel
        diagram.objs(8)=scicos_link(xx=[351;351;450],yy=[131.29;93;93],..
        ct=[5,-1],from=[7,1],to=[3,1])
        diagram.objs(9)=scicos_link(xx=[262.57;322.43],yy=[163;167],..
        ct=[1,1],from=[1,1],to=[7,1])
        diagram.objs(10)=split
        diagram.objs(11)=scicos_link(xx=[234;234],yy=[275.78;198.71],..
        ct=[5,-1],from=[10,1],to=[1,2])
        diagram.objs(12)=scicos_link(xx=[234;361;361],yy=[275.78;275.78;202.71],..
        ct=[5,-1],from=[10,2],to=[7,1])
        x=scicos_block()
        x.gui="ANDBLK"
        x.graphics.sz=[2,2]
        x.graphics.gr_i=[];
        x.graphics.pein=[0;0]
        x.graphics.peout=0
        x.model.sim="csuper"
        x.model.evtin=[1;1]
        x.model.evtout=1
        x.model.blocktype="h"
        x.model.firing=%f
        x.model.dep_ut=[%f %f]
        x.model.rpar=diagram;

    end

In **define** case, it creates an object of **scicos_block()**  and put data to different fields of it. Now, it may call other functions or blocks. We term these as **dependencies**. On running a python script, we have built an [Adjacency Matrix](https://docs.google.com/spreadsheets/d/1tGjO1mwtrPCW0zNMrHQTe3Oo3218BR5VdjIQuZOK_F0/edit?usp=sharing) consisting of Blocks as rows and Dependencies as columns. 

In short, to implement any block from the list, one must first implement all its dependencies.



## How to Implement

For most of the Data Structures, there is **one-one** mapping between the **.sci** and **.js** version. This means, one can copy the code within the **define** case and with slight modifications gets the **.js** version of it.

Now, before even implementing dependencies, we have to implement the data types used in Scilab. These are 

 - ScilabString
 - ScilabDouble
 - ScilabInteger
 - ScilabBoolean

#### function data()
Stores the data as an object. The attribute **realPart** or **value** is used to store the data depending upon the data type. For ScilabDouble, **realPart**  is used and **value** for the rest.


#### function ScilabString()
Stores the data as Strings.

#### function ScilabDouble()
Stores the data as Double. 

#### function ScilabBoolean()
Stores the boolean data.

> **Note:**
>  - For inverse array, it is passed as [x][y] if [x,y] is 1X2 matrix. However, if [x,y] is 2X1 matrix, it will be [x,y]. 
>  [More info](https://docs.google.com/document/d/1JcturQaq1i6FGXkwMsf4iVr9mZOlkt0EGsdGSO4BbBw/edit?usp=sharing)




####Lists:

 - list: returns an Array of objects
 - tlist: typed list. Returns an object which consists of objects of same type.
 - mlist: returns an object which consists of other objects.

###Dependencies

Here's the **.sci**

    function blk=scicos_block(v1,v2,v3,v4,v5)
    //Block data structure initialization
    if exists("graphics","local")==0 then graphics=scicos_graphics(),end
    if exists("model","local")==0 then model=scicos_model(),end
    if exists("gui","local")==0 then gui="",end
    if exists("doc","local")==0 then doc=list(),end
    
    blk=mlist(["Block","graphics","model","gui","doc"],graphics,model,gui,doc)

Here's the **.js**

    function scicos_block() {
    var options = arguments[0] || new Object();
    var block_type = ["block", "graphics", "model", "gui", "docs"];
    this.block = new ScilabString(block_type);
    this.graphics = options.graphics || new scicos_graphics();
    this.model = options.model || new scicos_model();
    this.gui = options.gui || new ScilabString();
    this.docs = options.docs || list();

    return mlist(block_type, this.block, this.graphics, this.model, this.gui, this.docs);}

So, one can see how similar these two versions are in terms of code.

####function scicos_block()
Returns mlist of "block","graphics", "model", "gui", "docs"

####function standard_define() 
Returns an object of scicos_block()

####function zeros(n)
Returns ScilabDouble which contains a list with size = n and all values = 0

####function scicos_graphics()
Returns mlist of "graphics", "orig", "sz", "flip", "theta", "exprs", "pin", "pout", "pein", "peout", "gr_i", "id", "in_implicit", "out_implicit", "in_style", "out_style", "in_label", "out_label", "style"

####function scicos_model()
Returns mlist of "model", "sim", "in", "in2", "intyp", "out", "out2", "outtyp", "evtin", "evtout", "state", "dstate", "odstate", "rpar", "ipar", "opar", "blocktype", "firing", "dep_ut", "label", "nzcross", "nmode", "equations", "uid"

####function scicos_diagram()
Returns mlist of "diagram", "props", "objs", "version", "contrib"

####function scicos_params()
Returns tlist of "params", "wpar", "title", "tol", "tf", "context", "void1", "options", "void2", "void3", "doc"

####function default_options()
Returns tlist of "scsopt", "3D", "Background", "Link", "ID", "Cmap"

####function scicos_link()
Returns mlist of "Link", "xx", "yy", "id", "thick", "ct", "from", "to"

####function sci2exp(c)
converts an expression to a string

###Blocks

Here's the **.sci** file

    case "define" then
            model=scicos_model()
            model.sim="andlog"
            model.out=1
            model.evtin=[1;1]
            model.blocktype="d"
            model.firing=[]
            model.dep_ut=[%f %f]
    
            gr_i=[]
            x=standard_define([3 3],model,[],gr_i)
        end
Here's the **.js** version

    function ANDLOG_f() {
    var model = scicos_model();
    model.sim = new ScilabString(["andlog"]);
    model.out = new ScilabDouble([1]);
    model.out2 = new ScilabDouble([1]); // null -> 1
    model.evtin = new ScilabDouble([-1, -1]) // 1, 1 -> -1, -1
    model.blocktype = new ScilabString(["d"]);
    model.firing = new ScilabDouble();
    model.dep_ut = new ScilabBoolean([false, false]);

    var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ANDLOG_f\",sz(1),sz(2));"]);
    var block = new standard_define(new ScilabDouble([80, 80]), model, new ScilabDouble(), gr_i); // 3 -> 80

    // Style
    block.graphics.out_implicit = new ScilabString(["E"]);
    //block.graphics.out_style = "ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0";
    block.graphics.style = new ScilabString(["ANDLOG_f"]);
    return block;
}

So, one can see how similar these two versions are in terms of code. Likewise, one can proceed to implement other blocks after implementing the required dependecies.

----------


###Information from Xcos

There are few information which **.sci** file fails to provide for a particular block. This includes blocktype, attributes, realParameters, ObjectParameters. For this reason we need to use **.xcos** file for the particular block to extract such data. It can also be used for testing the **generated .xcos** with the **actual .xcos** files.

## Appendix

 [^details.js]: details.js is present in xcos-on-web root directory.
 

- You can get support in the community mailing list and forums:
       https://groups.google.com/forum/#!forum/xcos-on-web
   
- Github repo link
       https://github.com/FOSSEE/xcos-on-web    



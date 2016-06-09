import os

# Blocks SUPER_f ,INIMPL_f ,IN_f ,OUTIMPL_f ,OUT_f ,CLKSOMV_f ,CLKINV_f and CLKOUTV_f don't contain simulationFunctionName attribute as their name 
# hence these blocks must be handled separately



nameList=os.listdir("xcos")
script_dir = os.path.dirname(__file__)
rel_path = "xcos"
abs_file_path = os.path.join(script_dir, rel_path)
for i in nameList:
    ob=open(os.path.join(abs_file_path,i),"r")
    name=i[:-5]
    fileVal=ob.readline()

    if fileVal.find(name)==-1:
        print(name)

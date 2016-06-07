import os

nameList=os.listdir("xcos")
for i in nameList:
    ob=open(i,"r")
    name=i[:-5]
    fileVal=ob.readline()

    if fileVal.find(name)==-1:
        print(name)

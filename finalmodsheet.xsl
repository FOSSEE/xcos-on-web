<?xml version="1.0" encoding="UTF-8"?>
<!-- 
eXtensible Stylesheet for converting GUI-obtained XML to Scilab-compatible XML.
Authors: Maverick & Karma 
-->
<!-- Maverick -->
<!-- 
NOTES:
Look for TAG:Break1!!!
         TAG:Break2!!!
         TAG:Break3!!!
-->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" indent="no" />
    <xsl:template match="/">
        <xsl:apply-templates />
    </xsl:template>
    <xsl:template name="XcosDiagram" match="XcosDiagram">
        <xsl:element name="XcosDiagram">
            <!-- <xsl:if test="@background">
            <xsl:attribute name="background">
            <xsl:value-of select="@background"/>
            </xsl:attribute>
            </xsl:if> -->
            <xsl:attribute name="background">-1</xsl:attribute>
            <xsl:if test="@debugLevel">
                <xsl:attribute name="debugLevel">
                    <xsl:value-of select="@debugLevel" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@finalIntegrationTime">
                <xsl:attribute name="finalIntegrationTime">
                    <xsl:value-of select="@finalIntegrationTime" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@gridEnabled">
                <xsl:attribute name="gridEnabled">
                    <xsl:value-of select="@gridEnabled" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@integratorAbsoluteTolerance">
                <xsl:attribute name="integratorAbsoluteTolerance">
                    <xsl:value-of select="@integratorAbsoluteTolerance" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@integratorRelativeTolerance">
                <xsl:attribute name="integratorRelativeTolerance">
                    <xsl:value-of select="@integratorRelativeTolerance" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@maxIntegrationTimeInterval">
                <xsl:attribute name="maxIntegrationTimeInterval">
                    <xsl:value-of select="@maxIntegrationTimeInterval" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@maxIntegrationTimeinterval">
                <xsl:attribute name="maxIntegrationTimeinterval">
                    <xsl:value-of select="@maxIntegrationTimeinterval" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@maximumStepSize">
                <xsl:attribute name="maximumStepSize">
                    <xsl:value-of select="@maximumStepSize" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@modified">
                <xsl:attribute name="modified">
                    <xsl:value-of select="@modified" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@opened">
                <xsl:attribute name="opened">
                    <xsl:value-of select="@opened" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@realTimeScaling">
                <xsl:attribute name="realTimeScaling">
                    <xsl:value-of select="@realTimeScaling" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@savedFile">
                <xsl:attribute name="savedFile">
                    <xsl:value-of select="@savedFile" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@solver">
                <xsl:attribute name="solver">
                    <xsl:value-of select="@solver" />
                </xsl:attribute>
            </xsl:if>
            <!-- <xsl:if test="@title">
            <xsl:attribute name="title">
            <xsl:value-of select="@title"/>
            </xsl:attribute>
            </xsl:if> -->
            <xsl:attribute name="title">MavXcos</xsl:attribute>
            <xsl:if test="@toleranceOnTime">
                <xsl:attribute name="toleranceOnTime">
                    <xsl:value-of select="@toleranceOnTime" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
            <xsl:element name="mxCell">
                <xsl:attribute name="id">1</xsl:attribute>
                <xsl:attribute name="parent">0</xsl:attribute>
                <xsl:attribute name="as">defaultParent</xsl:attribute>
            </xsl:element>
        </xsl:element>
    </xsl:template>
    <xsl:template match="root">
        <xsl:element name="root">
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template match="mxCell">
        <xsl:choose>
            <xsl:when test="@style">
                <!-- Style present -->
                <xsl:choose>
                    <xsl:when test="@style='BIGSOM_f'">
                        <xsl:call-template name="BigSom" />
                    </xsl:when>
                    <xsl:when test="@style='ExplicitInputPort'">
                        <xsl:call-template name="ExplicitInputPort" />
                    </xsl:when>
                    <xsl:when test="@style='ExplicitOutputPort'">
                        <xsl:call-template name="ExplicitOutputPort" />
                    </xsl:when>
                    <xsl:when test="@style='ControlPort'">
                        <xsl:call-template name="ControlPort" />
                    </xsl:when>
                    <xsl:when test="@style='ImplicitInputPort'">
                        <xsl:call-template name="ImplicitInputPort" />
                    </xsl:when>
                    <xsl:when test="@style='ImplicitOutputPort'">
                        <xsl:call-template name="ImplicitOutputPort" />
                    </xsl:when>
                    <xsl:when test="@style='CommandPort'">
                        <xsl:call-template name="CommandPort" />
                    </xsl:when>
                    <xsl:otherwise>
                        <!-- Maverick -->
                        <!-- TAG:Break1 
                             This line has been commented because Javascript was having
                             some problem with the function call. 

                             Commenting doesn't bring any change to the result now, but
                             may cause some problems in the future. 
                        -->
                        <!-- <xsl:apply-templates select="name(*[1])"/> -->
                        <xsl:apply-templates />
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:when>
            
            
            <xsl:when test="@name">
                <xsl:choose>
                    <xsl:when test="@name='ExplicitLink'">
                        <xsl:call-template name="ExplicitLink" />
                    </xsl:when>
                    <xsl:when test="@name='ImplicitLink'">
                        <xsl:call-template name="ImplicitLink" />
                    </xsl:when>
                    <xsl:when test="@name='CommandControlLink'">
                        <xsl:call-template name="CommandControlLink" />
                    </xsl:when>
                </xsl:choose>
            </xsl:when>
            <xsl:otherwise>
                <!-- Style not present -->
                <xsl:copy-of select="." />
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <xsl:template name="Object" match="Object">
        <xsl:element name="Array">
            <xsl:if test="name(..)='BasicBlock'">
                <xsl:if test="@as">
                    <xsl:attribute name="as">
                        <xsl:value-of select="@as" />
                    </xsl:attribute>
                </xsl:if>
            </xsl:if>
            <xsl:if test="@scilabClass">
                <xsl:attribute name="scilabClass">
                    <xsl:value-of select="@scilabClass" />
                </xsl:attribute>
            </xsl:if>
            <!-- <xsl:if test="@varName">
                <xsl:attribute name="varName">
                    <xsl:value-of select="@varName" />
                </xsl:attribute>
            </xsl:if> -->
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>

    <!-- Maverick -->
    <!-- TAG:Break2 
         The template handles the 'as' attribute rather loosely and demands
         proper handling.
    -->
    <xsl:template name="Array" match="Array">
        <xsl:element name="Array">
            <xsl:if test="name(..)='BasicBlock' or @as='context'">
                <xsl:if test="@as">
                    <xsl:attribute name="as">
                        <xsl:value-of select="@as" />
                    </xsl:attribute>
                </xsl:if>
            </xsl:if>
            <xsl:if test="@scilabClass">
                <xsl:attribute name="scilabClass">
                    <xsl:value-of select="@scilabClass" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ScilabBoolean" match="ScilabBoolean">
        <xsl:element name="ScilabBoolean">
            <xsl:choose>
                <xsl:when test="@height">
                    <xsl:attribute name="height">
                        <xsl:value-of select="@height" />
                    </xsl:attribute>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:attribute name="height">0</xsl:attribute>
                </xsl:otherwise>
            </xsl:choose>
            <xsl:choose>
                <xsl:when test="@width">
                    <xsl:attribute name="width">
                        <xsl:value-of select="@width" />
                    </xsl:attribute>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:attribute name="width">0</xsl:attribute>
                </xsl:otherwise>
            </xsl:choose>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ScilabInteger" match="ScilabInteger">
        <xsl:element name="ScilabInteger">
            <xsl:if test="@height">
                <xsl:attribute name="height">
                    <xsl:value-of select="@height" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@intPrecision">
                <xsl:attribute name="intPrecision">
                    <xsl:value-of select="@intPrecision" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@width">
                <xsl:attribute name="width">
                    <xsl:value-of select="@width" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="add" match="add">
        <xsl:element name="add">
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="mxGraphModel" match="mxGraphModel">
        <xsl:element name="mxGraphModel">
            <xsl:attribute name="as">model</xsl:attribute>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="root" match="root">
        <xsl:element name="root">
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="AfficheBlock" match="AfficheBlock">
        <xsl:element name="AfficheBlock">
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@dependsOnU">
                <xsl:attribute name="dependsOnU">
                    <xsl:value-of select="@dependsOnU" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@hashCode">
                <xsl:attribute name="hashCode">
                    <xsl:value-of select="@hashCode" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@vertex">
                <xsl:attribute name="vertex">
                    <xsl:value-of select="@vertex" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@visible">
                <xsl:attribute name="visible">
                    <xsl:value-of select="@visible" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="BigSom" match="BigSom">
        <xsl:element name="BigSom">
            <xsl:if test="@dependsOnU">
                <xsl:attribute name="dependsOnU">
                    <xsl:value-of select="@dependsOnU" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="CommandControlLink" match="CommandControlLink">
        <xsl:element name="CommandControlLink">
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@source">
                <xsl:attribute name="source">
                    <xsl:value-of select="@source" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@target">
                <xsl:attribute name="target">
                    <xsl:value-of select="@target" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ConstBlock" match="ConstBlock">
        <xsl:element name="ConstBlock">
            <xsl:if test="@angle">
                <xsl:attribute name="angle">
                    <xsl:value-of select="@angle" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@blockType">
                <xsl:attribute name="blockType">
                    <xsl:value-of select="@blockType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@vertex">
                <xsl:attribute name="vertex">
                    <xsl:value-of select="@vertex" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@visible">
                <xsl:attribute name="visible">
                    <xsl:value-of select="@visible" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="EventInBlock" match="EventInBlock">
        <xsl:element name="EventInBlock">
            <xsl:if test="@blockType">
                <xsl:attribute name="blockType">
                    <xsl:value-of select="@blockType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@vertex">
                <xsl:attribute name="vertex">
                    <xsl:value-of select="@vertex" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@visible">
                <xsl:attribute name="visible">
                    <xsl:value-of select="@visible" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="EventOutBlock" match="EventOutBlock">
        <xsl:element name="EventOutBlock">
            <xsl:if test="@blockType">
                <xsl:attribute name="blockType">
                    <xsl:value-of select="@blockType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ExplicitInBlock" match="ExplicitInBlock">
        <xsl:element name="ExplicitInBlock">
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@vertex">
                <xsl:attribute name="vertex">
                    <xsl:value-of select="@vertex" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@visible">
                <xsl:attribute name="visible">
                    <xsl:value-of select="@visible" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ExplicitLink" match="ExplicitLink">
        <xsl:element name="ExplicitLink">
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@source">
                <xsl:attribute name="source">
                    <xsl:value-of select="@source" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@target">
                <xsl:attribute name="target">
                    <xsl:value-of select="@target" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ExplicitOutBlock" match="ExplicitOutBlock">
        <xsl:element name="ExplicitOutBlock">
            <xsl:if test="@angle">
                <xsl:attribute name="angle">
                    <xsl:value-of select="@angle" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@vertex">
                <xsl:attribute name="vertex">
                    <xsl:value-of select="@vertex" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@visible">
                <xsl:attribute name="visible">
                    <xsl:value-of select="@visible" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="GainBlock" match="GainBlock">
        <xsl:element name="GainBlock">
            <xsl:if test="@angle">
                <xsl:attribute name="angle">
                    <xsl:value-of select="@angle" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@dependsOnU">
                <xsl:attribute name="dependsOnU">
                    <xsl:value-of select="@dependsOnU" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@vertex">
                <xsl:attribute name="vertex">
                    <xsl:value-of select="@vertex" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@visible">
                <xsl:attribute name="visible">
                    <xsl:value-of select="@visible" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="GroudBlock" match="GroudBlock">
        <xsl:element name="GroundBlock">
            <xsl:if test="@dependsOnU">
                <xsl:attribute name="dependsOnU">
                    <xsl:value-of select="@dependsOnU" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ImplicitInBlock" match="ImplicitInBlock">
        <xsl:element name="ImplicitInBlock">
            <xsl:if test="@angle">
                <xsl:attribute name="angle">
                    <xsl:value-of select="@angle" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ImplicitLink" match="ImplicitLink">
        <xsl:element name="ImplicitLink">
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@source">
                <xsl:attribute name="source">
                    <xsl:value-of select="@source" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@target">
                <xsl:attribute name="target">
                    <xsl:value-of select="@target" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ImplicitOutBlock" match="ImplicitOutBlock">
        <xsl:element name="ImplicitOutBlock">
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="PrintBlock" match="PrintBlock">
        <xsl:element name="PrintBlock">
            <xsl:if test="@blockType">
                <xsl:attribute name="blockType">
                    <xsl:value-of select="@blockType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="Product" match="Product">
        <xsl:element name="Product">
            <xsl:if test="@dependsOnU">
                <xsl:attribute name="dependsOnU">
                    <xsl:value-of select="@dependsOnU" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="RoundBlock" match="RoundBlock">
        <xsl:element name="RoundBlock">
            <xsl:if test="@blockType">
                <xsl:attribute name="blockType">
                    <xsl:value-of select="@blockType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@dependsOnU">
                <xsl:attribute name="dependsOnU">
                    <xsl:value-of select="@dependsOnU" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="SplitBlock" match="SplitBlock">
        <xsl:element name="SplitBlock">
            <xsl:if test="@blockType">
                <xsl:attribute name="blockType">
                    <xsl:value-of select="@blockType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@dependsOnU">
                <xsl:attribute name="dependsOnU">
                    <xsl:value-of select="@dependsOnU" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@vertex">
                <xsl:attribute name="vertex">
                    <xsl:value-of select="@vertex" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@visible">
                <xsl:attribute name="visible">
                    <xsl:value-of select="@visible" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="Summation" match="Summation">
        <xsl:element name="Summation">
            <xsl:if test="@dependsOnU">
                <xsl:attribute name="dependsOnU">
                    <xsl:value-of select="@dependsOnU" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="SuperBlock" match="SuperBlock">
        <xsl:element name="SuperBlock">
            <xsl:if test="@angle">
                <xsl:attribute name="angle">
                    <xsl:value-of select="@angle" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@blockType">
                <xsl:attribute name="blockType">
                    <xsl:value-of select="@blockType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@vertex">
                <xsl:attribute name="vertex">
                    <xsl:value-of select="@vertex" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@visible">
                <xsl:attribute name="visible">
                    <xsl:value-of select="@visible" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="SuperBlockDiagram" match="SuperBlockDiagram">
        <xsl:element name="SuperBlockDiagram">
            <xsl:if test="name(..)='BasicBlock'">
                <xsl:if test="@as">
                    <xsl:attribute name="as">
                        <xsl:value-of select="@as" />
                    </xsl:attribute>
                </xsl:if>
            </xsl:if>
            <xsl:if test="@background">
                <xsl:attribute name="background">
                    <xsl:value-of select="@background" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@finalIntegrationTime">
                <xsl:attribute name="finalIntegrationTime">
                    <xsl:value-of select="@finalIntegrationTime" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@gridEnabled">
                <xsl:attribute name="gridEnabled">
                    <xsl:value-of select="@gridEnabled" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@integratorAbsoluteTolerance">
                <xsl:attribute name="integratorAbsoluteTolerance">
                    <xsl:value-of select="@integratorAbsoluteTolerance" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@integratorRelativeTolerance">
                <xsl:attribute name="integratorRelativeTolerance">
                    <xsl:value-of select="@integratorRelativeTolerance" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@maxIntegrationTimeInterval">
                <xsl:attribute name="maxIntegrationTimeInterval">
                    <xsl:value-of select="@maxIntegrationTimeInterval" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@solver">
                <xsl:attribute name="solver">
                    <xsl:value-of select="@solver" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@title">
                <xsl:attribute name="title">
                    <xsl:value-of select="@title" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@toleranceOnTime">
                <xsl:attribute name="toleranceOnTime">
                    <xsl:value-of select="@toleranceOnTime" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="TextBlock" match="TextBlock">
        <xsl:element name="TextBlock">
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@vertex">
                <xsl:attribute name="vertex">
                    <xsl:value-of select="@vertex" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@visible">
                <xsl:attribute name="visible">
                    <xsl:value-of select="@visible" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="VoltageSensorBlock" match="VoltageSensorBlock">
        <xsl:element name="VoltageSensorBlock">
            <xsl:if test="@dependsOnU">
                <xsl:attribute name="dependsOnU">
                    <xsl:value-of select="@dependsOnU" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <!--  <xsl:template name="mxCell" match="mxCell">
            <xsl:element name="mxCell">
            

            <xsl:if test="name(..)='BasicBlock'">
            <xsl:if test="@as">
            <xsl:attribute name="as">
            <xsl:value-of select="@as"/>
            </xsl:attribute>
            </xsl:if>
                </xsl:if>

            <xsl:if test="@connectable">
            <xsl:attribute name="connectable">
            <xsl:value-of select="@connectable"/>
            </xsl:attribute>
            </xsl:if>
            <xsl:if test="@edge">
            <xsl:attribute name="edge">
            <xsl:value-of select="@edge"/>
            </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
            <xsl:attribute name="id">
            <xsl:value-of select="@id"/>
            </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
            <xsl:attribute name="parent">
            <xsl:value-of select="@parent"/>
            </xsl:attribute>
            </xsl:if>
            <xsl:if test="@source">
            <xsl:attribute name="source">
            <xsl:value-of select="@source"/>
            </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
            <xsl:attribute name="style">
            <xsl:value-of select="@style"/>
            </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
            <xsl:attribute name="value">
            <xsl:value-of select="@value"/>
            </xsl:attribute>
            </xsl:if>
            <xsl:if test="@vertex">
            <xsl:attribute name="vertex">
            <xsl:value-of select="@vertex"/>
            </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates/>
            </xsl:element>
    </xsl:template> -->
    <xsl:template name="mxPoint" match="mxPoint">
        <xsl:element name="mxPoint">
            <xsl:if test="@as">
                <xsl:attribute name="as">
                    <xsl:value-of select="@as" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@x">
                <xsl:attribute name="x">
                    <xsl:value-of select="@x" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@y">
                <xsl:attribute name="y">
                    <xsl:value-of select="@y" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="data" match="data">
        <xsl:element name="data">
            <xsl:if test="@bUnsigned">
                <xsl:attribute name="bUnsigned">
                    <xsl:value-of select="@bUnsigned" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@column">
                <xsl:attribute name="column">
                    <xsl:value-of select="@column" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@line">
                <xsl:attribute name="line">
                    <xsl:value-of select="@line" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@realPart">
                <xsl:attribute name="realPart">
                    <xsl:value-of select="@realPart" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@imaginaryPart">
                <xsl:attribute name="imaginaryPart">
                    <xsl:value-of select="@imaginaryPart" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ScilabDouble" match="ScilabDouble">
        <xsl:element name="ScilabDouble">
            <xsl:if test="name(..)='BasicBlock'">
                <xsl:if test="@as">
                    <xsl:attribute name="as">
                        <xsl:value-of select="@as" />
                    </xsl:attribute>
                </xsl:if>
            </xsl:if>
            <xsl:choose>
                <xsl:when test="@height">
                    <xsl:attribute name="height">
                        <xsl:value-of select="@height" />
                    </xsl:attribute>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:attribute name="height">0</xsl:attribute>
                </xsl:otherwise>
            </xsl:choose>
            <xsl:choose>
                <xsl:when test="@width">
                    <xsl:attribute name="width">
                        <xsl:value-of select="@width" />
                    </xsl:attribute>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:attribute name="width">0</xsl:attribute>
                </xsl:otherwise>
            </xsl:choose>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ScilabString" match="ScilabString">
        <xsl:element name="ScilabString">
            <xsl:if test="name(..)='BasicBlock'">
                <xsl:if test="@as">
                    <xsl:attribute name="as">
                        <xsl:value-of select="@as" />
                    </xsl:attribute>
                </xsl:if>
            </xsl:if>
            <xsl:choose>
                <xsl:when test="@height">
                    <xsl:attribute name="height">
                        <xsl:value-of select="@height" />
                    </xsl:attribute>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:attribute name="height">0</xsl:attribute>
                </xsl:otherwise>
            </xsl:choose>
            <xsl:choose>
                <xsl:when test="@width">
                    <xsl:attribute name="width">
                        <xsl:value-of select="@width" />
                    </xsl:attribute>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:attribute name="width">0</xsl:attribute>
                </xsl:otherwise>
            </xsl:choose>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ControlPort" match="ControlPort">
        <xsl:element name="ControlPort">
            <xsl:if test="name(..)='BasicBlock'">
                <xsl:if test="@as">
                    <xsl:attribute name="as">
                        <xsl:value-of select="@as" />
                    </xsl:attribute>
                </xsl:if>
            </xsl:if>
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@connectedLinkId">
                <xsl:attribute name="connectedLinkId">
                    <xsl:value-of select="@connectedLinkId" />
                </xsl:attribute>
            </xsl:if>
            <!-- <xsl:if test="@dataType">
                <xsl:attribute name="dataType">
                    <xsl:value-of select="@dataType" />
                </xsl:attribute>
            </xsl:if> -->
            <xsl:attribute name="dataType">UNKNOW_TYPE</xsl:attribute>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <!-- <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if> -->
            
            <xsl:if test="@visbile">
                <xsl:attribute name="visbile">
                    <xsl:value-of select="@visbile" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="mxGeometry" match="mxGeometry">
        <xsl:element name="mxGeometry">
            <xsl:if test="@as">
                <xsl:attribute name="as">
                    <xsl:value-of select="@as" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@height">
                <xsl:attribute name="height">
                    <xsl:value-of select="@height" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@relative">
                <xsl:attribute name="relative">
                    <xsl:value-of select="@relative" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@width">
                <xsl:attribute name="width">
                    <xsl:value-of select="@width" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@x">
                <xsl:attribute name="x">
                    <xsl:value-of select="@x" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@y">
                <xsl:attribute name="y">
                    <xsl:value-of select="@y" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ExplicitOutputPort" match="ExplicitOutputPort">
        <xsl:element name="ExplicitOutputPort">
            <xsl:if test="name(..)='BasicBlock'">
                <xsl:if test="@as">
                    <xsl:attribute name="as">
                        <xsl:value-of select="@as" />
                    </xsl:attribute>
                </xsl:if>
            </xsl:if>
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@connectedLinkId">
                <xsl:attribute name="connectedLinkId">
                    <xsl:value-of select="@connectedLinkId" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@dataColumns">
                <xsl:attribute name="dataColumns">
                    <xsl:value-of select="@dataColumns" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@dataLines">
                <xsl:attribute name="dataLines">
                    <xsl:value-of select="@dataLines" />
                </xsl:attribute>
            </xsl:if>
            <xsl:choose>
                <xsl:when test="@dataType">
                    <xsl:attribute name="dataType">
                        <xsl:value-of select="@dataType" />
                    </xsl:attribute>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:attribute name="dataType">REAL_MATRIX</xsl:attribute>
                </xsl:otherwise>
            </xsl:choose>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <!-- <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if> -->
            <xsl:if test="@visible">
                <xsl:attribute name="visible">
                    <xsl:value-of select="@visible" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ExplicitInputPort" match="ExplicitInputPort">
        <xsl:element name="ExplicitInputPort">
            <xsl:if test="name(..)='BasicBlock'">
                <xsl:if test="@as">
                    <xsl:attribute name="as">
                        <xsl:value-of select="@as" />
                    </xsl:attribute>
                </xsl:if>
            </xsl:if>
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@connectedLinkId">
                <xsl:attribute name="connectedLinkId">
                    <xsl:value-of select="@connectedLinkId" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@dataColumns">
                <xsl:attribute name="dataColumns">
                    <xsl:value-of select="@dataColumns" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@dataLines">
                <xsl:attribute name="dataLines">
                    <xsl:value-of select="@dataLines" />
                </xsl:attribute>
            </xsl:if>
            <xsl:choose>
                <xsl:when test="@dataType">
                    <xsl:attribute name="dataType">
                        <xsl:value-of select="@dataType" />
                    </xsl:attribute>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:attribute name="dataType">REAL_MATRIX</xsl:attribute>
                </xsl:otherwise>
            </xsl:choose>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
           <!--  <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if> -->
            <xsl:if test="@visible">
                <xsl:attribute name="visible">
                    <xsl:value-of select="@visible" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ImplicitInputPort" match="ImplicitInputPort">
        <xsl:element name="ImplicitInputPort">
            <xsl:if test="name(..)='BasicBlock'">
                <xsl:if test="@as">
                    <xsl:attribute name="as">
                        <xsl:value-of select="@as" />
                    </xsl:attribute>
                </xsl:if>
            </xsl:if>
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@connectedLinkId">
                <xsl:attribute name="connectedLinkId">
                    <xsl:value-of select="@connectedLinkId" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@dataColumns">
                <xsl:attribute name="dataColumns">
                    <xsl:value-of select="@dataColumns" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@dataLines">
                <xsl:attribute name="dataLines">
                    <xsl:value-of select="@dataLines" />
                </xsl:attribute>
            </xsl:if>
            <xsl:choose>
                <xsl:when test="@dataType">
                    <xsl:attribute name="dataType">
                        <xsl:value-of select="@dataType" />
                    </xsl:attribute>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:attribute name="dataType">REAL_MATRIX</xsl:attribute>
                </xsl:otherwise>
            </xsl:choose>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
           <!--  <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if> -->
            <xsl:if test="@visible">
                <xsl:attribute name="visible">
                    <xsl:value-of select="@visible" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="ImplicitOutputPort" match="ImplicitOutputPort">
        <xsl:element name="ImplicitOutputPort">
            <xsl:if test="name(..)='BasicBlock'">
                <xsl:if test="@as">
                    <xsl:attribute name="as">
                        <xsl:value-of select="@as" />
                    </xsl:attribute>
                </xsl:if>
            </xsl:if>
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@connectedLinkId">
                <xsl:attribute name="connectedLinkId">
                    <xsl:value-of select="@connectedLinkId" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@dataColumns">
                <xsl:attribute name="dataColumns">
                    <xsl:value-of select="@dataColumns" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@dataLines">
                <xsl:attribute name="dataLines">
                    <xsl:value-of select="@dataLines" />
                </xsl:attribute>
            </xsl:if>
            <xsl:choose>
                <xsl:when test="@dataType">
                    <xsl:attribute name="dataType">
                        <xsl:value-of select="@dataType" />
                    </xsl:attribute>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:attribute name="dataType">REAL_MATRIX</xsl:attribute>
                </xsl:otherwise>
            </xsl:choose>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <!-- <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if> -->
            <xsl:if test="@visible">
                <xsl:attribute name="visible">
                    <xsl:value-of select="@visible" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="BasicBlock" match="BasicBlock">
        <xsl:element name="BasicBlock">
            <xsl:if test="@angle">
                <xsl:attribute name="angle">
                    <xsl:value-of select="@angle" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="name(..)='BasicBlock'">
                <xsl:if test="@as">
                    <xsl:attribute name="as">
                        <xsl:value-of select="@as" />
                    </xsl:attribute>
                </xsl:if>
            </xsl:if>
            <xsl:if test="@blockType">
                <xsl:attribute name="blockType">
                    <xsl:value-of select="@blockType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@dependsOnT">
                <xsl:attribute name="dependsOnT">
                    <xsl:value-of select="@dependsOnT" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@dependsOnU">
                <xsl:attribute name="dependsOnU">
                    <xsl:value-of select="@dependsOnU" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@interfaceFunctionName">
                <xsl:attribute name="interfaceFunctionName">
                    <xsl:value-of select="@interfaceFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionName">
                <xsl:attribute name="simulationFunctionName">
                    <xsl:value-of select="@simulationFunctionName" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@simulationFunctionType">
                <xsl:attribute name="simulationFunctionType">
                    <xsl:value-of select="@simulationFunctionType" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@vertex">
                <xsl:attribute name="vertex">
                    <xsl:value-of select="@vertex" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@visible">
                <xsl:attribute name="visible">
                    <xsl:value-of select="@visible" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="CommandPort" match="CommandPort">
        <xsl:element name="CommandPort">
            <xsl:if test="name(..)='BasicBlock'">
                <xsl:if test="@as">
                    <xsl:attribute name="as">
                        <xsl:value-of select="@as" />
                    </xsl:attribute>
                </xsl:if>
            </xsl:if>
            <xsl:if test="@connectable">
                <xsl:attribute name="connectable">
                    <xsl:value-of select="@connectable" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@connectedLinkId">
                <xsl:attribute name="connectedLinkId">
                    <xsl:value-of select="@connectedLinkId" />
                </xsl:attribute>
            </xsl:if>
            <!-- <xsl:if test="@dataType">
                <xsl:attribute name="dataType">
                    <xsl:value-of select="@dataType" />
                </xsl:attribute>
            </xsl:if> -->
            <xsl:attribute name="dataType">UNKNOW_TYPE</xsl:attribute>
            <xsl:if test="@id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@initialState">
                <xsl:attribute name="initialState">
                    <xsl:value-of select="@initialState" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@ordering">
                <xsl:attribute name="ordering">
                    <xsl:value-of select="@ordering" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@parent">
                <xsl:attribute name="parent">
                    <xsl:value-of select="@parent" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@style">
                <xsl:attribute name="style">
                    <xsl:value-of select="@style" />
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="@visible">
                <xsl:attribute name="visible">
                    <xsl:value-of select="@visible" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <xsl:template name="Orientation" match="Orientation">
        <xsl:element name="Orientation">
            <xsl:if test="name(..)='BasicBlock'">
                <xsl:if test="@as">
                    <xsl:attribute name="as">
                        <xsl:value-of select="@as" />
                    </xsl:attribute>
                </xsl:if>
            </xsl:if>
            <xsl:if test="@value">
                <xsl:attribute name="value">
                    <xsl:value-of select="@value" />
                </xsl:attribute>
            </xsl:if>
            <xsl:apply-templates />
        </xsl:element>
    </xsl:template>
    <!-- To remove the instance variable in generated Xcos-->
    <xsl:template match="mxCell/instance"/>
</xsl:stylesheet>

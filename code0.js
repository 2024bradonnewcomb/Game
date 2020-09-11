gdjs.DemoCode = {};
gdjs.DemoCode.GDStartObjects1= [];
gdjs.DemoCode.GDStartObjects2= [];
gdjs.DemoCode.GDLevel_95SelectObjects1= [];
gdjs.DemoCode.GDLevel_95SelectObjects2= [];
gdjs.DemoCode.GDInstructionsObjects1= [];
gdjs.DemoCode.GDInstructionsObjects2= [];
gdjs.DemoCode.GDBackgroundObjects1= [];
gdjs.DemoCode.GDBackgroundObjects2= [];
gdjs.DemoCode.GDBackObjects1= [];
gdjs.DemoCode.GDBackObjects2= [];
gdjs.DemoCode.GDPlayerObjects1= [];
gdjs.DemoCode.GDPlayerObjects2= [];
gdjs.DemoCode.GDTextObjects1= [];
gdjs.DemoCode.GDTextObjects2= [];
gdjs.DemoCode.GDHorizontal_95PlatformObjects1= [];
gdjs.DemoCode.GDHorizontal_95PlatformObjects2= [];
gdjs.DemoCode.GDVerical_95PlatformObjects1= [];
gdjs.DemoCode.GDVerical_95PlatformObjects2= [];
gdjs.DemoCode.GDKill_95PlatformObjects1= [];
gdjs.DemoCode.GDKill_95PlatformObjects2= [];
gdjs.DemoCode.GDNewObjectObjects1= [];
gdjs.DemoCode.GDNewObjectObjects2= [];
gdjs.DemoCode.GDNewObject2Objects1= [];
gdjs.DemoCode.GDNewObject2Objects2= [];

gdjs.DemoCode.conditionTrue_0 = {val:false};
gdjs.DemoCode.condition0IsTrue_0 = {val:false};
gdjs.DemoCode.condition1IsTrue_0 = {val:false};
gdjs.DemoCode.condition2IsTrue_0 = {val:false};


gdjs.DemoCode.mapOfGDgdjs_46DemoCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.DemoCode.GDBackObjects1});gdjs.DemoCode.mapOfGDgdjs_46DemoCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.DemoCode.GDBackObjects1});gdjs.DemoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DemoCode.GDBackObjects1);

gdjs.DemoCode.condition0IsTrue_0.val = false;
gdjs.DemoCode.condition1IsTrue_0.val = false;
{
gdjs.DemoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DemoCode.mapOfGDgdjs_46DemoCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DemoCode.condition0IsTrue_0.val ) {
{
gdjs.DemoCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.DemoCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DemoCode.GDBackObjects1);

gdjs.DemoCode.condition0IsTrue_0.val = false;
gdjs.DemoCode.condition1IsTrue_0.val = false;
{
gdjs.DemoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DemoCode.mapOfGDgdjs_46DemoCode_46GDBackObjects1Objects, runtimeScene, true, true);
}if ( gdjs.DemoCode.condition0IsTrue_0.val ) {
{
gdjs.DemoCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.DemoCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.DemoCode.condition0IsTrue_0.val = false;
{
gdjs.DemoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != 0;
}if (gdjs.DemoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "0");
}}

}


{


gdjs.DemoCode.condition0IsTrue_0.val = false;
{
gdjs.DemoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.DemoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "0");
}}

}


{


gdjs.DemoCode.condition0IsTrue_0.val = false;
{
gdjs.DemoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != 1;
}if (gdjs.DemoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "1");
}}

}


{


gdjs.DemoCode.condition0IsTrue_0.val = false;
{
gdjs.DemoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.DemoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "1");
}}

}


{


gdjs.DemoCode.condition0IsTrue_0.val = false;
{
gdjs.DemoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != 2;
}if (gdjs.DemoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "2");
}}

}


{


gdjs.DemoCode.condition0IsTrue_0.val = false;
{
gdjs.DemoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs.DemoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "2");
}}

}


{


gdjs.DemoCode.condition0IsTrue_0.val = false;
{
gdjs.DemoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs.DemoCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


};

gdjs.DemoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DemoCode.GDStartObjects1.length = 0;
gdjs.DemoCode.GDStartObjects2.length = 0;
gdjs.DemoCode.GDLevel_95SelectObjects1.length = 0;
gdjs.DemoCode.GDLevel_95SelectObjects2.length = 0;
gdjs.DemoCode.GDInstructionsObjects1.length = 0;
gdjs.DemoCode.GDInstructionsObjects2.length = 0;
gdjs.DemoCode.GDBackgroundObjects1.length = 0;
gdjs.DemoCode.GDBackgroundObjects2.length = 0;
gdjs.DemoCode.GDBackObjects1.length = 0;
gdjs.DemoCode.GDBackObjects2.length = 0;
gdjs.DemoCode.GDPlayerObjects1.length = 0;
gdjs.DemoCode.GDPlayerObjects2.length = 0;
gdjs.DemoCode.GDTextObjects1.length = 0;
gdjs.DemoCode.GDTextObjects2.length = 0;
gdjs.DemoCode.GDHorizontal_95PlatformObjects1.length = 0;
gdjs.DemoCode.GDHorizontal_95PlatformObjects2.length = 0;
gdjs.DemoCode.GDVerical_95PlatformObjects1.length = 0;
gdjs.DemoCode.GDVerical_95PlatformObjects2.length = 0;
gdjs.DemoCode.GDKill_95PlatformObjects1.length = 0;
gdjs.DemoCode.GDKill_95PlatformObjects2.length = 0;
gdjs.DemoCode.GDNewObjectObjects1.length = 0;
gdjs.DemoCode.GDNewObjectObjects2.length = 0;
gdjs.DemoCode.GDNewObject2Objects1.length = 0;
gdjs.DemoCode.GDNewObject2Objects2.length = 0;

gdjs.DemoCode.eventsList0(runtimeScene);
return;

}

gdjs['DemoCode'] = gdjs.DemoCode;

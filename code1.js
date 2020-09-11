gdjs.Level_32SelectCode = {};
gdjs.Level_32SelectCode.GDStartObjects1= [];
gdjs.Level_32SelectCode.GDStartObjects2= [];
gdjs.Level_32SelectCode.GDLevel_95SelectObjects1= [];
gdjs.Level_32SelectCode.GDLevel_95SelectObjects2= [];
gdjs.Level_32SelectCode.GDBackgroundObjects1= [];
gdjs.Level_32SelectCode.GDBackgroundObjects2= [];
gdjs.Level_32SelectCode.GDBackObjects1= [];
gdjs.Level_32SelectCode.GDBackObjects2= [];
gdjs.Level_32SelectCode.GDN1Objects1= [];
gdjs.Level_32SelectCode.GDN1Objects2= [];
gdjs.Level_32SelectCode.GDN2Objects1= [];
gdjs.Level_32SelectCode.GDN2Objects2= [];
gdjs.Level_32SelectCode.GDN3Objects1= [];
gdjs.Level_32SelectCode.GDN3Objects2= [];
gdjs.Level_32SelectCode.GDN4Objects1= [];
gdjs.Level_32SelectCode.GDN4Objects2= [];
gdjs.Level_32SelectCode.GDN5Objects1= [];
gdjs.Level_32SelectCode.GDN5Objects2= [];

gdjs.Level_32SelectCode.conditionTrue_0 = {val:false};
gdjs.Level_32SelectCode.condition0IsTrue_0 = {val:false};
gdjs.Level_32SelectCode.condition1IsTrue_0 = {val:false};
gdjs.Level_32SelectCode.condition2IsTrue_0 = {val:false};
gdjs.Level_32SelectCode.condition3IsTrue_0 = {val:false};


gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.Level_32SelectCode.GDBackObjects1});gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDLevel_9595SelectObjects1Objects = Hashtable.newFrom({"Level_Select": gdjs.Level_32SelectCode.GDLevel_95SelectObjects1});gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDN1Objects1Objects = Hashtable.newFrom({"N1": gdjs.Level_32SelectCode.GDN1Objects1});gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDN2Objects1Objects = Hashtable.newFrom({"N2": gdjs.Level_32SelectCode.GDN2Objects1});gdjs.Level_32SelectCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Level_32SelectCode.GDBackObjects1);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
gdjs.Level_32SelectCode.condition1IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_32SelectCode.condition0IsTrue_0.val ) {
{
gdjs.Level_32SelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Level_32SelectCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level_Select"), gdjs.Level_32SelectCode.GDLevel_95SelectObjects1);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
gdjs.Level_32SelectCode.condition1IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDLevel_9595SelectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_32SelectCode.condition0IsTrue_0.val ) {
{
gdjs.Level_32SelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Level_32SelectCode.condition1IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("N1"), gdjs.Level_32SelectCode.GDN1Objects1);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
gdjs.Level_32SelectCode.condition1IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDN1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_32SelectCode.condition0IsTrue_0.val ) {
{
gdjs.Level_32SelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Level_32SelectCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("N2"), gdjs.Level_32SelectCode.GDN2Objects1);

gdjs.Level_32SelectCode.condition0IsTrue_0.val = false;
gdjs.Level_32SelectCode.condition1IsTrue_0.val = false;
gdjs.Level_32SelectCode.condition2IsTrue_0.val = false;
{
gdjs.Level_32SelectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_32SelectCode.mapOfGDgdjs_46Level_9532SelectCode_46GDN2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_32SelectCode.condition0IsTrue_0.val ) {
{
gdjs.Level_32SelectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level_32SelectCode.condition1IsTrue_0.val ) {
{
gdjs.Level_32SelectCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 2;
}}
}
if (gdjs.Level_32SelectCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}

}


};

gdjs.Level_32SelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_32SelectCode.GDStartObjects1.length = 0;
gdjs.Level_32SelectCode.GDStartObjects2.length = 0;
gdjs.Level_32SelectCode.GDLevel_95SelectObjects1.length = 0;
gdjs.Level_32SelectCode.GDLevel_95SelectObjects2.length = 0;
gdjs.Level_32SelectCode.GDBackgroundObjects1.length = 0;
gdjs.Level_32SelectCode.GDBackgroundObjects2.length = 0;
gdjs.Level_32SelectCode.GDBackObjects1.length = 0;
gdjs.Level_32SelectCode.GDBackObjects2.length = 0;
gdjs.Level_32SelectCode.GDN1Objects1.length = 0;
gdjs.Level_32SelectCode.GDN1Objects2.length = 0;
gdjs.Level_32SelectCode.GDN2Objects1.length = 0;
gdjs.Level_32SelectCode.GDN2Objects2.length = 0;
gdjs.Level_32SelectCode.GDN3Objects1.length = 0;
gdjs.Level_32SelectCode.GDN3Objects2.length = 0;
gdjs.Level_32SelectCode.GDN4Objects1.length = 0;
gdjs.Level_32SelectCode.GDN4Objects2.length = 0;
gdjs.Level_32SelectCode.GDN5Objects1.length = 0;
gdjs.Level_32SelectCode.GDN5Objects2.length = 0;

gdjs.Level_32SelectCode.eventsList0(runtimeScene);
return;

}

gdjs['Level_32SelectCode'] = gdjs.Level_32SelectCode;

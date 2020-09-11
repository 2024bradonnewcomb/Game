gdjs.Level_321Code = {};
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDFloorObjects1= [];
gdjs.Level_321Code.GDFloorObjects2= [];
gdjs.Level_321Code.GDGoalObjects1= [];
gdjs.Level_321Code.GDGoalObjects2= [];
gdjs.Level_321Code.GDLadderObjects1= [];
gdjs.Level_321Code.GDLadderObjects2= [];
gdjs.Level_321Code.GDVerical_95PlatformObjects1= [];
gdjs.Level_321Code.GDVerical_95PlatformObjects2= [];
gdjs.Level_321Code.GDHorizontal_95PlatformObjects1= [];
gdjs.Level_321Code.GDHorizontal_95PlatformObjects2= [];
gdjs.Level_321Code.GDMenu_95ButtonObjects1= [];
gdjs.Level_321Code.GDMenu_95ButtonObjects2= [];
gdjs.Level_321Code.GDRestart_95ButtonObjects1= [];
gdjs.Level_321Code.GDRestart_95ButtonObjects2= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

};gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDGoalObjects1Objects = Hashtable.newFrom({"Goal": gdjs.Level_321Code.GDGoalObjects1});gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDVerical_9595PlatformObjects1Objects = Hashtable.newFrom({"Verical_Platform": gdjs.Level_321Code.GDVerical_95PlatformObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects1Objects = Hashtable.newFrom({"Floor": gdjs.Level_321Code.GDFloorObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects1Objects = Hashtable.newFrom({"Floor": gdjs.Level_321Code.GDFloorObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDVerical_9595PlatformObjects1Objects = Hashtable.newFrom({"Verical_Platform": gdjs.Level_321Code.GDVerical_95PlatformObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHorizontal_9595PlatformObjects1Objects = Hashtable.newFrom({"Horizontal_Platform": gdjs.Level_321Code.GDHorizontal_95PlatformObjects1});gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform"), gdjs.Level_321Code.GDHorizontal_95PlatformObjects1);
/* Reuse gdjs.Level_321Code.GDVerical_95PlatformObjects1 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDVerical_9595PlatformObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHorizontal_9595PlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHorizontal_9595PlatformObjects1Objects = Hashtable.newFrom({"Horizontal_Platform": gdjs.Level_321Code.GDHorizontal_95PlatformObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects1Objects = Hashtable.newFrom({"Floor": gdjs.Level_321Code.GDFloorObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects1Objects = Hashtable.newFrom({"Floor": gdjs.Level_321Code.GDFloorObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHorizontal_9595PlatformObjects1Objects = Hashtable.newFrom({"Horizontal_Platform": gdjs.Level_321Code.GDHorizontal_95PlatformObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDVerical_9595PlatformObjects1Objects = Hashtable.newFrom({"Verical_Platform": gdjs.Level_321Code.GDVerical_95PlatformObjects1});gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMenu_9595ButtonObjects1Objects = Hashtable.newFrom({"Menu_Button": gdjs.Level_321Code.GDMenu_95ButtonObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRestart_9595ButtonObjects1Objects = Hashtable.newFrom({"Restart_Button": gdjs.Level_321Code.GDRestart_95ButtonObjects1});gdjs.Level_321Code.eventsList6 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.Level_321Code.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.Level_321Code.GDGoalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDGoalObjects1Objects, false, runtimeScene, true);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 2;
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}}

}


{


gdjs.Level_321Code.eventsList2(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("Verical_Platform"), gdjs.Level_321Code.GDVerical_95PlatformObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDVerical_95PlatformObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDVerical_95PlatformObjects1[i].setX(100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Level_321Code.GDFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Verical_Platform"), gdjs.Level_321Code.GDVerical_95PlatformObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDVerical_9595PlatformObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFloorObjects1 */
/* Reuse gdjs.Level_321Code.GDVerical_95PlatformObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDVerical_95PlatformObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDVerical_95PlatformObjects1[i].separateFromObjectsList(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Verical_Platform"), gdjs.Level_321Code.GDVerical_95PlatformObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDVerical_95PlatformObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDVerical_95PlatformObjects1[i].getY() <= 32 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDVerical_95PlatformObjects1[k] = gdjs.Level_321Code.GDVerical_95PlatformObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDVerical_95PlatformObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDVerical_95PlatformObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDVerical_95PlatformObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDVerical_95PlatformObjects1[i].setY(32);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Verical_Platform"), gdjs.Level_321Code.GDVerical_95PlatformObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDVerical_95PlatformObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDVerical_95PlatformObjects1[i].getY() >= 488 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDVerical_95PlatformObjects1[k] = gdjs.Level_321Code.GDVerical_95PlatformObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDVerical_95PlatformObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDVerical_95PlatformObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDVerical_95PlatformObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDVerical_95PlatformObjects1[i].setY(488);
}
}
{ //Subevents
gdjs.Level_321Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_321Code.eventsList4(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform"), gdjs.Level_321Code.GDHorizontal_95PlatformObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDHorizontal_95PlatformObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHorizontal_95PlatformObjects1[i].setY(192);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Level_321Code.GDFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform"), gdjs.Level_321Code.GDHorizontal_95PlatformObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHorizontal_9595PlatformObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFloorObjects1 */
/* Reuse gdjs.Level_321Code.GDHorizontal_95PlatformObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDHorizontal_95PlatformObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHorizontal_95PlatformObjects1[i].separateFromObjectsList(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloorObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Horizontal_Platform"), gdjs.Level_321Code.GDHorizontal_95PlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Verical_Platform"), gdjs.Level_321Code.GDVerical_95PlatformObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHorizontal_9595PlatformObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDVerical_9595PlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{


gdjs.Level_321Code.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Button"), gdjs.Level_321Code.GDMenu_95ButtonObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMenu_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart_Button"), gdjs.Level_321Code.GDRestart_95ButtonObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRestart_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level 1");
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDFloorObjects1.length = 0;
gdjs.Level_321Code.GDFloorObjects2.length = 0;
gdjs.Level_321Code.GDGoalObjects1.length = 0;
gdjs.Level_321Code.GDGoalObjects2.length = 0;
gdjs.Level_321Code.GDLadderObjects1.length = 0;
gdjs.Level_321Code.GDLadderObjects2.length = 0;
gdjs.Level_321Code.GDVerical_95PlatformObjects1.length = 0;
gdjs.Level_321Code.GDVerical_95PlatformObjects2.length = 0;
gdjs.Level_321Code.GDHorizontal_95PlatformObjects1.length = 0;
gdjs.Level_321Code.GDHorizontal_95PlatformObjects2.length = 0;
gdjs.Level_321Code.GDMenu_95ButtonObjects1.length = 0;
gdjs.Level_321Code.GDMenu_95ButtonObjects2.length = 0;
gdjs.Level_321Code.GDRestart_95ButtonObjects1.length = 0;
gdjs.Level_321Code.GDRestart_95ButtonObjects2.length = 0;

gdjs.Level_321Code.eventsList6(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;

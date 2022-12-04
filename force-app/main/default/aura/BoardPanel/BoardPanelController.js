({
    startGame : function(component, event, helper) {
        let comboBox = component.find("comboBoxValue");
        let comboBoxValue = comboBox.get("v.value");

        const selectedMode = component.get("v.selectedMode");

        component.set("v.selectedMode", comboBoxValue);

        if(selectedMode){
            const boardComp = component.find("boardcomp");
            // call aura method
            boardComp.startGame(); 
        }
        alert("Selected game mode is :"+comboBoxValue);

        if(comboBoxValue != null){
            component.set("v.Flag", "true");
        } 
    },

    reshuffleBoard : function(component, event, helper){
        const boardComp = component.find("boardcomp");
        boardComp.reshuffleBoard();
        component.set("v.reshuffleDisabled", true);
    },

    onResultHandler : function(component, event, helper){
        const result = event.getParam("result");
        if(result === "win"){
            component.set("v.reshuffleDisabled", true);
        } else {
            component.set("v.reshuffleDisabled", false);
        }
        helper.addResultRecord(component, result);
    }
})
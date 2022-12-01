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
    }
})
({
    startGame : function(component, event, helper) {
        let comboBox = component.find("comboBoxValue");
        let comboBoxValue = comboBox.get("v.value");
        component.set("v.selectedMode", comboBoxValue);
        alert("Selected game mode is :"+comboBoxValue);

        if(comboBoxValue != null){
            component.set("v.Flag", "true");
        } 
    }
})

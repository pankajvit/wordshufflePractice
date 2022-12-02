({
    blockClickHandler : function(component, event, helper) {
       let open = component.get("v.open");
       // fetch label value
       const label = component.get("v.label");
       if(open === false){
            component.set("v.open", true);
            // fire the event
            const compEvent = component.getEvent("onclick");
            compEvent.setParams({value : label});
            compEvent.fire();
       } 
    },

    scriptsLoaded : function(component){
        const divElement = component.getElement(".board-block");
        fitText(divElement);
    }
})
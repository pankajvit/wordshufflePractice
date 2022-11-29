({
    blockClickHandler : function(component, event, helper) {
       let open = component.get("v.open");
       // fetch label value
       const label = component.get("v.value");
       if(open === false){
            component.set("v.open", true);
       } 
    }
})
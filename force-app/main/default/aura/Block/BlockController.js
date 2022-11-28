({
    blockClickHandler : function(component, event, helper) {
       let open = component.get("v.open");
       if(open === false){
            component.set("v.open", true);
       } 
    }
})

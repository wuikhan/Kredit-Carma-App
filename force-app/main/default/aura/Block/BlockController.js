({
    blockClickHandler : function(component, event, helper) {
       const open = component.get("v.open");
       if(open === false){
        component.set("v.open",true);
        // get the label value
        const label = component.get("v.label");
        //fire the block click event
        let compEvent = component.getEvent("onclick");
        compEvent.setParams({value : label});
        compEvent.fire();
       }
    },

    scriptsLoaded: function(component, event,helper){
      const divElement =  component.getElement(".board-block");
      FitText(divElement);
    }
})
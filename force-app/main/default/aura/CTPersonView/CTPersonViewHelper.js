({
  updateStatus: function (component) {
    const recordId = component.get("v.recordId");
    const action = component.get("c.updateHealthStatus");
    action.setParams({
      personId: recordId
    });
    action.setCallback(this, function (response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        this.showToast("Success", "Person Health Status Updated", "success");
      }
    });
    $A.enqueueAction(action);
  },

  showToast: function (title, message, type) {
    const totastEvent = $A.get("e.force:showToast");
    totastEvent.setParams({
      title,
      message,
      type
    });
    totastEvent.fire();
  }
});
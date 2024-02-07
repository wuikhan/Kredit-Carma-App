({
  fetchStatusCount: function (component) {
    const scope = component.get("v.scope");
    let action =
      scope === "person"
        ? component.get("c.getPersonHealthStatusCount")
        : component.get("c.getLocationHealthStatusCount");

    action.setCallback(this, function (response) {
      const state = response.getState();
      console.log("return value", response.getReturnValue());
      if (state === "SUCCESS") {
        component.set("v.count", response.getReturnValue());
      }
    });
    $A.enqueueAction(action);
  }
});
({
  startGame: function (component, event, helper) {
    //access combobox
    let gameModeComboBox = component.find("gameMode");
    //access the value of combobox
    let comboBoxValue = gameModeComboBox.get("v.value");
    // update the selected mode attribute
    component.set("v.selectedGameMode", comboBoxValue);

    const selectedMode = component.get("v.selectedGameMode");

    if (selectedMode) {
      const boardComp = component.find("boardComp");
      boardComp.startGame();
    }
  },

  reshuffleBoard: function (component, event, helper) {
    const boardComp = component.find("boardComp");
    boardComp.reshuffleBoard();
  },
  onResultHandler: function (component, event, helper) {
    const result = event.getParam("result");
    console.log(">>>>>" + result);
    if (result === "win") {
      component.set("v.reshuffleDisabled", true);
      helper.showToast("You Win", "Hurrayyyy", "success");
    } else {
      component.set("v.reshuffleDisabled", false);
      helper.showToast("You lose", "reshuffle the board", "error");
    }
    helper.addResultRecord(component, result);
  }
});
import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class NavigationExample extends NavigationMixin(
  LightningElement
) {
  openCodegator() {
    this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
        url: "https://www.google.com"
      }
    });
  }

  openAccountHome() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Account",
        actionName: "home"
      }
    });
  }

  createNewContact() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Contact",
        actionName: "new"
      }
    });
  }

  oppListView() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Opportunity",
        actionName: "List"
      }
    });
  }

  openCaseRecord() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: "5005f000006RvXDAA0",
        objectApiName: "Case",
        actionName: "view"
      }
    });
  }
  mettingRoomTab() {
    this[NavigationMixin.Navigate]({
      type: "standard__navItemPage",
      attributes: {
        objectApiName: "Meeting_Room"
      }
    });
  }
  previewFile() {
    this[NavigationMixin.Navigate]({
      type: "standard__namedPage",
      attributes: {
        pageName: "filePreview"
      },
      state: {
        recordId: "",
        selectedRecordId: ""
      }
    });
  }
}
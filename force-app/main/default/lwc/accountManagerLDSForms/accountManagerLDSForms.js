import { LightningElement, track } from "lwc";

export default class AccountManagerLDSForms extends LightningElement {
  @track recordId;
  successHandler(event) {
    this.recordId = event.detail.id;
  }

  handleReset() {
    const inputFields = this.template.querySelectorAll("lightning-input-field");
    if (inputFields) {
      inputFields.forEach((field) => {
        field.reset();
      });
    }
  }
}
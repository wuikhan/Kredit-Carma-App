import { LightningElement, track, api } from "lwc";

export default class PublicMethodChild extends LightningElement {
  @track value = ["red"];
  options = [
    { label: "red", value: "red" },
    { label: "blue", value: "blue" },
    { label: "green", value: "green" }
  ];

  @api
  selectCheckbox(checkboxValue) {
    const selectedCheckbox = this.options.find((checkbox) => {
      return checkboxValue === checkbox.value;
    });
    if (selectedCheckbox) {
      this.value = selectedCheckbox.value;
      return "Successfully Checked";
    }
    return "No Checkbox found";
  }
}
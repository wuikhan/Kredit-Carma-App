import { LightningElement, track } from "lwc";

export default class PublicMethodParent extends LightningElement {
  @track value;
  checkboxSelectedHandler() {
    const childComponent = this.template.querySelector("c-public-method-child");
    childComponent.selectCheckbox(this.value);
  }
  onInputChangeHandler(event) {
    this.value = event.target.value;
  }
}
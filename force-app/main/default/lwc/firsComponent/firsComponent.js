import { LightningElement, track } from "lwc";

export default class FirsComponent extends LightningElement {
  @track dynamicGreeting = "Waqas";

  greetingChangeHandler(event) {
    this.dynamicGreeting = event.target.value;
  }
}
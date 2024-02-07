import { LightningElement, track } from "lwc";

export default class LightningExampleAccordionConditional extends LightningElement {
  @track valueOne = "";
  @track valueTwo = "";
  @track valueThree = "";

  handleClick() {
    const sendData = new CustomEvent("data", {
      detail: {
        first: this.valueOne,
        second: this.valueTwo,
        third: this.valueThree
      }
    });
    this.dispatchEvent(sendData);
  }

  onchangeHandler(event) {
    const fieldname = event.target.name;
    if (fieldname === "fieldOne") {
      const one = event.target.value;
      this.valueOne = one;
    } else if (fieldname === "fieldTwo") {
      const two = event.target.value;
      this.valueTwo = two;
    } else if (fieldname === "fieldThree") {
      const three = event.target.value;
      this.valueThree = three;
    }
  }
}
import { LightningElement, track } from "lwc";

export default class LightningExampleAccordionConditional extends LightningElement {
  @track valueFour = "";
  @track valueFive = "";
  @track valueSix = "";

  handleClick() {
    const sendData = new CustomEvent("datatwo", {
      detail: {
        four: this.valueFour,
        five: this.valueFive,
        six: this.valueSix
      }
    });
    this.dispatchEvent(sendData);
  }

  onchangeHandler(event) {
    const fieldname = event.target.name;
    console.log(fieldname);
    if (fieldname === "fieldFour") {
      const four = event.target.value;
      this.valueFour = four;
    } else if (fieldname === "fieldFive") {
      const five = event.target.value;
      this.valueFive = five;
    } else if (fieldname === "fieldSix") {
      const six = event.target.value;
      this.valueSix = six;
    }
  }
}
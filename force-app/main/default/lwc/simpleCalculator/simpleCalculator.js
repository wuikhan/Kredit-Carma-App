import { LightningElement, track } from "lwc";

export default class SimpleCalculator extends LightningElement {
  @track currentResult;
  @track previousResult = [];
  @track showPreviousResult = false;

  firstNumber;
  secondNumber;

  numberChangeHandler(event) {
    const inputBox = event.target.name;
    if (inputBox === "firstNumber") {
      this.firstNumber = event.target.value;
    } else if (inputBox === "secondNumber") {
      this.secondNumber = event.target.value;
    }
  }

  addHandler() {
    const firstN = parseInt(this.firstNumber);
    const secondN = parseInt(this.secondNumber);
    this.currentResult = `Result of ${firstN} and ${secondN} is ${
      firstN + secondN
    }`;

    this.previousResult.push(this.currentResult);
  }
  subHandler() {
    const firstN = parseInt(this.firstNumber);
    const secondN = parseInt(this.secondNumber);

    this.currentResult = `Result of ${firstN} and ${secondN} is ${
      firstN - secondN
    }`;
    this.previousResult.push(this.currentResult);
  }
  multiplyHandler() {
    const firstN = parseInt(this.firstNumber);
    const secondN = parseInt(this.secondNumber);

    this.currentResult = `Result of ${firstN} and ${secondN} is ${
      firstN * secondN
    }`;
    this.previousResult.push(this.currentResult);
  }
  divisionHandler() {
    const firstN = parseInt(this.firstNumber);
    const secondN = parseInt(this.secondNumber);

    this.currentResult = `Result of ${firstN} and ${secondN} is ${
      firstN / secondN
    }`;
    this.previousResult.push(this.currentResult);
  }

  showPreviousResultToggle(event) {
    this.showPreviousResult = event.target.checked;
  }
}
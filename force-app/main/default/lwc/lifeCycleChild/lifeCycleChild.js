import { LightningElement } from "lwc";

export default class LifeCycleChild extends LightningElement {
  constructor() {
    super();
    console.log("child constructor called");
  }

  connectedCallback() {
    console.log("child connectedCallback called");
    window.addEventListener("click", this.handleClick);
  }

  renderedCallback() {
    console.log("child renderedCallback called");
  }

  disconnectedCallback() {
    // alert("child discnnectedCallback called ");
    window.addEventListener("click", this.handleClick);
  }
}

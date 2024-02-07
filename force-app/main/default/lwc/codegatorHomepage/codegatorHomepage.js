import { LightningElement } from "lwc";

export default class CodegatorHomepage extends LightningElement {
  constructor() {
    super();
    console.log("constructor called");
  }

  connectedCallback() {
    console.log("component connected callback is called");
  }
  renderedCallback() {
    console.log("component rendered callback is called");
  }
  disconnectedCallback() {
    console.log("component disconnected callback is called");
  }
}
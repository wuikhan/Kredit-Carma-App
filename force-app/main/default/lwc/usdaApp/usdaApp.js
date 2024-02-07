import { LightningElement } from "lwc";

export default class LightningExampleAccordionConditional extends LightningElement {
  isDVisible = false;

  handleToggleSection(event) {
    this.activeSectionMessage =
      "Open section name:  " + event.detail.openSections;
  }

  get isMessageVisible() {
    return this.activeSectionMessage.length > 0;
  }

  handleClick() {
    console.log("button clicked");
  }
}
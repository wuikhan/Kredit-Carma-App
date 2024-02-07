import { LightningElement, track } from "lwc";

export default class DisplayTabs extends LightningElement {
  @track newdata = [];

  dataFromTabOneHandler(event) {
    const datafromparent = event.detail;
    // this.newdata = JSON.stringify(datafromparent);
    // console.log(this.newdata);
    this.newdata.push(JSON.stringify(datafromparent));
  }

  dataFromTabTwoHandler(event) {
    const datafromtabtwo = event.detail;
    // this.newdata = JSON.stringify(datafromtabtwo);
    // console.log(this.newdata);
    this.newdata.push(JSON.stringify(datafromtabtwo));
    console.log(JSON.stringify(this.newdata));
  }
}
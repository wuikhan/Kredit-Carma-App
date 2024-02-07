import { LightningElement,api } from "lwc";

export default class App extends LightningElement {
    // Expose a recordId property.
    @api recordId;
}
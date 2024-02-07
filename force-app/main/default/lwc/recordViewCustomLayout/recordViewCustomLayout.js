import { LightningElement, api } from 'lwc';
export default class MyComponent extends LightningElement{
    // Expose a recordId property.
    @api recordId;
}
// recordViewGetRecord.js
import { LightningElement, api, wire } from 'lwc';
/* Wire adapter to fetch record data */
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class AccountViewer extends LightningElement {
     /** Id of record to display. */
    @api recordId;

    /* Expose schema objects/fields to the template. */
    accountObject = ACCOUNT_OBJECT;

    /* Load Account.Name for custom rendering */
    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD] })
    record;

    /** Get the Account.Name value. */
    get nameValue() {
        return this.record.data ? getFieldValue(this.record.data, NAME_FIELD) : '';
    }
}
import { LightningElement, wire, track } from "lwc";
import { createRecord, getRecord } from "lightning/uiRecordApi";

const fieldArray = ["Account.Name", "Account.Phone", "Account.Website"];

export default class AccountManagerLDS extends LightningElement {
  @track accountName;
  @track accountPhone;
  @track accountWebsite;

  @track recordId;
  @wire(getRecord, { recordId: "$recordId", fields: fieldArray })
  accountRecord;

  get retrievedAccountName() {
    if (this.accountRecord.data) {
      return this.accountRecord.data.fields.Name.value;
    }
    return undefined;
  }

  get retrievedAccountPhone() {
    if (this.accountRecord.data) {
      return this.accountRecord.data.fields.Phone.value;
    }
    return undefined;
  }

  get retrievedAccountWebsite() {
    if (this.accountRecord.data) {
      return this.accountRecord.data.fields.Website.value;
    }
    return undefined;
  }

  accountNameChangeHandler(event) {
    this.accountName = event.target.value;
  }

  accountPhoneChangeHandler(event) {
    this.accountPhone = event.target.value;
  }

  accountWebsiteChangeHandler(event) {
    this.accountWebsite = event.target.value;
  }

  createAccount() {
    const fields = {
      Name: this.accountName,
      Phone: this.accountPhone,
      Website: this.accountWebsite
    };

    const recordInput = { apiName: "Account", fields };
    createRecord(recordInput)
      .then((response) => {
        this.recordId = response.id;
        console.log("Account has been created", response.id);
      })
      .catch((error) => {
        console.error("Error in creating account", error.body.message);
      });
  }
}
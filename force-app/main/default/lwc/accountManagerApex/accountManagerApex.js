import { LightningElement, track } from "lwc";
import getAllAccounts from "@salesforce/apex/AccountManager.getAccount";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class AccountManagerApex extends LightningElement {
  @track numberOfRecords;
  @track accounts;

  get responseRecieved() {
    if (this.accounts) {
      return true;
    }
    return false;
  }

  numberOfAccountsChangeHandler(event) {
    this.numberOfRecords = event.target.value;
  }

  getAccounts() {
    getAllAccounts({ numberOfRecords: this.numberOfRecords })
      .then((response) => {
        this.accounts = response;
        const toastEvent = new ShowToastEvent({
          title: "Accounts Loaded",
          message: this.numberOfRecords + "Accounts Fetched From Server",
          variant: "success"
        });

        this.dispatchEvent(toastEvent);
      })
      .catch((error) => {
        console.error("error in getting the accounts", error.body.message);
        const toastEvent = new ShowToastEvent({
          title: "ERROR",
          message: error.body.message,
          variant: "error"
        });

        this.dispatchEvent(toastEvent);
      });
  }
}
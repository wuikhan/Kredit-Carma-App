import getPatients from "@salesforce/apex/PatientManager.getPatients";
import getPatientsWithInsurance from "@salesforce/apex/PatientManager.getPatientsWithInsurance";
import { LightningElement, wire, api, track } from "lwc";

export default class Patient extends LightningElement {
  @wire(getPatients)
  patients;

  @wire(getPatientsWithInsurance)
  patientInsurance;

  @api recordId;

  @track selectedTab;

  get responseReceived() {
    if (this.patients) {
      return true;
    }
    return false;
  }

  patientClicked(event) {
    event.preventDefault();

    const data = JSON.stringify(this.patientInsurance);
    console.log(data);
  }

  tabChangeHandler(event) {
    this.selectedTab = event.target.value;
    console.log("Selectedt Tab : ", this.selectedTab);
  }
  get setAvatar() {
    return this.patients.data.Birth_Sex__c === "Male"
      ? "https://www.lightningdesignsystem.com/assets/images/avatar1.jpg"
      : "https://www.lightningdesignsystem.com/assets/images/avatar2.jpg";
  }
}
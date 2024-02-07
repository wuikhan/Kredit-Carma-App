import { LightningElement } from "lwc";
// import generateData from "./generateData";

const columns = [
  { 
    label: "Customer Id", 
    fieldName: "id" ,  
    cellAttributes: {
    class: 'slds-text-color_success slds-text-title_caps',
    iconName: { fieldName: 'TrendIcon' },
  },
},
  { label: "First Name", fieldName: "first_name"},
  { label: "Last Name", fieldName: "last_name"},
  { label: "Email", fieldName: "email", type: "email" },
  { label: "Gender", fieldName: "gender" },
  { label: "SSN", fieldName: "ssn" },
  { label: "Race", fieldName: "race" },
  { label: "Street Address", fieldName: "street address" },
  { label: "City", fieldName: "city" },
  { label: "Country", fieldName: "country" },
  { label: "Zip Code", fieldName: "zip code" }
];
export default class BasicDatatable extends LightningElement {
  data = [];
  columns = columns;
  connectedCallback() {
    this.fetchCustomerInfo();
  }
  async fetchCustomerInfo(endpoint) {
    const info = await fetch("https://wuikhan.github.io/customerInfo/MOCK_DATA.json"
    );
    const data = await info.json();
    this.data = data;
  }
}
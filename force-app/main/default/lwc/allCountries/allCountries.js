import { LightningElement, track } from "lwc";

export default class AllCountries extends LightningElement {
  @track countries = [
    { countryName: "United States of America", countryCode: "USA" },
    { countryName: "Islamic Republic of Pakistan", countryCode: "PKR" }
  ];
}
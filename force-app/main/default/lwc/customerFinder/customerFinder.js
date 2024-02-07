import { LightningElement } from 'lwc';

export default class CustomerFinder extends LightningElement { 
    customers = [];
    columns = [];
  
    connectedCallback() {
      this.fetchVaccineSlots();
    }
  
    async fetchVaccineSlots() {
      const vaccineSlotRes = await fetch(
        "https://wuikhan.github.io/customerInfo/MOCK_DATA.json"
      );
      const data = await vaccineSlotRes.json();
      console.log(data);
      
      const dates = new Map();
      dates.set("name", {
        label: "Center Name",
        fieldName: "name",
        type: "text",
        wrapText: true
      });
      
    }
    get hideMessage() {
      return this.customers.length > 0;
    }
  }
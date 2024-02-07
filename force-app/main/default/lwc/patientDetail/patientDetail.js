import { LightningElement , track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import NAME from '@salesforce/schema/Patient_Insurance__c.Name';
import PATIENT_ID from '@salesforce/schema/Patient_Insurance__c.Id';



const fields = [NAME, PATIENT_ID];

export default class PatientDetail extends LightningElement {
    patientId;
@wire(getRecord, {recordId: '$patientId', fields})
patient;


@track selectedTabValue;

tabChangeHandler(event){
this.selectedTabValue = event.target.value;
console.log(this.selectedTabValue)
}
    
}
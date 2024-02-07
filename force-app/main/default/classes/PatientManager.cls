public with sharing class PatientManager {
  @AuraEnabled(cacheable=true)
  public static List<Patient__c> getPatients() {
    return [
      SELECT
        Id,
        Name,
        Last_Name__c,
        First_Name__c,
        Marital_Status__c,
        Date_of_Birth__c,
        City_of_Birth__c,
        Birth_Sex__c
      FROM Patient__c
      LIMIT 10
    ];
  }

  @AuraEnabled(cacheable=true)
  public static List<Patient__c> getPatientsWithInsurance() {
    return [
      SELECT
        Name,
        Last_Name__c,
        First_Name__c,
        Marital_Status__c,
        Date_of_Birth__c,
        City_of_Birth__c,
        Birth_Sex__c,
        (SELECT Insurance__c, Patient__c, Name FROM Patient_Insurance__r)
      FROM Patient__c
    ];
  }
}
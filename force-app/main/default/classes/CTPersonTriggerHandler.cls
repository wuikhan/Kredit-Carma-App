public with sharing class CTPersonTriggerHandler {
   
    public static void beforeInsert(List<Person__c> newRecord){
        for(Person__c person : newRecord){
            person.Health_Status__c = 'Green';
            person.Token__c = CTPersonController.getToken(person.Mobile__c);
        }
    }

    public static void beforeUpdate( List<Person__c> newRecords, Map<Id, Person__c> oldRecordMap){
       for(Person__c person : newRecords){
        if(person.Health_Status__c != oldRecordMap.get(person.id).Health_Status__c){
            person.Status_Update_Date__c = Date.today();
        }
       }
    }

    public static void afterUpdate( List<Person__c> newRecords, Map<Id, Person__c> oldRecordMap){

        Set<Id> statusChange = new Set<Id>();
        Set<Id> redStatus = new Set<Id>();

        for(Person__c person : newRecords){
         if(person.Health_Status__c != oldRecordMap.get(person.id).Health_Status__c){
             statusChange.add(person.Id);
         }
         if(person.Health_Status__c == 'Red' && oldRecordMap.get(person.id).Health_Status__c != 'Red'){
             redStatus.add(person.Id);
        }
        }

        Set<Id> alreadyProcessed = new Set<Id>();  
        alreadyProcessed.addAll(redStatus);

        Set<Id> orangeStatus = new Set<Id>();
        Set<Id> yellowStatus = new Set<Id>();

        List<Person__c> personToUpdate = new List<Person__c>();

        // lets add cohabitants
        orangeStatus.addAll(CTPersonController.getCohabitants(redStatus, alreadyProcessed));
         // lets add primary contacts
         Set<Id> primaryContacts = CTPersonController.getPrimaryContacts(redStatus,alreadyProcessed);
         orangeStatus.addAll(primaryContacts);
        // lets add neighbours
        yellowStatus.addAll(CTPersonController.getNeighbours(redStatus,alreadyProcessed));
        // lets add secondary contacts
        yellowStatus.addAll(CTPersonController.getSecondaryContacts(primaryContacts,alreadyProcessed));

        for(Id pid:orangeStatus){
            personToUpdate.add(new Person__c(Id=pid,Health_Status__c = 'Orange'));
        }

        for(Id pid:yellowStatus){
            personToUpdate.add(new Person__c(Id=pid,Health_Status__c = 'Yellow'));
        }

        if(personToUpdate.size() > 0){
            update personToUpdate;
        }

        List<Location_Tracing__c> locationTraces = CTLocationTracingController.getLocationsByPersonIds(statusChange);
        if(locationTraces.size()>0 && locationTraces != null){
            Set<Id> locationIds = new Set<Id>();
            for(Location_Tracing__c trace:locationTraces){
                locationIds.add(trace.Location__c);
            }
            CTLocationController.updateRedScore(locationIds);
        }
        
     }
}
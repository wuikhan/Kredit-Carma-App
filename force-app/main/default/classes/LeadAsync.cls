public class LeadAsync {
    
    @future
    public static void updateLeadRecords(Set<Id> existingRecordsIds){
        List<Lead> existingRecords = [SELECT Id, LeadSource FROM Lead WHERE Id IN : existingRecordsIds];
        for(Lead rec : existingRecords){
            rec.LeadSource = 'Web';
        }
        
        update existingRecords;
        
    }
    
    @future
    public static void createLeadRecords(){
        Lead anotherLead = new Lead(LastName='Test Lead Single',Status='Open - Not Contacted', Company='codegator');
        insert anotherLead;
    }

}
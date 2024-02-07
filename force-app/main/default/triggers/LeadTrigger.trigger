trigger LeadTrigger on Lead (before insert,after insert, before update, after update) {
    
    switch on Trigger.operationType {
        when BEFORE_INSERT {
            for(Lead leadRecord : Trigger.new){
                if(String.isBlank(leadRecord.LeadSource)) {
                    leadRecord.LeadSource = 'Other';
                }
                if(String.isBlank(leadRecord.Industry)){
                    leadRecord.addError('The Industry cannot be blank');
                }
            }
        }
        when AFTER_INSERT {
             for(Lead leadRecord : Trigger.new){
                 // create a task
                 Task leadTask = new Task();
                 leadTask.Subject = 'Follow up task';
                 leadTask.WhoId = leadTask.Id;
                 insert  leadTask;
             }
        }
        when BEFORE_UPDATE {
            for(Lead leadRecord : Trigger.new){
                if(String.isBlank(leadRecord.LeadSource)) {
                    leadRecord.LeadSource = 'Other';
                }
                if((leadRecord.Status == 'Closed - Converted' || leadRecord.Status == 'Closed - Not Converted') && Trigger.oldMap.get(leadRecord.Id).Status == 'Open - Not Contacted'){
                    leadRecord.Status.addError('You cannot directly closed an open lead record.');
                }
            }
        }
    }    
}
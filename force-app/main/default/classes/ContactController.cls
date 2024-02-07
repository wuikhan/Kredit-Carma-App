public with sharing class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsList(String accId) {
        return [
            SELECT AccountId, Id, FirstName, LastName, Title, Phone, Email
            FROM Contact
            WHERE AccountId = :accId
            WITH SECURITY_ENFORCED
        ];
    }
}
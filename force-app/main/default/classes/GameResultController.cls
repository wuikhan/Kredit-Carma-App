public with sharing class GameResultController {
  @AuraEnabled
  public static List<Word_Shuffle__c> getResults() {
    // get current user's id
    String userId = UserInfo.getUserId();
    List<Word_Shuffle__c> results = [
      SELECT Id, Name, Mode__c, Result__c, CreatedDate
      FROM Word_Shuffle__c
      WHERE CreatedById = :userId
      ORDER BY CreatedDate DESC
    ];

    return results;
  }
}
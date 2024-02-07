@RestResource(urlMapping='/ssn/*')
global class GetCreditScoreBySSNWebService {
  @HttpGet
  global static String getScoreBySSN() {
    RestRequest req = RestContext.request;
    // Get name from url (represented by the * sign)
    String name = req.requestURI.substring(req.requestURI.lastIndexOf('/') + 1);

    // Do Stuff here...
    // String score = [SELECT Score__c FROM Credit_Check__c WHERE SSN__c = :name];

    return 'WooW Success ';
  }
}
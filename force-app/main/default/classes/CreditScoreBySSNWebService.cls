@RestResource(urlMapping='/CreditScore/SearchBySSN/*')
global class CreditScoreBySSNWebService {

    @HttpGet
    global static Credit_Check__c getScoreBySSn() {
        RestRequest request = RestContext.request;
        String ssn = request.requestURI.substring(
            request.requestURI.lastIndexOf('/')+1);
            Credit_Check__c result = [SELECT Id, Name__c, Score__c, SSN__c FROM Credit_Check__c WHERE SSN__c = : Decimal.valueOf(ssn) LIMIT 1];
            System.debug(result);
            return result;
        }       
    }
public with sharing class SalesforceConnect {
  public static String getCreditScores() {
    Http http = new Http();
    HttpRequest request = new HttpRequest();
    request.setEndpoint(
      'https://gmailcomlearning7-dev-ed.my.salesforce.com/services/apexrest/CreditScore'
    );
    request.setMethod('GET');
    request.setHeader(
      'Authorization',
      'Bearer !AQIAQBI8RJDPuRZ85X5CkPcjCKBt4ipczwU.Rw1HGMMlJw0COc_gNAAmeQI4MgTvv5HlnCyXIILn1BqLw_Junz0CIGnXzpUZ'
    );

    HttpResponse response = http.send(request);

    if (response.getStatusCode() == 200) {
      return response.getBody();
    }
    return '';
  }
}
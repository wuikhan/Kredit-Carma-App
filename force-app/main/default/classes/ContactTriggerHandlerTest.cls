@isTest public with sharing class ContactTriggerHandlerTest {

    @TestSetup
   public static void makeData(){
    List<Account> testAcc = new List<Account>();
    Account acc1 = new Account(Name='Test1');
    Account acc2 = new Account(Name='Test2');

    testAcc.add(acc1);
    testAcc.add(acc2);
    insert testAcc;

    List<Contact> testContact = new List<Contact>();
    testContact.add(new Contact(LastName='Test Contact 1',AccountId=testAcc[0].Id));
    testContact.add(new Contact(LastName='Test Contact 2',AccountId=testAcc[0].Id));
    testContact.add(new Contact(LastName='Test Contact 3',AccountId=testAcc[0].Id));
    testContact.add(new Contact(LastName='Test Contact 4',AccountId=testAcc[0].Id));
    testContact.add(new Contact(LastName='Test Contact 5',AccountId=testAcc[1].Id));

    insert testContact;
    }

   @isTest 
   public static void afterInsertHandlerTest2(){
    List<Account> testAcc = new List<Account>();
    Account acc1 = new Account(Name='Test1');
    Account acc2 = new Account(Name='Test2');

    testAcc.add(acc1);
    testAcc.add(acc2);
    insert testAcc;

    List<Contact> testContact = new List<Contact>();
    Contact con1 = new Contact(LastName='Test Contact 1',AccountId=testAcc[0].Id, Active_Contacts__c = true);
    Contact con2 = new Contact(LastName='Test Contact 2',AccountId=testAcc[0].Id, Active_Contacts__c = true);
    Contact con3 = new Contact(LastName='Test Contact 3',AccountId=testAcc[0].Id);
    Contact con4 = new Contact(LastName='Test Contact 4',AccountId=testAcc[0].Id);
    Contact con5 = new Contact(LastName='Test Contact 5',AccountId=testAcc[1].Id);

    testContact.add(con1);
    testContact.add(con2);
    testContact.add(con3);
    testContact.add(con4);
    testContact.add(con5);
    

    insert testContact;

   List<Account> allAccounts =  [Select Id, Name, Active__c FROM Account];
   for(Account acc : allAccounts){
    if(acc.Name == 'Test1'){
        System.assertEquals(null, acc.Active__c);
    }
    if(acc.Name == 'Test2'){
        System.assertEquals(null, acc.Active__c);
    }
   }
 

   List<Contact> allContacts = [Select Id From Contact];
   System.assertEquals(5, allContacts.size());
   }
   @isTest 
   public static void afterInsertHandlerBulkTest(){
   
    Account testAccount1 = [SELECT Id From Account Where Name = 'Test 1'];
    List<Contact> testContact = new List<Contact>();
    for(Integer i=0;i<1000;i++){
        testContact.add(new Contact(LastName='Test Contact 1'+i,AccountId=testAccount1.Id, Active_Contacts__c = true));
    }
    
    insert testContact;

   List<Account> allAccounts =  [Select Id, Name, Active__c FROM Account];
   System.assertEquals(2, allAccounts.size());
   for(Account acc : allAccounts){
    if(acc.Name == 'Test1'){
        System.assertEquals(null, acc.Active__c);
    }
    if(acc.Name == 'Test2'){
        System.assertEquals(null, acc.Active__c);
    }
   }
 

   List<Contact> allContacts = [Select Id From Contact];
   System.assertEquals(1005, allContacts.size());
   }


   @isTest
   public static void afterUpdateHandlerTest1() {
    
    List<Contact> allContacts = [Select Id, LastName From Contact];

    for(Contact con : allContacts){
        if(con.LastName == 'Test Contact 3' || con.LastName == 'Test Contact 4'){
            con.Active_Contacts__c = true;
        }
    }
    // allocate new sets of governor limits
    Test.startTest();
    update allContacts;
    Test.stopTest();

    List<Account> allAccounts =  [Select Id, Name, Active__c FROM Account];
    System.assertEquals(2, allAccounts.size());
    for(Account acc : allAccounts){
     if(acc.Name == 'Test1'){
         System.assertEquals(null, acc.Active__c);
     }
     if(acc.Name == 'Test2'){
         System.assertEquals(null, acc.Active__c);
     }
    
   System.assertEquals(5, allContacts.size());
   }
}

@isTest
   public static void afterUpdateHandlerTest2() {
    
    List<Contact> allContacts = [Select Id, LastName From Contact];
    List<Account> allAccounts2 =  [Select Id, Name, Active__c FROM Account WHERE Name = 'Test 2'];

    for(Contact con : allContacts){
        if(con.LastName == 'Test Contact 3' ){
            con.Active_Contacts__c = true;
            
        }
    }
    // allocate new sets of governor limits
    Test.startTest();
    update allContacts;
    Test.stopTest();

    List<Account> allAccounts =  [Select Id, Name, Active__c FROM Account];
    System.assertEquals(2, allAccounts.size());
    for(Account acc : allAccounts){
     if(acc.Name == 'Test1'){
         System.assertEquals(null, acc.Active__c);
     }
     if(acc.Name == 'Test2'){
         System.assertEquals(null, acc.Active__c);
     }
    
   System.assertEquals(5, allContacts.size());
   }
}

}
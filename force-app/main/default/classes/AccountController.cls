public class AccountController {
    
    public static List<Account> insertAccounts(List<Account> accountToInsert){
        insert accountToInsert;
        System.debug('automatically stored');
        return accountToInsert;
    }
    
     public static Account insertAccount(Account accountToInsert){
        insert accountToInsert;
        return accountToInsert;
    }
    
    public static List<Account> getAllAccounts(){
        List<Account> accounts = [Select Name from Account];
        return accounts;
    }
    
    public static void printAllAccounts(){
        List<Account> accounts = getAllAccounts();
        for(Account account : accounts){
            System.debug('Account Name :'+account.Name+' Account Phone: '+account.Phone);
        }
    }
    
    public static Integer getAccountSize(){
        List<Account> accounts = getAllAccounts();
        System.debug('Account size '+accounts.size());
        return accounts.size();
    }
    
}
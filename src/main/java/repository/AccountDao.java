package repository;

import dto.Account;

public interface AccountDao {
    public int insertAccount(Account account);
    public Account selectAccount(int userid);
}

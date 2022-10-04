package repository;

import dto.Account;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class AccountDaoImpl implements AccountDao{

    private final SqlSession session;

    @Autowired
    public AccountDaoImpl(SqlSession session) {
        this.session = session;
    }

    @Override
    public int insertAccount(Account account) {
        return session.insert("mapper.AccountMapper.insertAccount", account);
    }

    @Override
    public Account selectAccount(int userid) {
        return session.selectOne("mapper.AccountMapper.selectAccount", userid);
    }
}


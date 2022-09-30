package repository;

import dto.USER;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao implements UserRepository {

    private final SqlSession session;

    @Autowired
    public UserDao(SqlSession sqlSession) {
        this.session = sqlSession;
    }


    @Override
    public int insertUser(USER user) {
        return session.insert("mapper.UserMapper.insertUser", user);
    }

    @Override
    public USER selectUser(int userid) {
        return session.selectOne("mapper.UserMapper.selectUser", userid);
    }
}

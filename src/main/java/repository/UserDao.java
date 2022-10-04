package repository;

import dto.USER;

public interface UserDao {
    public int insertUser(USER user);
    public USER selectUser(int userid);
}

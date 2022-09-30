package repository;

import dto.USER;

public interface UserRepository {
    public int insertUser(USER user);
    public USER selectUser(int userid);
}

import dto.USER;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import repository.UserDao;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:web/WEB-INF/applicationContext.xml"})
public class MainTest {

    @Autowired(required = true)
    UserDao userDao;

    @Test
    public void test() {
        USER user = new USER();
        /*user.setUsername("test");
        user.setUserpassword("test2");
        user.setUsernick("test3");
        userServiceTest.insertUser(user);*/
        System.out.println(userDao.selectUser(1).getUsername());
    }
}

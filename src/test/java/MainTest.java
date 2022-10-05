
import dto.Session;
import org.junit.Test;
import org.junit.runner.RunWith;


import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:web/WEB-INF/applicationContext.xml"})
public class MainTest {

    /*@Autowired(required = true)
    UserDaoImpl userDaoImpl;

    @Autowired
    AccountDaoImpl accountDaoimpl;*/


    @Test
    public void test() {

        /*USER user = new USER();
        user.setUsername("test2");
        user.setUserpassword("test3");
        user.setUsernick("test4");
        userDaoImpl.insertUser(user);*/
        //System.out.println(userDaoImpl.selectUser(1).getUsername());
        /*Account account = new Account();
        account.setUser_id(1);
        account.setCurrency("BTC");
        accountDaoimpl.insertAccount(account);*/

    }
}

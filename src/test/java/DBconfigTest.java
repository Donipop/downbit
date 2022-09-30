import dto.USER;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import javax.sql.DataSource;
import java.sql.Connection;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:web/WEB-INF/applicationContext.xml"})
@Configuration
public class DBconfigTest {

    /*@Autowired
    private DataSource dataSource;

    @Test
    public void testConnection() throws Exception{
        try(Connection connection = dataSource.getConnection()){
            System.out.println(connection);
        }catch (Exception e){
            e.printStackTrace();
        }
    }*/

    @Autowired
    private  SqlSessionFactory sqlSessionFactory;

    @Test
    public void testMyBatis() {
        System.out.println(sqlSessionFactory);
    }

    @Test
    public void testSession() throws Exception{
        try(SqlSession session = sqlSessionFactory.openSession()){
            System.out.println(session);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}

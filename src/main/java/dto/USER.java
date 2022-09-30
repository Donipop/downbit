package dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
public class USER {
    private int id;
    private String username;
    private String userpassword;
    private String usernick;
    private Date userdate;
}

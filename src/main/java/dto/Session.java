package dto;

import lombok.Builder;
import lombok.Getter;



@Getter
public class Session {

    private String id;
    private String session;
    private String user_id;

    @Builder
    public Session(String id, String session, String user_id) {
        this.id = id;
        this.session = session;
        this.user_id = user_id;
    }
}

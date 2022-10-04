package dto;

import lombok.Builder;
import lombok.Getter;


@Getter
public class Session {
    private String session;
    private String user_id;

    @Builder
    public Session(String session, String user_id) {
        this.session = session;
        this.user_id = user_id;
    }

}

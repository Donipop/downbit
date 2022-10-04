package dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Account {
    private int id;
    private int user_id;
    private String currency;
    private double balance;
    private double locked;
    private double avg_buy_price;
}

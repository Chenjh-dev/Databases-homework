package work.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Clients_per_Trainer {

    String last_Name ; // 姓
    String first_Name ; // 名
    int number_Of_Clients; // 学员人数

}

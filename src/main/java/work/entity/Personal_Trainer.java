package work.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Personal_Trainer {

    int id; // 账号
    String last_Name; // 姓
    String first_Name; // 名
    String address; // 地址
    String city; // 城市
    String state; // 国家
    int zip; // 邮政编码
    String phone; // 电话号码
    String email; // 邮箱地址

}

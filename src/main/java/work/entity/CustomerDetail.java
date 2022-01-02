package work.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDetail {

    int id; // 账号
    String last_Name; // 姓
    String first_Name; // 名
    String address; // 地址
    String city; // 城市
    String state; // 国家
    int zip; // 邮政编码
    String phone; // 电话号码
    String email_Address; // 邮箱地址
    Double credit_Card_Details; // 信用卡余额
    String birth_Date; // 出生日期
    String exercise_History; // 健身频率
    String fitness_Level; // 肥胖程度
    String medical_Heath; // 健康水平

    public CustomerDetail(String last_Name, String first_Name, String address, String city, String state, int zip, String phone, String email_Address, Double credit_Card_Details, String birth_Date, String exercise_History, String fitness_Level, String medical_Heath) {
        this.last_Name = last_Name;
        this.first_Name = first_Name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email_Address = email_Address;
        this.credit_Card_Details = credit_Card_Details;
        this.birth_Date = birth_Date;
        this.exercise_History = exercise_History;
        this.fitness_Level = fitness_Level;
        this.medical_Heath = medical_Heath;
    }
}

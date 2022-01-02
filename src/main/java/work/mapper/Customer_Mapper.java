package work.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import work.entity.CustomerDetail;

import java.util.List;

@Mapper
public interface Customer_Mapper {

    // 输出超过用户输入的特定年龄的客户的信息
    @Select("CALL Over_an_Age(#{age})")
    List<CustomerDetail> ShowOverAge(@Param("age")int age);

    // 根据id号删除用户
    @Select("CALL deleteCustomer(#{id});")
    void deleteCustomer(@Param("id")int id);

    // 修改客户信息
    @Update("UPDATE Customer c " +
            "SET " +
                "c.last_Name=#{last_Name}," +
                "c.first_Name=#{first_Name}," +
                "c.address=#{address}," +
                "c.city=#{city}," +
                "c.state=#{state}," +
                "c.zip=#{zip}," +
                "c.phone=#{phone}," +
                "c.email_Address=#{email_Address}," +
                "c.credit_Card_Details=#{credit_Card_Details}," +
                "c.birth_Date=#{birth_Date}," +
                "c.exercise_History=#{exercise_History}," +
                "c.fitness_Level=#{fitness_Level}," +
                "c.medical_Heath=#{medical_Heath}  " +
            "WHERE c.id = #{id}  ")
    int updateCustomer(CustomerDetail customerDetail);

}

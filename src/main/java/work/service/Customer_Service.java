package work.service;

import org.springframework.stereotype.Service;
import work.entity.CustomerDetail;
import work.mapper.Customer_Mapper;

import javax.annotation.Resource;
import java.util.List;

@Service
public class Customer_Service {

    @Resource
    private Customer_Mapper customer_mapper;

    // 选出超过年龄的用户
    public List<CustomerDetail> over_an_age(int age){
        return customer_mapper.ShowOverAge(age);

    }

    // 根据id删除删除用户
    public int deleteCustomer(int id){
        try {
            customer_mapper.deleteCustomer(id);
        } catch (Exception e){
            return 0;
        }
        return 1;
    }

    // 更新客户信息
    public int updateCustomer(CustomerDetail customerDetail){
        return customer_mapper.updateCustomer(customerDetail);
    }

}

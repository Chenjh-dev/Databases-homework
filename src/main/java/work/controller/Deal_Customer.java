package work.controller;

import org.apache.commons.beanutils.BeanUtils;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import work.entity.CustomerDetail;
import work.service.Customer_Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

@RestController
@MapperScan("work.mapper")
public class Deal_Customer {

    @Resource
    private Customer_Service customerService;

    @RequestMapping("/showOverAge")
    public List<CustomerDetail> showAll(HttpServletRequest request){
        String age = request.getParameter("age");
        if (age.isEmpty() || "".equals(age)){
            age = "0";
        }
        return customerService.over_an_age(Integer.parseInt(age));
    }

    @RequestMapping("/deleteCustomer")
    public int deleteCustomer(HttpServletRequest request){
        return customerService.deleteCustomer(Integer.parseInt(request.getParameter("id")));
    }

    @RequestMapping("/updateCustomer")
    public int updateCustomer(HttpServletRequest request){
        CustomerDetail customerDetail = new CustomerDetail() ;
        try {
            BeanUtils.populate(customerDetail,request.getParameterMap());
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
        System.out.println(customerDetail);
        return customerService.updateCustomer(customerDetail);
    }

}

@Controller
class OpenShowCustomer{

    @RequestMapping("/page/showOverAge")
    public String openShowOverAge(){
        return "showOverAge";
    }

}

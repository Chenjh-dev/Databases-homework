package work.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import work.entity.CustomerDetail;
import work.service.Delete_Young_MembersService;

import javax.annotation.Resource;
import java.util.List;

@RestController
@MapperScan("work.mapper")
public class Deal_Delete_Young_Members {

    @Resource
    private Delete_Young_MembersService delete_young_membersService;

    // 删除未成年人账号
    @RequestMapping("/delete_Young_Members")
    public int delete_Young_Members(){
        return delete_young_membersService.delete_Young_Members();
    }

    // 展示删除的用户账号信息
    @RequestMapping("/showYoung")
    public List<CustomerDetail> showYoung(){
        return delete_young_membersService.showYoung();
    }

}

@Controller
class OpenShowYoung{

    // 打开显示删除未成年人的记录页面
    @RequestMapping("/page/showYoung")
    public String openShowYoung(){
        return "showYoung";
    }

}




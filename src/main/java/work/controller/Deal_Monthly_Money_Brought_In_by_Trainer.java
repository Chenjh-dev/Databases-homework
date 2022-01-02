package work.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@MapperScan("work.mapper")
public class Deal_Monthly_Money_Brought_In_by_Trainer {

    @Resource
    private work.service.Monthly_Money_Brought_In_by_TrainerService Monthly_Money_Brought_In_by_TrainerService;

    @RequestMapping("/showMonthly_Money_Brought_In_by_Trainer")
    public List<List<?>> monthly_Money_Brought_In_by_Trainer(){
        return Monthly_Money_Brought_In_by_TrainerService.dotest();
    }

}

@Controller
class OpenMonthly_Money_Brought_In_by_TrainerPage{

    @RequestMapping("/page/showMonthly_Money_Brought_In_by_Trainer")
    public String openMonthly_Money_Brought_In_by_Trainer(){
        return "showMonthly_Money_Brought_In_by_Trainer";
    }

}

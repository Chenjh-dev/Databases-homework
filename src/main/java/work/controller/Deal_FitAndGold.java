package work.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import work.entity.Fit_and_Gold;
import work.mapper.Fit_and_Gold_Mapper;

import javax.annotation.Resource;
import java.util.List;

@RestController
@MapperScan("work.mapper")
public class Deal_FitAndGold {

    @Resource
    private Fit_and_Gold_Mapper fit_and_gold_mapper;

    @RequestMapping("/showFitAndGold")
    public List<Fit_and_Gold> showFitAndGold(){
        return fit_and_gold_mapper.ShowFit_and_Gold();
    }

}

@Controller
class OpenFitAndGoldPage{

    @RequestMapping("/page/showFitAndGold")
    public String openFitAndGold(){
        return "showFitAndGold";
    }

}

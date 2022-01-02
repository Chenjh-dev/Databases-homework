package work.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import work.entity.Fit_and_Gold;
import work.entity.Personal_Trainer;
import work.mapper.Fit_and_Gold_Mapper;
import work.service.ShowPT_Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@MapperScan("work.mapper")
public class Deal_ShowPT {

    @Resource
    private ShowPT_Service showPT_service;

    @RequestMapping("/showPT")
    public List<Personal_Trainer> showFitAndGold(){
        return showPT_service.showPT();
    }

    @RequestMapping("/deletePT")
    public int deletePT(HttpServletRequest request){
        return showPT_service.deletePT(Integer.parseInt(request.getParameter("id")));
    }

}

@Controller
class OpenShowPT{

    @RequestMapping({"/page/showPT","/a"})
    public String openFitAndGold(){
        return "showPT";
    }

}

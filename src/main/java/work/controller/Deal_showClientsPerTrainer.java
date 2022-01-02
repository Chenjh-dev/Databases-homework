package work.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import work.entity.Clients_per_Trainer;
import work.service.Clients_per_TrainerService;

import javax.annotation.Resource;
import java.util.List;

@RestController
@MapperScan
public class Deal_showClientsPerTrainer {

    @Resource
    private Clients_per_TrainerService clients_per_trainerService;

    @RequestMapping("/showClientsPerTrainer")
    public List<Clients_per_Trainer> showClientsPerTrainer(){
        return clients_per_trainerService.showClientsPerTrainer();
    }

}

@Controller
class OpenClientsPerTrainerPage{

    @RequestMapping("/page/showClientsPerTrainer")
    public String openClientsPerTrainer(){
        return "showClientsPerTrainer";
    }

}

package work.service;

import org.springframework.stereotype.Service;
import work.entity.Clients_per_Trainer;
import work.mapper.Clients_per_Trainer_Mapper;

import javax.annotation.Resource;
import java.util.List;

@Service
public class Clients_per_TrainerService {

    @Resource
    private Clients_per_Trainer_Mapper clients_per_trainer_mapper;

    public List<Clients_per_Trainer> showClientsPerTrainer(){
        return clients_per_trainer_mapper.showClientsPerTrainer();
    }

}

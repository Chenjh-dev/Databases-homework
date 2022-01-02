package work.service;

import org.springframework.stereotype.Service;
import work.mapper.Monthly_Money_Brought_In_by_Trainer_Mapper;

import javax.annotation.Resource;
import java.util.List;

@Service
public class Monthly_Money_Brought_In_by_TrainerService {

    @Resource
    private Monthly_Money_Brought_In_by_Trainer_Mapper monthly_money_brought_in_by_trainer_mapper;

    public List<List<?>> dotest(){
        return monthly_money_brought_in_by_trainer_mapper.showMonthly_Money_Brought_In_by_Trainer();
    }

}

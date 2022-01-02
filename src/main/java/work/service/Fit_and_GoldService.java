package work.service;

import org.springframework.stereotype.Service;
import work.entity.Fit_and_Gold;
import work.mapper.Fit_and_Gold_Mapper;

import javax.annotation.Resource;
import java.util.List;

@Service
public class Fit_and_GoldService {

    @Resource
    private Fit_and_Gold_Mapper fit_and_gold_mapper;

    public List<Fit_and_Gold> showFitAndGold(){
        return fit_and_gold_mapper.ShowFit_and_Gold();
    }

}

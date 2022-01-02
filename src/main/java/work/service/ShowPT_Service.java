package work.service;

import org.springframework.stereotype.Service;
import work.entity.Personal_Trainer;
import work.mapper.Personal_Trainer_Mapper;

import javax.annotation.Resource;
import java.util.List;

@Service
public class ShowPT_Service {

    @Resource
    private Personal_Trainer_Mapper personal_trainer_mapper;

    // 显示所有教练
    public List<Personal_Trainer> showPT(){
        return personal_trainer_mapper.showPT();
    }

    // 根据id删除教练
    public int deletePT(int id){
        try{
            personal_trainer_mapper.deletePT(id);
        }catch (Exception e){
            return 0;
        }
        return 1;
    }

}

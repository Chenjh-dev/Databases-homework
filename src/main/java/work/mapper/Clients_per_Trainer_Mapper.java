package work.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import work.entity.Clients_per_Trainer;

import java.util.List;

@Mapper
public interface Clients_per_Trainer_Mapper {

    // 将每个私人教练的所有客户加起来。显示私人教练的姓和名以及客户的数量。
    @Select("CALL Clients_per_Trainer();")
    List<Clients_per_Trainer> showClientsPerTrainer();

}

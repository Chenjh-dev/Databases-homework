package work.mapper;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Monthly_Money_Brought_In_by_Trainer_Mapper {

    List<List<?>> showMonthly_Money_Brought_In_by_Trainer();

}

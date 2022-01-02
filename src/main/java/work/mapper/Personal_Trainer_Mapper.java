package work.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import work.entity.Personal_Trainer;

import java.util.List;

@Mapper
public interface Personal_Trainer_Mapper {

    // 显示所有教练
    @Select("CALL showPT();")
    List<Personal_Trainer> showPT();

    // 根据id删除教练
    @Select("CALL deletePT(#{id});")
    void deletePT(@Param("id")int id);

}

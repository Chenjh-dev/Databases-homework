package work.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import work.entity.Fit_and_Gold;

import java.util.List;

@Mapper
public interface Fit_and_Gold_Mapper {

    // 显示客户ID，姓，名，和电子邮件地址。只列出非常健康或一般健康且已加入黄金计划的客户
    @Select("CALL Fit_and_Gold()")
    List<Fit_and_Gold> ShowFit_and_Gold();

}

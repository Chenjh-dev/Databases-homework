package work.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import work.entity.CustomerDetail;

import java.util.List;

@Mapper
public interface Delete_Young_Members_Mapper {

    // 为18岁以下的任何客户删除任何记录
    @Select("CALL Delete_Young_Members()")
    void delete_Young_Members();

    // 展现已删除的未成年客户
    @Select("CALL showYoung();")
    List<CustomerDetail> showYoung();
}

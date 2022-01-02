package work.service;

import org.springframework.stereotype.Service;
import work.entity.CustomerDetail;
import work.mapper.Delete_Young_Members_Mapper;

import javax.annotation.Resource;
import java.util.List;

@Service
public class Delete_Young_MembersService {

    @Resource
    private Delete_Young_Members_Mapper delete_young_members_mapper;

    // 删除未成年人信息
    public int delete_Young_Members(){
        try{
            delete_young_members_mapper.delete_Young_Members();
        }catch (Exception e){
            return 0;
        }
        return 1;
    }

    // 显示已删除的未成年人
    public List<CustomerDetail> showYoung(){
        return delete_young_members_mapper.showYoung();
    }

}

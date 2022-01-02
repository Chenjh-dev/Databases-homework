/**
 * 接口申请数据
 * @param age 年龄
 */
function getMessage(age) {
    $.ajax({
        url: "/showOverAge",
        type: "POST",
        data:{"age":age },
        dataType: "json",
        success: setTable
    });

}

// 另一种接口申请数据写法
const urls = {
    overage: '/showOverAge',
    edit : '/updateCustomer'
}

var post = {};
for (let key in urls) {
    post[key] = (data_, callback) => $.ajax({
        url: urls[key],
        type: 'POST',
        data: data_,
        dataType: 'json',
        success: callback
    });
}


// const post = (url, data, callback) => $.ajax({
//     'url': url,
//     'type': 'POST',
//     'data': data,
//     'dataType': 'json',
//     'success': callback
// });

// 注释写法定义类Data，便于后续代码编写
/**
 * @typedef {Object} Data
 * @property {string} id
 * @property {string} last_name
 * @property {string} first_Name
 * @property {string} address
 * @property {string} city
 * @property {string} state
 * @property {string} zip
 * @property {string} phone
 * @property {string} email_Address
 * @property {string} credit_Card_Details
 * @property {string} birth_Date
 * @property {string} exercise_History
 * @property {string} fitness_Level
 * @property {string} medical_Heath
 *
 */

// 设置表格内容
function setTable(message) {
    $("#table_Body").children().remove() ;
    let i = 0;
    message.forEach(e => {

        $("#table_Body").append("<tr id="+i+"  align='center' class=\"select\" data-bs-toggle=\"modal\" data-bs-target=\"#myModal\" onmouseover='mouseOver(this)' ><td>"+e.id+"</td>"+
            "<td>"+e.last_Name+"</td>"+
            "<td>"+e.first_Name+"</td>"+
            "<td>"+e.email_Address+"</td>"+
            "<td>"+e.birth_Date+"</td>" +
            "<td>（点击查看详细信息）</td></tr>");
        document.getElementById(i + "").onclick =  () => showDetail(e) ;
        i++;
    });
    $("#table_Body").append("<tr bgcolor='#faebd7'><td colspan='6' align='right'>共"+i+"条记录</td></tr>");
}

// 鼠标悬浮事件
function mouseOver(e) {
    e.color= '#00bfff' ;
}


// 通过返回的值设置table内容
function setSelect() {
    for( let i = 1 ; i <= 140 ; i++ ){
        $("select").append("<option value="+i+">"+i+"</option>");
    }
}

// 发送请求获取超越年龄的用户数据
function getOverAge(data) {
    // getMessage($(data).serializeArray()[0].value);
    post.overage({age: $(data).serializeArray()[0].value}, setTable);
    return false;
}


/**
 * @description 查看详细信息，设置模态框内容为对应每个用户的信息
 * @param {Data} e 表单每个内容
 */
function showDetail(e) {

    // console.log(e);
    document.getElementsByClassName("modal-title")[0].innerHTML = "用户"+e.id+"   详细信息" ;
    let showMessage = "<table><tr><td><font size='5px' color='#00bfff' >客户ID：</font></td><td>"+e.id+"</td><td  hidden><input type='text' name='id' value='"+e.id+"' pattern='\\d+'  placeholder='"+e.id+"'></td></tr>"+
        "<tr><td><font size='5px' color='#00bfff' >姓：</font></td><td class='editHide'>"+e.last_Name+"</td><td  class='editShow' hidden><input type='text' name='last_Name' value='"+e.last_Name+"' placeholder='"+e.last_Name+"'></td></tr>"+
        "<tr><td><font size='5px' color='#00bfff' >名：</font></td><td class='editHide'>"+e.first_Name+"</td><td  class='editShow' hidden><input type='text' name='first_Name' value='"+e.first_Name+"' placeholder='"+e.first_Name+"'></td></tr>"+
        "<tr><td><font size='5px' color='#00bfff' >住址：</font></td><td class='editHide'>"+e.address+"</td><td  class='editShow' hidden><input type='text' name='address' value='"+e.address+"' placeholder='"+e.address+"'></td></tr>"+
        "<tr><td><font size='5px' color='#00bfff' >城市：</font></td><td class='editHide'>"+e.city+"</td><td  class='editShow' hidden><input type='text' name='city' value='"+e.city+"' placeholder='"+e.city+"'></td></tr>"+
        "<tr><td><font size='5px' color='#00bfff' >州：</font></td><td class='editHide'>"+e.state+"</td><td  class='editShow' hidden><input type='text' name='state' value='"+e.state+"' placeholder='"+e.state+"'></td></tr>"+
        "<tr><td><font size='5px' color='#00bfff' >邮政编码：</font></td><td class='editHide'>"+e.zip+"</td><td  class='editShow' hidden><input type='text' name='zip' value='"+e.zip+"'  pattern='\\d+' title='请输入整数' placeholder='"+e.zip+"'></td></tr>"+
        "<tr><td><font size='5px' color='#00bfff' >手机号码：</font></td><td class='editHide'>"+e.phone+"</td><td  class='editShow' hidden><input type='text' name='phone' value='"+e.phone+"' placeholder='"+e.phone+"'></td></tr>"+
        "<tr><td><font size='5px' color='#00bfff' >邮箱地址：</font></td><td class='editHide'>"+e.email_Address+"</td><td  class='editShow' hidden><input type='text' name='email_Address' value='"+e.email_Address+"' placeholder='"+e.email_Address+"'></td></tr>"+
        "<tr><td><font size='5px' color='#00bfff' >卡余额：</font></td><td class='editHide'>"+e.credit_Card_Details+"</td><td  class='editShow' hidden><input type='text'  pattern='\\d+(\\.\\d+)?' title='请输入浮点数'  name='credit_Card_Details' value='"+e.credit_Card_Details+"' placeholder='"+e.credit_Card_Details+"'></td></tr>"+
        "<tr><td><font size='5px' color='#00bfff' >出生日期：</font></td><td class='editHide'>"+e.birth_Date+"</td><td  class='editShow' hidden><input type='date' name='birth_Date' value='"+e.birth_Date+"' placeholder='"+e.birth_Date+"'></td></tr>"+
        "<tr><td><font size='5px' color='#00bfff' >健身频率：</font></td><td class='editHide'>"+e.exercise_History+"</td><td  class='editShow' hidden><input type='text' name='exercise_History' value='"+e.exercise_History+"' placeholder='"+e.exercise_History+"'></td></tr>"+
        "<tr><td><font size='5px' color='#00bfff' >肥胖程度：</font></td><td class='editHide'>"+e.fitness_Level+"</td><td  class='editShow' hidden><input type='text' name='fitness_Level' value='"+e.fitness_Level+"' placeholder='"+e.fitness_Level+"'></td></tr>"+
        "<tr><td><font size='5px' color='#00bfff' >健康水平：</font></td><td class='editHide'>"+e.medical_Heath+"</td><td  class='editShow' hidden><input type='text' name='medical_Heath' value='"+e.medical_Heath+"' placeholder='"+e.medical_Heath+"'></td></tr></table>";
    document.getElementsByClassName("modal-body")[0].innerHTML = showMessage ;
    document.getElementsByClassName("modal-footer")[0].innerHTML =
                                                                    "<button id='edit"+e.id+"' style='text-align: left' type=\"button\" class='btn btn-primary editHide' >修改</button>"+
                                                                    "<input type='submit' hidden id='editSubmit"+e.id+"' style='text-align: left' type='submit' class='btn btn-primary editShow' value='提交' >"+
                                                                    "<button hidden id='editHide"+e.id+"' style='text-align: left' type=\"button\" class='btn btn-primary editShow' >取消</button>"+
                                                                    "<button style='text-align: center' type=\"button\" class=\"btn btn-danger\" data-bs-dismiss=\"modal\" onclick=\"deleteCustomer("+e.id+")\">删除</button>"+
                                                                    "<button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">关闭</button>";
    // alert("edit"+e.id);
    document.getElementById("edit"+e.id).onclick = () => editDo();
    document.getElementById("editHide"+e.id).onclick = () => editNo();
}


// 进入编辑模式
function editDo() {
    var k = document.getElementsByClassName("editShow");
    for(let i=0;i<k.length;i++){
        k[i].removeAttribute("hidden");
    }

    k = document.getElementsByClassName("editHide");
    for(let i=0;i<k.length;i++){
        k[i].setAttribute("hidden","");
    }
}


// 进入查看模式
function editNo() {
    var k = document.getElementsByClassName("editShow");
    for(let i=0;i<k.length;i++){
        k[i].setAttribute("hidden","");
    }

    k = document.getElementsByClassName("editHide");
    for(let i=0;i<k.length;i++){
        k[i].removeAttribute("hidden");
    }
}

// 提交修改信息
function editSubmitt(k) {
    if(confirm("确定要修改吗？")){
        let data = $(k).serializeArray();
        let send_Date = {};
        data.forEach(e => {
            send_Date[e.name] = e.value ;
        });

        // 开启同步
        $.ajaxSettings.async = false;
        let result ;

        post.edit(send_Date, message => result = message);

        // 关闭
        $.ajaxSettings.async = true;

        if(result){
            alert("操作成功");
            getMessage("");
            return true;
        }else{
            alert("操作失败");
            return false;
        }
    }else{
        return false;
    }
}


// 删除选定用户
function deleteCustomer(id) {
    if(confirm("是否确定删除该用户?")){
        $.ajax({
            url: "/deleteCustomer" ,
            type: "POST" ,
            data: {id:id},
            dataType: "json" ,
            success: e => {
                if(e == 1){
                    alert("删除成功");
                    getMessage("");
                }else{
                    alert("删除失败，请检查是否为网络问题。")
                }
            }
        });
    }

}





// 接口：/showOverAge?age=60
// 0
// id	102
// last_name	"Faber"
// first_Name	"Dale"
// address	"121 Chaucer Lane"
// city	"Bronx"
// state	"NY"
// zip	10463
// phone	"(212)549-3324"
// email_Address	"Oldie@brandywine.net"
// credit_Card_Details	7624
// birth_Date	"1958-07-12"
// exercise_History	"Moderate"
// fitness_Level	"Moderately Fit"
// medical_Heath	"Somewhat Healthy"
// 1
// id	104
// last_name	"Lavelle"
// first_Name	"Shirley"
// address	"4001 Birch Street"
// city	"Peekskill"
// state	"NY"
// zip	10566
// phone	"(914)736-5512"
// email_Address	"Shir1121@hotmail.com"
// credit_Card_Details	3746
// birth_Date	"1960-09-25"
// exercise_History	"Frequent"
// fitness_Level	"Very Fit"
// medical_Heath	"Somewhat Healthy"


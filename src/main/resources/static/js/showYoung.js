/**
 * 接口申请数据
 */
function getMessage() {
    $.ajax({
        url: "/showYoung",
        type: "POST",
        dataType: "json",
        success: function (message){
            setTable(message);
        }
    });

}

/**
 * @typedef {Object} Data
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

/**
 * @description 设置表格内容
 * @param {Array<Data>} message
 */
function setTable(message) {
    $("#table_Body").children().remove() ;
    let i = 0;
    message.forEach(e => {
        i++ ;
        $("#table_Body").append("<tr id="+i+"  data-bs-toggle=\"modal\" data-bs-target=\"#myModal\">"+
            "<td>"+e.last_Name+" "+e.first_Name+"</td>"+
            "<td>"+e.address+","+e.city+","+e.state+"</td>"+
            "<td>"+e.zip+"</td>"+
            "<td>"+e.phone+"</td>"+
            "<td>"+e.email_Address+"</td>"+
            "<td>"+e.credit_Card_Details+"</td>"+
            "<td>"+e.birth_Date+"</td>"+
            "<td>"+e.exercise_History+"</td>"+
            "<td>"+e.fitness_Level+"</td>"+
            "<td>"+e.medical_Heath+"</td></tr>");
        // console.log(i);
    });
    $("#table_Body").append("<tr bgcolor='#faebd7'><td colspan='10' align='right'>共"+i+"条记录</td></tr>");
}

/**
 * 检测并删除年轻账号
 */
function deleteYoung() {
    if(confirm("确定要检查并删除未成年人账号吗")){
        $.ajax({
            url: "/delete_Young_Members" ,
            dataType: "json" ,
            type: "POST" ,
            success : function (e) {
                if(e==1){
                    alert("操作成功");
                    getMessage();
                }else{
                    alert("操作失败！可能为网络不佳，请稍后重试。")
                }
            }
        })
    }
    return false;
}


// 接口：/showYoung
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


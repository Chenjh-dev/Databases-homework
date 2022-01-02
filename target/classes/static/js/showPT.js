/**
 * 接口申请数据
 */
function getMessage() {
    $.ajax({
        url: "/showPT",
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
 * @property {string} email
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
        $("#table_Body").append("<tr class='select' >"+
            "<td>"+e.id+"</td>"+
            "<td>"+e.last_Name+" "+e.first_Name+"</td>"+
            "<td>"+e.address+","+e.city+","+e.state+"</td>"+
            "<td>"+e.zip+"</td>"+
            "<td>"+e.phone+"</td>"+
            "<td>"+e.email+"</td>"+
            "<td><button style='text-align: center' type=\"button\" class=\"btn btn-danger\" onclick=\"deletePT("+e.id+")\">删除教练信息</button></td></tr>");
        i++;
    });
    $("#table_Body").append("<tr bgcolor='#faebd7'><td colspan='7' align='right'>共"+i+"条记录</td></tr>");
}


// 删除用户
function deletePT(k) {
    if(confirm("确定要删除该教练？")){
        $.ajax({
            url: "/deletePT",
            data: {id:k},
            dataType:"json",
            type: "POST",
            success: e => {
                if(e){
                    alert("操作成功");
                    getMessage();
                } else{
                    alert("操作失败，请检查是否为网络问题！");
                }
            }
        });
    }
}


// 接口：/showPT
// 0
// id	102
// last_name	"Faber"
// first_Name	"Dale"
// address	"121 Chaucer Lane"
// city	"Bronx"
// state	"NY"
// zip	10463
// phone	"(212)549-3324"
// email	"Oldie@brandywine.net"
// 1
// id	104
// last_name	"Lavelle"
// first_Name	"Shirley"
// address	"4001 Birch Street"
// city	"Peekskill"
// state	"NY"
// zip	10566
// phone	"(914)736-5512"
// email	"Shir1121@hotmail.com"


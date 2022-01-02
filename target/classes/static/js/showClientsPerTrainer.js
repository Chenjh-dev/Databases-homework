

function getMessage() {

    $.ajax({
        url: "/showClientsPerTrainer",
        type: "POST",
        dataType: "json",
        success: function (message){
            setTable(message);
        }
    });

}

/**
 * @typedef {Object} Data
 * @property {string} last_Name
 * @property {string} first_Name
 * @property {string} number_Of_Clients
 *
 */

/**
 * @description 设置表格内容
 * @param {Array<Data>} message
 */
function setTable(message) {
    let i=0;
    message.forEach(e => {
        $("#table_Body").append("<tr><td>"+e.last_Name+"</td>"+
            "<td>"+e.first_Name+"</td>"+
            "<td>"+e.number_Of_Clients+"</td></tr>");
        i++;
    });

    $("#table_Body").append("<tr bgcolor='#faebd7'><td colspan=3' align='right'>共"+i+"条记录</td></tr>");

}




//
// 接口：http://localhost:8080/showClientsPerTrainer
//
// 0
// last_Name	"Gonzalez"
// first_Name	"Diego"
// number_Of_Clients	3
// 1
// last_Name	"McCall"
// first_Name	"Patti"
// number_Of_Clients	3
// 2
// last_Name	"Kim"
// first_Name	"Jon"
// number_Of_Clients	4
//


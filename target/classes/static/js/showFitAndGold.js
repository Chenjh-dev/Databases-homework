
function getMessage() {

    $.ajax({
        url: "/showFitAndGold",
        type: "POST",
        dataType: "json",
        success: function (message){
            setTable(message);
        }
    });

}

/**
 * @typedef {Object} Data
 * @property {string} customer_ID
 * @property {string} last_Name
 * @property {string} first_Name
 * @property {string} email_Address
 *
 */

/**
 * @description 设置表格内容
 * @param {Array<Data>} message
 */
function setTable(message) {
    let i=0;
    message.forEach(e => {
        $("#table_Body").append("<tr><td>"+e.customer_ID+"</td>"+
                        "<td>"+e.last_Name+"</td>"+
                        "<td>"+e.first_Name+"</td>"+
                        "<td>"+e.email_Address+"</td></tr>");
        i++;
    });
    $("#table_Body").append("<tr bgcolor='#faebd7'><td colspan=4' align='right'>共"+i+"条记录</td></tr>");
}




// <!--
// 接口：/showFitAndGold
// 0
//     customer_ID	        101
//     last_Name	        "Dickerson"
//     first_Name	        "Allen"
//     email_Address	    "AED@zoom.net"
// 1
//     customer_ID     	102
//     last_Name	       "Faber"
//     first_Name	        "Dale"
//     email_Address	    "Oldie@brandywine.net"
// 2
//     customer_ID     	106
//     last_Name	        "Schwartz"
//     first_Name	        "Byron"
//     email_Address	    "BS599@aol.com"
// -->


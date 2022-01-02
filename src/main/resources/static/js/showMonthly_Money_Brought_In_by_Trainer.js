
function getMessage() {
    $.ajax({
        url: "/showMonthly_Money_Brought_In_by_Trainer",
        type: "POST",
        dataType: "json",
        success: function (message) {
            setTable(message);
        }
    });

}

/**
 * @typedef {Object} Data1
 * @property {string} pt_last_Name
 * @property {string} pt_first_Name
 * @property {string} c_last_Name
 * @property {string} c_first_Name
 * @property {string} level_Name
 * @property {string} price_Per_Month
 *
 */

/**
 * @typedef {Object} Data2
 * @property {string} pt_last_Name
 * @property {string} pt_first_Name
 * @property {string} total
 */

/**
 * 填充表格内容
 * @param message 接口返回数据
 */
function setTable(message) {
    let pt_lastName = "";
    let pt_firstName = "";

    let data1 = message[0];
    let data2 = message[1];
    let data3 = message[2];


    $("#table_Body").append("<tr bgcolor='#7fffd4'><td colspan='4'></td><td>全体总收入：</td><td>" + data3[0].total + "元</td></tr><br>");
    let j = 0 ;
    for (let i = 0; i < data1.length; i++) {
        if(data1[i].pt_last_Name != pt_lastName) {  // 判断非同姓

            // 非同姓时，去掉名，防止异姓同名情况
            pt_firstName = "";

            if(pt_lastName !== "" ){
                pt_firstName = data1[i].pt_first_Name ;
                $("#table_Body").append("<tr><td colspan='4'></td><td>个人总收入：</td><td>" + data2[j++].total + "元</td></tr>");
            }

            pt_firstName = data1[i].pt_first_Name ;
            pt_lastName = data1[i].pt_last_Name;
            $("#table_Body").append("<tr bgcolor='#ffc0cb'><td colspan='6'>" + pt_lastName + "</td></tr>");
            $("#table_Body").append("<tr bgcolor='#ffc0cb'>" +
                "<td></td>" +
                "<td>" + data1[i].pt_first_Name + "</td>" +
                "<td>" + data1[i].c_last_Name + "</td>" +
                "<td>" + data1[i].c_first_Name + "</td>" +
                "<td>" + data1[i].level_Name + "</td>" +
                "<td>" + data1[i].price_Per_Month + "元</td>" +
                "</tr>");
        }else{  // 判断同姓

            if( pt_firstName !== data1[i].pt_first_Name && pt_firstName !== "" ){  //判断非同名
                pt_firstName = data1[i].pt_first_Name ;
                $("#table_Body").append("<tr><td colspan='4'></td><td>个人总收入：</td><td>" + data2[j++].total + "元</td></tr>");
            }

            $("#table_Body").append("<tr bgcolor='#ffc0cb'>" +
                "<td></td>" +
                "<td>"+data1[i].pt_first_Name+"</td>" +
                "<td>"+data1[i].c_last_Name+"</td>" +
                "<td>"+data1[i].c_first_Name+"</td>" +
                "<td>"+data1[i].level_Name+"</td>" +
                "<td>"+data1[i].price_Per_Month+"元</td>" +
                "</tr>");
        }
    }
    $("#table_Body").append("<tr><td colspan='4'></td><td>个人总收入：</td><td>" + data2[j++].total + "元</td></tr>");


    $("#table_Body").append("<tr bgcolor='#faebd7'><td colspan=6' align='right'>共"+j+"条记录</td></tr>");
}


// 接口：/showMonthly_Money_Brought_In_by_Trainer

// 0
// 0
// pt_last_Name	"Gonzalez"
// level_Name	"Gold"
// price_Per_Month	30
// c_last_Name	"Dickerson"
// pt_first_Name	"Diego"
// c_first_Name	"Allen"
// 1
// pt_last_Name	"Gonzalez"
// level_Name	"Gold"
// price_Per_Month	30
// c_last_Name	"Schwartz"
// pt_first_Name	"Diego"
// c_first_Name	"Byron"

// 1
// 0
// pt_last_Name	"Gonzalez"
// total	90
// pt_first_Name	"Diego"
// 1
// pt_last_Name	"Kim"
// total	78.5
// pt_first_Name	"Jon"
// 2
// pt_last_Name	"McCall"
// total	67
// pt_first_Name	"Patti"

// 2
// 0
// total	235.5
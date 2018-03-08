/**
 *时间戳转换
 * @param timestamp  时间戳
 * @param formatType 格式化类型 1、2、3、4  1:2018年01月01日 2:2018-01-01 12:12:12   3:2018-01-01   4:2018-01-01 12:12
 * @returns {string}
 */
function timestampToFormat(timestamp, formatType) {
    if (timestamp == '' || timestamp == undefined || timestamp == 'undefined' || timestamp == null) {
        return '';
    }
    let dateTime = new Date(parseInt(timestamp));
    let backTime = "";
    let year = dateTime.getFullYear();   //获取年
    let month = dateTime.getMonth() + 1; //获取月
    let date = dateTime.getDate();       //获取日
    let hour = dateTime.getHours();      //获取时
    let minute = dateTime.getMinutes();  // 获取分
    let second = dateTime.getSeconds();  // 获取秒
    switch (formatType) {
        case '1':
            backTime = year + "年" + zeroFill(month) + "月" + zeroFill(date) + "日";
            break;
        case '2':
            backTime = year + "-" + zeroFill(month) + "-" + zeroFill(date) + " " + zeroFill(hour) + ":" + zeroFill(minute) + ":" + zeroFill(second);
            break;
        case '3':
            backTime = year + "-" + zeroFill(month) + "-" + zeroFill(date);
            break;
        case '4':
            backTime = year + "-" + zeroFill(month) + "-" + zeroFill(date) + " " + zeroFill(hour) + ":" + zeroFill(minute);
            break;
        default:
            backTime = year + "-" + month + "-" + date;
            break;
    }
    return backTime;
}

/**
 * 数字字符串补零
 * @param num
 * @returns {*}
 */
function zeroFill(num) {
    if (num > 0 && num < 10 || num.toString().length == 1 && num == 0) {
        return '0' + num;
    }
    return num;
}


module.exports = {
    timestampToFormat
}

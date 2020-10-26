var order = function (orderType, pay, stack) {
    if (orderType === 1) {
        if (pay == true) {
            console.log('500元定金')
        } else {
            if (stack > 0)
                console.log('普通购买')
            else
                console.log('库存不足')
        }
    } else if (orderType === 2) {
        if (pay == true) {
            console.log('200元定金')
        } else {
            if (stack > 0)
                console.log('普通购买')
            else
                console.log('库存不足')
        }
    } else {
        if (stack > 0)
            console.log('普通购买')
        else
            console.log('库存不足')
    }
}

/**
 * 职责链
 * 看上去是不是狠繁琐，函数的复杂性太大了，我们采用职责链模式将其拆分 
 */
var order500 = function (orderType, pay, stack) {
    if (orderType === 1 && pay === true)
        console.log('500定金');
    else
        order200(orderType, pay, stack);
}

var order200 = function (orderType, pay, stack) {
    if (orderType === 2 && pay === true)
        console.log('200定金');
    else
        order(orderType, pay, stack);
}

var order = function (orderType, pay, stack) {
    if (stack > 0)
        console.log('普通购买')
    else
        console.log('没有库存')
}
/**
 * 策略 与工厂的区别在于, 工厂关注的是对象创建的过程而策略关注的是对象的行为
 */
var map = {
    1: () => { console.log('1') },
    2: () => { console.log('2') },
    3: () => { console.log('3') }
}

function fn (type) {
    console.log(map[type])
    return map[type]
}
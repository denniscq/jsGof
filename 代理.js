
/**
 * 保护代理
 */
function targetAction () {
    console.log('hello world')
}

function proxyTargetAction (param) {
    if (typeof param === 'string') {
        console.log('拒绝调用targetAction')
        return
    }
    targetAction()
}


/**
 * 虚拟代理 典型例子防抖函数
 */
function debounce (fn, delay) {
    var self = this
    var timer = null
    return function () {
        clearInterval(timer)
        timer = setTimeout(() => {
            fn.applay(this, arguments)
        }, delay);
    }
}

/**
 * 缓存代理
 */
function add () {
    var args = [].slice().call(arguments)
    return args.reduce((a, b) => {
        return a + b;
    })
}

var proxyCache = (function () {
    var cache = {}
    return function () {
        var args = [].slice(arguments).join(',')
        if (cache[args]) {
            return cache[args]
        } else {
            var result = add.apply({}, arguments)
            cache[args] = result
            return result
        }
    }
})()
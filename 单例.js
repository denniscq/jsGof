/**
 * 单例模式
 */
function Instance (name) {
    this.name = name
}

Instance.prototype.fire = function () {
    console.log(this.name)
}

var singleton = (function () {
    var instance = null
    return function (name) {
        if (!instance) {
            instance = new Instance(name)
        }
        return instance
    }
})()

singleton('dennis').fire()
singleton('denniscq').fire()


/**
 * 单例修改对象属性
 */
function Instance (name) {
    this.name = name
}

Instance.prototype.fire = function () {
    console.log(this.name)
}

Instance.prototype.set = function (name) {
    this.name = name
}

var singleton = (function () {
    var instance = null
    return function (name) {
        if (!instance) {
            instance = new Instance(name)
        } else if (instance.name !== name) {
            instance.set(name)
        }
        return instance
    }
})()

singleton('dennis').fire()
singleton('denniscq').fire()

/**
 * 到目前为止还有个问题，就是如果我们对这个单例模式进行扩展，要改变内部函数，这样做不满足设计模式中的单一职责原则，那么如何改进呢，改进如下
 */

function Instance (name) {
    this.name = name
}

Instance.prototype.fire = function () {
    console.log(this.name)
}

var singleton = (function () {
    var instance = null
    return function (fn) {
        if (!instance) {
            instance = fn.apply({}, arguments)
        }
        return instance
    }
})()

singleton(function () {
    var instance = new Instance('dennis')
    return instance
}).fire()

singleton(function () {
    var instance = new Instance('denniscq')
    return instance
}).fire()


/**
 * 方便用法
 */
function Instance (name) {
    this.name = name
}

Instance.prototype.fire = function () {
    console.log(this.name)
}

var singleton = function(fn){
    var instance = null
    return function(){
        if(!instance){
            console.log(fn)
            debugger
            instance = fn.apply({}, arguments)
        }
        return instance
    }
}

var setSingleton = singleton(function(name){
    var instance = new Instance(name)
    return instance
}, name)

setSingleton('dennis').fire()
setSingleton('denniscq').fire()

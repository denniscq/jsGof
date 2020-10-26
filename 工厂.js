/**
 * 简单工厂
 */
function simpleFactory (type) {
    function cat () {
        this.name = 'cat'
    }
    cat.prototype.say = function () {
        console.log('miaomiao😀')
    }

    function dog () {
        this.name = 'dog'
    }
    dog.prototype.say = function () {
        console.log('wangwang😂')
    }

    var option = {
        cat: function () {
            return new cat()
        },
        dog: function () {
            return new dog()
        }
    }

    debugger
    this.__proto__ = option[type]()
}

var cat = new simpleFactory('cat')
cat.say()
var dog = new simpleFactory('dog')
dog.say()


/**
 * 工厂
 */
function Factory (type) {
    return this[type]()
}

Factory.prototype = {
    cat: function () {
        this.name = 'cat',
            this.__proto__.say = function () {
                console.log('miaomiao😀')
            }
    },
    dog: function () {
        this.name = 'dog'
        this.__proto__.say = function () {
            console.log('wangwang😂')
        }
    }
}

var cat = new Factory('cat')
cat.say()
var dog = new Factory('dog')
dog.say()

/**
 * 进化
 */
function Factory (type) {
    if (this instanceof Factory) {
        return this[type]()
    }
    return new Factory(type)
}

Factory.prototype = {
    cat: function () {
        this.name = 'cat';
        this.__proto__.say = function () {
            console.log('miaomiao~');
        }
    },
    dog: function () {
        this.name = 'dog';
        this.__proto__.say = function () {
            console.log('wangwang~');
        }
    }
}

var cat = Factory('cat');
cat.say();
var dog = new Factory('dog');
dog.say();

/**
 * JQuery
 */
function Factory (type) {
    return new Factory.fn.init(type)
}
var fn = {
    init: function (type) {
        return this[type]()
    }
}
Factory.fn = fn

Factory.prototype = {
    cat: function () {
        this.name = 'cat'
        this.__proto__.say = function () {
            console.log('miaomiao')
        }
    },
    dog: function () {
        this.name = 'dog'
        this.__proto__.say = function () {
            console.log('wangwang😂')
        }
    }
}

Factory.fn.init.prototype = Factory.prototype
var cat = Factory('Cat');
cat.say();
var dog = new Factory('Dog');
dog.say();


/**
 * 抽象工厂
 */
function AbstractFactory (fType, childrenFn) {
    if (this instanceof AbstractFactory) {
        childrenFn.prototype = new this[fType]
    } else {
        return new AbstractFactory(fType, childrenFn)
    }
}

AbstractFactory.prototype.cat = function () {
    this.name = 'cat'
}
AbstractFactory.prototype.cat.prototype = {
    say: function () {
        throw new Error('不能直接用, 需要重写')
        console.log('miaomiao😀')
    }
}

AbstractFactory.prototype.dog = function () {
    this.name = 'dog'
}
AbstractFactory.prototype.dog.prototype = {
    say: function () {
        throw new Error('不能直接用, 需要重写')
        console.log('wangwang😂')
    }
}

function 子类1Cat (name) {
    this.type = '子类1'
    this.name = name
}

AbstractFactory('cat', 子类1Cat)
var cat1 = new 子类1Cat('dennis')
cat1.say()

function 子类2Cat (name) {
    this.type = '子类2'
    this.name = name
}
AbstractFactory('cat', 子类2Cat)
var cat2 = new 子类2Cat('denniscq')
cat2.say()
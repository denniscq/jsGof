/**
 * 中介者
 */

var Cat = function () {
    this.eatNumber = 0
}

Cat.prototype.eat = function (num) {
    this.eatNumber = num
    middle(this)
}

var Dog = function () {
    this.eatNumber = 0
}

Dog.prototype.eat = function (num) {
    this.eatNumber = num
    middle(this)
}

var Pig = function () {
    this.eatNumber = 0
}

Pig.prototype.eat = function (num) {
    this.eatNumber = num;
    middle(this);
}

var middle = (function () {
    var pool = []
    return function (target) {
        pool.push(target.eatNumber)
        pool.sort(function (pre, next) {
            debugger;
            return next - pre
        })
        console.log(pool.indexOf(target.eatNumber) + 1)
    }
})()

var cat = new Cat();
var dog = new Dog();
var pig = new Pig();
cat.eat(20);
dog.eat(50);
pig.eat(100);
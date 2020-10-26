function Coffee() {

}

Coffee.prototype.boilWater = function () {
    console.log('把水煮沸')
}

Coffee.prototype.brewCoffee = function () {
    console.log('冲咖啡')
}

Coffee.prototype.init = function () {
    this.boilWater();
    this.brewCoffee();
}

var coffee = new Coffee();
coffee.init();

//泡一杯茶
function Tea() {

}

Tea.prototype.boilWater = function () {
    console.log('把水煮沸')
}

Tea.prototype.steepTea = function () {
    console.log('冲茶水')
}

Tea.prototype.init = function () {
    this.boilWater();
    this.steepTea();
}

var tea = new Tea();
tea.init();

//这个过程大同小异，只是材料变了,部奏也变化了，我们如何改善
//方法与模板模式
var Beverage = function () {

}

//相同的方法
Beverage.prototype.boilWater = function () {
    console.log('烧水')
}


//冲茶或者冲咖啡     不同方法
Beverage.prototype.brew = function () {

}

Beverage.prototype.init = function () {
    this.boilWater();
    this.brew();
}

//创建Tea字类

function Tea() {

}
//继承模板类
Tea.prototype = new Beverage();
//重写brew满足茶的过程
Tea.prototype.brew = function () {
    console.log('冲茶水')
}

var tea = new Tea();
tea.init();

//创建Coffee

function Coffee(){

}

//继承模板类
Coffee.prototype = new Beverage();
//重写brew满足茶的过程
Coffee.prototype.brew = function () {
    console.log('冲咖啡')
}

var coffee = new Coffee();
coffee.init();
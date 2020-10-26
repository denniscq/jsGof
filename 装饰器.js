/**
 * 装饰器模式
 */
function cat(){
    this.fire = function(){
        console.log('cat fire')
    }
}

function bigCat(cat){
    this.fire = function(){
        console.log('big cat fire')
        cat.fire()
    }
}
var big = new bigCat(new cat())
big.fire()
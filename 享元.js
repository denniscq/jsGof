/**
 * 享元
 */
function Person(props) {
    this.name = props.name;
    this.sex = props.sex;
    this.height = props.height;
    this.weight = props.weight;
}

Person.prototype.info = function () {
    console.log(this.name + this.sex + this.height + this.weight);
}

var metadata = [
    { name: 'dqhan0', sex: 'male', height: '170cm', weight: '125kg' },
    { name: 'dqhan1', sex: 'female', height: '165cm', weight: '135kg' },
    { name: 'dqhan2', sex: 'male', height: '180cm', weight: '145kg' },
    { name: 'dqhan3', sex: 'male', height: '173cm', weight: '155kg' },
    { name: 'dqhan4', sex: 'female', height: '169cm', weight: '165kg' },
    { name: 'dqhan5', sex: 'male', height: '168cm', weight: '175kg' },
]

function execute() {
    metadata.forEach(m => {
        new Person(m).info();
    })
}

execute();


//上面例子我们可以看出创建了6个对象，创建对象是很浪费内存空间的，我们把不变得属性抽离出来，把可变得属性当作扩展呢
//这样就满足了享元模式得核心思想，改进如下

//抽离性别
function Person(sex) {
    this.sex = sex;
    this.name = '';
    this.height = '';
    this.weight = '';
}

Person.prototype.info = function () {
    console.log(this.name + this.sex + this.height + this.weight);
}

var male = new Person('male');
var female = new Person('female');

function execute() {
    metadata.forEach(m => {
        if (m.sex === 'male') {
            male.name = m.name;
            male.height = m.height;
            male.weight = m.weight;
            male.info();
        } else {
            female.name = m.name;
            female.height = m.height;
            female.weight = m.weight;
            female.info();
        }
    })
}
execute();

/**
 * 优化
 */
function Person(sex) {
    this.sex = sex;
    console.log('create person');
}

Person.prototype.info = function (name) {
    ManagerPeson.setExternalState(name, this);
    console.log(this.name + this.sex + this.height + this.weight);
}

var PersonFactory = (function () {
    var pool = {};
    return function (sex) {
        if (pool[sex]) {

        }
        else {
            pool[sex] = new Person(sex);
        }
        return pool[sex];
    }
})();

var ManagerPeson = (function () {
    var pool = {};
    return function () {
        return {
            add: function (m) {
                if (pool[m.name]) {
                } else {
                    pool[m.name] = {
                        name: m.name,
                        height: m.height,
                        weight: m.weight
                    };
                }
                return PersonFactory(m.sex);
            },
            setExternalState(name, target) {
                var poolTarget = pool[name];
                for (var i in poolTarget) {
                    if (poolTarget.hasOwnProperty(i))
                        target[i] = poolTarget[i]
                }
            }
        }
    }
})()

function execute() {
    metadata.forEach(m => {
        ManagerPeson.add(m).info(m.name);
    })
}
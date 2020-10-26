observer = (function () {
    var events = {}
    return function () {
        return {
            register: (name, fn) => {
                if (fn instanceof Function) {
                    events[name] = fn
                }
            },
            fire: (name) => {
                return events[name]()
            },
            remove: (name) => {
                delete events[name]
            },
            clear: () => {
                events = {}
            }
        }
    }
})()

var ob = new observer()
ob.register('say', function () {
    console.log('say hello')
})
ob.fire('say')
ob.remove('say')
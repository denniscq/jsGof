function add (param) {
    switch (toString.call(param)) {
        case "[object Object]":
            var arr = []
            for (var i in param) {
                if (param.hasOwnProperty(i)) {
                    arr.push(param[i])
                }
            }

            return arr.reduce((a, b) => a + b)
            break
        case "[object Array]":
            return param.reduce((a, b) => a + b)
            break
        default:
            throw new Error('eror');
    }
}
add([1, 2, 3]);
add({ a: 1, d: 2, c: 3 })
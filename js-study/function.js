/*
函数学习
* */
function print(x) {
    return console.log(x);
}

function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}

print(abs(-10))

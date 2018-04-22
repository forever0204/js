/*
*   语法基础
*/
/*类型识别
typeof
Object.prototype.toString
constructor
instanceof
* */
//定义打印函数
function print(x) {
    console.log(x)
}
/*
print(typeof 'jerry');
print(typeof 12);
print(typeof true);
print(typeof undefined);
print(typeof null);
*/
print(typeof {name:'jerry'});
//封装Object.prototy.toString方法
function type(obj) {
    return print(Object.prototype.toString.call(obj).slice(8,-1).toLowerCase());
}
print('---------------')
/*
type(1);
type('abc');
type({})
type([])
type(/\d/)
*/
type(function () {})
//判断类型
print('---------------------' )
print('jesrry'.constructor === String)
print((1).constructor===Number)
//获取对象构造函数名称
function  getConstructorName(obj) {
    return obj && obj.constructor && obj.constructor.toString().match(/function\s*([^(]*)/)[1];
}
print(getConstructorName([])==="Array")
//
print('---------------')
print([] instanceof Array)
print(1 instanceof Number)


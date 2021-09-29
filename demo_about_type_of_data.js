/**
 * ts demo
 * type of easy data
 */
// any
var anyNum = 1;
var anyStr = '1';
var anyBoolean = false;
console.log(typeof (anyNum), typeof (anyStr), typeof (anyBoolean));
//number
var num = 1;
console.log(typeof (num));
//string
var str = '1';
console.log(typeof (str));
//boolean
var boolean = true;
console.log(typeof (boolean));
/**
 * type of complex data
 */
//Array
var arr1 = [1, 2]; //Universal type
var arr2 = [1, 2];
Array.isArray(arr1) ? console.log('arr1 is Array') : '';
Array.isArray(arr2) ? console.log('arr2 is Array') : '';
//enum
var A;
(function (A) {
    A[A["a"] = 0] = "a";
    A[A["b"] = 1] = "b";
    A[A["c"] = 2] = "c";
})(A || (A = {}));
var b = A.b;
console.log(b); // index
//tuple 元组
var x;
x = ['1', 1];
console.log(x); //['1',1]
// console.log(x = [1,'1'])//error
//解构元组
var a = x[0], c = x[1];
console.log(a, c);
function fun() {
    var a = 1;
    var b = a++;
    var c = ++a;
    console.log(b, c);
}
// console.log(fun())
fun();

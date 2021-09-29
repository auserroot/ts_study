/**
 * ts demo
 * type of easy data
 * use tsc add filname to analysis
 */

// any
let anyNum:any = 1
let anyStr:any = '1'
let anyBoolean:any = false
console.log(typeof (anyNum),typeof (anyStr),typeof (anyBoolean))

//number
let num:number = 1
console.log(typeof (num))

//string
let str:string = '1'
console.log(typeof (str))

//boolean
let boolean:boolean = true
console.log(typeof (boolean))

/**
 * type of complex data
 */
//Array
let arr1:Array<number> = [1,2] //Universal type
let arr2:number[] = [1,2]
Array.isArray(arr1)?console.log('arr1 is Array' ):''
Array.isArray(arr2)?console.log('arr2 is Array' ):''

//enum
enum A {a,b,c}
let b:A = A.b
console.log(b)// index

//tuple 元组
let x:[string,number]
x = ['1',1]
console.log(x)//['1',1]
// console.log(x = [1,'1'])//error
//解构元组
let [a,c] = x
console.log(a,c)

function fun():void{
    let a:number = 1;
    let b:number|any = a++;
    let c:any = ++a;
    console.log(b,c)
}
// console.log(fun())
fun()

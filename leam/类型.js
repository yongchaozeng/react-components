// string number boolean undefined null object symbol
function test() { }
let a = Symbol('23')
console.log(typeof true); //boolean
console.log(typeof 123); //number
console.log(typeof '123'); //string
console.log(typeof null); //object null被认为是空对象的指针
console.log(typeof undefined); //undefined
console.log(typeof test); //function
console.log(typeof { name: 12 }); //object
console.log(typeof a); //symbol
// continue

/** 简单类型：存储在栈中，大小固定，查找更快，复制值
 *  引用类型：存储在堆中，大小不定，查找慢，复制指针
 * */

//继承
// 构造函数继承 无法共享原型链方法
function Foo(){}
function Bar(){
    Foo.call(this)
}
// 原型继承   有些引用类型数据会被共享

function Foo(){}
function Bar(){}
Bar.prototype = new Bar()
// 组合继承   call方法已经有父属性，之后prototype也会在获取父
function Foo(){}
function Bar(){
    Foo.call(this)
}
Bar.prototype = new Foo()
// 寄生组合继承   
function Foo(){}
function Bar(){
    Foo.call(this)
}
Bar.prototype = Foo.prototype
Bar.prototype.constructor  = Bar

//https://www.jianshu.com/p/504bde348956
//https://juejin.cn/post/6844904048961781774
//https://juejin.cn/post/6844903566285471751
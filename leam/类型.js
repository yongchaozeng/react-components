// string number boolean undefined null object symbol bigint
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
/**
 * 类型判断
 * 
 * typeof 判断array null都为'object' 不准确
 * 
 * Object.prototype.toString.call() 但是必须是原型上的，array函数的tostring被重写过
 *  优点基本类型判断准确，但是无法判断自定义对象
 * 
 * instanceof 检测实例是否属于某个类，不能检测简单类型 通过prototype检测，也可能出现误测
 *  原理：实例的_proto_和类的prototype对比
*/

// 作用域 上下文 函数嵌套访问变量

// 垃圾回收 标记法  运行时把内存所有变量标记，然后把在执行上下文的变量标记去除，清楚所有带标记上下文没有访问的变量
// 内存泄漏

// date regExp


//ArrayBuffer  DataView

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
Bar.prototype = new Foo()

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

//堆（heap）和栈（stack）中来加以区分。其中，堆里存放着一些对象。而栈中则存放着一些基础类型变量以及对象的指针

//https://www.jianshu.com/p/504bde348956
//https://juejin.cn/post/6844904048961781774
//https://juejin.cn/post/6844903566285471751
//https://juejin.cn/post/6844904048961781774
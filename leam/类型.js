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
 
//113
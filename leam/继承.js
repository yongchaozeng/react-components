console.log(`--------------继承--------------`);

// // 组合继承
// function Foo(name) {
//     this.name = name
// }
// Foo.prototype.print = function () {
//     return this.name
// }

// function Bar(...ars) {
//     Foo.apply(this, ars)
// }
// Bar.prototype = new Foo()
// Bar.prototype.constructor = Bar
// Bar.prototype.learn = function () {
//     return `${this.name}今天开始学习了`
// }
// // let foo = new Foo('老大')
// // console.log(foo.print());

// let bar = new Bar('小弟')
// console.log(bar.print());
// console.log(bar.learn());

// 原型式
let o9 = {
    name: '张三'
}
let o2 = object(o9)
function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}
// console.log(o2);


// 寄生
let o3 = createObj(o9)
function createObj(o) {
    let result = object(o9)
    result.print = function () {
        console.log(`2${this.name}`);

    }
    return result
}
o3.print()

// 寄生组合

// 组合继承
function Foo(name) {
    console.log(999);

    this.name = name
}
Foo.prototype.print = function () {
    
    return this.name
} 

function Bar(...params) {
    Foo.apply(this, params)
}
Bar.prototype = object(Foo.prototype)
Bar.prototype.constructor = Bar
Bar.prototype.haha = function () {
    console.log(`${this.name}笑了`);

}

let bar = new Bar('(*^_^*)')    
console.log(bar.__proto__.constructor);
console.log(bar.haha());


function printPerson(test1, test2) {
    console.log(this);

    console.log(`姓名:${this.name},年龄:${this.age}--${test1}--${test2}`)
}
// let printPerson = (test1, test2) => {
//     // console.log(this);

//     console.log(`姓名:${this.name},年龄:${this.age}--${test1}--${test2}`)
// }
let p1 = {
    name: '尼古拉斯凯奇',
    age: 33
}
// let s = Symbol('call')
Function.prototype.myCall = function (self) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }

    self = self || window

    let arg = [...arguments].slice(1)

    let fn = Symbol('call')

    self[fn] = this

    let result = self[fn](...arg)

    delete self[fn]

    return result

}
Function.prototype.myApply = function (self) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }

    self = self || window

    let arg = arguments[1] || []


    if (!arguments[1] instanceof Array) {
        throw new TypeError('参数不为Array')
    }

    let fn = Symbol('call')

    self[fn] = this

    let result = self[fn](...arg)

    delete self[fn]

    return result

}


Function.prototype.myBind = function (self) {


    if (!typeof this === 'function') {
        throw Error('只能使用function调用')
    }
    let fun = this


    let result = function (...ars) {
        console.log(ars);

        fun.apply(self, ars)
    }

    return result

}

Function.prototype.mybind1 = function (thisArg) {
    if (typeof this !== 'function') {
        throw TypeError("Bind must be called on a function");
    }
    // 拿到参数，为了传给调用者
    const args = Array.prototype.slice.call(arguments, 1),
        // 保存 this
        self = this,
        // 构建一个干净的函数，用于保存原函数的原型
        nop = function () { },
        // 绑定的函数
        bound = function () {
            // this instanceof nop, 判断是否使用 new 来调用 bound
            // 如果是 new 来调用的话，this的指向就是其实例，
            // 如果不是 new 调用的话，就改变 this 指向到指定的对象 o
            return self.apply(
                this instanceof nop ? this : thisArg,
                args.concat(Array.prototype.slice.call(arguments))
            );
        };

    // 箭头函数没有 prototype，箭头函数this永远指向它所在的作用域
    if (this.prototype) {
        nop.prototype = this.prototype;
    }
    // 修改绑定函数的原型指向
    bound.prototype = new nop();

    return bound;
}


// printPerson.apply(p1, null)
// printPerson.myApply(p1, null)
let c1 = printPerson.mybind1(p1)
let c2 = printPerson.myBind(p1)
let c3 = printPerson.bind(p1)
// let c2 = printPerson.myBind(p1)
console.log(1,c1.prototype);
console.log(2,c2.prototype);
console.log(3,c3.prototype);

// c1()
// c2(1,2,3)



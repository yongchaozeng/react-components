
import { MutableRefObject } from 'react';





// const User: P = (name, age) => {
//     return {
//         name,
//         age,
//     }
// }
// interface P {
//     (name: string, age: number): { name: string, age: number }
// }
// type User = {
//     name:string
//     age:number
// }

// type SetUser = (name: string, age: number): void

// interface Foo {
//     name: string
//     age: number
// };
// type T = keyof Foo;

// 联合类型和合并类型 
interface User {
    <T, U>(obj1: T, obj2: U): T & U

}

let tt: User = function <T, U>(obj1: T, obj2: U): T & U {
    let result = <T & U>{}

    for (let a in obj1) {
        if (!result[a]) {
            (<any>result)[a] = obj1[a]
        }
    }

    for (let a in obj2) {
        if (!result[a]) {
            (<any>result)[a] = obj2[a]
        }
    }

    return result
}

let o1 = {
    name: '小孙', age: 12, sex: '女'
}
let o2 = {
    name: '小黄', sex: '男', age: 13
}

console.log(tt(o1, o2));


// 类型保护

function isNumber(x: any): x is number {
    return typeof x === "number";
}
function isString(x: any): x is string {
    return typeof x === "string";
}
function paddLeft(value: string, padding: number | string) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
}
function typeDefence(name: string | null): number {
    return name!.length
}
typeDefence('qweqwe')

// 别名和接口
interface Interface {
    name: string
    age: number
}
type Alias = {
    name: string
    age: number
}
declare function aliased(alias: Alias): void;
declare function interface(interface: Interface): void;


asdz('input');

function asdz<T extends HTMLElement>(id: string) {
    return document.getElementById(id);
}



//   Awesome!
type Dinner2 = {
    fish: number,
} | {
    bear: number,
}

interface Map<T> {
    [key: string]: T;
}
let keys: keyof Map<number> = 1; // string
let value: Map<number>['foo'] = 2; // number
console.log(1, keys, value);

interface Person {
    name: string,
    age: number
}


type PersonRead<T> = {
    [key in keyof T]: T[key]
}
let person: PersonRead<Person> = {
    name: 'cure',
    age: 24
}

person.name = 'maru'

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}
type ParsonT = {
    name:string
    age:number
}

type UserInfo = Pick<ParsonT,'name'>
let concatObj = function (o1:T, o2:K) {

}



let d2: Dinner2 = { fish: 1, bear: 1 } // Protected!

const defaultOption = {
    timeout: 500
}
type Opt = typeof defaultOption

/** A cool guy. */
// type UserInfo = Required<User>

// let asd: UserInfo = {

//     name: '张是',
//     age: 12
// }

// type T = keyof User // name age
// type Test = Partial<User>

// let p: Test = {

// }

// type P = {
//     [i in T]: number
// };

// let obj: P = {
//     name: 12,
//     age: 12
// };


interface Ca<T> {
    (length: number, value: T): Array<T>
}
let createArray: Ca<any>;

createArray = function <T>(length: number, value: T): Array<T> {
    let result = []
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result
}


console.log(12, createArray(5, 235));



export type BasicTarget<T> =
    | (() => T | null)
    | T
    | null
    | MutableRefObject<T | null | undefined>;


type TargetElement = HTMLElement | Element | Document | Window;

const getTargetElement = (target?: BasicTarget<TargetElement>,): TargetElement | undefined | null => {

    let targetElement: TargetElement | undefined | null;

    if (typeof target === 'function') {
        targetElement = target();
    } else if (target && 'current' in target) {
        targetElement = target.current;
    } else {
        targetElement = target;
    }

    return targetElement;
}

export {
    getTargetElement,
}
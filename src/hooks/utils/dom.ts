
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

interface User {
    name:string
    age?:string
}

type UserInfo = Required<User>



type T = keyof User // name age
type Test =  Partial<User> 

let p:Test = {

}

type P = {
    [i in T]:number
};

let obj:P = {
    name:12,
    age:12
};


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

const getTargetElement = (target?: BasicTarget<TargetElement>, ): TargetElement | undefined | null => {

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
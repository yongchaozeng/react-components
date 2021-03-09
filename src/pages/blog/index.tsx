import React, { FC } from 'react'

import './index.less'

interface Blog {

}
interface Person {
    name: string
    age: number,
    hobby: string
}




const Blog: FC<Blog> = () => {

    let trim = (e: any, str: string) => {
        return str.replace(/^\s+|\s+$/g, '')
    }
    let o1 = {
        name: '张三',
        age: 12,
        sun: {
            name: '小三',
            age: 1,
        },
        array: [1],
        print() {
            console.log(this.name);
        }
    }
    let clone = (target: any) => {
        if (typeof target === 'object') {
            let cloneTarget: any = Array.isArray(target) ? [] : {};
            for (const key in target) {
                cloneTarget[key] = clone(target[key]);
            }
            return cloneTarget;
        } else {
            return target;
        }
    }
    let o2 = clone(o1)
    o2.sun.test = 1
    o2.array.push(2)
    // console.log(o2);
    // console.log(o1);

    const curry = (fn: any, ...args: any) => {
        console.log('22,', args);

        // debugger
        // 函数的参数个数可以直接通过函数数的.length属性来访问
        fn(...args)
        return (...args: any) => {

        }
        // return args.length >= fn.length // 这个判断很关键！！！
        //     // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
        //     ? fn(...args)
        //     /**
        //      * 传入的参数小于原始函数fn的参数个数时
        //      * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
        //     */
        //     : (..._args: any) => {};
    }

    function add1(x: any, y: any, z: any) {
        return x + y + z;
    }
    const add = curry(add1);
    // console.log(add);

    // console.log(add(1, 2, 3));
    // console.log(add(1, 2, 3));
    // console.log(add(1)(2)(3));
    // console.log(add(1, 2)(3));
    // console.log(add(1)(2, 3));
    const arr2 = [0, 1, 2, [[[3, 4]]]];
    let ot = {}
    console.log(new Set([1, ot, 2, ot, 1, 3, 4]));

    



    // console.log(arr2.flat(2));

    return <>
        <header className='header'>
            <div className='header-logo' onClick={(e) => { trim(e, '   test test1  ') }}  >
                YC冲冲冲
            </div>
            <div className='header-right'>
                <div className='header-search'></div>
                <div className='header-nav-list'></div>
                <div className='header-user'></div>
            </div>
        </header>
    </>
}
export default Blog
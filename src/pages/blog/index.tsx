import React, { FC,} from 'react'

import './index.less'

interface Blog {

}





const Blog: FC<Blog> = () => {

    interface Person {
        name: string
        age: number,
        hobby: string
    }


    // let t1 : keyof Person =   "name" | "age" | "hobby"
    // let t2 : k in t1=   "name" | "age" | "hobby"
    type Partial1<T> = { [k in keyof T]?: T[k] }
    type Required1<T> = { [k in keyof T]-?: T[k] }
    type Mutable1<T> = { -readonly [k in keyof T]: T[k] }
    type Readonly1<T> = { +readonly [k in keyof T]: T[k] }
    type Record1<T extends string | number | symbol, K> = { [q in T]: K }
    type Pick1<T, K extends keyof T> = { [q in K]: T[q] }
    type Exclude1<T, K> = T extends K ? never : T
    type Extract1<T, K> = T extends K ? T : never
    // type Omit1<T, K> = { [q in keyof T extends K ? never : keyof T]: T[q] }
    type Omit1<T, K> = { [q in Exclude1<keyof T, K>]: T[q] }
    // let a: Record<'name', Person> = {
    //     name: 'sd',
    //     age: 12,
    // }

    // let s: Extract1<'1' | '2' | '3', '2'> = '2'
    // let o: Omit1<Person, 'hobby'> = {
    //     name: '阿萨德',
    //     age: 1,
    // }


    // type petsGroup = 'dog' | 'cat' | 'fish';
    // interface IPetInfo {
    //     name: string,
    //     age: number,
    // }
    // let a: Person = {
    //     name: '只是',
    //     age: 12,
    //     hobby: 'my',
    // }
    // let c1: Record1<petsGroup, Person> = {
    //     dog: {
    //         name: '只是',
    //         age: 12,
    //         hobby: 'my',
    //     },
    //     cat: {
    //         name: '只是',
    //         age: 12,
    //         hobby: 'my',
    //     },
    //     fish: {
    //         name: '只是',
    //         age: 12,
    //         hobby: 'my',
    //     },
    // }










    return <>
        <header className='header'>
            <div className='header-logo'  >
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
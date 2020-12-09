//keyof
interface User {
    name: string
    age: number
}
type User1 = {
    name: string
    age: number
}

type UserInfo<T> = keyof T

let user: UserInfo<User1> = 'age'

//in
type Keys = 'name' | 'age'
type O = {
    [p in Keys]: string
}
let o: O = {
    name: 'string',
    age: '2'
}
// partial
type partial<T> = {
    [k in keyof T]?: T[k]
}
// required
type Required<T> = {
    [k in keyof T]-?: T[k]
}
//Mutable 
type Mutable<T> = {
    -readonly [k in keyof T]-?: T[k]
}
//Readonly 
type Readonly<T> = {
    readonly [k in keyof T]-?: T[k]
}
//Pick 
type Pick<T, K extends keyof T> = {
    [k in K]: T[k]
}

let pick: Pick<User1, 'name'> = {
    name: '1'
}
// recody
type Recody<T extends string, K> = {
    [t in T]: K
}
let recody: Recody<'name' | 'age' | 'happy', string> = {
    name: 'zs',
    age: 'zs',
    happy: 'zs',
}
type Exclude<T, K> = T extends K ? never : T
type Extract<T, K> = T extends K ? T : never


type Omit<T, K extends string> = Pick<T, Exclude<keyof T, K>>


let Omit: Omit<User1, 'name'> = {
    age: 12
}

//类型分发
interface Fish {
    fish: string
}
interface Water {
    water: string
}
interface Bird {
    bird: string
}
interface Sky {
    sky: string
}
//naked type
type Condition<T> = T extends Fish ? Water : Sky;

let condition1: Condition<Fish | Bird> = { water: '水' };
let condition2: Condition<Fish | Bird> = { sky: '天空' };

type Diff<T, U> = T extends U ? never : T;

// infer
type Func<T> = T extends () => infer P ? P : string
type Infer1 = Func<string>
type Infer2 = Func<number>
type Infer3 = Func<() => string>
type Infer4 = Func<() => void>

type InferObj<T> = T extends { a: infer P, b: infer P } ? P : string
type Io1 = InferObj<string>
type Io2 = InferObj<number>
type Io3 = InferObj<{ a: boolean, b: string }>




type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type Idemo1 = ReturnType<string>
type Idemo2 = ReturnType<number>
type Idemo3 = ReturnType<() => void>
type Idemo4 = ReturnType<() => string>
type Idemo5 = ReturnType<(a: number, b: string) => string>

type Ids = Array<number>
type Names = Array<string>
type UserExtends<T> = T extends Ids ? Array<number> : T extends Names ? Array<string> : T

let ids: UserExtends<Ids> = [1, 2, 3]
let names: UserExtends<Names> = ['撒旦', '2', 'YCCYCYCY']
type UserInfer<T> = T extends (infer P)[] ? P : string

let ids1: UserInfer<Ids> = 1


interface SimpleRecord<T> { prop: T }
declare function foo1<T>(): SimpleRecord<T>[]
type func = () => number;
function foo(x: number): Array<number> {
    return [x];
}
type cc = ReturnType<typeof foo>
type cc2 = ReturnType<typeof foo1>
type F = typeof foo

type variable = string;
// type funcReturnType = ReturnType<func>; // funcReturnType 类型为 number
type varReturnType = ReturnType<variable>;
// type AxiosReturnType = ReturnType<typeof axios>

// 简化参数
interface YcObj {
    type: string
    [propName: string]: string

}
// type Action =
//     | {
//         type: "INIT"
//     }
//     | {
//         type: "SYNC"
//     }
//     | {
//         type: "LOG_IN"
//         emailAddress: string
//     }
//     | {
//         type: "LOG_IN_SUCCESS"
//         accessToken: string
//     }

// type ActionType = Action["type"]
// type ExcludeAction<T, U> = T extends { type: U } ? T : never
// type ExcludeTypeField<A> = { [a in Exclude<keyof A, 'type'>]: A[a] }
// type ActionObj<T> = ExcludeTypeField<ExcludeAction<Action, T>>

// // {accessToken:string}
// type ExtractSimpleAction<A> = A extends any
//     ? {} extends ExcludeTypeField<A>
//     ? A
//     : never
//     : never
// type SimpleAction = ExtractSimpleAction<Action>
// type SimpleActionType = SimpleAction['type']
// type ComplexActionType = Exclude<ActionType, SimpleActionType>
// declare function dispatch<T extends SimpleActionType>(type: T): void
// declare function dispatch<T extends ComplexActionType>(type: T, action: ActionObj<T>): void

type Exclude<T,P> = P

// name | age | happy   happy

type Action =
    | {
        type: "INIT"
    }
    | {
        type: "SYNC"
    }
    | {
        type: "LOG_IN"
        emailAddress: string
    }
    | {
        type: "LOG_IN_SUCCESS"
        accessToken: string
    }
type ActionType = Action['type']
type ActionObj<T, K> = T extends { type: K } ? T : never
// type ActionValue<T,K>= 
// type ActionResult = ActionValue<ActionObj<T, K>,'type'>


// declare function dispatch<T extends ActionType>(type: T, action: ActionObj<Action, T>): {

// }
// dispatch('LOG_IN_SUCCESS',{
//     type: "LOG_IN_SUCCESS",
//     accessToken:'sd'
// })

// type ActionType = Action['type']
// type ActionObj<T, K> = { [t in Exclude<keyof T, K>]: T[t] }

// type ActionValue<T, K> = K extends { type: T } ? T : never  //{type: "LOG_IN_SUCCESS"  accessToken: string }


// declare function dispatch<T extends ActionType>(type: T, action: ActionObj<ActionValue<Action, T>, 'type'>): void

// type ActionKey<T, K extends string> = { [t in keyof T]: T[] }
// type ActionV = ActionKey<Action, 'type'>

// type Yc<T extends string, ActionKey<T,YcObj> > :void

// declare function yc(obj: Action): void
// function yc(obj: YcObj) {

// }

// yc('test1', {
//     value: 'value'
// })

// yc({
//     type: 'test1',
//     value: 'value'
// })
// yc({
//     type: 'test2',
// })
// yc({
//     type: 'test3',
//     name: 'test3',
// })





let A = 1

export default A
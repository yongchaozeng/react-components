import React, { FC, useState, useEffect, useRef, useCallback, MutableRefObject } from 'react'



// function useDebounce(fn: any, delay: number, dep = []) {
//     // const  current= useRef(null);
//     type timeID = number | null
//     let timeID: timeID = null
//     type MutableRefObject =   { fn: any; timer: null; }
    
//     let current = useRef({ fn, timer: null });
//     useEffect(function () {
//         if (current && current.fn) {
//             current.fn = fn;
//         }
//     }, [fn]);
//     return useCallback(function f(...args) {
//         if (current.timer) {
//             clearTimeout(current.timer);
//         }
//         current.timer = 12
//         //   current.timer = window.setTimeout(() => {

//         //     // current.fn(...args);
//         //   }, delay);
//     }, dep)
// }


type Home = {

}
// debounce(() => { }, 1000)(1, 2, 3, 4)
const Home: FC<Home> = (props) => {

    // const [counter, setCounter] = useState(1)
    // const [counter2, setCounter2] = useState(0);

    // useEffect(function () {
    //     const t = setInterval(() => {
    //         setCounter2(x => x + 1)

    //     }, 1000);
    //     return () => clearInterval(t)
    // }, [])

    // const handleClick = useDebounce(function () {
    //     setCounter((counter) => counter + 1)
    // }, 1000)

    return (
        <div>
            <h1>test</h1>
            {/* <h1>home{counter}</h1>
            <h1>home{counter2}</h1>
            <button onClick={handleClick} >save</button> */}
        </div>
    )

}

export default Home
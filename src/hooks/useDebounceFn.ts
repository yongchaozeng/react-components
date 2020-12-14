import { useRef } from 'react'

const debounce = (() => {
    let timeId: number | null;
    return (fn: any, time: number) => {
        if (timeId) clearTimeout(timeId)
        timeId = window.setTimeout(() => {
            fn()
            timeId = null
        }, time)
    }
})()



type useDebounceFn = (...args: any) => any

const useDebounceFn = <T extends useDebounceFn>(fn: T, options?: any) => {
    
    let cb = () => {
        return debounce(fn, 300)
    }

    return {
        run: (cb as unknown) as T,
    }
}

export default useDebounceFn;
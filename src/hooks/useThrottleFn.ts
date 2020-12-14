
const throttle = (() => {
    let isStart = true
    return (fn: any, time: number) => {
        if (isStart) {
            isStart = false
            setTimeout(() => {
                fn()
                isStart = true
            }, time)
        }

    }
})()



type useThrottleFn = (...args: any) => any

const useThrottleFn = <T extends useThrottleFn>(fn: T, options?: any) => {

    let cb = () => {
        return throttle(fn, 300)
    }

    return {
        run: (cb as unknown) as T,
    }
}

export default useThrottleFn;
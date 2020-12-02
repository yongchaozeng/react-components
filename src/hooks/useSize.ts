import { useState, useLayoutEffect ,useEffect} from 'react'
import ResizeObserver from 'resize-observer-polyfill';
import { getTargetElement, BasicTarget } from './utils/dom';

type Size = {
    width: number | string
    height: number | string
}

// function useSize(target: string, ) : Size {
//     return {
//         width: 1,
//         height: 1,
//     }
// }

const useSize = (target: any, ): Size => {
    const [state, setState] = useState(() => {
        const el = getTargetElement(target);
        return {
            width: ((el || {}) as HTMLElement).clientWidth,
            height: ((el || {}) as HTMLElement).clientHeight,
        };
    })
    // console.log(7, state)

    useEffect(() => {
        const el = getTargetElement(target);
        if (!el) {
            return () => { };
        }
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                setState({
                    width: entry.target.clientWidth,
                    height: entry.target.clientHeight,
                });
            });
        });

        resizeObserver.observe(el as HTMLElement);
        return () => {
            resizeObserver.disconnect();
        };
    }, [target])

    return state
}

console.log(11, ResizeObserver)
export default useSize
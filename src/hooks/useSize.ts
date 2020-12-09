import { useState, useEffect, MutableRefObject } from 'react'
import ResizeObserver from 'resize-observer-polyfill';
import { getTargetElement } from './utils/dom';

type Size = {
    width: number | string
    height: number | string
}

type BasicTarget = MutableRefObject<null> | null

const useSize = (target: BasicTarget): Size => {
    const [state, setState] = useState(() => {
        const el = getTargetElement(target);
        return {
            width: ((el || {}) as HTMLElement).clientWidth,
            height: ((el || {}) as HTMLElement).clientHeight,
        };
    })

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
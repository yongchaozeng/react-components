
import { MutableRefObject } from 'react';



// export type BasicTarget<T> =
//     | (() => T | null)
//     | T
//     | null
//     | MutableRefObject<T | null | undefined>;


type TargetElement = HTMLElement | Element | Document | Window;

type BasicTarget<T> = null | MutableRefObject<null | undefined> | (() => T | null) | T;

const getTargetElement = (target: BasicTarget<TargetElement>):TargetElement|undefined|null => {

    let targetElement:TargetElement|undefined|null

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
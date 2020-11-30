import { useEffect, useRef,useState } from 'react'

const DEFAULT_OPTIONS = {
    restoreOnUnmount: false
}



var __read = this && this.__read || function (o, n) {
    debugger
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;

    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = {
            error: error
        };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }

    return ar;
};

const useToggle = (defaultValue, reverseValue) => {
    if (defaultValue === void 0) {
        defaultValue = false;
    }
    var _a = __read(useState(defaultValue), 2),
    state = _a[0],
    setState = _a[1];
    // console.log(77,_a)
    // console.log(77,state)
    // console.log(77,setState)
    
}
// useToggle('12')

export default useToggle
const BasicTarget = () => {
    
}
const getTargetElement = (target?: any, ) => {
    
    let targetElement: any;

    if (typeof target === 'function') {
        targetElement = target();
    } else if ('current' in target) {
        targetElement = target.current;
    } else {
        targetElement = target;
    }

    return targetElement;
}

export {
    getTargetElement,
    BasicTarget,
}
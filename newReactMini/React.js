
let nextUnitOfWork = null
let workInProgressRoot = null
let currentRoot = null

const React = {
    createElement(type, props, ...children) {
        return {
            type: type,
            props: { ...props, children }
        }
    },

    render(vDom, container) {

        // container.appendChild(dom)
        let workInProgressRoot = {

            dom: container,
            props: {
                children: vDom
            },
            alternate: currentRoot
        }
        nextUnitOfWork = workInProgressRoot

    }
}
export default React
function workLoop(deadline) {
    while (nextUnitOfWork && deadline.timeRemaining() > 1) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }
    requestIdleCallback(workLoop);

    // 任务做完后统一渲染
    if (!nextUnitOfWork && workInProgressRoot) {
        commitRoot();
    }

}
requestIdleCallback(workLoop);

const performUnitOfWork = (fiber) => {
    if (!fiber.dom) {
        fiber.dom = createDom(fiber)
            (fiber)
    }
    let elements = fiber.props?.children
    reconcileChildren(fiber, elements)
}
function reconcileChildren(workInProgressFiber, elements) {
    let oldFiber = workInProgressFiber.alternate?.child
    let prevSibing = null
    let index = 0

    if (elements?.length) {
        if (!oldFiber) {
            for (let i = 0; k < elements.length; i++) {
                let element = elements[i]
                let newFiber = buildNewFiber(element,workInProgressFiber)

            }
        }
    }

}
const buildNewFiber = (fiber,workInProgressFiber) => { 
    return {
        type:fiber.type,
        props:fiber.props,
        dom:null,
        return:workInProgressRoot,
        alternate:null,
        effectTag:'REPLACEMENT'
    }
}

// 统一操作DOM
function commitRoot() {
    console.log('renderer...')
    // commitRootImpl(workInProgressRoot.child);    // 开启递归
    // workInProgressRoot = null;     // 操作完后将workInProgressRoot重置
}

const createDom = (vDom) => {
    let dom;
    if (vDom === null) {
        throw ('el不能为null')
    }
    if (typeof vDom === 'object') {
        dom = document.createElement(vDom.type)
    } else {
        dom = document.createTextNode(vDom)
    }
    Object.keys(vDom.props).filter(item => item !== 'children')
        .forEach(item => {
            dom.setArrtibute(item, dom.props[item])
        })
    return dom
}

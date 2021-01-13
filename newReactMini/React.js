
let nextUnitOfWork = null
let workInProgressRoot = null
let currentRoot = null

function createTextVDom(text) {
    return {
        type: 'TEXT',
        props: {
            nodeValue: text,
            children: []
        }
    }
}

const React = {
    createElement(type, props, ...children) {
        return {
            type: type,
            props: {
                ...props,
                children: children.map(child => {
                    return typeof child === 'object' ? child : createTextVDom(child)
                })
            }
        }
    },

    render(vDom, container) {

        // container.appendChild(dom)
        workInProgressRoot = {

            dom: container,
            props: {
                children: [vDom]
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
    }
    let elements = fiber.props?.children
    reconcileChildren(fiber, elements)
    if (fiber.child) {
        return fiber.child
    }
    let nextFiber = fiber;
    while (nextFiber) {
        if (nextFiber.sibling) {
            return nextFiber.sibling
        }
        nextFiber = nextFiber.return
    }

}

function reconcileChildren(workInProgressFiber, elements) {
    let oldFiber = workInProgressFiber.alternate?.child
    let prevSibing = null
    let index = 0

    if (elements?.length) {
        if (!oldFiber) {
            for (let i = 0; i < elements.length; i++) {
                let element = elements[i]
                let newFiber = buildNewFiber(element, workInProgressFiber)
                if (i === 0) {
                    workInProgressFiber.child = newFiber
                } else {
                    prevSibing.sibling = newFiber
                }
                prevSibing = newFiber
            }
        }
    }

}
const buildNewFiber = (fiber, workInProgressFiber) => {
    return {
        type: fiber.type,
        props: fiber.props,
        dom: null,
        return: workInProgressFiber,
        alternate: null,
        effectTag: 'REPLACEMENT'
    }
}

// 统一操作DOM
function commitRoot() {

    console.log('renderer...', workInProgressRoot)

    commitRootImpl(workInProgressRoot.child);    // 开启递归
    workInProgressRoot = null;     // 操作完后将workInProgressRoot重置
    currentRoot = workInProgressRoot
}
function commitRootImpl(fiber) {
    if (!fiber) {
        return;
    }

    // const parentDom = fiber.return.dom;
    // 向上查找真正的DOM
    let parentFiber = fiber.return;
    while (!parentFiber.dom) {
        parentFiber = parentFiber.return;
    }
    const parentDom = parentFiber.dom;

    if (fiber.effectTag === 'REPLACEMENT' && fiber.dom) {
        parentDom.appendChild(fiber.dom);
    } else if (fiber.effectTag === 'DELETION') {
        // parentDom.removeChild(fiber.dom);
        // commitDeletion(fiber, parentDom);
    } else if (fiber.effectTag === 'UPDATE' && fiber.dom) {
        // 更新DOM属性
        // updateDom(fiber.dom, fiber.alternate.props, fiber.props);
    }

    // 递归操作子元素和兄弟元素
    commitRootImpl(fiber.child);
    commitRootImpl(fiber.sibling);
}


const createDom = (vDom) => {
    let dom;
    if (vDom === null) {
        throw ('el不能为null')
    }
    if (vDom.type !== 'TEXT') {
        dom = document.createElement(vDom.type)
        if (vDom.props) {
            Object.keys(vDom.props)
                .filter(item => item !== 'children')
                .forEach(item => {
                    dom.setAttribute(item, vDom.props[item])
                })
        }
    } else {
        dom = document.createTextNode(vDom.props.nodeValue)

    }



    return dom
}

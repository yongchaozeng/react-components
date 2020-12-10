
const React = {
    createElement(type, props, ...children) {
        // 核心逻辑不复杂，将参数都塞到一个对象上返回就行
        // children也要放到props里面去，这样我们在组件里面就能通过this.props.children拿到子元素
        return {
            type,
            props: {
                ...props,
                children
            }
        }
    },
    render(vDom, container) {
        let dom = null;
        if (typeof vDom !== 'object') {
            dom = document.createTextNode(vDom)
        } else {
            dom = document.createElement(vDom.type)
        }
        if (vDom.props) {
            Object.keys(vDom.props).filter((item) => {
                return item !== 'children'
            }).forEach((item, idx) => {
                dom[item] = vDom.props[item]
            })
        }
        if (vDom.props && vDom.props.children && vDom.props.children.length > 0) {
            vDom.props.children.forEach((item) => {
                React.render(item, dom)
            })
        }
        container.appendChild(dom)
    }
}
function workLoop(deadline) {
    while (nextUnitOfWork && deadline.timeRemaining() > 1) {
        // 这个while循环会在任务执行完或者时间到了的时候结束
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }

    // 任务做完后统一渲染
    if (!nextUnitOfWork && workInProgressRoot) {
        commitRoot();
    }

    // 如果任务还没完，但是时间到了，我们需要继续注册requestIdleCallback
    requestIdleCallback(workLoop);
}
// 统一操作DOM
function commitRoot() {
    commitRootImpl(workInProgressRoot.child);    // 开启递归
    workInProgressRoot = null;     // 操作完后将workInProgressRoot重置
}

function commitRootImpl(fiber) {
    if (!fiber) {
        return;
    }

    const parentDom = fiber.return.dom;
    parentDom.appendChild(fiber.dom);

    // 递归操作子元素和兄弟元素
    commitRootImpl(fiber.child);
    commitRootImpl(fiber.sibling);
}

// requestIdleCallback(workLoop)

// performUnitOfWork用来执行任务，参数是我们的当前fiber任务，返回值是下一个任务
function performUnitOfWork(fiber) {
    // 根节点的dom就是container，如果没有这个属性，说明当前fiber不是根节点
    if (!fiber.dom) {
        fiber.dom = createDom(fiber);   // 创建一个DOM挂载上去
    }

    // 如果有父节点，将当前节点挂载到父节点上
    if (fiber.return) {
        fiber.return.dom.appendChild(fiber.dom);
    }

    // 将我们前面的vDom结构转换为fiber结构
    const elements = fiber.children;
    let prevSibling = null;
    if (elements && elements.length) {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const newFiber = {
                type: element.type,
                props: element.props,
                return: fiber,
                dom: null
            }

            // 父级的child指向第一个子元素
            if (i === 0) {
                fiber.child = newFiber;
            } else {
                // 每个子元素拥有指向下一个子元素的指针
                prevSibling.sibling = newFiber;
            }

            prevSibling = newFiber;
        }
    }

    // 这个函数的返回值是下一个任务，这其实是一个深度优先遍历
    // 先找子元素，没有子元素了就找兄弟元素
    // 兄弟元素也没有了就返回父元素
    // 然后再找这个父元素的兄弟元素
    // 最后到根节点结束
    // 这个遍历的顺序其实就是从上到下，从左到右
    if (fiber.child) {
        return fiber.child;
    }

    let nextFiber = fiber;
    while (nextFiber) {
        if (nextFiber.sibling) {
            return nextFiber.sibling;
        }

        nextFiber = nextFiber.return;
    }
}


export default React
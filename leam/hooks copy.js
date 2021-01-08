let isMount = true
let workInProgressHook = null // 函数中具体执行的hook

// 每个函数组件对应一个fiber
const filber = {
    stateNode: App,
    memoizedState: null   // 保存hooks
}

function useState(ininiaState) {
    let hook;
    if (isMount) {
        hook = {
            memoizedState: ininiaState,
            next: null,
            queue: {
                pending: null
            },
        }
        if (!filber.memoizedState) {
            filber.memoizedState = hook
        } else {
            workInProgressHook.next = hook
        }
        workInProgressHook = hook
    } else {

        hook = workInProgressHook
        workInProgressHook = workInProgressHook.next
    }

    let baseState = hook.memoizedState
    if (hook.queue.pending) {
        let firstUpdate = hook.queue.pending.next
        do {
            const action = firstUpdate.action
            baseState = action(baseState)
            firstUpdate = firstUpdate.next
        } while (firstUpdate !== hook.queue.pending.next)

        hook.queue.pending = null
    }
    hook.memoizedState = baseState
    return [baseState, dispatchAction.bind(null, hook.queue)]
}

function dispatchAction(queue, action, ) {
    const update = {
        action,
        next: null
    }
    if (queue.pending === null) {
        update.next = update
    } else {
        update.next = queue.pending.next
        queue.pending.next = update
    }
    queue.pending = update;

    schedule()
}

// 调度
function schedule() {
    workInProgressHook = filber.memoizedState //复位
    let app = filber.stateNode()
    isMount = false
    return app
}

function App() {
    const [num, updateNum] = useState(0)
    const [num1, updateNum1] = useState(10)

    console.log(`${isMount ? 'mount' : 'update'} num: `, num);


    return {
        onClick() {
            console.log('test',num);
            updateNum(num => num + 1)
            console.log('test1',num);
            
        }
    }
}

window.app = schedule()

let isMount = true
let workInProgressHook = null //定位当前hook

// 当前组件filber
const filber = {
    state: null,//存储num值
    hook: null,// 链表存储hook
}

const useState = (initState) => {
    let hook = null
    if (isMount) {

        hook = {
            state: initState,
            next: null,
            queue: {
                pending: null
            }
        }
        if (!filber.hook) {
            filber.hook = hook
        } else {
            filber.hook.next = hook
        }

        workInProgressHook = hook
        filber.state = hook.state

    } else {
        hook = workInProgressHook
        filber.state = hook.state
        if (hook.next) {
        debugger
            
            workInProgressHook = hook.next

        }
    }

    let baseState = filber.state
    if (hook.queue.pending) {

        let firstUpdate = hook.queue.pending.next
        do {
            let changeState = firstUpdate.hook
            baseState = changeState(baseState)
            firstUpdate = firstUpdate.next

        } while (firstUpdate !== hook.queue.pending.next)
    }

    return [baseState, updateState.bind(null, hook.queue)]
}
function updateState(queue, changeState) {
    isMount = false
    let update = {
        hook: changeState,
        next: null
    }

    if (!queue.pending) {
        update.next = update
    } else {
        update.next = queue.pending.next
        queue.pending.next = update
    }
    queue.pending = update
    workInProgressHook = filber.hook
    schedule()
}
function schedule() {
    return App()
}

function App() {
    let [num, setNum] = useState(0)
    let [num1, setNum1] = useState(10)
    console.log(7, num)
    console.log(8, num1)
    return {
        onClick() {

            setNum((item) => item + 1)
            setNum((item) => item + 2)
            setNum((item) => item + 3)
            setNum1((item) => item + 10)
        }
    }
}
window.app = schedule()


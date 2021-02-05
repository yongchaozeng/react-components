
import isPlainObject from './utils/isPlainObject'
type Reducer<S, A> = (state: S, action: A) => S


interface Action<T = any> {
    type: T
}


function createStore<S, A extends Action,>(reducer: Reducer<S, A>, preloadedState?: S,) {

    let currentReducer = reducer
    let currentState = preloadedState as S
    let currentListeners: any[] = []

    function dispatch(action: A) {
        if (!isPlainObject(action)) {
            throw new Error(
                'Actions must be plain objects. ' +
                'Use custom middleware for async actions.'
            )
        }

        if (typeof action.type === 'undefined') {
            throw new Error('请传入正确的type值')
        }

        try {
            currentState = currentReducer(currentState, action)
        } catch (e) {

        }

        if (currentListeners && currentListeners.length > 0) {
            currentListeners.forEach((cb) => {
                cb()
            })
        }

    }
    function getState() {
        return currentState as S
    }
    function subscribe(callback: () => void) {
        currentListeners.push(callback)
        return function () {
            currentListeners = []
        }
    }

    dispatch({ type: 'asdasd' } as A)

    return {
        dispatch,
        getState,
        subscribe,
    }
}

export default createStore



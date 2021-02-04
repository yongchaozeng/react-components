

type Reducer<S, A> = (state: S, action: A) => S


interface Action<T = any> {
    type: T
}


function createStore<S, A extends Action,>(reducer: Reducer<S, A>, preloadedState?: S) {

    let currentReducer = reducer
    let currentState = preloadedState as S
    let currentListeners:any[] = []



    function dispatch(action: A) {

        currentState = currentReducer(currentState, action)

        if(currentListeners && currentListeners.length>0){
            currentListeners.forEach((cb)=>{
                
                cb()
            })
        }
        // if(action && typeof action === 'function'){

        // }
    }
    function getState() {
        return currentState
    }
    function subscribe(callback: ()=>void) {
        currentListeners.push(callback)
    }

    dispatch({ type: 'asdasd' } as A)

    return {
        dispatch,
        getState,
        subscribe,
    }
}

export default createStore




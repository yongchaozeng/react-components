import { useEffect, useRef } from 'react'

const DEFAULT_OPTIONS = {
    restoreOnUnmount: false
}

type options = {
    restoreOnUnmount: Boolean
}

const useTitle = (title: string, options?: options) => {
    if (options === void 0) {
        options = DEFAULT_OPTIONS
    }
    let titleRef = useRef(document.title)
    useEffect(() => {
        document.title = title
    }, [title])
    useEffect(()=>{
        if(options && options.restoreOnUnmount){
            return ()=>{
                document.title = titleRef.current
            }
        }
    },[])

}
export default useTitle
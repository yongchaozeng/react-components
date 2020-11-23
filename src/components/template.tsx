import React, { FC, useState, useEffect, useRef, useCallback, MutableRefObject, useReducer } from 'react'

type Input = {
    value: string
    change: (string) => {}
}

const Home: FC<Input> = (props) => {
    let { value,change } = props
    const [counter, setCounter] = useState(1)
    const inputChange = (e) => {
        change(e.target.value)
    }

    return (
        // <div>

        // </div>
        <>
            <input type="text" value={value} onChange={(e) => { inputChange(e) }} />
        </>
    )

}

export default Input
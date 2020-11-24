import React, { FC, useState, useEffect, useRef, useCallback, MutableRefObject, useReducer, MouseEventHandler } from 'react'
import './index.less'
var classNames = require('classnames');

type Input = {
    value: string
    change: (e: string) => void
    type?:string
}

const Input: FC<Input> = (props) => {
    let { value, change, children ,type = 'text'} = props
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        change(e.target.value)
    }
    
    return (
        <div className={classNames(['input-container',{'input-icon':children}])}  >
            <div className='children-box'>
                {children}
            </div>
            <input type={type} className={classNames({'input':children})}  value={value} onChange={(e) => { inputChange(e) }} />
        </div>
    )

}

export default Input
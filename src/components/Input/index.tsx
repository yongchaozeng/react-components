import React, { FC,  } from 'react'
import './index.less'
var classNames = require('classnames');

type Input = {
    value: string
    change: (e: string) => void
    type?:string    
    placeholder?:string    
}

const Input: FC<Input> = (props) => {
    let { value, change, children ,type = 'text',placeholder='请输入'} = props
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        change(e.target.value)
    }
    
    return (
        <div className={classNames(['input-container',{'input-icon':children}])}  >
            <div className='children-box'>
                {children}
            </div>
            <input placeholder={placeholder} type={type} className={classNames({'input':children})}  value={value} onChange={(e) => { inputChange(e) }} />
        </div>
    )

}

export default Input
import React, { FC, } from 'react'
import './index.less'
type params = {
    selectItem: any
}
type YcOption = {
    value?:string|number|null|undefined
    params?:params
}

const YcOption: FC<YcOption> = (props) => {
    let { children,params} = props
    let selectItem = (params as params).selectItem

    return (
        <li className='select-item' onClick={(e) => { selectItem(e) }}  >{children}</li>

    )

}

export default YcOption
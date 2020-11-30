import React, { FC, } from 'react'
import './index.less'
type Icon = {
    name: string
    color?: string
    size?: number
    style?:React.CSSProperties

}

const Icon: FC<Icon> = (props) => {
    let { name,size=30,style } = props

    require(`../../imgs/${name}.svg`)

    return (
        <svg style={{width:size,height:size,...style}} ><use xlinkHref={`#${name}`}  ></use></svg>
    )

}

export default Icon
import React, { FC, } from 'react'
import './index.less'
type Icon = {
    name: string
    color?: string
    size?: number | string
    style?: React.CSSProperties,
    className?: string,

}

const Icon: FC<Icon> = (props) => {
    let { name, size = 30, style, className } = props

    require(`../../imgs/${name}.svg`)

    return  (
        <span className={className}>
            <svg  style={{ width: size, height: size, ...style }} >
                <use xlinkHref={`#${name}`}  ></use>
            </svg>
        </span>

    )

}

export default Icon
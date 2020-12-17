import React, { FC, } from 'react'
import './index.less'
let classnames = require('classnames')
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
        // <span className={classnames([className,'icon-container'])}>
            <svg  className={classnames([className,'icon-container'])}  style={{ width: size, height: size, ...style }} >
                <use xlinkHref={`#${name}`}  ></use>
            </svg>
        // </span>

    )

}

export default Icon
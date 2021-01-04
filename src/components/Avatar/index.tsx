import React, { FC, } from 'react'
import './index.less'
type Module = {
    default: string
}
type Avatar = {
    src: Module | string
}

const Avatar: FC<Avatar> = (props) => {
    let { src } = props
    return (
        <>
            <img className='avatar' src={(src as Module).default || (src as string)}
                alt="" />
        </>
    )

}

export default Avatar
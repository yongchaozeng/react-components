import React, { FC, } from 'react'
import './index.less'
type Avatar = {
    src: string
}

const Avatar: FC<Avatar> = (props) => {
    let { src } = props


    return (
        <img className='avatar' src={src} alt="" />
    )

}

export default Avatar
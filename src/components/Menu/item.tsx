import React, { FC,  } from 'react'
import './index.less'
type MenuItem = {

    onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

const MenuItem: FC<MenuItem> = (props) => {
    let { children, onClick = () => { } } = props
    return (
        <li onClick={(e) => { onClick(e) }} className='menu-item' >{children}</li>
    )

}

export default MenuItem
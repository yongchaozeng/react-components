import React, { FC,  } from 'react'
import './index.less'
type Menu = {
    src?: string
}

const Menu: FC<Menu> = (props) => {
    let { src, children } = props
    let a = {

    }

    return (

        <ul className='menu-container'>
            {children}
        </ul>

    )

}

export default Menu
import React, { FC, } from 'react'
import './index.less'
type Menu = {
    src?: string
}

const Menu: FC<Menu> = (props) => {
    let { children } = props


    return (

        <ul className='menu-container'>
            {children}
        </ul>

    )

}

export default Menu
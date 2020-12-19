import React, { FC, } from 'react'
import './index.less'
import MenuSubItem from './SubItem'
import MenuItem from './item'
type Menu = {
    src?: string
}
export const Menu: FC<Menu> = (props) => {
    let { children } = props


    return (

        <ul className='menu-container'>
            {children}
        </ul>

    )

}

export const SubItem = MenuSubItem
export const Item = MenuItem





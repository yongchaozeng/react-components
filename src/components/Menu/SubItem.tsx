import React, { FC, } from 'react'
import './index.less'
type MenuSubItem = {
    title: string,
}

const MenuSubItem: FC<MenuSubItem> = (props) => {
    let {  children ,title} = props
    return (
        <li className='menu-sub-item' >
            
            {/* <MenuItem >{title}</MenuItem> */}
            <div className='menu-item'>
                {title}
            </div>
            <ul className='menu-children'>
                {children}
            </ul>

        </li>
    )

}

export default MenuSubItem
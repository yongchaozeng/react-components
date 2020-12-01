import React, { FC, useState } from 'react'
import { useToggle } from 'ahooks'
import { Motion, spring } from 'react-motion';

import './index.less'
type MenuSubItem = {
    title: string,
}



const MenuSubItem: FC<MenuSubItem> = (props) => {
    let { children, title } = props
    const [show, { toggle }] = useToggle()
    const [num, setNum] = useState(0)
    const [opacity, setOpacity] = useState(0)
    const changeMenu = () => {
        if (num === 80) {
            setNum(0)
            setOpacity(0)
            setTimeout(()=>{
                toggle()
            },300)

        } else {
            setNum(80)
            setOpacity(1)
                toggle()

        }
    }
    return (
        <li className='menu-sub-item' >

            {/* <MenuItem >{title}</MenuItem> */}
            <div onClick={() => { changeMenu() }} className='menu-item'>
                {title}
            </div>
            {show &&
                <Motion defaultStyle={{ x: 0 ,}} style={{ x: spring(num) }}>
                    {value => <ul style={{ height: `${value.x}px`,opacity:opacity }} className='menu-children'>
                        {children}
                    </ul>}
                </Motion>
            }


        </li>
    )

}

export default MenuSubItem
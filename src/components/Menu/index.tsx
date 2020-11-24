import React, { FC, useState, useEffect, useRef, useCallback, MutableRefObject, useReducer } from 'react'
import './index.less'
type Menu = {
    src?: string
}

const Menu: FC<Menu> = (props) => {
    let { src } = props


    return (
      
            <ul className='menu-container'>
                <li className='menu-item' >1
                    {/* <ul className={classNames([{'menu-item':true}])}>
                        <li>1-1</li>
                        <li>1-2</li>
                        <li>1-3</li>
                        <li>1-4</li>
                    </ul> */}
                </li>
                <li>2</li>
                <li>2</li>
            </ul>
        
    )

}

export default Menu
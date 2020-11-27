import React, { FC, useState, useEffect, useRef, useCallback, MutableRefObject, useReducer } from 'react'
import { useClickAway } from 'ahooks';
import YcOption from './yc-option';
import './index.less'
type YcSelect = {
}

const YcSelect: FC<YcSelect> = (props) => {
    let { children } = props
    const [selectShow, setSelectShow] = useState(false)

    const openSelect = () => {

        setSelectShow(true)
    }
    const ref = useRef<HTMLInputElement>(null);
    useClickAway(() => {
        setSelectShow(false);
    }, ref);

    const num = [1, 2, 3]
    const selectItem = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
        // e.stopPropagation();

        setSelectShow(false);
        if (ref.current) {
            ref.current.value = (e.target as HTMLLIElement).innerText
        }


    }
    return (
        <div className='select-container' >
            <span>
                <input ref={ref} id='navbar' className='select-input' onClick={() => { openSelect() }} /></span>

            {
                selectShow && <ul className='select-list' onClick={(e) => { selectItem(e) }} >


                    {children}

                </ul>
            }


        </div>
    )

}

export default YcSelect
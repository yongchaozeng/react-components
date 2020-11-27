import React, { FC, useState, useEffect, useRef, useCallback, MutableRefObject, useReducer } from 'react'
import { useClickAway } from 'ahooks';
import './index.less'
type YcOption = {
   
}

const YcOption: FC<YcOption> = (props) => {
    let { children,  } = props
    // const [selectShow, setSelectShow] = useState(false)

    // const openSelect = () => {

    //     setSelectShow(true)
    // }
    // const ref = useRef<HTMLInputElement>(null);
    // useClickAway(() => {
    //     setSelectShow(false);
    // }, ref);


    // const selectItem = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    //     e.stopPropagation();
    //     // setSelectShow(false);
    // }
    return (
        <li  className='select-item' >{children}</li>

    )

}

export default YcOption
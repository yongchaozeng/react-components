import React, { FC, useState, useEffect, useRef, useCallback, MutableRefObject, useReducer } from 'react'
import { useClickAway } from 'ahooks';
import './index.less'
type YcSelect = {
    src?: string
}

const YcSelect: FC<YcSelect> = (props) => {
    let { src } = props
    const [selectShow, setSelectShow] = useState(false)

    const openSelect = () => {
        
        setSelectShow(true)
    }
    const ref = useRef<HTMLDivElement>(null);
    useClickAway(() => {
        setSelectShow(false);
    }, ref);

    const num = [1, 2, 3]
    const selectItem = (e:React.MouseEvent<HTMLLIElement, MouseEvent>)=>{
        e.stopPropagation();

        setSelectShow(false);
    }
    return (
        <>
            <div ref={ref} id='navbar'  className='select-container' onClick={()=>{openSelect()}} >
                seleCTTTT
                {
                    selectShow && <ul className='select-list'>

                        {
                            num.map((item, index) => {
                                return (
                                    <li onClick={(e)=>{selectItem(e)}} className='select-item' key={index} >{item}</li>
                                )
                            })
                        }
                    </ul>
                }
            </div>

        </>
    )

}

export default YcSelect
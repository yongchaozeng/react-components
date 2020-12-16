import React, { FC, useState, useRef, useEffect } from 'react'
import { Motion, spring } from 'react-motion'
import { useClickAway } from 'ahooks';
import './index.less'
const classNames = require('classnames')

interface children extends React.ReactElement {
    props: props
    child: any
}

type props = {
    value: string
    children: string
}

type YcSelect = {
    placeholder?: string
    className?: string
    style?: React.CSSProperties
    defaultVlaue?: string | number | null | undefined
    onChange: (e: React.MouseEvent<HTMLUListElement>) => void
}


const YcSelect: FC<YcSelect> = (props) => {
    let { children, placeholder = '请选择', className, style, defaultVlaue, onChange } = props
    const [selectShow, setSelectShow] = useState(false)
    const [num, setNum] = useState(1)
    const openSelect = () => {
        setSelectShow(true)
    }
    const ref = useRef<HTMLInputElement>(null);
    useClickAway(() => {
        setSelectShow(false);
    }, ref);

    useEffect(() => {
        for (let child of children as children[]) {
            if (defaultVlaue === child.props.value) {
                ((ref as React.RefObject<HTMLInputElement>).current as HTMLInputElement).value = child.props.children
            }
        }
    }, [children, defaultVlaue])

    const selectItem = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
        setSelectShow(false);
        if (ref.current) {
            ref.current.value = (e.target as HTMLLIElement).innerText
            console.log(e.target);

            onChange(e)
        }

    }

    return (
        <div className={classNames(['select-container', className])} style={style} >
            <span>
                <input ref={ref} id='navbar' placeholder={placeholder}
                    className='select-input' onClick={() => { openSelect() }} /></span>
            {
                selectShow &&

                (
                    <>
                        <Motion defaultStyle={{ x: 0, }} style={{ x: spring(num), }}>
                            {value => <ul style={{ opacity: `${value.x}` }} className='menu-children'>
                                <div className='select-list-arrow'></div>
                                <ul className='select-list'  >

                                    {React.Children.map(children, child => {
                                        return React.cloneElement((child as any), {
                                            params: { selectItem: selectItem }
                                        });
                                    })}
                                </ul>
                            </ul>}
                        </Motion>

                    </>
                )

            }
        </div>
    )
}

export default YcSelect
import React, { FC, useState, useRef, useEffect } from 'react'
import { Motion, spring } from 'react-motion'
import { useClickAway } from 'ahooks';
import './index.less'
import YcOption from './yc-option'
import Icon from '../Icon'
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
    const [valShow, setValShow] = useState(true)
    const [num, setNum] = useState(1)
    const openSelect = () => {
        setSelectShow(true)
    }
    const ref = useRef<HTMLInputElement>(null);
    useClickAway(() => {
        setSelectShow(false);
    }, ref);

    useEffect(() => {
        if (ref.current?.value) {
            setValShow(true)
        } else {
            setValShow(false)
        }

    }, [ref.current?.value])
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

            onChange(e)
        }

    }

    return (
        <div className={classNames(['select-container', className])} style={style} onClick={() => { openSelect() }}>
            <input ref={ref} id='navbar'  disabled
                className={classNames(['select-input', { 'input-opacity': !valShow }])}  />

            {
                !valShow && <span className='select-placeholder'>{placeholder}</span>
            }
            {/* {selectShow ? <Icon className='select-up' name='user' size={16} />
                : <Icon className='select-down' name='user' size={16} />
            } */}
            <Icon className='select-down' name='user' size={16} />



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

export {
    YcOption,
    YcSelect
}
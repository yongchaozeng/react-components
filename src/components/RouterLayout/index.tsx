import React, { FC, useState, useEffect, useRef, useCallback, MutableRefObject, useReducer } from 'react'
import './index.less'
type RouterLayout = {
  

}

const RouterLayout: FC<RouterLayout> = (props) => {
    let { children} = props


    return (
        <div className='main-layout'>
            {children}
        </div>
        )

}

export default RouterLayout
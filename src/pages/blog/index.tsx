import React, { FC } from 'react'

import './index.less'

interface Blog {

}
interface Person {
    name: string
    age: number,
    hobby: string
}


const Blog: FC<Blog> = () => {
    return <>

        <header className='header'>
            <div className='header-logo'>
                YC冲冲冲
            </div>
            <div className='header-right'>
                <div className='header-search'></div>
                <div className='header-nav-list'></div>
                <div className='header-user'></div>

            </div>
        </header>
    </>
}
export default Blog
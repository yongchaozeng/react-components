import React, { FC, useState, useEffect, useRef, } from 'react'
import { useHistory, withRouter } from "react-router-dom";
import {  useToggle } from '@/hooks/index'; 

// import Login from '../../pages/login'
// import Input from '../../components/Input'
// import { useToggle } from 'ahooks';
import Icon from 'components/Icon'
import Avatar from 'components/Avatar'
import YcSelect from 'components/yc-select'
import YcOption from 'components/yc-select/yc-option'
import Menu from 'components/Menu'
import MenuItem from 'components/Menu/item'
import MenuSubItem from 'components/Menu/SubItem'
import './index.less'


type Home = {

}
const a = {
    name:'123',
    age:12,
    ha:'asd'
}
const {name,...x} = a


const Home: FC<Home> = (props) => {
    let { children } = props
    let history = useHistory();
    const [state, { toggle }] = useToggle();
    useEffect(function () {
    }, [])

    const toApp = (e: React.MouseEvent,type:string) => {
        console.log(11, e.target,type)
        toggle()
        // history.push('/home/app')
    }
    const haha = (e: React.MouseEvent) => {

    }
    const xx = (e: React.MouseEvent) => {
        history.push('/home/app')
    }
    const toTest = (e: React.MouseEvent) => {
        history.push('/home/test')
    }
    const toLogin = (e: React.MouseEvent) => {
        history.push('/login')
    }

    return (
        <div className='home-container' >

            <div className='home-sider'>
                <h1>{`${state}`}</h1>
                <Menu >
                    <MenuSubItem title='1'>
                        <MenuItem onClick={(e)=>{toApp(e,'te')}} >app</MenuItem>
                        <MenuItem onClick={toTest}>test</MenuItem>
                        <MenuItem onClick={(e) => { haha(e) }}>haha</MenuItem>
                        <MenuItem onClick={(e) => { xx(e) }}>c2</MenuItem>
                    </MenuSubItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                </Menu>
            </div>
            <div className='home-right'>

                <div className='header-container' >
                    <div className='header-left' onClick={toLogin}  >
                        <Icon name={'login-icon'} />
                    </div>
                    <div className='header-right'>
                        <YcSelect >
                            <YcOption>1</YcOption>
                        </YcSelect>

                        {/* <div className='language-select' >语言</div> */}
                        <div className='user-box' >
                            <Avatar src={require('../../imgs/login-bg.jpg')} />
                            <p>张三</p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className='router-view'>
                    {children}
                </div>
            </div>

        </div>
    )

}

export default withRouter(Home) 

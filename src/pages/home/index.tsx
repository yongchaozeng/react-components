import React, { FC, useState, useEffect, useRef, } from 'react'
import { useHistory, withRouter } from "react-router-dom";
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
import { useTitle, useToggle } from '@/hooks';

import './index.less'

console.log(1, void 0 === null)

type Home = {

}

var react_1 = require("react");

var DEFAULT_OPTIONS = {
    restoreOnUnmount: false
};



const Home: FC<Home> = (props) => {
    useTitle('Home')
    let { children } = props

    // console.log(5,)
    console.log(6, useState(2))

    // const [counter, setCounter] = useState(1)
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [counter2, setCounter2] = useState(0);
    // const [show,{toggle}] = useToggle()
    // const usernameRef = useRef(null)
    useToggle()
    let history = useHistory();

    useEffect(function () {
        // const t = setInterval(() => {
        //     setCounter2(x => x + 1)
        // }, 300);
        // return () => clearInterval(t)
    }, [])

    const toApp = (e: React.MouseEvent) => {
        console.log(11, e.target)
        // history.push('/home/app')
        // toggle()
    }
    const toTest = (e: React.MouseEvent) => {
        console.log(11, e.target)
        history.push('/home/test')
    }
    const toLogin = (e: React.MouseEvent) => {
        console.log(11, e.target)
        history.push('/login')
    }

    return (
        <div className='home-container' >
           
            <div className='home-sider'>
                <Menu >
                    <MenuSubItem title='1'>
                        <MenuItem onClick={toApp} >app</MenuItem>
                        <MenuItem onClick={toTest}>test</MenuItem>
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

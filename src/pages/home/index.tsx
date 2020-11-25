import React, { FC, useState, useEffect, useRef, useCallback, MutableRefObject, useReducer } from 'react'
import { useHistory, BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import Login from '../../pages/login'
import Input from '../../components/Input'
import Icon from 'components/Icon'
import Avatar from 'components/Avatar'
import YcSelect from 'components/yc-select'
import Menu from 'components/Menu'
import MenuItem from 'components/Menu/item'
import MenuSubItem from 'components/Menu/SubItem'
import './index.less'

var classNames = require('classnames');

type Home = {

}

const Home: FC<Home> = (props) => {
    let { children } = props
    const [counter, setCounter] = useState(1)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [counter2, setCounter2] = useState(0);
    const usernameRef = useRef(null)
    let history = useHistory();

    useEffect(function () {
        const t = setInterval(() => {
            setCounter2(x => x + 1)
        }, 300);
        return () => clearInterval(t)
    }, [])

    const toApp = (e: React.MouseEvent) => {
        console.log(11, e.target)
        history.push('/home/app')
    }
    const toTest = (e: React.MouseEvent) => {
        console.log(11, e.target)
        history.push('/home/test')
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
                    <div className='header-left'>xx</div>
                    <div className='header-right'>
                        <div className='language-select' >语言</div>
                        <div className='user-box' >
                            <Avatar src={require('../../imgs/login-bg.jpg')} />
                            <p>张三</p>
                        </div>
                        <div>
                            <YcSelect />
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

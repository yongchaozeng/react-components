import React, { FC, useState, useEffect, useRef, useCallback, MutableRefObject } from 'react'
import { useHistory } from "react-router-dom";
import Input from '../../components/Input/index'
import Icon from 'components/Icon'
import './index.less'



function useDebounce(fn: any, delay: number, dep = []) {
    const { current }: MutableRefObject<{ fn: any; timer: null | number; }> = useRef({ fn, timer: null });
    
    useEffect(function () {
        current.fn = fn;
    }, [fn]);

    return useCallback(function f(...args) {
        if (current.timer) {
            clearTimeout(current.timer);
        }
        current.timer = window.setTimeout(() => {
            current.fn(...args);
        }, delay);
    }, dep)
}

type Login = {

}

const Login: FC<Login> = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();



    const handleClick = useDebounce(function () {
        submitSava()
    }, 1000)
    const submitSava = () => {
        history.push('/home')
    }

    return (
        <div className='login-container' >
            <div className='login-con '>
                <div className='yc-card'>
                    <div className='yc-card-head'>
                        <p className='yc-card-title'>
                            欢迎登录
                        </p>
                    </div>
                    <div className='yc-main'>
                        <Input placeholder='请输入账户' value={username} change={setUsername} >
                            <Icon name='user' style={{ marginTop: '5px' }} size={25} />
                        </Input>
                        <Input placeholder='请输入密码' type='password' value={password} change={setPassword} >
                            <Icon name='password' size={25} />
                        </Input>
                        <button className='yc-btn login-btn' onClick={handleClick} >登录</button>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Login

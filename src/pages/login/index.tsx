import React, { FC, useState, useEffect, useRef, useCallback, MutableRefObject, useReducer } from 'react'
import { useHistory } from "react-router-dom";
import Input from '../../components/Input/index'
import Icon from 'components/Icon'
import './index.less'
// import   '../../imgs/password.svg'
// require('../../imgs/user.svg')
// require('../../imgs/password.svg')





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

const Login: FC<Login> = (props) => {

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

    const handleClick = useDebounce(function () {
        setCounter((counter) => counter + 1)
        submitSava()
    }, 1000)
    const submitSava = () => {
        console.log(7, username)
        console.log(7, password)
        history.push('/home')
        
    }
   
    return (
        <div className='login-container' >
            <div className='login-con '>
                <div className='yc-card'>
                    <div className='yc-card-head'>

                        <p className='yc-card-title'>
                            欢迎登录
                            {/* <svg><use xlinkHref='#user' ></use></svg> */}
                            {/* <svg><use xlinkHref='#password' ></use></svg> */}
                        </p>
                    </div>
                    <div className='yc-main'>
                        <Input value={username} change={setUsername} >
                            <Icon name='user' style={{marginTop:'5px'}} size={25} />
                        </Input>
                        <Input type='password' value={password} change={setPassword} >
                            <Icon name='password' size={25} />
                        </Input>
                        <button className='yc-btn login-btn' onClick={submitSava} >登录</button>
                    </div>

                </div>
            </div>
            {/* <input type='text' value={username} onChange={(e)=>{inputChange(e,'setUsername')}} />
            <input type='text' value={password} /> */}
            
            {/* <button onClick={handleClick} >防抖save</button> */}
        </div>
    )

}

export default Login

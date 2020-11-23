import React, { FC, useState, useEffect, useRef, useCallback, MutableRefObject, useReducer } from 'react'
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

type Home = {

}

const Home: FC<Home> = (props) => {

    const [counter, setCounter] = useState(1)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [counter2, setCounter2] = useState(0);
    const usernameRef = useRef(null)

    useEffect(function () {
        const t = setInterval(() => {
            setCounter2(x => x + 1)

        }, 1000);
        return () => clearInterval(t)
    }, [])

    const handleClick = useDebounce(function () {
        setCounter((counter) => counter + 1)
        submitSava()
    }, 1000)
    const submitSava = () => {
        console.log(7, username)
        console.log(7, password)
    }
    const inputChange = (e, type) => {
        console.log(8, type)
        type(e.target.value)
        // setUsername(e.target.value)
    }
    const textChange = (e, type) => {
        console.log(8, type)
        // type(e)
        // setUsername(e.target.value)
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
                            <Icon name='user' style={{marginTop:'5px'}} size={30} />
                        </Input>
                        <Input type='password' value={password} change={setPassword} >
                            <Icon name='password' size={30} />
                        </Input>

                    </div>

                </div>
            </div>
            {/* <input type='text' value={username} onChange={(e)=>{inputChange(e,'setUsername')}} />
            <input type='text' value={password} /> */}
            <button onClick={submitSava} >save</button>
            {/* <button onClick={handleClick} >防抖save</button> */}
        </div>
    )

}

export default Home

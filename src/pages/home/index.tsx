import React, { FC, useState, useEffect, useRef, useCallback, MutableRefObject, useReducer } from 'react'
import { useHistory } from "react-router-dom";
import Input from '../../components/Input'
import Icon from 'components/Icon'
import  Avatar from 'components/Avatar'
import  YcSelect from 'components/yc-select'
import './index.less'

type Home = {

}

const Home: FC<Home> = (props) => {

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



    return (
        <div className='home-container' >
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
                        {/* <input type="text" value='123'/> */}
                        {/* <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul> */}
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Home

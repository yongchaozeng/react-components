import React, { FC, useRef, useEffect } from 'react'
import { useHistory, withRouter } from "react-router-dom";
import { useToggle, useSize } from '@/hooks';
import Icon from 'components/Icon'
import Avatar from 'components/Avatar'
import YcSelect from 'components/yc-select'
import YcOption from 'components/yc-select/yc-option'
import {Menu,SubItem,Item} from 'components/Menu'
import './index.less'


type Home = {

}


const Home: FC<Home> = (props) => {
    let { children } = props
    let history = useHistory();
    const [state, { toggle }] = useToggle();

    const sizeRef = useRef(null)
    const size = useSize(sizeRef)
    
    useEffect(() => {
      
    }, [])


    const toApp = (e: React.MouseEvent, type: string) => {
        console.log(11, e.target, type)
        toggle()
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
    const changeLanguer = () => {

    }

    return (
        <div className='home-container' >

            <div className='home-sider'>
                <Menu >
                    <SubItem title='组件'>
                        <Item onClick={(e) => { toApp(e, 'te') }} >图片裁剪</Item>
                        <Item onClick={toTest}>文件上传</Item>
                        <Item onClick={(e) => { haha(e) }}>i18N</Item>
                        <Item onClick={(e) => { xx(e) }}>Excel</Item>
                    </SubItem>
                    <Item>错误信息</Item>
                    <Item>通知信息</Item>
                    <Item>{`${state}`}</Item>
                </Menu>
            </div>
            <div className='home-right'>

                <div className='header-container' >
                    <div className='header-left' onClick={toLogin}  >
                        <Icon name={'login-icon'} />
                    </div>
                    <div className='header-right'>
                        <div ref={sizeRef}>
                            try to resize the preview window <br />
                            dimensions -- width: {size.width} px, height: {size.height} px
                        </div>
                        <YcSelect onChange={() => { changeLanguer() }} defaultVlaue='zh' className={'languer-select'}   >
                            <YcOption value='zh'>中文</YcOption>
                            <YcOption value='en' >EN</YcOption>
                        </YcSelect>

                        {/* <div className='language-select' >语言</div> */}
                        <div className='user-box' >
                            <Avatar src={require('../../imgs/login-bg.jpg')} />
                            <p className='user-title'>张三</p>
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

import React, { FC, useRef, useEffect } from 'react'
import { useHistory, withRouter } from "react-router-dom";
import { useToggle, useSize,useDebounceFn } from '@/hooks';
// import { useDebounceFn, } from 'ahooks'
import Icon from 'components/Icon'
import Avatar from 'components/Avatar'
import {YcSelect,YcOption} from 'components/yc-select'
// import  from 'components/yc-select/yc-option'
import { Menu, SubItem, Item } from 'components/Menu'
import './index.less'

type Home = {

}

const Home: FC<Home> = (props) => {
    let { children } = props
    let history = useHistory();
    const [state, { toggle }] = useToggle();

    const sizeRef = useRef(null)
    const size = useSize(sizeRef)
    let { run } = useDebounceFn(
        (a:any,b:any) => {
            test1(a,b)
        },
    )

    const test1 = (a:any,b:any) => {
        console.log(7.9);

    }
    useEffect(() => {

    }, [])

    const toApp = (e: React.MouseEvent, type: string) => {
        toggle()
        // run('s',23)
        // cancel()
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
        console.log(7.8);


    }

    return (
        <div className='home-container' >

            <div className='home-sider'>
                <Menu >
                    <SubItem title='组件'>
                        <Item onClick={(e:any) => { run(e, 'te') }} >图片裁剪</Item>
                        <Item onClick={toTest}>文件上传</Item>
                        <Item onClick={(e:any) => { haha(e) }}>i18N</Item>
                        <Item onClick={(e:any) => { xx(e) }}>Excel</Item>
                    </SubItem>
                    <Item>错误信息</Item>
                    <Item>通知信息</Item>
                    <Item>{`${state}`}</Item>
                </Menu>
            </div>
            <div className='home-right'>

                <div className='header-container' >
                    <div className='header-left' onClick={toLogin}  >
                        <Icon name={'login-icon'} size={20} />
                    </div>
                    <div className='header-right'>
                        {/* <div ref={sizeRef}>
                            try to resize the preview window <br />
                            dimensions -- width: {size.width} px, height: {size.height} px
                        </div> */}
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

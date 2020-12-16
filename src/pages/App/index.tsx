import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Motion, spring } from 'react-motion';
import Icon from 'components/Icon'
import './App.less';


const App = () => {
  let [num, setNum] = useState(0)
  let a = [
    {
      color: 'red',
      icon: 'user',
      text: '新增用户',
    },
    {
      color: 'red',
      icon: 'user',
      text: '新增用户',
    },
    {
      color: 'red',
      icon: 'user',
      text: '新增用户',
    },
    {
      color: 'red',
      icon: 'user',
      text: '新增用户',
    },
    {
      color: 'red',
      icon: 'user',
      text: '新增用户',
    },
  ]
  // useEffect(() => {
  //   setNum(100)
  // }, [])

  return (
    <div className='app-container'>
      <button onClick={()=>{setNum(100)}} >test</button>
      <Motion defaultStyle={{ x: 0, }} style={{ x: spring(num), }}>
        {value => <ul  >
          {num}
        </ul>}
      </Motion>
      <ul className='nav-list'>
        {
          a.map((item, index) => {
            return (
              <li className='nav-list-item ' key={index}>
                <div className='nav-left'>
                  <Icon className='icon-box' name='user' size={40} />
                </div>
                <div className='nav-right'>
                  <div className='nav-right-center'>
                    <p className='nav-number'>300</p>
                    <p className='nav-title'>新增用户testtest2</p>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};
export default App;
//https://wow.techbrood.com/fiddle/14457

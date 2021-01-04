import React, { FC, useState, useCallback, useEffect } from 'react';
// import { Line, Column } from '@ant-design/charts';
import Icon from 'components/Icon'
import Counter from 'components/Counter'
import './App.less';

const App = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  let navList = [
    {
      color: 'red',
      icon: 'user',
      text: '新增用户',
      number: 999,
    },
    {
      color: 'red',
      icon: 'user',
      text: '新增用户',
      number: 123,
    },
    {
      color: 'red',
      icon: 'user',
      text: '新增用户',
      number: 222,
    },
    {
      color: 'red',
      icon: 'user',
      text: '新增用户',
      number: 666,
    },
    {
      color: 'red',
      icon: 'user',
      text: '新增用户',
      number: 20,
    },
  ]


  // useEvent()



  return (
    <div className='app-container'>

      <ul className='nav-list'>
        {
          navList.map((item, index) => {
            return (
              <li className='nav-list-item ' key={index}>
                <div className='nav-left'>
                  <span className='icon-box' >
                    <Icon name={item.icon} size={40} />
                  </span>

                </div>
                <div className='nav-right'>
                  <div className='nav-right-center'>
                    <p className='nav-number'>{
                      <Counter num={item.number} />
                    }</p>
                    <p className='nav-title'>{item.text}</p>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className='charts-list'>

      </div>
    </div>
  );
};
export default App;

function useEvent(event: string, handler: (e: any) => void, passive = false) {
  useEffect(() => {
    // initiate the event handler
    window.addEventListener(event, handler, passive)

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener(event, handler)
    }
  })
}
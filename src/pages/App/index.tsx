import React, { FC,  } from 'react';
import Icon from 'components/Icon'
import Counter from 'components/Counter'
import './App.less';

const App = () => {
 
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


  return (
    <div className='app-container'>
   
      <ul className='nav-list'>
        {
          navList.map((item, index) => {
            return (
              <li className='nav-list-item ' key={index}>
                <div className='nav-left'>
                  <Icon className='icon-box' name={item.icon} size={40} />
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
    </div>
  );
};
export default App;


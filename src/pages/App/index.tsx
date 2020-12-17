import React, { FC, } from 'react';
import { Line } from '@ant-design/charts';
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

  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
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
      <Line {...config} />;
    </div>
  );
};
export default App;


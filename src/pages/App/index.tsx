import React, { FC, } from 'react';
import { Line, Column } from '@ant-design/charts';
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
  var columnData: any = [
    {
      name: 'London',
      月份: 'Jan.',
      月均降雨量: 18.9
    },
    {
      name: 'London',
      月份: 'Feb.',
      月均降雨量: 28.8
    },
    {
      name: 'London',
      月份: 'Mar.',
      月均降雨量: 39.3
    },
    {
      name: 'London',
      月份: 'Apr.',
      月均降雨量: 81.4
    },
    {
      name: 'London',
      月份: 'May',
      月均降雨量: 47
    },
    {
      name: 'London',
      月份: 'Jun.',
      月均降雨量: 20.3
    },
    {
      name: 'London',
      月份: 'Jul.',
      月均降雨量: 24
    },
    {
      name: 'London',
      月份: 'Aug.',
      月均降雨量: 35.6
    },
    {
      name: 'Berlin',
      月份: 'Jan.',
      月均降雨量: 12.4
    },
    {
      name: 'Berlin',
      月份: 'Feb.',
      月均降雨量: 23.2
    },
    {
      name: 'Berlin',
      月份: 'Mar.',
      月均降雨量: 34.5
    },
    {
      name: 'Berlin',
      月份: 'Apr.',
      月均降雨量: 99.7
    },
    {
      name: 'Berlin',
      月份: 'May',
      月均降雨量: 52.6
    },
    {
      name: 'Berlin',
      月份: 'Jun.',
      月均降雨量: 35.5
    },
    {
      name: 'Berlin',
      月份: 'Jul.',
      月均降雨量: 37.4
    },
    {
      name: 'Berlin',
      月份: 'Aug.',
      月均降雨量: 42.4
    }
  ];
  var ColumnConfig: any = {
    data: columnData,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' }
      ]
    }
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
      <div className='charts-list'>
        <Column className='charts-card' style={{flex:1}} {...ColumnConfig} />
        <Line className='charts-card' {...config} />
      </div>
    </div>
  );
};
export default App;


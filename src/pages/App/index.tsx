import React, { FC, useState, useCallback, useEffect } from 'react';
// import { Line, Column } from '@ant-design/charts';
import Icon from 'components/Icon'
import Counter from 'components/Counter'
import './App.less';


const HOOKS: any = []; // 全局的存储 hook 的变量
let currentIndex = 0; // 全局的 依赖 hook 执行顺序的下标

function useState1(initialState: any) {
  HOOKS[currentIndex] = HOOKS[currentIndex] || (typeof initialState === 'function' ? initialState() : initialState);; // 判断一下是否需要初始化
  const memoryCurrentIndex = currentIndex; // currentIndex 是全局可变的，需要保存本次的
  const setState: any = (p: any) => {
    let newState = p;
    // setCount(count => count + 1)  判断这种用法
    if (typeof p === 'function') newState = p(HOOKS[memoryCurrentIndex]);
    // 如果设置前后的值一样，就不更新了
    if (newState === HOOKS[memoryCurrentIndex]) return;
    Tick.nextTick(() => {
      HOOKS[memoryCurrentIndex] = newState;
    });
  };
  return [HOOKS[currentIndex++], setState]; // 为了多次调用 hook，每次执行 index 需要 +1

}
const Tick: any = {
  render: null,
  queue: [],
  push: function (task: any) {
    this.queue.push(task);
  },
  nextTick: function (update: any) {
    this.push(update);
    Promise.resolve(() => {
      if (this.queue.length) { // 一次循环后，全部出栈，确保单次事件循环不会重复渲染
        this.queue.forEach((f: any) => f()); // 依次执行队列中所有任务
        currentIndex = 0; // 重置计数
        this.queue = []; // 清空队列
        this.render && this.render(); // 更新dom
      }
    }).then(f => f());
  }
};

const App = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState1(0);




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
  let num = 0;
  useEffect(() => {
    setInterval(() => {


    }, 1000)
  }, [])

  console.log(count);

  const add = () => {
    setCount(count + 1)
  }

  return (
    <div className='app-container'>
      <h1>{count}</h1>
      <button onClick={add}>add</button>
      {/* <h1>{num}</h1> */}
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


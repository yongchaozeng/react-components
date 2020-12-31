import React, { useState, useEffect } from 'react';
import { useTitle, useRequest } from 'ahooks';
import './test.less';



function Test() {
  let [a, setA] = useState(0)
  let [componentData, setComponentData] = useState<any[]>([{ label: 'test' }])
  let [centerArray, setCenterArray] = useState<any[]>([])
  let arr = [
    {
      component: 'v-text', // 组件名称，需要提前注册到 Vue
      label: '文字', // 左侧组件列表中显示的名字
      propValue: '文字', // 组件所使用的值
      icon: 'el-icon-edit', // 左侧组件列表中显示的名字
      animations: [], // 动画列表
      events: {}, // 事件列表
      style: { // 组件样式
        width: 200,
        height: 33,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '',
        letterSpacing: 0,
        textAlign: '',
        color: '',
      },
    },
    {
      component: 'v-text', // 组件名称，需要提前注册到 Vue
      label: '按钮', // 左侧组件列表中显示的名字
      propValue: '文字', // 组件所使用的值
      icon: 'el-icon-edit', // 左侧组件列表中显示的名字
      animations: [], // 动画列表
      events: {}, // 事件列表
      style: { // 组件样式
        width: 200,
        height: 33,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '',
        letterSpacing: 0,
        textAlign: '',
        color: '',
      },
    }, {
      component: 'v-text', // 组件名称，需要提前注册到 Vue
      label: '输入框', // 左侧组件列表中显示的名字
      propValue: '文字', // 组件所使用的值
      icon: 'el-icon-edit', // 左侧组件列表中显示的名字
      animations: [], // 动画列表
      events: {}, // 事件列表
      style: { // 组件样式
        width: 200,
        height: 33,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '',
        letterSpacing: 0,
        textAlign: '',
        color: '',
      },
    }
  ]
  useEffect(() => {

    setTimeout(() => {
      setComponentData(arr)
      console.log(arr);
    }, 10)
    setA((state) => {
      return state++
    })

  }, [])


  const dragstart = (e: any) => {

    e.dataTransfer.setData('index', e.target.dataset.index)

  }
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {

  }
  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    let index = e.dataTransfer.getData('index')
    setCenterArray([...centerArray, componentData[parseInt(index)]])
  }
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

  }
  return (
    <div className='container'>
      <div onDragStart={(e) => { dragstart(e) }} className='left'>
        {
          componentData.map((item, index) => {
            return <div className='box' draggable="true" data-index={index} key={index}>{item.label}</div>
          })
        }
      </div>
      <div onDrop={drop}
        onDragOver={onDragOver}
        className='center'>
        {
          centerArray.map((item, index) => {
            return <div className='box' key={index}>{item.label}</div>
          })
        }
      </div>
      <div className='right'></div>
    </div>
  );

}

export default Test;

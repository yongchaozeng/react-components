import React, { useState, useEffect, ReactEventHandler, SyntheticEvent, EventHandler } from 'react';
import { useTitle, useRequest } from 'ahooks';
import Input from 'components/Input'
import Avatar from 'components/Avatar'
import { YcSelect, YcOption } from 'components/yc-select'
import './test.less';

interface CanvasXY {
  (e: React.MouseEvent<HTMLElement>): { x: number, y: number }
}

function Test() {
  let [a, setA] = useState(0)

  const [isMove, setIsMove] = useState(true);
  const [username, setUsername] = useState('');
  const [xy, setXy] = useState({
    x: 0,
    y: 0
  });
  let [componentData, setComponentData] = useState<any[]>([{ label: 'test' }])
  let [centerArray, setCenterArray] = useState<any[]>([])
  let arr = [
    {
      component: Input, // 组件名称，需要提前注册到 Vue
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
      component: Avatar, // 组件名称，需要提前注册到 Vue
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
    },
    {
      component: 'Input', // 组件名称，需要提前注册到 Vue
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


  const canvasXy: CanvasXY = (e) => {
    return { x: e.clientX - (e.target as HTMLElement).offsetLeft, y: e.clientY - (e.target as HTMLElement).offsetTop }
  }

  const dragstart = (e: React.DragEvent<HTMLDivElement>) => {
    var index = (e.target as HTMLDivElement).dataset.index;
    if (index) {
      e.dataTransfer.setData('index', index)
    }
  }

  const drop = (e: React.DragEvent<HTMLElement>) => {
    let index = e.dataTransfer.getData('index')
    if (index !== '') {
      setCenterArray(
        [...centerArray, {
          ...componentData[parseInt(index)],
          x: canvasXy(e).x, y: canvasXy(e).y
        }])
    }
  }
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const MouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsMove(true)
    console.log(1);
  }
  const MouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(2);
    if (isMove) {
      setXy(canvasXy(e))
    }
  }
  const MouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // setComponentData(componentData)
    console.log(3);
    
    let index = (e.target as HTMLDivElement).dataset.index
    if (index) {
      // console.log(index);

      // componentData[index].x = xy.x
      // componentData[index].y = xy.y
    }
    // console.log();

    setIsMove(false)
  }
  return (
    <div className='container'>
      {/* 组件列表 */}
      <div onDragStart={(e) => { dragstart(e) }} className='left'>
        <h6>{`${xy.x}`}</h6>
        <h6>{`${xy.y}`}</h6>
        {
          componentData.map((item, index) => {
            return <div onMouseUp={MouseUp} className='box' draggable="true" data-index={index} key={index}>{item.label}</div>
          })
        }
      </div>
      {/*  画布 */}
      <div onDrop={drop} onDragOver={onDragOver} className='center'>
        {
          centerArray.map((item, index) => {
            let Component = item['component']
            return (
              <div data-index={index} className='component-container'
                onMouseMove={MouseMove}
                onMouseDown={MouseDown}
                onMouseUp={MouseUp}
                style={{ left: item.x, top: item.y }} key={index} >
                <Component key={index} src={require('../../imgs/login-bg.jpg')} ></Component>
              </div>
            )
          })
        }
      </div>
      {/* <div className='right'></div> */}
    </div>
  );

}

export default Test;

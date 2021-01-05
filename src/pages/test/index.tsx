import React, { useState, useEffect, useRef, } from 'react';
import Input from 'components/Input'
import Avatar from 'components/Avatar'
import { isNumber } from '@/utils'
import './test.less';
import { Target } from 'ahooks/lib/useScroll';

interface CanvasXY {
  (e: React.MouseEvent<HTMLElement> | MouseEvent): { x: number, y: number }
}


let eventDom: HTMLDivElement;
let left: number;
let top: number;
function Test() {
  let [toolMenuShow, setToolMenuShow] = useState(false)
  let [xy, setXy] = useState({ x: 0, y: 0 })
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
    left = (document.querySelector('.center') as HTMLElement).offsetLeft;
    top = (document.querySelector('.center') as HTMLElement).offsetTop;
  }, [])
  useEffect(() => {
    setCenterArray(centerArray)
  }, [centerArray])

  useEffect(() => {
    setTimeout(() => {
      setComponentData(arr)
    }, 10)

  }, [])



  const canvasXy: CanvasXY = (e) => {
    return { x: e.clientX - (e.currentTarget as HTMLElement).offsetLeft, y: e.clientY - (e.currentTarget as HTMLElement).offsetTop }
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
  const eventMouseup = (e: MouseEvent) => {
    window.removeEventListener('mouseup', eventMouseup)
    window.removeEventListener('mousemove', eventMousemove)
  }
  const onContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    // return false
  }
  const eventMousemove = (e: MouseEvent) => {
    let _left = e.clientX - left - (eventDom.offsetWidth / 2);
    let _top = e.clientY - top - (eventDom.offsetHeight / 2);
    (eventDom as HTMLDivElement).style.left = `${_left}px`;
    (eventDom as HTMLDivElement).style.top = `${_top}px`;

    if (_left <= 0 || _top <= 0) {

      window.removeEventListener('mouseup', eventMouseup)
      window.removeEventListener('mousemove', eventMousemove)
    }
  }
  const MouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    document.oncontextmenu = function () {
      return false;
    }
    if (e.button === 2) {
      let { x, y } = canvasXy(e);
      console.log(7,x);
      
      openToolMenu(e)
      setXy({ x:x, y:y })

      return
    }
    eventDom = e.currentTarget;
    window.addEventListener('mouseup', eventMouseup)
    window.addEventListener('mousemove', eventMousemove)
  }
  const openToolMenu = (e: React.MouseEvent) => {
    setToolMenuShow(true)
  }

  const deleteComponent = () => {

    centerArray.pop()
    setCenterArray([...centerArray])
  }


  return (
    <div className='container'>

      {
        toolMenuShow &&
        <ul className='tolo-menu' style={{ top: xy.y, left: xy.x }} >
          <li>提升 </li>
          <li>删除 </li>
        </ul>
      }
      {/* 组件列表 */}
      <div onDragStart={(e) => { dragstart(e) }} className='left'>
        {
          componentData.map((item, index) => {
            return <div className='box' draggable="true" data-index={index} key={index}>{item.label}</div>
          })
        }
        <div style={{ marginTop: '30px' }} onClick={deleteComponent}>撤回</div>
      </div>

      {/*  画布 */}
      <div onDrop={drop} onDragOver={onDragOver} className='center'>
        {
          centerArray.map((item, index) => {
            let Component = item['component']
            return (
              <div data-index={index} className='component-container'
                // onMouseDown={onmousedown }
                // onContextMenu={onContextMenu}
                onMouseDown={MouseDown}
                style={{ left: item.x, top: item.y, zIndex: index }} key={index} >
                <h6>{item.x}</h6>
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

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
let rightEventDom: HTMLDivElement;
let _x: number
let _y: number
let left: number;
let top: number;
function Test() {
  const disXYRef = useRef({});
  let [toolMenuShow, setToolMenuShow] = useState(false)
  let [disXY, setDisXY] = useState({ x: 0, y: 0 })
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


  // useEffect(() => {
  //   // 每次 更新 把值 复制给 modelStatusRef
  //   disXYRef.current = disXY;
  // }, [disXY]); // 依赖的值 等modelStatus 改变了 才出发里面的值


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

    // let _left = e.clientX - left - (eventDom.offsetWidth / 2);
    // let _top = e.clientY - top - (eventDom.offsetHeight / 2);
    // let index = Number(eventDom.dataset.index)

    // centerArray[index].x = _left
    // centerArray[index].y = _top
    // setCenterArray([...centerArray])
    window.removeEventListener('mouseup', eventMouseup)
    window.removeEventListener('mousemove', eventMousemove)
  }
  const onContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    // return false
  }
  const eventMousemove = (e: MouseEvent) => {
    // console.log(left);
    // console.log(9,e.pageX );
    // console.log(10,e.clientX );
    // console.log(10,eventDom.offsetLeft);


    // let _left = e.clientX ;
    // let _top = e.clientY ;

    let _left = e.clientX - _x - left;
    let _top = e.clientY - _y - top;
    console.log(8, _left);

    // console.log('x', _left);
    // console.log('y', _top);


    // (eventDom as HTMLDivElement).style.left = `${_left}px`;
    // (eventDom as HTMLDivElement).style.top = `${_top}px`;

    let index = Number(eventDom.dataset.index)

    centerArray[index].x = _left
    centerArray[index].y = _top
    setCenterArray([...centerArray])


    // 边界
    // if (_left <= 0 || _top <= 0) {

    //   window.removeEventListener('mouseup', eventMouseup)
    //   window.removeEventListener('mousemove', eventMousemove)
    // }
  }
  const MouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {


    if (e.button === 2) {
      rightEventDom = e.currentTarget;
      document.oncontextmenu = function () {
        return false;
      }
      openToolMenu(e)

    } else {

      _x = e.clientX - left - e.currentTarget.offsetLeft;
      _y = e.clientY - top - e.currentTarget.offsetTop;




      eventDom = e.currentTarget;
      window.addEventListener('mouseup', eventMouseup)
      window.addEventListener('mousemove', eventMousemove)
    }


  }
  // 打开菜单
  const openToolMenu = (e: React.MouseEvent) => {
    setXy({ x: e.clientX, y: e.clientY })
    setToolMenuShow(true)

  }
  // 选择菜单
  const selectMenu = (e: React.MouseEvent) => {
    debugger
    let index = (e.target as HTMLLIElement).dataset.index
    if (index === '0') {
      changeZindex(e)
    } else {
      deleteComponent()
    }
    document.oncontextmenu = function () {
      return true;
    }
    setToolMenuShow(false)
  }

  const changeZindex = (e: React.MouseEvent) => {
    let index = Number(rightEventDom.dataset.index)
    let last = centerArray.splice(index, 1)
    setCenterArray([...centerArray, last[0]])
  }
  const deleteComponent = () => {
    let index = Number(rightEventDom.dataset.index)
    centerArray.splice(index, 1)
    setCenterArray([...centerArray])
  }

  return (
    <div className='container'>

      {
        toolMenuShow &&
        <ul className='tolo-menu' onClick={selectMenu} style={{ top: xy.y, left: xy.x }} >
          <li data-index={0}>提升  </li>
          <li data-index={1}>删除 </li>
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
                onMouseDown={MouseDown}
                style={{ left: item.x, top: item.y, zIndex: index }} key={index} >

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

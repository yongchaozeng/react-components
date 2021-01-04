import React, { useState, useEffect, useRef, } from 'react';
import Input from 'components/Input'
import Avatar from 'components/Avatar'
import { isNumber } from '@/utils'
import './test.less';
import { Target } from 'ahooks/lib/useScroll';

interface CanvasXY {
  (e: React.MouseEvent<HTMLElement> | MouseEvent): { x: number, y: number }
}


let index: number | undefined

function Test() {
  const [isMove, setIsMove] = useState(true);
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
    const eventMouseup = (e: MouseEvent) => {
      console.log(9);
    }
    const eventMousemove = (e: MouseEvent) => {
      // let index:number = (e.target as HTMLDivElement).dataset.index



    }
    window.addEventListener('mouseup', eventMouseup)
    window.addEventListener('mousemove', eventMousemove)
    return () => {
      window.removeEventListener('mouseup', eventMouseup)
      window.removeEventListener('mousemove', eventMousemove)
    }
  })
  useEffect(() => {
    setCenterArray(centerArray)
  }, [centerArray])

  useEffect(() => {
    setTimeout(() => {
      setComponentData(arr)
      // console.log(arr);
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

  const MouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // setIsMove(true)
    // setIndex(Number((e.currentTarget as HTMLDivElement).dataset.index))
    // console.log(1, Number((e.currentTarget as HTMLDivElement).dataset.index));
    index = Number((e.currentTarget as HTMLDivElement).dataset.index)
    // console.log(1.1, index);
  }
  // const MouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   let index: number = Number((e.currentTarget as HTMLDivElement).dataset.index)

  //   if (index !== undefined) {
  //     let xy = canvasXy(e)

  //     // centerArray[index].x = 100;
  //     // centerArray[index].y = 100;
  //     // console.log(e.currentTarget);

  //     if (e.currentTarget) {
  //       console.log(3, xy.x);

  //       (e.currentTarget as any).style.left = `${xy.x}px`;
  //       (e.currentTarget as any).style.top = `${xy.y}px`;

  //     }
  //     // e.target.style.top = xy.y
  //     // console.log(centerArray[0].x = 100)

  //   }

  //   // if (isMove) {
  //   //   setXy(canvasXy(e))
  //   // }
  // }
  const MouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // setComponentData(componentData)
    // console.log();

    setIsMove(false)
  }
  return (
    <div className='container'>
      {/* 组件列表 */}
      <div onDragStart={(e) => { dragstart(e) }} className='left'>
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
                // onMouseMove={MouseMove}
                onMouseDown={MouseDown}
                // onMouseUp={MouseUp}
                style={{ left: item.x, top: item.y }} key={index} >
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

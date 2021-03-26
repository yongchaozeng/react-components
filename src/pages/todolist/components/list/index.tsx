import React, { FC } from 'react'
import { TodoArray } from '@/pages/todolist'
import './index.less'

type List = {
  list: TodoArray
  setActive: (index: number) => void
  deleteList: (index: number) => void
}
const List: FC<List> = (props) => {
  let { list, setActive, deleteList } = props
  const deleteArray = (e: React.MouseEvent, index: number) => {
    e.stopPropagation()
    deleteList(index)
    console.log(222);
  }
  const listMap = () => {
    return list.map((item, index) => (
      <li onClick={() => {
        console.log(333);
        setActive(index)
      }} className={item.isActive ? 'active' : ''} key={index}>
        {item.value}
        <i onClick={(e, ) => {
          deleteArray(e, index)
        }} className='close'>X</i>
      </li>
    ))
  }

  return (
    <ul className={'todolist'}>
      {listMap()}
    </ul>
  )
}

export default List
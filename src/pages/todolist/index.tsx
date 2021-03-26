import React, { FC, useState } from 'react'
import './index.less'
import Search from './components/search'
import List from './components/list'
import ListButton from './components/listButton'

type TodoList = {
  name: string
}
export type Todo = {
  value: string
  isActive: boolean
}
export type TodoArray = Array<{
  value: string
  isActive: boolean
}>

const TodoList: FC<TodoList> = () => {

  let [list, setList] = useState<TodoArray>([])

  const addTodo = (value: string) => {
    list.push({
      value: value,
      isActive: false
    })
    setList([...list])
  }

  const setActive = (index: number) => {
    list[index].isActive = !list[index].isActive

    setList([...list])
  }
  const deleteList = (index: number) => {
    list.splice(index,1)
    setList([...list])
  }

  return (
    <div>
      <h1>todolist</h1>
      <Search addTodo={addTodo} />
                                                                      
      <List setActive={setActive} deleteList={deleteList} list={list} />
      {`${list.length}条任务`}
    </div>
  )
}

export default TodoList
import React, { FC, useState, } from 'react'

type Search = {
  addTodo: (value: string) => void
}
const Search: FC<Search> = (props) => {

  let [value, setValue] = useState('')

  let { addTodo } = props


  const addValue = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      addTodo(value)
      setValue('')
    }
  }

  return (
    <>
      <input value={value} type="text"
        onKeyDown={(e) => { addValue(e) }}
        onChange={((e) => { setValue((e.target as HTMLInputElement).value) })}
      />
      {value}
    </>
  )
}
export default Search
import React, { useState } from "react"
import { TaskController } from "../../model/task/task"

export const TaskCreateForm = () => {
  const [title, setTitle] = useState('')

  const create = TaskController.create()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onClick = () => {
    create(title)
    setTitle('')
  }

  return (
    <div style={{display: 'flex', flexDirection: 'row', margin: '10%'}}>
      <input type='text' value={title} onChange={onChange} placeholder='タイトルを入力' />
      <button onClick={onClick} > create </button>
    </div>
  )
}
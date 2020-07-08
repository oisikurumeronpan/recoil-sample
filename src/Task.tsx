import React, { useState, FC } from "react"
import { TaskController, taskState, Task } from "./model/task/task"
import { useRecoilValue } from "recoil"


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

export const TaskList = () => {
  const task = useRecoilValue(taskState)

  return (
    <div style={{display: 'flex', flexDirection: 'column', margin: '10%', justifyContent: 'center'}}>
      {
        task.length
        ? task.map(t => <TaskTile task={t} key={t.id} />)
        : <div style={{textAlign: 'center'}} >タスクが未登録です</div>
      }
    </div>
  )
}

interface TaskTileProps {
  task: Task
}

const TaskTile: FC<TaskTileProps> = ({task}) => {
  const update = TaskController.update()

  const del = TaskController.delete()

  const onChange = () => {
    update(task.id, undefined, !task.completed)
  }

  const onClick = () => {
    del(task.id)
  }

  return (
    <div
      className='card'
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
        padding: 16,
      }}
    >
      <input
        type='checkbox'
        checked={task.completed}
        onChange={onChange}
        style={{marginRight: 24}}
      />
      {task.title}
      <div style={{width: '100%'}}/>
      <button onClick={onClick} > delete </button>
    </div>
  )
}
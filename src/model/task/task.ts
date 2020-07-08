import { useSetRecoilState } from "recoil"
import { useCallback, useContext } from "react"
import { RepositoryContext } from "../../App"
import { atom } from "recoil"

export interface Task {
  id: number,
  title: string,
  completed: boolean,
}

const initialTask: Task[] = []

export const taskState = atom({
  key: 'task',
  default: initialTask,
})

const useCreate = () => {
  const setTask = useSetRecoilState(taskState)

  const taskRepository = useContext(RepositoryContext)

  return useCallback((title: string) => {
    const newTask = taskRepository.save({ title })
    setTask(t => [...t, newTask])
  }, [setTask, taskRepository])
}

const useUpdate = () => {
  const setTask = useSetRecoilState(taskState)

  const taskRepository = useContext(RepositoryContext)

  return useCallback((id: number, title?: string, completed?: boolean) => {
    const newTask = taskRepository.save({id, title, completed})
    setTask(task => task.map(t => t.id === id ? newTask : t ))
  }, [setTask, taskRepository])
}

const useDelete = () => {
  const setTask = useSetRecoilState(taskState)

  const taskRepository = useContext(RepositoryContext)

  return useCallback((id: number) => {
    taskRepository.delete(id)
    setTask(task => task.filter(t => t.id !== id))
  }, [setTask, taskRepository])
}

export const TaskController = {
  create: useCreate,
  update: useUpdate,
  delete: useDelete,
}
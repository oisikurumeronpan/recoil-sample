import React from "react"
import { TaskCreateForm } from "./TaskCreateForm"
import { TaskList } from "./TaskList"

export const TaskPage = () => {
  return (
    <>
      <TaskCreateForm />
      <TaskList />
    </>
  )
}
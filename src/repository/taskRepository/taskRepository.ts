import { Task } from "../../model/task/task";

export type TaskCommand = {
  id?: number,
  title?: string,
  completed?: boolean,
}

export interface ITaskRepository {
  save: (command: TaskCommand) => Task,
  delete: (id: number) => void,
  show: (id: number) => Task,
  index: () => Task[],
}
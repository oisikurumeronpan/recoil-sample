import { ITaskRepository, TaskCommand } from "./taskRepository";
import { Task } from "../../model/task/task";

export class MockTaskRepository implements ITaskRepository {
  data: Task[] = []
  idx: number = 1
  
  save = (command: TaskCommand): Task => {
    if(command.id) {
      return this.update(command.id, command)
    } else {
      return this.create(command.title ?? '')
    }
  };

  create = (title: string): Task => {
    const newTask: Task = {
      id: this.idx,
      title: title,
      completed: false,
    }

    this.data.push(newTask)
    this.idx += 1

    return newTask
  }

  update = (id: number, command: TaskCommand): Task => {
    const prevIdx = this.data.findIndex(d => d.id === id)
    const prev = this.data[prevIdx]
    const newTask: Task = {
      id: prev.id,
      title: command.title ?? prev.title,
      completed: command.completed ?? prev.completed,
    }

    this.data[prevIdx] = newTask

    return newTask
  }

  delete = (id: number) => {
    const removedData = this.data.filter(d => d.id !== id)
    this.data = removedData
  };

  show = (id: number): Task => {
    const targetData = this.data.find(d => d.id === id)
    if (targetData) {
      return targetData
    } else {
      throw Error('Not Found')
    }
  };

  index = (): Task[] => {
    return this.data;
  };
}
import React, { createContext } from 'react';
import './App.css';

import { RecoilRoot } from 'recoil';
import { ITaskRepository } from './repository/taskRepository/taskRepository';
import { MockTaskRepository } from './repository/taskRepository/mockTaskRepository';
import { TaskCreateForm, TaskList } from './Task';

export const RepositoryContext = createContext<ITaskRepository>(new MockTaskRepository());

function App() {
  return (
    <RepositoryContext.Provider value={new MockTaskRepository()}>
      <RecoilRoot>
        <TaskCreateForm />
        <TaskList />
      </RecoilRoot>
    </RepositoryContext.Provider>
  );
}

export default App;

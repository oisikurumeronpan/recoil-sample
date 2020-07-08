import React, { createContext } from 'react';
import './App.css';

import { RecoilRoot } from 'recoil';
import { ITaskRepository } from './repository/taskRepository/taskRepository';
import { MockTaskRepository } from './repository/taskRepository/mockTaskRepository';
import { TaskPage } from './pages/task';

export const RepositoryContext = createContext<ITaskRepository>(new MockTaskRepository());

function App() {
  return (
    <RepositoryContext.Provider value={new MockTaskRepository()}>
      <RecoilRoot>
        <TaskPage />
      </RecoilRoot>
    </RepositoryContext.Provider>
  );
}

export default App;

import React from 'react';
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

const App: React.FC = () => {

return (
  <div>
      <TaskInput />
      <TaskList />
  </div>
)
}

export default App;
import React from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
const App = () => {
  return (
    <div className='h-screen flex flex-col items-center text-white'>
      <h1 className='text-2xl m-4'>CallStack</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
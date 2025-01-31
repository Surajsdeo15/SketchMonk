import React from 'react'
import TodoAdd from './Components/TodoAdd'

function App() {
  return (
    <div className='w-full h-screen bg-white flex justify-center gap-7 items-center'>
      <TodoAdd text="To do"/>
      <TodoAdd text="In Progress"/>
      <TodoAdd text="Review"/>
      <TodoAdd text="Review"/>
      <TodoAdd/>

    </div>
  )
}

export default App
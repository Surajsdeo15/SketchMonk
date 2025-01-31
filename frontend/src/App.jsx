import React from 'react'
import TodoAdd from './Components/TodoAdd'
import Navbar from './Components/Common/Navbar'

function App() {
  return (
    <div className='bg-slate-300 w-full h-screen p-12 fixed overflow-auto'>
    <div className='w-full h-screen bg-white  p-2  rounded shadow-md shadwo-black'>
      <Navbar/>
      <div className='w-full h-auto  flex justify-center gap-7 items-center p-4 '>
      <TodoAdd text="To do"/>
      <TodoAdd text="In Progress"/>
      <TodoAdd text="Review"/>
      <TodoAdd text="Review"/>
     <div className='w-64 h-8  text-slate-500 ml-12 relative -top-64  '>
       <h1 className='space-x-4'>
        <span className='text-xl font-bold text-slate-400'>+</span>
       <span className='font-bold text-md'> Add section</span>
       </h1>

     </div>
     </div>

    </div>
    </div>

  )
}

export default App
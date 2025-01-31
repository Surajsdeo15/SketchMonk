import React, { useState } from 'react'
import AddtaskForm from './AddtaskForm'
import AssignTaskCard from './AssignTaskCard'

function TodoAdd({text}) {
  const [task,setTask]=useState(false);
  return (
    <div className='w-64 h-auto space-y-6  '>
        {/* Title and Plus And ... buttons */}
      <div className='flex justify-between  text-xl font-semibold'>  <h1 className='ml-3 tracking-tighter'>{text}</h1> <h1 className='space-x-4 mr-3 text-slate-300'><span >+</span><span>...</span></h1></div>
      {/* Dashboard of Tasks */}
    <div className='w-64 h-[500px]   bg-gray-400/20  rounded-xl p-3'>
       {text !=='To do' && (<div className='mt-4 space-y-4'>
          <AssignTaskCard/>
          <AssignTaskCard/>
          <AssignTaskCard/>
        </div>)}
    {(text=='To do' || text=='In Progress') && ( <div className='text-center mt-5 '>
            <h1 onClick={()=>setTask(!task)} className=' mr-3 text-slate-900/45 text-xl font-medium font-mono cursor-pointer'><span>+</span> <span>
                Add task</span></h1>
        </div>)}
       

        {task && <div>
            <AddtaskForm/>
        </div>}

        

    </div>

    </div>
    
  )
}

export default TodoAdd